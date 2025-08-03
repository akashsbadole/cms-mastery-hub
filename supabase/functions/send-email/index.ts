import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  html: string;
  type: 'contact' | 'enrollment' | 'service_inquiry';
  data?: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html, type, data }: EmailRequest = await req.json();

    // For now, we'll just log the email request
    // In a real implementation, you would integrate with an email service like Resend
    console.log("Email request received:", {
      to,
      subject,
      type,
      timestamp: new Date().toISOString(),
      data: data || {}
    });

    // Simulate successful email sending
    const emailResponse = {
      id: `email_${Date.now()}`,
      to,
      subject,
      status: "sent",
      timestamp: new Date().toISOString()
    };

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);