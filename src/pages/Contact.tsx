import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MessageSquare } from "lucide-react";
import Header from "@/components/Header";

// Form schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  organization: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  // React Hook Form with zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    // Add actual form submission code here
    
    // Show success message
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Rest of the content */}
      {/* Header section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Ready to transform your organization? Get in touch to schedule a discovery meeting or learn more about our services.
          </p>
        </div>
      </div>

      {/* Contact form section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions about how we can help your organization? Reach out to schedule a discovery meeting or learn more about our services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      [PLACEHOLDER: Add email address]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">
                      [PLACEHOLDER: Add phone number]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Book a Meeting</h3>
                    <p className="text-muted-foreground mb-2">
                      Schedule a discovery call to discuss your needs.
                    </p>
                    <Button variant="outline" className="mt-2">
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send an Inquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...form.register("name")}
                          aria-invalid={!!form.formState.errors.name}
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          {...form.register("email")}
                          aria-invalid={!!form.formState.errors.email}
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="organization" className="text-sm font-medium">
                          Organization
                        </label>
                        <Input
                          id="organization"
                          placeholder="Your organization"
                          {...form.register("organization")}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          {...form.register("phone")}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        {...form.register("message")}
                        aria-invalid={!!form.formState.errors.message}
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How do your advisory services work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  [PLACEHOLDER: Add answer about how the advisory services work, focusing on the three service models and the process of engagement]
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What types of organizations do you work with?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  [PLACEHOLDER: Add information about the range of clients including corporate clients, small businesses, government agencies, and Aboriginal businesses]
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How long does a typical engagement last?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  [PLACEHOLDER: Add details about typical engagement timelines for different service models]
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What makes your approach unique?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  [PLACEHOLDER: Highlight USPs including cultural background, lived experience, professional expertise across sectors, and focus on empowerment]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
