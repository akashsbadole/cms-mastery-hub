import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Code, 
  Wrench, 
  MessageCircle, 
  GraduationCap,
  Check,
  Star,
  Clock,
  DollarSign
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  category: string;
  price_type: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
}

const categoryIcons = {
  development: Code,
  maintenance: Wrench,
  consulting: MessageCircle,
  training: GraduationCap,
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('popular', { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to load services. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Services" },
    { id: "development", label: "Development" },
    { id: "maintenance", label: "Maintenance" },
    { id: "consulting", label: "Consulting" },
    { id: "training", label: "Training" },
  ];

  const formatPrice = (service: Service) => {
    const price = service.price?.toFixed(2) || "0.00";
    switch (service.price_type) {
      case "hourly":
        return `₹${price}/hour`;
      case "monthly":
        return `₹${price}/month`;
      case "project":
        return `₹${price}/project`;
      default:
        return `₹${price}`;
    }
  };

  const handleServiceInquiry = (serviceId: string) => {
    navigate(`/contact?service=${serviceId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Loading services...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Web Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From custom development to ongoing maintenance, we provide comprehensive web solutions
            to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = categoryIcons[service.category as keyof typeof categoryIcons];
              
              return (
                <Card key={service.id} className={`relative ${service.popular ? 'ring-2 ring-primary' : ''} hover:shadow-lg transition-shadow`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="capitalize">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold text-lg text-foreground">
                          {formatPrice(service)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>

                    {service.features && service.features.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 4 && (
                            <li className="text-xs text-muted-foreground">
                              +{service.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter>
                    <Button 
                      onClick={() => handleServiceInquiry(service.id)}
                      className="w-full"
                      variant={service.popular ? "default" : "outline"}
                    >
                      Get Quote
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating custom solutions 
            tailored to your specific business needs.
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Discuss Your Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">CMS Training Hub</h3>
              <p className="text-sm text-muted-foreground">
                Professional training and development services for modern web technologies.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Custom Development</li>
                <li>Website Maintenance</li>
                <li>SEO Consultation</li>
                <li>Technical Training</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Training</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>WordPress CMS</li>
                <li>Shopify E-commerce</li>
                <li>React Development</li>
                <li>Full Stack</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@cmstraininghub.com</li>
                <li>+91 98765 43210</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CMS Training Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}