import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const blogPosts = [
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
    category: "Interior Architecture",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Helmet>
        <title>Blog | Shree Vaidehi Interiors & Exteriors</title>
        <link rel="canonical" href="https://shreevaidehi.com/blog" />
        <meta
          name="description"
          content="Read the latest interior and exterior design tips, trends, and insights from Shree Vaidehi. Stay inspired with creative home and construction ideas."
        />
      </Helmet>

      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-georgia font-bold text-foreground mb-6">
                Design Insights & Inspiration
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our latest articles on interior design trends, expert
                tips, and project spotlights to inspire your next design journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-georgia group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Button variant="ghost" className="group/btn p-0 h-auto">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
