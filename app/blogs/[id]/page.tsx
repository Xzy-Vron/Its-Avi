"use client";

import PageLoader from "@/components/page-loader";
import { formatBlogDate } from "@/lib/format-blog-date";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  createdAt: string;
  readTime: string;
}

export default function Page() {
  const { id } = useParams();

  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const [data, setData] = useState<Blog | null>(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/user-blogs/${id}`);
        const { blog } = response.data;
        setData(blog);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setloading(false);
      }
    };
    fetchBlog();
  }, []);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [loading]);


  if (loading) return <PageLoader />;
  if (!data) return <PageLoader />;

  return (
    <main className="max-w-4xl mx-auto px-8 lg:px-16">
      <section
        id="thoughts"
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className="min-h-screen py-32 opacity-0"
      >
        <div className="space-y-16">
          <h2 className="text-4xl font-light">{data.title}</h2>

          <div className="gap-8">
            <article className="group p-8 transition-all duration-500 hover:shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{formatBlogDate(data.createdAt)}</span>
                  <span>{data.readTime}</span>
                </div>

                <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {data.subtitle}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {data.content}
                </p>
              </div>
            </article>
          </div>

          {/* Add a full-width bottom row with a right-aligned "Go back" link styled like the home page "Read more" with arrow */}
          <div className="col-span-full w-full border-b border-border/50 hover:border-border">
            <div className="flex justify-start">
              <Link
                href="/blogs"
                aria-label="Go back to blogs list"
                className="group flex items-center gap-2 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8l-4 4m0 0l4 4m-4-4H21"
                  />
                </svg>
                <span>Go back</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
