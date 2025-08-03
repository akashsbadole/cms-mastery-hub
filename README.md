# CMS Training Hub - Professional Web Training Platform

A comprehensive training platform for WordPress and Shopify courses with professional services, enrollment management, and email notifications.

## 🚀 Platform Features

### 📚 Course Management
- **WordPress CMS Training** - 4-week comprehensive course ($299)
- **Shopify E-commerce Training** - 6-week store setup course ($249) 
- **React Development** - Modern JavaScript framework ($399)
- **Full Stack Development** - Complete web development ($499)
- **Advanced CMS Package** - Combined training programs ($699)

### 💼 Professional Services
- **Custom Development** - Web application development
- **Website Maintenance** - Ongoing support and updates
- **SEO Consulting** - Search engine optimization
- **Technical Training** - Personalized coaching sessions
- **Service categories**: Development, Maintenance, Consulting, Training
- **Flexible pricing**: Hourly, monthly, or project-based rates

### 📋 Advanced Enrollment System
- Student registration with comprehensive form validation
- Multi-course selection (WordPress, Shopify, React, Full Stack)
- Contact information collection with phone validation
- Service inquiry system with project details
- Optional newsletter subscription
- Message/inquiry submission with categorization

### 🔧 Backend Integration
- **Supabase Database** - Secure PostgreSQL data storage
- **Email Notifications** - Automated confirmation emails via Resend
- **Real-time Data** - Live enrollment and inquiry tracking
- **Row Level Security** - Protected user data access
- **Edge Functions** - Serverless backend functionality

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching capability
- **Gradient Effects** - Beautiful visual elements
- **Smooth Animations** - Enhanced user experience
- **Accessibility** - WCAG compliant components

### 📊 Data Management
- **Contact Submissions** - Centralized inquiry tracking
- **Service Inquiries** - Detailed project requirement collection
- **Enrollment Analytics** - Student registration insights
- **Status Management** - Pending/completed tracking

## 🛠️ Technical Stack

### Frontend
- **React 18** - Modern JavaScript library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form management
- **Lucide React** - Beautiful icons

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
- **PostgreSQL** - Robust relational database
- **Edge Functions** - Serverless API endpoints
- **Row Level Security (RLS)** - Database security
- **Real-time subscriptions** - Live data updates

### External Integrations
- **Resend.com** - Transactional email delivery
- **CORS handling** - Cross-origin resource sharing
- **Form validation** - Client and server-side validation

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account ([supabase.com](https://supabase.com))
- Resend.com account ([resend.com](https://resend.com))

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
```

### 2. Supabase Configuration
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. The database schema includes these tables:
   - `courses` - Course catalog and pricing
   - `enrollments` - Student enrollment data
   - `services` - Professional service offerings
   - `service_inquiries` - Service request submissions
   - `contact_submissions` - General contact form data

### 3. Email Service Setup
1. Sign up at [resend.com](https://resend.com)
2. Verify your email domain at [resend.com/domains](https://resend.com/domains)
3. Create API key at [resend.com/api-keys](https://resend.com/api-keys)
4. Add the `RESEND_API_KEY` to your Supabase Edge Functions secrets

### 4. Environment Configuration
The Supabase client is pre-configured with:
- Project URL: `https://wuvkvovcvwfnwrtmwejw.supabase.co`
- Anon Key: (included in client configuration)

## 🏃‍♂️ Development

### Start Development Server
```bash
npm run dev
```
Application available at `http://localhost:5173`

### Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   └── Navigation.tsx   # Main navigation
├── pages/
│   ├── Home.tsx         # Landing page with courses
│   ├── WordPress.tsx    # WordPress course details
│   ├── Shopify.tsx      # Shopify course details
│   ├── Services.tsx     # Professional services catalog
│   ├── Syllabus.tsx     # Course curriculum
│   ├── About.tsx        # About page
│   ├── Contact.tsx      # Contact form with database integration
│   └── Terms.tsx        # Terms of service
├── integrations/
│   └── supabase/        # Supabase client & types
├── data/
│   └── syllabus.json    # Course curriculum data
└── hooks/               # Custom React hooks
```

## 📊 Database Schema

### Courses Table
```sql
- id (Text, Primary Key)
- name (Text, Required)
- price (Decimal, Required)
- duration (Text, Required)
- description (Text, Optional)
- created_at (Timestamp, Default: now())
```

### Services Table
```sql
- id (UUID, Primary Key)
- name (Text, Required)
- category (Text, Required: development/maintenance/consulting/training)
- price_type (Text, Required: hourly/monthly/project)
- price (Decimal, Optional)
- duration (Text, Optional)
- description (Text, Optional)
- features (Array, Optional)
- popular (Boolean, Default: false)
- created_at (Timestamp, Default: now())
- updated_at (Timestamp, Auto-updated)
```

### Enrollments Table
```sql
- id (UUID, Primary Key)
- full_name (Text, Required)
- email (Text, Required)
- phone (Text, Optional)
- course_type (Text, Required)
- message (Text, Optional)
- newsletter_subscription (Boolean, Default: false)
- enrollment_date (Timestamp, Default: now())
- payment_status (Text, Default: 'pending')
- enrollment_status (Text, Default: 'active')
- created_at (Timestamp, Default: now())
- updated_at (Timestamp, Auto-updated)
```

### Service Inquiries Table
```sql
- id (UUID, Primary Key)
- full_name (Text, Required)
- email (Text, Required)
- phone (Text, Optional)
- company (Text, Optional)
- service_id (UUID, Optional, References services)
- service_type (Text, Optional)
- project_description (Text, Optional)
- budget_range (Text, Optional)
- timeline (Text, Optional)
- message (Text, Optional)
- status (Text, Default: 'pending')
- created_at (Timestamp, Default: now())
- updated_at (Timestamp, Auto-updated)
```

### Contact Submissions Table
```sql
- id (UUID, Primary Key)
- full_name (Text, Required)
- email (Text, Required)
- phone (Text, Optional)
- subject (Text, Optional)
- message (Text, Required)
- inquiry_type (Text, Default: 'general')
- status (Text, Default: 'pending')
- created_at (Timestamp, Default: now())
- updated_at (Timestamp, Auto-updated)
```

## 🔐 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Public read access** to courses and services
- **Secure submission** for all forms
- **Email validation** and sanitization
- **CORS protection** on API endpoints
- **Input validation** on frontend and backend
- **SQL injection prevention** through Supabase client

## 📧 Email Functionality

### Automated Notifications
- **Enrollment confirmations** - Welcome emails to students
- **Service inquiry responses** - Professional service inquiries
- **Contact form responses** - General inquiries
- **Admin notifications** - New submissions alerts

### Email Templates
- Professional HTML templates
- Course-specific information
- Next steps and contact details
- Branded styling and layouts

## 🚀 Deployment

### Deploy with Lovable
1. Open your [Lovable Project](https://lovable.dev/projects/6fe38bd5-6b69-4a16-849b-564280278876)
2. Click **Share → Publish**
3. Your app will be deployed instantly

### Deploy to Other Platforms

#### Vercel
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

#### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

#### Traditional Hosting
```bash
npm run build
# Upload dist/ folder contents to your web server
```

## 🔗 Custom Domain

To connect a custom domain:
1. Navigate to **Project → Settings → Domains** in Lovable
2. Click **Connect Domain**
3. Follow the DNS configuration instructions

*Note: Paid Lovable plan required for custom domains*

## 📱 User Experience Features

### Student Journey
- Browse comprehensive course catalog
- View detailed course syllabi
- Submit enrollment applications
- Receive automated email confirmations
- Access mobile-responsive interface
- Track enrollment status

### Service Inquiries
- Browse professional services catalog
- Filter by category (Development, Maintenance, Consulting, Training)
- View pricing and features
- Submit detailed project requirements
- Receive personalized quotes
- Track inquiry status

### Contact System
- Multiple inquiry types (General, Course, Technical, Partnership)
- Comprehensive contact form
- FAQ section with common questions
- Multiple contact methods
- Real-time form validation

### Admin Capabilities
- View all submissions in Supabase dashboard
- Track enrollment and inquiry statuses
- Monitor course and service popularity
- Access student contact information
- Manage email notifications
- Generate analytics reports

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔧 Customization

### Adding New Courses
1. Add course data to the `courses` table in Supabase
2. Update course selection options in enrollment forms
3. Create new course detail pages as needed
4. Update navigation and routing

### Adding New Services
1. Add service data to the `services` table in Supabase
2. Configure pricing and features
3. Update service categories if needed
4. Customize inquiry forms

### Email Templates
Email templates are configured in the Supabase Edge Functions:
- Welcome messages
- Course-specific information
- Service inquiry responses
- Professional branding and styling

### UI Customization
- **Design System**: Configured in `index.css` and `tailwind.config.ts`
- **Components**: shadcn/ui components with custom variants
- **Theming**: CSS variables for colors and gradients
- **Responsive**: Mobile-first design approach

## 📞 Support & Documentation

### Resources
- [Lovable Documentation](https://docs.lovable.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

### Getting Help
- Check console logs for debugging information
- Review Supabase dashboard for database issues
- Verify email service configuration
- Test form submissions in development mode

## 🏆 Platform Highlights

### Phase 1: Enhanced Course Catalog ✅
- Expanded course offerings (5 courses)
- Professional course descriptions
- Competitive pricing structure
- Detailed curriculum information

### Phase 2: Professional Services ✅
- Complete services catalog
- Category-based filtering
- Flexible pricing models
- Service inquiry system

### Phase 3: Advanced Contact System ✅
- Database-integrated contact forms
- Email notification system
- Multiple inquiry types
- Comprehensive FAQ section

### Phase 4: Data Management & Analytics ✅
- Real-time enrollment tracking
- Service inquiry management
- Contact submission logging
- Status management system

### Phase 5: Production-Ready Platform ✅
- Comprehensive error handling
- Email service integration
- Security best practices
- Performance optimization

## 📄 License

This project is created with Lovable and includes:
- React application code
- Supabase database integration
- Email notification system
- Responsive UI components
- Professional service catalog
- Comprehensive contact system

---

**Built with ❤️ using Lovable, Supabase, React, and modern web technologies**

*Ready for production deployment with full feature set and professional-grade architecture*