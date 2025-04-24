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
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  organization: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
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

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <Header />
      <div className="bg-brand-olive text-brand-cream py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Ready to transform your organization? Get in touch to schedule a discovery meeting or learn more about our services.
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-brand-brown">Get In Touch</h2>
              <p className="mb-8 text-brand-brown">
                Have questions about how we can help your organization? Reach out to schedule a discovery meeting or learn more about our services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-brown">Email</h3>
                    <p className="text-brand-olive">
                      [PLACEHOLDER: Add email address]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-brown">Phone</h3>
                    <p className="text-brand-olive">
                      [PLACEHOLDER: Add phone number]
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-brand-brown">Book a Meeting</h3>
                    <p className="text-brand-olive mb-2">
                      Schedule a discovery call to discuss your needs.
                    </p>
                    <Button variant="outline" className="mt-2 border-brand-gold text-brand-brown hover:bg-brand-gold hover:text-brand-cream">
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Card className="border-brand-gold bg-white">
                <CardHeader>
                  <CardTitle className="text-brand-brown">Send an Inquiry</CardTitle>
                  <CardDescription className="text-brand-olive">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-brand-brown">
                          Name <span className="text-brand-neon">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...form.register("name")}
                          className="border-brand-gold focus-visible:ring-brand-green"
                          aria-invalid={!!form.formState.errors.name}
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-brand-brown">
                          Email <span className="text-brand-neon">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          {...form.register("email")}
                          className="border-brand-gold focus-visible:ring-brand-green"
                          aria-invalid={!!form.formState.errors.email}
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="organization" className="text-sm font-medium text-brand-brown">
                          Organization
                        </label>
                        <Input
                          id="organization"
                          placeholder="Your organization"
                          {...form.register("organization")}
                          className="border-brand-gold focus-visible:ring-brand-green"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-brand-brown">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          {...form.register("phone")}
                          className="border-brand-gold focus-visible:ring-brand-green"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-brand-brown">
                        Message <span className="text-brand-neon">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={6}
                        {...form.register("message")}
                        className="border-brand-gold focus-visible:ring-brand-green"
                        aria-invalid={!!form.formState.errors.message}
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-green hover:bg-brand-olive text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-brown">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-brand-brown">How do your advisory services work?</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-olive">
                <p>
                  [PLACEHOLDER: Add answer about how the advisory services work, focusing on the three service models and the process of engagement]
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-brand-brown">What types of organizations do you work with?</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-olive">
                <p>
                  [PLACEHOLDER: Add information about the range of clients including corporate clients, small businesses, government agencies, and Aboriginal businesses]
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-brand-brown">How long does a typical engagement last?</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-olive">
                <p>
                  [PLACEHOLDER: Add details about typical engagement timelines for different service models]
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-gold bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-brand-brown">What makes your approach unique?</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-olive">
                <p>
                  [PLACEHOLDER: Highlight USPs including cultural background, lived experience, professional expertise across sectors, and focus on empowerment]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-brand-olive text-brand-cream py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Renee Advisory</h3>
              <p className="mb-4 text-brand-cream/80">Transforming organizations through authentic cultural wisdom and strategic expertise.</p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Policy Advice</Link></li>
                <li><Link to="/services" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Strategic Advice</Link></li>
                <li><Link to="/services" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Cultural Supervision</Link></li>
                <li><Link to="/services" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Cultural Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-brand-cream/80 hover:text-brand-neon transition-colors">About</Link></li>
                <li><Link to="/media" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Media</Link></li>
                <li><Link to="/contact" className="text-brand-cream/80 hover:text-brand-neon transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="flex items-center mb-2 text-brand-cream/80">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>info@reneeadvisory.com</span>
              </div>
              <Button variant="outline" className="mt-4 border-brand-gold text-brand-cream hover:bg-brand-gold">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </div>
          </div>
          <div className="border-t border-brand-gold/30 mt-8 pt-8 text-center text-brand-cream/60">
            <p>&copy; {new Date().getFullYear()} Renee Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
