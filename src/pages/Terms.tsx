import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Shield, 
  CreditCard, 
  RefreshCw,
  UserCheck,
  AlertTriangle,
  Mail,
  Calendar
} from "lucide-react";

const sections = [
  {
    icon: UserCheck,
    title: "Course Enrollment",
    content: [
      "Students must be 18 years or older to enroll in courses",
      "All course information must be accurate and complete",
      "One enrollment per student per course",
      "Course access begins immediately upon successful payment"
    ]
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: [
      "Full payment is required before course access",
      "Prices are listed in USD and may change without notice",
      "Payment processing is handled by secure third-party providers",
      "All sales are final unless specified in our refund policy"
    ]
  },
  {
    icon: RefreshCw,
    title: "Refund Policy",
    content: [
      "30-day money-back guarantee for all courses",
      "Refunds are processed within 5-10 business days",
      "Course materials must not be downloaded extensively for refund eligibility",
      "Partial completion (>50%) may void refund eligibility"
    ]
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: [
      "All course content is proprietary to CMS Academy",
      "Students may not share, distribute, or resell course materials",
      "Personal use only - no commercial redistribution",
      "Screenshots, recordings, and content sharing are prohibited"
    ]
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-hero/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <Badge variant="secondary">Legal</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services. 
            By enrolling in our courses, you agree to these terms.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: January 15, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Course Access */}
            <Card>
              <CardHeader>
                <CardTitle>Course Access & Completion</CardTitle>
                <CardDescription>Details about course access and completion requirements</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold mb-3">Lifetime Access</h4>
                <p className="text-muted-foreground mb-4">
                  Students receive lifetime access to course materials, including future updates and additions. 
                  However, this access is contingent upon compliance with these terms and conditions.
                </p>
                
                <h4 className="font-semibold mb-3">Course Completion</h4>
                <p className="text-muted-foreground mb-4">
                  Certificates are awarded upon successful completion of all course modules and assignments. 
                  Students must complete at least 90% of course content to be eligible for certification.
                </p>

                <h4 className="font-semibold mb-3">Technical Requirements</h4>
                <p className="text-muted-foreground">
                  Students are responsible for ensuring they have the necessary technical requirements 
                  including internet access, compatible devices, and required software for course completion.
                </p>
              </CardContent>
            </Card>

            {/* User Conduct */}
            <Card>
              <CardHeader>
                <CardTitle>User Conduct & Responsibilities</CardTitle>
                <CardDescription>Expected behavior and responsibilities of course participants</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold mb-3">Acceptable Use</h4>
                <p className="text-muted-foreground mb-4">
                  Students must use course materials responsibly and in accordance with applicable laws. 
                  Harassment, discrimination, or disruptive behavior in course forums or communications 
                  will result in immediate course termination without refund.
                </p>
                
                <h4 className="font-semibold mb-3">Academic Integrity</h4>
                <p className="text-muted-foreground mb-4">
                  All work submitted must be original. Plagiarism or cheating will result in course dismissal. 
                  Students are encouraged to ask questions and seek help when needed.
                </p>

                <h4 className="font-semibold mb-3">Account Security</h4>
                <p className="text-muted-foreground">
                  Students are responsible for maintaining the security of their account credentials. 
                  Sharing account access with others is prohibited and may result in account termination.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Important Disclaimers
                </CardTitle>
                <CardDescription>Legal disclaimers and limitations</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold mb-3">Educational Purpose</h4>
                <p className="text-muted-foreground mb-4">
                  Our courses are designed for educational purposes. While we strive to provide current 
                  and accurate information, technology evolves rapidly and some content may become outdated.
                </p>
                
                <h4 className="font-semibold mb-3">No Guarantee of Employment</h4>
                <p className="text-muted-foreground mb-4">
                  Completion of our courses does not guarantee employment, freelance work, or business success. 
                  Success depends on individual effort, market conditions, and various external factors.
                </p>

                <h4 className="font-semibold mb-3">Third-Party Services</h4>
                <p className="text-muted-foreground">
                  Our courses may reference third-party services like WordPress.org, Shopify, or hosting providers. 
                  We are not responsible for changes to these services or their terms of use.
                </p>
              </CardContent>
            </Card>

            {/* Contact & Changes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact & Policy Changes
                </CardTitle>
                <CardDescription>How to contact us and policy update procedures</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h4 className="font-semibold mb-3">Questions About Terms</h4>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these terms and conditions, please contact us at 
                  <strong className="text-primary"> legal@cmsacademy.com</strong> or through our contact form.
                </p>
                
                <h4 className="font-semibold mb-3">Policy Updates</h4>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to update these terms at any time. Significant changes will be 
                  communicated to enrolled students via email. Continued use of our services constitutes 
                  acceptance of updated terms.
                </p>

                <h4 className="font-semibold mb-3">Governing Law</h4>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of the jurisdiction where CMS Academy is incorporated. 
                  Any disputes will be resolved through binding arbitration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            By enrolling in our courses, you agree to these terms and conditions. 
            We're here to support your learning journey every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Have Questions? Contact Us
            </a>
            <a href="/syllabus" className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors">
              View Course Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}