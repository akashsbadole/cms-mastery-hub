import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Globe,
  Laptop
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "help@cmsacademy.com",
    description: "Get a response within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Learning Street, Education City, EC 12345",
    description: "Our main campus location"
  },
  {
    icon: Clock,
    title: "Support Hours",
    content: "24/7 Online Support",
    description: "Always here to help you learn"
  }
];

const faqs = [
  {
    question: "What is the difference between WordPress and Shopify courses?",
    answer: "WordPress is a general-purpose CMS ideal for all types of websites, while Shopify is specifically designed for e-commerce. Choose WordPress for blogs, business sites, or portfolios, and Shopify for online stores."
  },
  {
    question: "Do I need any technical background?",
    answer: "No technical background is required. Our courses are designed for beginners and focus on CMS management rather than development. We include only essential development basics."
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "You get lifetime access to all course materials, including updates and new content additions."
  },
  {
    question: "Is there a certificate upon completion?",
    answer: "Yes, you'll receive a certificate of completion for each course that you can add to your resume or LinkedIn profile."
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    newsletter: false,
    terms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Email Required", 
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.terms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission with realistic delay
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest! We'll contact you within 24 hours.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
        newsletter: false,
        terms: false
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to start your CMS learning journey? Have questions about our courses? 
            We're here to help you choose the right path for your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interest</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wordpress">WordPress CMS Mastery</SelectItem>
                          <SelectItem value="shopify">Shopify E-commerce Management</SelectItem>
                          <SelectItem value="both">Both Courses</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your goals and how we can help you..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for course updates and CMS tips
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a> *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-muted-foreground mb-8">
                  We're committed to helping you succeed in your CMS learning journey. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-card transition-all duration-300">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-lg mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Quick Enrollment</h3>
                  <p className="mb-4 opacity-90">
                    Ready to start immediately? Choose your course and begin learning today!
                  </p>
                  <div className="flex flex-col gap-2">
                    <Button variant="secondary" className="justify-start" asChild>
                      <a href="/wordpress">
                        <Globe className="h-4 w-4 mr-2" />
                        WordPress Course - $299
                      </a>
                    </Button>
                    <Button variant="secondary" className="justify-start" asChild>
                      <a href="/shopify">
                        <Laptop className="h-4 w-4 mr-2" />
                        Shopify Course - $249
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our CMS training programs
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground ml-7">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <Button variant="outline" size="lg">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}