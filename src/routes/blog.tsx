import { createFileRoute } from "@tanstack/react-router";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

const categories = ["All", "Research", "Policy", "Technology", "Events"];

const blogs = [
  {
    id: "precision-agriculture-pakistan",
    title: "Precision Agriculture: The Future of Farming in Pakistan",
    excerpt: "How GPS-guided trrones, soil sensors, and data analytics are transforming crop management across Punjab and Sindh provinces.",
    category: "Technology",
    author: "Dr. Ahmed Raza",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "wheat-blight-resistance",
    title: "New Wheat Varieties Show Resistance to Yellow Rust",
    excerpt: "PPO researchers have developed three new wheat cultivars demonstrating 95% resistance to yellow rust disease in field trials.",
    category: "Research",
    author: "Dr. Fatima Khan",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=400&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "agricultural-policy-reform",
    title: "Agricultural Policy Reform: Supporting Smallholder Farmers",
    excerpt: "Analysis of the new national agricultural policy and its potential impact on smallholder farming communities across Pakistan.",
    category: "Policy",
    author: "Syed Muhammad Ali",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop",
    readTime: "6 min read",
  },
  {
    id: "international-agriculture-summit",
    title: "PPO Delegation Attends International Agriculture Summit 2026",
    excerpt: "Our team represented Pakistan at the Global Agriculture Summit in Dubai, presenting research on sustainable crop management.",
    category: "Events",
    author: "Dr. Murtaza Andrabi",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    readTime: "3 min read",
  },
  {
    id: "soil-health-mapping",
    title: "National Soil Health Mapping Initiative Launched",
    excerpt: "PPO begins a comprehensive soil health mapping project covering all four provinces to guide fertilizer recommendations.",
    category: "Research",
    author: "Dr. Tariq Mahmood",
    date: "February 20, 2026",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=400&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "ai-plant-disease-detection",
    title: "AI-Powered Plant Disease Detection: A Breakthrough",
    excerpt: "Our research team develops a mobile app that uses machine learning to identify crop diseases from smartphone photos.",
    category: "Technology",
    author: "Dr. Asif Patel",
    date: "February 15, 2026",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  Research: "bg-[#0E8B1A]",
  Policy: "bg-[#104591]",
  Technology: "bg-[#C7474C]",
  Events: "bg-amber-600",
};

function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-[#104591] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <div className="mt-3 h-1 w-20 bg-white/60" />
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Insights, research updates, and news from Precision Phytology
            Organization.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-[#65676b] transition-colors hover:bg-gray-200 first:bg-[#104591] first:text-white"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              href={`/blog/${blog.id}`}
              className="group overflow-hidden rounded-lg border border-[#e9e9e9] bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase text-white ${categoryColors[blog.category]}`}
                >
                  {blog.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-[11px] text-[#65676b]">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {blog.author}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-[#212529] line-clamp-2 group-hover:text-[#104591]">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-[#65676b] line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{blog.readTime}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#104591] group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
