import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface TestimonialsProps {
  limit?: number; // optional prop to control how many to show
}

const Testimonials = ({ limit }: TestimonialsProps) => {
  const testimonials = [
    {
      name: "Hemandra Rawat",
      role: "Director, Rawat College",
      content:
        "Shree Vaidehi designed our Director’s Room with a perfect balance of elegance and functionality. The team was highly professional, and the labor staff worked with full dedication and discipline. The finishing and detailing reflect true craftsmanship.",
      rating: 5,
      project: "Director’s Room Interior – Rawat College",
    },
    {
      name: "Rajesh Mehta",
      role: "Business Owner",
      content:
        "Shree Vaidehi handled our office interiors with great professionalism. The workers were polite, disciplined, and always on time. The entire team ensured even the smallest detail was taken care of.",
      rating: 5,
      project: "Office Interior Design",
    },
    {
      name: "Priya Sharma",
      role: "Homeowner",
      content:
        "Our apartment looks stunning after the renovation. The Shree Vaidehi team was very respectful while working inside our home and maintained cleanliness throughout the project.",
      rating: 5,
      project: "Residential Apartment Interiors",
    },
    {
      name: "Amit Khanna",
      role: "Restaurant Owner",
      content:
        "Shree Vaidehi gave our restaurant a new identity. The design is outstanding, but what impressed us most was the hardworking staff who completed everything within the promised timeline.",
      rating: 5,
      project: "Restaurant Interior",
    },
    {
      name: "Neha Gupta",
      role: "Homeowner",
      content:
        "The exterior of our villa has completely transformed. The labor team was extremely cooperative, and their dedication showed in the finishing. We truly appreciate their efforts.",
      rating: 5,
      project: "Villa Renovation & Exterior Design",
    },
    {
      name: "Vikram Iyer",
      role: "Corporate Executive",
      content:
        "From planning to execution, Shree Vaidehi did a fantastic job. The staff was well-mannered, skilled, and always ready to accommodate our suggestions. Our family home feels brand new.",
      rating: 5,
      project: "Residential Bungalow Interiors",
    },
    {
      name: "New Person",
      role: "CEO, Example Ltd.",
      content:
        "We were amazed by the timely delivery and the personal attention given to our requirements. Truly professional!",
      rating: 5,
      project: "Corporate Office Interiors",
    },
  ];

  // Show only `limit` number of testimonials if provided, else all
  const visibleTestimonials = limit
    ? testimonials.slice(0, limit)
    : testimonials;

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-georgia font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-elegant transition-smooth"
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary font-montserrat">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-accent font-medium">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Only show stats + button if it's the homepage (limited view) */}
        {limit && (
          <>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-georgia font-bold text-primary mb-2">
                  500+
                </h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-georgia font-bold text-primary mb-2">
                  98%
                </h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-georgia font-bold text-primary mb-2">
                  25+
                </h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-georgia font-bold text-primary mb-2">
                  85%
                </h3>
                <p className="text-muted-foreground">Repeat Clients</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="px-8 py-3">
                <Link to="/testimonials">See All Reviews</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
