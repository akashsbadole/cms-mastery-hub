import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle, 
  Globe,
  Settings,
  Shield,
  Search,
  Paintbrush,
  BarChart3,
  Code,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import wordpressImage from "@/assets/wordpress-course.jpg";
import syllabusData from "@/data/syllabus.json";

const courseFeatures = [
  {
    icon: Globe,
    title: "WordPress Fundamentals",
    description: "Master the basics of WordPress CMS and content management"
  },
  {
    icon: Settings,
    title: "Theme & Plugin Management",
    description: "Learn to customize themes and manage plugins effectively"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Optimize your WordPress site for search engines"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Keep your WordPress site secure and well-maintained"
  },
  {
    icon: Paintbrush,
    title: "Design Customization",
    description: "Customize your site's appearance without coding"
  },
  {
    icon: BarChart3,
    title: "Performance & Analytics",
    description: "Monitor and improve your site's performance"
  }
];

const wordpressData = syllabusData.wordpress;

const learningPath = [
  { step: 1, title: "Enroll & Setup", description: "Join the course and set up your learning environment" },
  { step: 2, title: "Foundation Learning", description: "Master WordPress basics and core concepts" },
  { step: 3, title: "Hands-on Practice", description: "Build real websites with guided projects" },
  { step: 4, title: "Advanced Techniques", description: "Learn optimization, security, and maintenance" },
  { step: 5, title: "Certification", description: "Complete final project and earn your certificate" }
];

export default function WordPress() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                🏆 Most Popular Course
              </Badge>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                WordPress CMS Mastery
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Learn to build, manage, and optimize WordPress websites like a pro. 
                This comprehensive course covers everything from basics to advanced WordPress management.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>8 Weeks Duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>40+ Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>1500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certificate Included</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Enroll Now - $299</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/syllabus">View Full Syllabus</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={wordpressImage} 
                alt="WordPress Course" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium">95% Success Rate</span>
                </div>
                <div className="text-2xl font-bold text-primary">4.9/5</div>
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
            <h2 className="text-4xl font-bold mb-4">What You'll Master</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive WordPress skills that will make you a confident CMS administrator
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
            <h2 className="text-4xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-xl text-muted-foreground">
              8 weeks of structured learning with hands-on projects
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {wordpressData.modules.map((module, index) => (
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
                        {wordpressData.duration} • {module.topics.length} topics
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
              <Link to="/syllabus">View Complete 8-Week Syllabus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-xl text-muted-foreground">
              Follow our proven path to WordPress mastery
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {learningPath.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    {index < learningPath.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
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
              <h2 className="text-4xl font-bold mb-4">Basic Development Skills</h2>
              <p className="text-xl text-muted-foreground">
                While our focus is on CMS, we include essential development basics
              </p>
            </div>
            
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Development Fundamentals (Week 8)
                </CardTitle>
                <CardDescription>
                  Basic coding skills to enhance your WordPress management capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">HTML & CSS Basics</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Basic HTML structure and tags</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>CSS styling fundamentals</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Custom CSS for WordPress</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">WordPress Development</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Child themes creation and usage</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Custom code snippets</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Functions.php modifications</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-info/10 rounded-lg border border-info/20">
                  <div className="flex items-start gap-2">
                    <Code className="h-5 w-5 text-info mt-0.5" />
                    <div>
                      <h5 className="font-medium text-info mb-1">Note on Development</h5>
                      <p className="text-sm text-muted-foreground">
                        Our development module covers only the essentials needed for effective CMS management. 
                        This is not a full development course but provides practical skills for WordPress customization.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Master WordPress?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 1500+ students who have successfully completed our WordPress CMS training program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Enroll Now - $299</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/shopify">Compare with Shopify Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}