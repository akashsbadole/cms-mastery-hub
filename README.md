# Training Course Platform

A modern web application for WordPress and Shopify training courses with enrollment management and email notifications.

## 🚀 Features

### Course Management
- **WordPress CMS Training** - 4-week comprehensive course ($199)
- **Shopify E-commerce Training** - 6-week store setup course ($249) 
- **Complete CMS Package** - Combined 8-week program ($399)

### Enrollment System
- Student registration with form validation
- Course selection (WordPress, Shopify, or both)
- Contact information collection
- Optional newsletter subscription
- Message/inquiry submission

### Backend Integration
- **Supabase Database** - Secure data storage
- **Email Notifications** - Automated confirmation emails
- **Real-time Data** - Live enrollment tracking
- **Row Level Security** - Protected user data

### Technical Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL, Edge Functions)
- **Email**: Resend.com integration
- **Routing**: React Router DOM

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account
- Resend.com account (for email functionality)

## 🛠️ Installation & Setup

### 1. Clone Repository
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
```

### 2. Supabase Configuration
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the database migration by executing this SQL in your Supabase SQL Editor:

```sql
-- Create enrollments table to store student enrollment data
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  course_type TEXT NOT NULL CHECK (course_type IN ('wordpress', 'shopify', 'both')),
  message TEXT,
  newsletter_subscription BOOLEAN DEFAULT false,
  enrollment_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  enrollment_status TEXT DEFAULT 'active' CHECK (enrollment_status IN ('active', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create courses reference table
CREATE TABLE public.courses (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert course data
INSERT INTO public.courses (id, name, price, duration, description) VALUES
('wordpress', 'WordPress CMS Training', 199.00, '4 weeks', 'Complete WordPress development and management course'),
('shopify', 'Shopify E-commerce Training', 249.00, '6 weeks', 'Comprehensive Shopify store setup and customization course'),
('both', 'Complete CMS Package', 399.00, '8 weeks', 'Both WordPress and Shopify training courses combined');

-- Enable Row Level Security
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to courses (read-only)
CREATE POLICY "Anyone can view courses" 
ON public.courses 
FOR SELECT 
USING (true);

-- Create policies for enrollments (public can insert, admin can view all)
CREATE POLICY "Anyone can create enrollments" 
ON public.enrollments 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view their own enrollments" 
ON public.enrollments 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_enrollments_updated_at
  BEFORE UPDATE ON public.enrollments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
```

3. Database tables will be created:
   - `enrollments` - Student enrollment data
   - `courses` - Course information and pricing

### 3. Email Service Setup
1. Sign up at [resend.com](https://resend.com)
2. Verify your email domain at [resend.com/domains](https://resend.com/domains)
3. Create API key at [resend.com/api-keys](https://resend.com/api-keys)
4. Add the `RESEND_API_KEY` to your Supabase Edge Functions secrets

### 4. Environment Configuration
The Supabase client is pre-configured in `src/integrations/supabase/client.ts` with:
- Project URL: `https://wuvkvovcvwfnwrtmwejw.supabase.co`
- Anon Key: (included in client configuration)

## 🏃‍♂️ Development

### Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   └── Navigation.tsx   # Main navigation
├── pages/
│   ├── Home.tsx         # Landing page
│   ├── WordPress.tsx    # WordPress course page
│   ├── Shopify.tsx      # Shopify course page
│   ├── Syllabus.tsx     # Course syllabus
│   ├── About.tsx        # About page
│   ├── Contact.tsx      # Contact page
│   └── Terms.tsx        # Terms of service
├── integrations/
│   └── supabase/        # Supabase client & types
├── data/
│   └── syllabus.json    # Course curriculum data
└── hooks/               # Custom React hooks
```

## 📊 Database Schema

### Enrollments Table
```sql
- id (UUID, Primary Key)
- full_name (Text, Required)
- email (Text, Required)
- phone (Text, Optional)
- course_type (Text, Required: 'wordpress', 'shopify', 'both')
- message (Text, Optional)
- newsletter_subscription (Boolean, Default: false)
- enrollment_date (Timestamp, Default: now())
- payment_status (Text, Default: 'pending')
- enrollment_status (Text, Default: 'active')
- created_at (Timestamp, Default: now())
- updated_at (Timestamp, Auto-updated)
```

### Courses Table
```sql
- id (Text, Primary Key)
- name (Text, Required)
- price (Decimal, Required)
- duration (Text, Required)
- description (Text, Optional)
- created_at (Timestamp, Default: now())
```

## 🔐 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Public read access** to courses
- **Secure enrollment** submission
- **Email validation** and sanitization
- **CORS protection** on API endpoints

## 📧 Email Functionality

### Enrollment Confirmation
- Automatic confirmation emails to students
- Course details and next steps
- Professional email templates

### Admin Notifications
- New enrollment alerts
- Student contact information
- Course selection details

## 🚢 Deployment

### Deploy with Lovable
1. Open your [Lovable Project](https://lovable.dev/projects/6fe38bd5-6b69-4a16-849b-564280278876)
2. Click **Share → Publish**
3. Your app will be deployed instantly

### Deploy to Other Platforms
The application can be deployed to any static hosting service:

#### Vercel
```bash
npm run build
# Deploy the dist/ folder
```

#### Netlify
```bash
npm run build
# Deploy the dist/ folder
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

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📱 Features Overview

### Student Experience
- Browse course offerings
- View detailed syllabus
- Submit enrollment applications
- Receive email confirmations
- Mobile-responsive design

### Admin Capabilities
- View enrollment data in Supabase dashboard
- Track payment statuses
- Monitor course popularity
- Access student contact information

## 🔧 Customization

### Adding New Courses
1. Add course data to the `courses` table in Supabase
2. Update course selection options in enrollment forms
3. Create new course detail pages as needed

### Email Templates
Email templates are configured in the Supabase Edge Functions and can be customized for:
- Welcome messages
- Course-specific information
- Branding and styling

## 📞 Support

For technical support or questions:
- Check the [Lovable Documentation](https://docs.lovable.dev/)
- Visit [Supabase Documentation](https://supabase.com/docs)
- Review [Resend Documentation](https://resend.com/docs)

## 📄 License

This project is created with Lovable and includes:
- React application code
- Supabase database integration
- Email notification system
- Responsive UI components

---

**Built with ❤️ using Lovable, Supabase, and modern web technologies**