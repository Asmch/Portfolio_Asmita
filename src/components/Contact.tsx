import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Clock, Send, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await emailjs.send(
      'service_0t25xdp', // Your Service ID
      'template_bzh1ezm', // Your Template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'HPG_Ct9T14oGI87Il' // Your Public Key / User ID
    );
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'asmitachoudhary08@gmail.com',
      subtext: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 7061333651',
      subtext: 'Available Mon-Sun 9AM-6PM'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      subtext: 'Available for remote work'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '12-24 hours',
      subtext: 'I typically respond quickly'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-left">
              <div className="space-y-6">
                <h3 className="text-subsection text-foreground font-semibold">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="glass p-6 hover:border-primary/30 transition-all duration-300 hover-lift-touch group animate-entrance"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 group-hover:from-gradient-start/30 group-hover:to-gradient-end/30 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-right">
              <Card className="glass p-4 xs:p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg xs:text-xl sm:text-2xl text-foreground font-semibold">Send a Message</h3>
                    <p className="text-muted-foreground text-sm xs:text-base">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground text-sm xs:text-base">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input touch-target text-sm xs:text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input touch-target text-sm xs:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full touch-target transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;