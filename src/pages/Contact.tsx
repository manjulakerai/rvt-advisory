
import React, { useRef } from 'react';
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Form submitted:", data);
      
      // Send email using EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone || 'Not provided',
        organisation: data.organisation || 'Not provided',
        message: data.message,
      };
      
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your actual Service ID from EmailJS
        'YOUR_TEMPLATE_ID', // Replace with your actual Template ID from EmailJS
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your actual Public Key from EmailJS
      );
      
      console.log('Email successfully sent!', result);
      
      toast({
        title: "Inquiry Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    }
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
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Your email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="organisation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organisation</FormLabel>
                              <FormControl>
                                <Input placeholder="Your organisation" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="Your phone number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                rows={6}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </Form>
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
      <Footer />
    </div>
  );
};

export default Contact;
