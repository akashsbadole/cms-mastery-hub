import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Target,
  Heart,
  Star,
  Lightbulb,
  TrendingUp,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Practical Focus",
    description: "We prioritize hands-on skills that you can apply immediately in real-world scenarios."
  },
  {
    icon: Heart,
    title: "Student Success",
    description: "Your success is our mission. We provide ongoing support throughout your learning journey."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously update our curriculum to reflect the latest CMS trends and best practices."
  },
  {
    icon: Shield,
    title: "Quality Education",
    description: "Our courses are designed by industry experts with years of real-world experience."
  }
];

const stats = [
  { number: "2000+", label: "Students Trained", icon: Users },
  { number: "95%", label: "Success Rate", icon: TrendingUp },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "50+", label: "Hours of Content", icon: BookOpen }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead WordPress Instructor",
    experience: "8+ years",
    expertise: "WordPress Development & Training",
    description: "Former WordPress core contributor with extensive experience in enterprise CMS solutions."
  },
  {
    name: "Mike Chen", 
    role: "Shopify Specialist",
    experience: "6+ years",
    expertise: "E-commerce & Shopify Management",
    description: "E-commerce consultant who has helped launch over 200 successful Shopify stores."
  },
  {
    name: "Emily Rodriguez",
    role: "Course Design Director",
    experience: "10+ years",
    expertise: "Educational Technology & Curriculum",
    description: "Educational technology expert focused on creating engaging and effective learning experiences."
  }
];

const milestones = [
  {
    year: "2020",
    title: "CMS Academy Founded",
    description: "Started with a vision to make CMS education accessible to everyone"
  },
  {
    year: "2021", 
    title: "First 500 Students",
    description: "Reached our first major milestone with successful course completions"
  },
  {
    year: "2022",
    title: "Course Expansion",
    description: "Added Shopify course to complement our WordPress training"
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for excellence in online education"
  },
  {
    year: "2024",
    title: "2000+ Graduates",
    description: "Proudly celebrating over 2000 successful CMS professionals"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero/10">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🏆 Trusted by 2000+ Students
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About CMS Academy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're passionate about empowering individuals with practical CMS skills. 
            Our mission is to make professional-level WordPress and Shopify training 
            accessible, affordable, and actionable for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/contact">Join Our Community</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/syllabus">Explore Our Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-muted-foreground">
                Driving the future of CMS education through practical, accessible learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To democratize CMS education by providing high-quality, practical training 
                    that empowers individuals to build, manage, and optimize websites using 
                    WordPress and Shopify. We focus on real-world skills that immediately 
                    translate to career advancement and business success.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To become the global leader in CMS education, where anyone, regardless 
                    of their technical background, can master content management systems 
                    and unlock new opportunities in the digital economy. We envision a 
                    world where CMS skills are accessible to all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CMS Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">
              Industry professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                  <Badge variant="outline">{member.experience}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-medium mb-2">{member.expertise}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                From humble beginnings to industry leadership
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <Badge variant="secondary">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose CMS Academy?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">CMS-Focused Curriculum</h3>
                  <p className="text-sm text-muted-foreground">
                    Unlike generic web development courses, we focus specifically on content 
                    management systems, ensuring you get deep, practical knowledge in WordPress and Shopify.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Industry-Recognized Certification</h3>
                  <p className="text-sm text-muted-foreground">
                    Our certificates are recognized by employers and add real value to your 
                    professional profile, helping you stand out in the job market.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">🎯 Our Commitment to You</h3>
              <p className="text-muted-foreground mb-6">
                We're not just another online course provider. We're your partners in professional growth, 
                committed to helping you succeed in the ever-evolving world of content management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" asChild>
                  <Link to="/contact">Start Your Journey</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/syllabus">Explore Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}