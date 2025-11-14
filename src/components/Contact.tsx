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
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/20 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container-custom">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 xs:space-y-4">
            <h2 className="text-section gradient-text animate-fade-up">Get In Touch</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up px-2 xs:px-3" style={{ animationDelay: '0.1s' }}>
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 xs:space-y-7 sm:space-y-8 animate-slide-left">
              <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold">Let's Connect</h3>
                <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              <div className="grid gap-4 xs:gap-5 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="glass p-4 xs:p-5 sm:p-6 hover:border-primary/30 transition-all duration-300 hover-lift-touch group animate-entrance"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-3 xs:space-x-3.5 sm:space-x-4">
                      <div className="p-2.5 xs:p-3 rounded-lg bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 group-hover:from-gradient-start/30 group-hover:to-gradient-end/30 transition-all duration-300 flex-shrink-0">
                        <info.icon className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-sm xs:text-base text-foreground font-medium break-words">{info.content}</p>
                        <p className="text-xs xs:text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-right">
              <Card className="glass p-4 xs:p-5 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
                  <div className="space-y-1.5 xs:space-y-2">
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-foreground font-semibold">Send a Message</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    <div className="space-y-1.5 xs:space-y-2 sm:col-span-1">
                      <Label htmlFor="name" className="text-xs xs:text-sm sm:text-base text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input touch-target text-xs xs:text-sm sm:text-base h-10 xs:h-11 sm:h-12"
                        required
                      />
                    </div>
                    <div className="space-y-1.5 xs:space-y-2 sm:col-span-1">
                      <Label htmlFor="email" className="text-xs xs:text-sm sm:text-base text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input touch-target text-xs xs:text-sm sm:text-base h-10 xs:h-11 sm:h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 xs:space-y-2">
                    <Label htmlFor="subject" className="text-xs xs:text-sm sm:text-base text-foreground">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input text-xs xs:text-sm sm:text-base h-10 xs:h-11 sm:h-12"
                      required
                    />
                  </div>

                  <div className="space-y-1.5 xs:space-y-2">
                    <Label htmlFor="message" className="text-xs xs:text-sm sm:text-base text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input min-h-[100px] xs:min-h-[120px] sm:min-h-[140px] resize-none text-xs xs:text-sm sm:text-base"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full touch-target transition-all duration-300 hover:scale-105 text-xs xs:text-sm sm:text-base h-11 xs:h-12 sm:h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
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