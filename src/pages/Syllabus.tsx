import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  Globe,
  Laptop,
  Download,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import syllabusData from "@/data/syllabus.json";

export default function Syllabus() {
  const [activeTab, setActiveTab] = useState("wordpress");

  const currentCourse = syllabusData[activeTab as keyof typeof syllabusData];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Complete Course Syllabus
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to take you from beginner to professional 
            in WordPress and Shopify CMS management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact">Enroll in Courses</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download PDF Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  WordPress CMS Mastery
                </CardTitle>
                <CardDescription>Complete WordPress content management training</CardDescription>
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
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Lessons</span>
                    <span className="font-medium">40+ Lessons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Course Fee</span>
                    <span className="font-medium text-primary">$299</span>
                  </div>
                  <Button variant="gradient" className="w-full" asChild>
                    <Link to="/wordpress">View WordPress Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-6 w-6 text-primary" />
                  Shopify E-commerce Management
                </CardTitle>
                <CardDescription>Master Shopify store management and optimization</CardDescription>
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
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Lessons</span>
                    <span className="font-medium">30+ Lessons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Course Fee</span>
                    <span className="font-medium text-primary">$249</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/shopify">View Shopify Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Syllabus */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Detailed Weekly Breakdown</h2>
              <p className="text-xl text-muted-foreground">
                Choose a course to see the complete weekly curriculum
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="wordpress" className="text-lg py-4">
                  <Globe className="h-5 w-5 mr-2" />
                  WordPress Course
                </TabsTrigger>
                <TabsTrigger value="shopify" className="text-lg py-4">
                  <Laptop className="h-5 w-5 mr-2" />
                  Shopify Course
                </TabsTrigger>
              </TabsList>

              <TabsContent value="wordpress" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">{syllabusData.wordpress.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{syllabusData.wordpress.description}</p>
                  <div className="flex justify-center gap-4">
                    <Badge variant="secondary">{syllabusData.wordpress.duration}</Badge>
                    <Badge variant="outline">{syllabusData.wordpress.level}</Badge>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {syllabusData.wordpress.modules.map((module, index) => (
                    <AccordionItem key={index} value={`week-${module.week}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {module.week}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{module.title}</h4>
                            <p className="text-sm text-muted-foreground">Week {module.week}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="ml-14 space-y-3">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="shopify" className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2">{syllabusData.shopify.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{syllabusData.shopify.description}</p>
                  <div className="flex justify-center gap-4">
                    <Badge variant="secondary">{syllabusData.shopify.duration}</Badge>
                    <Badge variant="outline">{syllabusData.shopify.level}</Badge>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {syllabusData.shopify.modules.map((module, index) => (
                    <AccordionItem key={index} value={`week-${module.week}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {module.week}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{module.title}</h4>
                            <p className="text-sm text-muted-foreground">Week {module.week}</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="ml-14 space-y-3">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Learning Approach</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Structured Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Progressive curriculum from basics to advanced topics
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Hands-on Practice</h3>
                  <p className="text-sm text-muted-foreground">
                    Real projects and practical exercises every week
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Direct access to instructors and mentors
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">💡 Important Note on Development</h3>
              <p className="text-muted-foreground mb-4">
                Our courses focus primarily on <strong>Content Management System (CMS)</strong> skills rather than 
                full-stack development. While we include basic development modules, our emphasis is on:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>CMS administration and management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Content creation and optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>User experience and site management</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Basic customization techniques</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Performance and SEO optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Essential development basics only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose your path and begin your journey to CMS mastery today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Enroll in Both Courses</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}