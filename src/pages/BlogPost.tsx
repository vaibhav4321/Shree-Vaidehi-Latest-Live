import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { Helmet } from "react-helmet";

const blogPosts = [
  //blog
  {
    id: 1,
    slug: "top-5-stunning-staircase-designs-for-modern-homes",
    title: "Top 5 Stunning Staircase Designs for Modern Homes",
    excerpt:
      "From marble elegance to artistic lighting, explore five modern luxury staircase designs that transform homes into architectural masterpieces.",
    author: "Shree Vaidehi Team",
    date: "August 27, 2025",
    image: "/blog/blog1/stairsthumbnail.jpg",
    alt: "Luxury spiral staircase with marble and gold railing",
    category: "Architecture",
    tags: ["Luxury", "Staircase Design", "Architecture", "Modern Homes","interior design","stair design", "home decor", "design trends", "residential design"],
    readTime: "8 min read",
    metaTitle: "5 Staircase Designs Based on Different Themes | Shree Vaidehi",
    metaDescription:
      "Discover 5 modern luxury staircase designs featuring marble, floating wood, curved elegance, minimalist chic, and artistic lighting for refined interiors.",
    content: `
    <div class="blog-content">
      <p>When it comes to <strong>modern interior design</strong>, a staircase is no longer just a passage—it is a statement. Luxury staircase designs can elevate an entire home, adding sophistication and timeless appeal. In this blog, we showcase five handpicked <a href="https://www.shreevaidehi.com/portfolio" target="_blank" rel="noopener noreferrer">staircase design inspirations</a> that combine artistry with architecture.</p>

      <br />
      
      <h2>1. Marble Grandeur with Sculptural Accents</h2>
      <br />
      <img src="/blog/blog1/marble.jpeg" alt="Marble staircase with gold bird wall art and sculpture" class="blog-image"/>
      <br />
      <p>Marble has always been a symbol of elegance. This staircase combines marble steps with sleek concrete finishes, enhanced by golden bird wall art and a classic sculpture. Such combinations make it a masterpiece for luxury residences. According to <a href="https://www.architecturaldigest.com" target="_blank" rel="nofollow">Architectural Digest</a>, marble remains one of the most sought-after materials in high-end interior design.</p>
      

      <br />
      <h2>2. Floating Wooden Steps with Geometric Light</h2>
      <br />
      <img src="/blog/blog1/geometric light.jpeg" alt="Floating wooden staircase with circular windows" class="blog-image"/>
      <br />
      <p>Minimalist yet striking, this staircase uses floating wooden treads and glass balustrades for a clean, open look. Circular wall cut-outs bring natural light, making the staircase feel alive throughout the day. Floating designs like this are highly popular in <a href="https://www.shreevaidehi.com/services" target="_blank" rel="nofollow">modern villa interiors</a> because they merge structural innovation with aesthetic appeal.</p>

      <br />
      <h2>3. Elegant Curved Staircase with Chandeliers</h2>
      <br />
      <img src="/blog/blog1/curvedstaircase.jpeg" alt="Curved staircase with modern hanging chandeliers" class="blog-image"/>
      <br />
      <p>A curved staircase brings movement and drama into interiors. This design uses dark wood treads and a slim railing, complemented by cascading chandeliers. The result is a welcoming yet grand statement, ideal for large living rooms. You can read more about curved staircase trends in <a href="https://www.dezeen.com/" target="_blank" rel="nofollow">Dezeen Magazine</a>.</p>
    

      <br />
      <h2>4. Classy Evergreen Symmetry with Subtle Lighting</h2>
      <br />
      <img src="/blog/blog1/symmetery.jpeg" alt="Minimalist staircase with modern lighting on walls" class="blog-image"/>
      <br />
       <p>For lovers of minimalism, this staircase embraces clean geometry with black railings and warm lighting fixtures. The subtle wall sconces ensure that simplicity never feels boring. Minimalist staircases are a trending choice in 2025 home design trends because they balance style and function seamlessly.</p>

      <br />
      <h2>5. Artistic Lighting with Warm Textures</h2>
      <br />
      <img src="/blog/blog1/luxurystaircase.png" alt="Staircase with artistic hanging lights and backlit wall panels" class="blog-image" />
      <br />
      <p>Lighting can transform any staircase into art. This design uses hanging pendant lights, a textured feature wall, and warm wood finishes to create a golden ambiance. It’s not just a staircase—it’s an experience. For homeowners, this is an opportunity to make the stairwell the highlight of interior décor.</p>

      
      <br />
       <p>Each of these <strong>luxury staircase designs</strong> demonstrates how detail, lighting, and material can turn functionality into beauty. If you’re planning to renovate your interiors, explore our <a href="https://www.shreevaidehi.com/contact" target="_blank">custom interior solutions</a> and let your staircase define the luxury of your home.</p>
    </div>`,
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* 🟢 SEO */}
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link
          rel="canonical"
          href={`https://shreevaidehi.com/blog/${post.slug}`}
        />
      </Helmet>

      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-georgia font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* Image */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.alt}
              loading="lazy"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:font-georgia prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" /> {tag}
                </Badge>
              ))}
            </div>

            {/* Author */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Written by {post.author}
                  </p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
