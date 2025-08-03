-- Add new courses to the courses table
INSERT INTO public.courses (id, name, price, duration, description) VALUES
('reactjs', 'ReactJS Development', 299.00, '8 weeks', 'Master React.js from basics to advanced concepts including hooks, context, and state management'),
('nextjs', 'Next.js Full Stack', 399.00, '10 weeks', 'Complete Next.js development with server-side rendering, API routes, and deployment'),
('html-css', 'HTML & CSS Fundamentals', 149.00, '4 weeks', 'Master the building blocks of web development with modern HTML5 and CSS3'),
('javascript', 'JavaScript Mastery', 249.00, '6 weeks', 'From ES6 basics to advanced JavaScript concepts, DOM manipulation, and async programming'),
('web-development', 'Complete Web Development', 799.00, '16 weeks', 'Full stack web development bootcamp covering HTML, CSS, JavaScript, React, and backend'),
('ecommerce-package', 'E-commerce Mastery', 599.00, '12 weeks', 'Complete e-commerce solution training including Shopify, WooCommerce, and payment integration');

-- Create services table for development and maintenance services
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('development', 'maintenance', 'consulting', 'training')),
  price_type TEXT NOT NULL CHECK (price_type IN ('fixed', 'hourly', 'project')),
  price DECIMAL(10,2),
  duration TEXT,
  description TEXT,
  features TEXT[],
  popular BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create service inquiries table
CREATE TABLE public.service_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_id UUID REFERENCES public.services(id),
  service_type TEXT,
  project_description TEXT,
  budget_range TEXT,
  timeline TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table for general inquiries
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  inquiry_type TEXT DEFAULT 'general' CHECK (inquiry_type IN ('general', 'support', 'partnership', 'media')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'responded', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for new tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for services (public read access)
CREATE POLICY "Anyone can view services" 
ON public.services 
FOR SELECT 
USING (true);

-- Create policies for service inquiries (public can insert)
CREATE POLICY "Anyone can create service inquiries" 
ON public.service_inquiries 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view their own service inquiries" 
ON public.service_inquiries 
FOR SELECT 
USING (true);

-- Create policies for contact submissions (public can insert)
CREATE POLICY "Anyone can create contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view their own contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);

-- Add triggers for timestamp updates
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_service_inquiries_updated_at
  BEFORE UPDATE ON public.service_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample services
INSERT INTO public.services (name, category, price_type, price, duration, description, features, popular) VALUES
('Custom Website Development', 'development', 'project', 2999.00, '4-6 weeks', 'Professional custom website development with modern technologies', ARRAY['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX', 'Cross-browser Compatible'], true),
('E-commerce Store Setup', 'development', 'project', 3999.00, '6-8 weeks', 'Complete e-commerce solution with payment integration', ARRAY['Product Catalog', 'Payment Gateway', 'Inventory Management', 'Order Processing', 'Admin Dashboard'], true),
('WordPress Maintenance', 'maintenance', 'monthly', 199.00, 'Ongoing', 'Monthly WordPress maintenance and support', ARRAY['Security Updates', 'Backup Management', 'Performance Optimization', 'Content Updates', '24/7 Support'], false),
('React App Development', 'development', 'project', 4999.00, '8-12 weeks', 'Modern React application development', ARRAY['Component Architecture', 'State Management', 'API Integration', 'Testing', 'Deployment'], false),
('SEO Consultation', 'consulting', 'hourly', 150.00, 'Flexible', 'Professional SEO audit and strategy consultation', ARRAY['SEO Audit', 'Keyword Research', 'Content Strategy', 'Technical SEO', 'Performance Report'], false),
('Website Hosting & Support', 'maintenance', 'monthly', 99.00, 'Ongoing', 'Reliable hosting with technical support', ARRAY['99.9% Uptime', 'SSL Certificate', 'Daily Backups', 'Technical Support', 'Performance Monitoring'], false);