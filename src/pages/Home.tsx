import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  Star,
  Laptop,
  Globe,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import wordpressImage from "@/assets/wordpress-course.jpg";
import shopifyImage from "@/assets/shopify-course.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Structured learning paths for WordPress and Shopify CMS mastery"
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of CMS experience"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Self-paced courses that fit your schedule and learning style"
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn certificates upon completion to showcase your skills"
  }
];

const stats = [
  { number: "2000+", label: "Students Trained" },
  { number: "95%", label: "Success Rate" },
  { number: "50+", label: "Hours Content" },
  { number: "24/7", label: "Support" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "The WordPress course helped me build my business website from scratch. The step-by-step approach made it so easy!",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "E-commerce Manager",
    content: "Shopify training was exactly what I needed. Now I can manage our online store efficiently and boost sales.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🚀 New Course Materials Available
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Master WordPress & Shopify CMS
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn to build, manage, and optimize websites with the world's most popular content management systems. 
              No coding experience required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/wordpress">Start WordPress Course</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/shopify">Explore Shopify Training</Link>
              </Button>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={heroImage} 
                alt="Students learning CMS" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our CMS Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path to CMS mastery with our comprehensive training courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WordPress Course */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={wordpressImage} 
                  alt="WordPress Course" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  WordPress CMS Mastery
                </CardTitle>
                <CardDescription>
                  Complete WordPress training from basics to advanced content management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-medium">8 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Level</span>
                    <span className="font-medium">Beginner to Advanced</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>WordPress Dashboard Mastery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Theme & Plugin Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>SEO & Performance Optimization</span>
                    </div>
                  </div>
                  <Button variant="gradient" className="w-full" asChild>
                    <Link to="/wordpress">Explore WordPress Course</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Shopify Course */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={shopifyImage} 
                  alt="Shopify Course" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge variant="secondary" className="absolute top-4 left-4">E-commerce Focus</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Shopify E-commerce Management
                </CardTitle>
                <CardDescription>
                  Master Shopify store management and e-commerce optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-medium">6 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Level</span>
                    <span className="font-medium">Beginner to Intermediate</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Store Setup & Configuration</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Product & Order Management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Marketing & Analytics</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/shopify">Explore Shopify Course</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose CMS Academy?</h2>
            <p className="text-xl text-muted-foreground">
              We provide the best learning experience for CMS mastery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from our successful graduates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your CMS Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our CMS training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/syllabus">View Full Syllabus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">CMS Academy</span>
              </div>
              <p className="text-muted-foreground">
                Empowering individuals with practical CMS skills for the digital world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <div className="space-y-2">
                <Link to="/wordpress" className="block text-muted-foreground hover:text-primary">WordPress Training</Link>
                <Link to="/shopify" className="block text-muted-foreground hover:text-primary">Shopify Course</Link>
                <Link to="/syllabus" className="block text-muted-foreground hover:text-primary">Full Syllabus</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary">About Us</Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary">Contact</Link>
                <Link to="/terms" className="block text-muted-foreground hover:text-primary">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="text-muted-foreground">help@cmsacademy.com</div>
                <div className="text-muted-foreground">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CMS Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}