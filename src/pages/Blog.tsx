import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <Layout>
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Soft Wash & Pressure Washing Education
          </h1>
          <p className="text-xl text-white/85">
            Straight-talk guides from a Lake County, FL soft wash specialist —
            written so you can hire smart, not just hire fast.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6 flex flex-col h-full">
                    <span className="inline-block self-start bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {post.hubExcerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} /> {post.readMinutes} min read
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary font-medium">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
