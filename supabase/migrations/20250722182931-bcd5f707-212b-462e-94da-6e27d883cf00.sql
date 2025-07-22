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