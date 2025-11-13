import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

import luxury from "@/assets/luxurystaircase.png";
import traditionalmodern from "@/assets/traditional-modern.jpeg";
import office from "@/assets/Office.jpg";
import jhamko from "@/assets/Jhamko Rajasthan.png";
interface PortfolioProps {
  limit?: number; // optional limit, like Testimonials
}

const Portfolio = ({ limit }: PortfolioProps) => {
  const projects = [
    {
      title: "Director Room",
      slug: "director-room",
      category: "Commercial",
      location: "Rawat College Jaipur",
      year: "2025",
      image: office,
      description:
        "A refined director's office featuring modern furnishings, ergonomic workspace, and a sophisticated ambiance designed for productivity and comfort.",
    },
    {
      title: "Modern Traditional Living Hall",
      slug: "modern-traditional-living-hall",
      category: "Residential",
      location: "Private Residence Jaipur",
      year: "2023",
      image: traditionalmodern,
      description:
        "Elegant living hall design with custom furniture, sophisticated lighting, and premium finishes.",
    },
    {
      title: "Luxury Stairwell Design",
      slug: "luxury-stairwell-design",
      category: "Residential",
      location: "Private Residence Jaipur",
      year: "2024-2025",
      image: luxury,
      description:
        "Upscale stairwell design featuring elegant materials, ambient lighting, and a seamless blend of functionality and aesthetics.",
    },
    {
      title: "Podcast Studio",
      slug: "podcast-studio",
      category: "Commercial",
      location: "Jhamko Rajasthan Youtube Studio, Jaipur",
      year: "2025",
      image: jhamko,
      description:
        "A modern office design that promotes collaboration and creativity with open spaces and ergonomic furniture.",
    },

    // 👉 add more projects here for full portfolio
  ];

  // Show only `limit` number of projects if provided, else all
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-georgia font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of our recent work showcasing our commitment to
            excellence and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <Link key={index} to={`/portfolio/${project.slug}`}>
              <Card className="overflow-hidden shadow-soft hover:shadow-elegant transition-smooth group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                  <Badge
                    className="absolute top-4 left-4 bg-card text-primary"
                    variant="secondary"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-georgia font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <span>{project.year}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Only show "View Full Portfolio" button when limited */}
        {limit && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
