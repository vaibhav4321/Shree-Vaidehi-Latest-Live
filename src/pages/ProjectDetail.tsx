import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, ExternalLink } from "lucide-react";
import luxury from "@/assets/luxurystaircase.png";
import jhamko from "@/assets/Jhamko Rajasthan.png";
import traditionalmodern from "@/assets/traditional-modern.jpeg"
import office from "@/assets/office.jpg";
import { Helmet } from "react-helmet";

const ProjectDetail = () => {
  const { slug } = useParams();
  
  const projects = [
    {
      id: 1,
      title: "Director Room",
      slug: "director-room",
      category: "Commercial",
      location: "Rawat College",
      year: "2025",
      image: office,
      description: "A refined director's office featuring modern furnishings, ergonomic workspace, and a sophisticated ambiance designed for productivity and comfort.",
      fullDescription: "The Director Room project is a showcase of refined professionalism and thoughtful design. Our approach was to create a space that not only reflects authority and leadership but also fosters focus and creativity. The room features a harmonious blend of modern aesthetics and functional elements—sleek furniture, ambient lighting, and carefully selected materials come together to provide a comfortable yet impressive environment. Every detail, from the ergonomic desk setup to the subtle decorative accents, is curated to support both day-to-day operations and high-level decision-making. The result is a director’s office that inspires confidence, encourages productivity, and leaves a lasting impression on visitors.",
      features: [
        "Feature wall with marble cladding and Wings",
        "Custom wood cabinetry with vertical slat detailing",
        "Recessed ceiling with layered lighting and sculptural chandelier",
        "Accent wall sconces with brushed gold finish",
        "Neutral-toned lounge seating with ergonomic design",
      ],
      challenge: "The challenge was to craft a space that balances luxury with livability, using premium materials without overwhelming the room.",
      solution: "Unified contrasting materials and textures to create visual interest while maintaining a cohesive look.",
      budget: "",
      timeline: "90 Days",
      client: "Rawat College"
    },
    {
      id: 2,
      title: "Modern Traditional Living Hall",
      slug: "modern-traditional-living-hall",
      category: "Residential",
      location: "Private Residence",
      year: "2023",
      image: traditionalmodern,
      description: "Elegant living hall design with custom furniture, sophisticated lighting, and premium finishes.",
      fullDescription: "This modern traditional living hall project blends classic and contemporary design elements to create a warm and inviting space. The design focuses on comfort and functionality while showcasing exquisite craftsmanship and attention to detail.",
      features: [
        "Wooden Paneling & Accents: Rich wood tones add warmth and a traditional touch while maintaining a sleek, modern finish.",
        "Neutral Color Palette: Soft beige and cream tones create a calming atmosphere and allow the textures to stand out.",
        "Minimalist Furniture: Clean lines and low-profile seating reflect modern sensibilities without overpowering the space.",
        "Ambient Lighting: Recessed lights and warm tones enhance the cozy, inviting feel.",
        "Balanced Symmetry: The layout feels harmonious, with thoughtful placement of decor and furniture.",
      ],
      challenge: "Blending Tradition with Modernity",
      solution: "Selective Detailing and Layered Lighting",
      budget: "",
      timeline: "3 months",
      client: "Private Homeowner"
    },
    {
      id: 3,
      title: "Luxury Stairwell Design",
      slug: "luxury-stairwell-design",
      category: "Residential",
      location: "Private Residence",
      year: "2024-2025",
      image: luxury,
      description: "Upscale stairwell design featuring elegant materials, ambient lighting, and a seamless blend of functionality and aesthetics.",
      fullDescription: "This luxury stairwell design project aimed to create a stunning focal point within a private residence. The design emphasizes a harmonious flow between levels while incorporating high-end finishes and thoughtful details.",
      features: [
        "Grand chandelier with artistic hanging lanterns",
        "Illuminated 3D wall panels with geometric patterns",
        "Warm ambient lighting for a luxurious feel",
        "Glass balustrade with decorative brass accents",
        "Intricate wall art centerpiece with backlighting",
        "Natural wood staircase for timeless elegance",
        "Contemporary ceiling design with recessed lighting"
      ],
      challenge: "Creating a luxurious interior that feels warm and inviting while maintaining a modern design",
      solution: "Blending natural wood, ambient lighting, and statement features to achieve both sophistication and comfort.",
      budget:"",
      timeline: "6 months",
      client: "Private Homeowner"
    },
    {
      id: 4,
      title: "Podcast Studio",
      slug: "podcast-studio",
      category: "Commercial",
      location: "Jhamko Rajasthan Youtube Studio, Jaipur",
      year: "2025",
      image: jhamko,
      description: "A cutting-edge podcast studio designed for high-quality audio production, visual storytelling, and immersive content creation.",
      fullDescription: "This commercial interior project focused on crafting a professional-grade podcast studio for Jhamko Rajasthan’s YouTube channel. The design integrates acoustic optimization, visual branding elements, and a sleek modern aesthetic to support both audio and video content creation. The space balances technical precision with creative ambiance, making it ideal for interviews, solo recordings, and collaborative media production.",
      features: [
        "Soundproofed walls with acoustic foam treatment",
        "Custom LED lighting setup for mood and visibility",
        "Geometric feature wall for visual impact on camera",
        "Ergonomic furniture for long recording sessions",
        "Integrated camera mounts and mic arms",
        "Ambient ceiling lighting with recessed fixtures",
        "Brand-themed color palette and decor"
      ],
      challenge: "Creating a visually engaging and acoustically optimized space within a compact footprint",
      solution: "Strategic use of acoustic materials, modular lighting, and bold wall design to deliver both performance and style.",
      budget: "",
      timeline: "1 Week",
      client: "Jhamko Rajasthan Media Team"

    }
  ];

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Button asChild>
              <Link to="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{project.title} | Shree Vaidehi Portfolio</title>
        <meta name="description" content={project.description} />
        <link
          rel="canonical"
          href={`https://www.shreevaidehi.com/portfolio/${project.slug}`}
        />
      </Helmet>
      
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-white hover:text-white hover:bg-white/20"
              >
                <Link to="/portfolio">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-georgia font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-georgia font-bold text-primary mb-6">
                  Project Overview
                </h2>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-6 rounded-lg"
                />
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>

                <h3 className="text-2xl font-georgia font-bold text-primary mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-georgia font-bold text-primary mb-4">
                  Design Challenge
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.challenge}
                </p>

                <h3 className="text-2xl font-georgia font-bold text-primary mb-4">
                  Our Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-georgia font-bold text-primary mb-6">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <dt className="font-medium text-foreground">Client</dt>
                      <dd className="text-muted-foreground">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground">Category</dt>
                      <dd className="text-muted-foreground">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground">Location</dt>
                      <dd className="text-muted-foreground">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground">Year</dt>
                      <dd className="text-muted-foreground">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground">Timeline</dt>
                      <dd className="text-muted-foreground">{project.timeline}</dd>
                    </div>
                    {/*<div>
                      <dt className="font-medium text-foreground">Budget Range</dt>
                      <dd className="text-muted-foreground">{project.budget}</dd>
                    </div>*/}
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        Start Your Project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/portfolio">View More Projects</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;