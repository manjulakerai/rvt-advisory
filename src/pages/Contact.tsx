import React from 'react';
import { Link } from "react-router-dom";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  organisation: z.string().optional(),
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
      organisation: "",
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
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Ready to transform your organisation? Get in touch to schedule a discovery meeting or learn more about our services.
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions about how we can help your organisation? Reach out to schedule a discovery meeting or learn more about our services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:renee@rvtadvisory.com" className="text-muted-foreground hover:underline">
                      renee@rvtadvisory.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:0411524370" className="text-muted-foreground hover:underline">
                      0411 524 370
                    </a>
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
                        <label htmlFor="organisation" className="text-sm font-medium">
                          Organisation
                        </label>
                        <Input
                          id="organisation"
                          placeholder="Your organisation"
                          {...form.register("organisation")}
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
                <CardTitle className="text-xl">What types of organisations do you work with?</CardTitle>
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
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/69f342c4-eb32-409b-a458-91dc1ee76237.png" 
                  alt="RVT Advisory" 
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mb-4">Transforming organizations through authentic cultural wisdom and strategic expertise.</p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:underline">Policy Advice</Link></li>
                <li><Link to="/services" className="hover:underline">Strategic Advice</Link></li>
                <li><Link to="/services" className="hover:underline">Cultural Supervision</Link></li>
                <li><Link to="/services" className="hover:underline">Cultural Training</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/media" className="hover:underline">Media</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="flex items-center mb-2">
                <MessageSquare className="h-5 w-5 mr-2" />
                <a href="mailto:renee@rvtadvisory.com" className="hover:underline">renee@rvtadvisory.com</a>
              </div>
              <Button variant="outline" className="mt-4 text-black font-bold">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Renee Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
