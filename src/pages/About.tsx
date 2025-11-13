import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | Shree Vaidehi</title>
        <link rel="canonical" href="https://shreevaidehi.com/about" />
        <meta
          name="description"
          content="Shree Vaidehi has been transforming spaces since 1999. From interiors to exteriors, we design homes and offices that reflect your dreams."
        />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        <section id="about" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-georgia font-bold text-foreground mb-6">
                About Shree Vaidehi
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Making spaces feel uniquely yours
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-georgia font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every big journey begins with a small step, and ours started back in 1999, in the heart of Jaipur, Rajasthan. With nothing more than a dream, dedication, and a passion for transforming spaces, we began by offering just a handful of services—simple window films and blinds.
                </p>
                <p className="text-muted-foreground mb-6">
                  What seemed like small beginnings soon became the foundation of something much greater. Over the years, with the trust of our clients and the belief in our craft, we grew—slowly, steadily, and with heart. From a two-service setup, we expanded into complete interior solutions—furniture, décor, lighting, and every detail a home or office needs to truly come alive.
                </p>
                <p className="text-muted-foreground">
                  But our vision was never limited to interiors alone. We took our passion outdoors too, bringing design to exteriors and construction, shaping not just homes but dreams, brick by brick, detail by detail.
                </p>
                <p className="text-muted-foreground mt-6">
                  For us, this journey has never been just about walls, furniture, or finishes. It’s about people—their stories, their aspirations, their lives. Every space we design carries a piece of their journey and a piece of ours.
                </p>
                <p className="text-muted-foreground mt-6">
                  Today, after decades in this industry, what keeps us going is the same emotion we felt on day one: the joy of creating spaces that speak, inspire, and last a lifetime.
                </p>
                <p className="text-muted-foreground mt-6">
                  This is not just our work.<br />
                  This is our story.<br />
                  And we’re honored to be a part of yours.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-2xl font-georgia font-bold text-foreground mb-4">
                  Our Philosophy
                </h3>
                <p className="text-muted-foreground mb-4">
                  We believe every space tells a story. For us, design is not just about walls, furniture, or exteriors it’s about creating environments that reflect people’s lives, dreams, and emotions.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Design with heart
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Build with Integrity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create spaces that inspire for a lifetime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;