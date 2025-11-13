import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Linkedin,
  Send
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = '1e919a81-4e46-4ee1-90a0-ebb5f3e0eb31';
{/*const WEB3FORMS_TO = 'vaibhavkhandelwal2004@gmail.com';*/}
const WEB3FORMS_SUBJECT = 'New Contact Form Submission - Shree Vadehi';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.details) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          //to: WEB3FORMS_TO,
          subject: WEB3FORMS_SUBJECT,
          from_name: 'Shree Vaidehi Website',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.details,
          page: typeof window !== 'undefined' ? window.location.href : '/contact',
        }),
      });

      const json = await response.json().catch(() => null);

      if (!response.ok || !json?.success) {
        throw new Error(json?.message || 'Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        details: ''
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Office",
      details: ["138 Vishvesariya Nagar", "Triveni Nagar", "Jaipur, Rajasthan 302018"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 9529895040", "+91 7877991440", "Mon-Fri: 9AM-6PM"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["contact@shreevaidehi.com", "projects@shreevaidehi.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-georgia font-bold text-primary mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-georgia font-bold text-primary">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Type
                    </label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="Residential Interior Design">Residential Interior Design</option>
                      <option value="Commercial Interior Design">Commercial Interior Design</option>
                      <option value="Exterior Design">Exterior Design</option>
                      <option value="Renovation">Renovation</option>
                      <option value="3D Rendering">3D Rendering</option>
                      <option value="Custom Furniture">Custom Furniture</option>
                      <option value="Consultation Only">Consultation Only</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Details *
                    </label>
                    <Textarea 
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, budget range, timeline, and any specific requirements..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" 
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-primary font-montserrat">
                        {info.title}
                      </h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary font-montserrat mb-4">
                  Follow Our Journey
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/shree.vaidehi/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/shree.vaidehi/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  See our latest projects and behind-the-scenes content on social media
                </p>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="shadow-soft bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-georgia font-bold mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="mb-4 text-primary-foreground/90">
                  Schedule a free consultation with our design experts
                </p>
                <Button variant="secondary" size="lg">
                  <Link to="/Contact">Book Free Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;