import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Clock, 
  Users, 
  CheckCircle, 
  Laptop,
  CreditCard,
  BarChart3,
  Truck,
  Megaphone,
  Settings,
  Award,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";
import shopifyImage from "@/assets/shopify-course.jpg";
import syllabusData from "@/data/syllabus.json";

const courseFeatures = [
  {
    icon: ShoppingCart,
    title: "Store Setup & Management",
    description: "Learn to set up and manage professional Shopify stores"
  },
  {
    icon: CreditCard,
    title: "Payment & Checkout",
    description: "Configure payment gateways and optimize checkout process"
  },
  {
    icon: Truck,
    title: "Shipping & Fulfillment",
    description: "Master shipping settings and order fulfillment"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track performance and make data-driven decisions"
  },
  {
    icon: Megaphone,
    title: "Marketing Tools",
    description: "Use Shopify's built-in marketing and promotion features"
  },
  {
    icon: Settings,
    title: "Apps & Customization",
    description: "Extend functionality with apps and customizations"
  }
];

const shopifyData = syllabusData.shopify;

const learningOutcomes = [
  "Set up and configure professional Shopify stores",
  "Manage products, inventory, and collections effectively",
  "Process orders and handle customer service",
  "Configure shipping, taxes, and payment methods",
  "Use Shopify's marketing and SEO tools",
  "Analyze store performance with built-in analytics"
];

export default function Shopify() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                🛒 E-commerce Focused
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Shopify E-commerce Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Master Shopify store management from setup to optimization. 
                Learn to build and manage successful e-commerce stores without technical complexity.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>6 Weeks Duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  <span>30+ Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>800+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certificate Included</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Enroll Now - $249</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/syllabus">View Full Syllabus</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={shopifyImage} 
                alt="Shopify Course" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">E-commerce Focus</span>
                </div>
                <div className="text-2xl font-bold text-primary">4.8/5</div>
                <div className="text-sm text-muted-foreground">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">E-commerce Skills You'll Gain</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful Shopify store
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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

      {/* Weekly Modules */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Course Structure</h2>
            <p className="text-xl text-muted-foreground">
              6 weeks of intensive Shopify training
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {shopifyData.modules.map((module, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {module.week}
                        </div>
                        {module.title}
                      </CardTitle>
                      <CardDescription>
                        {shopifyData.duration} • {module.topics.length} topics
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Week {module.week}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/syllabus">View Complete 6-Week Syllabus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What You'll Achieve</h2>
              <p className="text-xl text-muted-foreground">
                By the end of this course, you'll be able to manage any Shopify store professionally
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card hover:shadow-card transition-all duration-300">
                  <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Portion */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Basic Development Module</h2>
              <p className="text-xl text-muted-foreground">
                Essential technical skills for advanced Shopify customization
              </p>
            </div>
            
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Shopify Development Basics (Week 6)
                </CardTitle>
                <CardDescription>
                  Learn basic coding skills to customize your Shopify store beyond standard options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Liquid Template Language</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Introduction to Liquid syntax</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Basic template modifications</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Custom code snippets</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Theme Customization</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Theme file structure understanding</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>CSS customizations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Basic JavaScript for enhancements</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-start gap-2">
                    <Code className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <h5 className="font-medium text-warning mb-1">Development Scope</h5>
                      <p className="text-sm text-muted-foreground">
                        This module covers basic customization skills only. Our focus remains on store management 
                        and optimization rather than full Shopify development.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Shopify vs WordPress</h2>
              <p className="text-xl text-muted-foreground">
                Choose the right platform for your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center">Shopify Course</CardTitle>
                  <CardDescription className="text-center">E-commerce Focused</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Built for e-commerce</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Hosted solution</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>6 weeks duration</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>$249 course fee</span>
                    </div>
                  </div>
                  <Button variant="gradient" className="w-full mt-6" asChild>
                    <Link to="/contact">Choose Shopify</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-center">WordPress Course</CardTitle>
                  <CardDescription className="text-center">General Purpose CMS</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Flexible content management</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Self-hosted options</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>8 weeks duration</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>$299 course fee</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <Link to="/wordpress">Compare WordPress</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your E-commerce Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 800+ students who have successfully launched their Shopify stores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Enroll Now - $249</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/wordpress">Compare with WordPress</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}