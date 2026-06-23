import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/$blogId")({
  component: BlogPostPage,
});

const blogsData: Record<
  string,
  {
    title: string;
    category: string;
    author: string;
    date: string;
    image: string;
    readTime: string;
    content: string[];
  }
> = {
  "precision-agriculture-pakistan": {
    title: "Precision Agriculture: The Future of Farming in Pakistan",
    category: "Technology",
    author: "Dr. Ahmed Raza",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop",
    readTime: "5 min read",
    content: [
      "Precision agriculture is rapidly transforming how farming is practiced across Pakistan. With the integration of GPS-guided equipment, soil sensors, and advanced data analytics, farmers can now make highly informed decisions about irrigation, fertilization, and pest management.",
      "At PPO, we have been at the forefront of introducing precision agriculture techniques to Pakistani farmers. Our field trials across Punjab and Sindh have demonstrated yield improvements of 15-25% while reducing water usage by up to 30%.",
      "The key technologies driving this revolution include satellite imagery for crop monitoring, drone-based field surveys, IoT soil moisture sensors, and AI-powered decision support systems. These tools enable farmers to apply inputs precisely where and when they are needed.",
      "One of our most successful pilot projects involved equipping 50 farms in Okara district with precision irrigation systems. The results showed a 22% increase in wheat yield with 35% less water consumption compared to traditional flood irrigation methods.",
      "Looking ahead, PPO plans to establish precision agriculture demonstration centers in all four provinces, providing hands-on training to farmers and agricultural extension workers. Our goal is to make these technologies accessible and affordable for smallholder farmers who form the backbone of Pakistan's agricultural sector.",
    ],
  },
  "wheat-blight-resistance": {
    title: "New Wheat Varieties Show Resistance to Yellow Rust",
    category: "Research",
    author: "Dr. Fatima Khan",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&h=600&fit=crop",
    readTime: "4 min read",
    content: [
      "Yellow rust (Puccinia striiformis) remains one of the most devastating diseases affecting wheat production in Pakistan. Each year, it causes significant yield losses, particularly in the northern wheat-growing regions.",
      "Our research team at PPO has been working on developing resistant wheat varieties through conventional breeding and molecular marker-assisted selection. After eight years of intensive research, we are proud to announce three new cultivars.",
      "The new varieties — PPO-WR1, PPO-WR2, and PPO-WR3 — have shown over 95% resistance to yellow rust in multi-location field trials conducted across Khyber Pakhtunkhha, Punjab, and Islamabad.",
      "These varieties also maintain competitive grain yield potential, with PPO-WR1 averaging 5.8 tonnes per hectare under optimal conditions. The grain quality parameters meet the standards required for commercial wheat production.",
      "We are currently working with the Federal Seed Certification Department to complete the variety approval process. Once approved, seeds will be made available to farmers through our network of agricultural research stations.",
    ],
  },
  "agricultural-policy-reform": {
    title: "Agricultural Policy Reform: Supporting Smallholder Farmers",
    category: "Policy",
    author: "Syed Muhammad Ali",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop",
    readTime: "6 min read",
    content: [
      "The Government of Pakistan recently unveiled a comprehensive agricultural policy reform aimed at addressing the long-standing challenges faced by smallholder farmers. This policy represents a significant shift in how Pakistan approaches agricultural development.",
      "Key provisions include subsidized access to improved seeds, expanded crop insurance programs, and the establishment of commodity support prices linked to production costs. The policy also emphasizes climate-resilient farming practices.",
      "PPO has been actively consulted during the policy formulation process, providing technical input on research priorities, technology transfer mechanisms, and farmer training programs.",
      "One of the most impactful aspects of the new policy is the focus on farmer cooperatives. By organizing smallholders into cooperatives, the policy aims to improve their bargaining power, access to credit, and ability to adopt modern technologies.",
      "The policy also addresses the critical issue of water management, with provisions for community-based irrigation management and incentives for adopting water-efficient technologies such as drip irrigation and laser land leveling.",
    ],
  },
  "international-agriculture-summit": {
    title: "PPO Delegation Attends International Agriculture Summit 2026",
    category: "Events",
    author: "Dr. Murtaza Andrabi",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
    readTime: "3 min read",
    content: [
      "A high-level delegation from PPO attended the International Agriculture Summit 2026 held in Dubai, UAE from February 20-23. The summit brought together agricultural researchers, policymakers, and industry leaders from over 50 countries.",
      "Dr. Murtaza Hassan Andrabi, Chairman PPO, presented a paper on 'Sustainable Crop Management Strategies for Arid Regions' which was well-received by the international audience. The presentation highlighted PPO's work on drought-resistant crop varieties.",
      "During the summit, PPO signed memorandums of understanding with three international research organizations for collaborative research in areas of mutual interest, including climate change adaptation and biotechnology.",
      "The delegation also visited several agricultural technology exhibitions, identifying new tools and technologies that could benefit Pakistani farmers. Of particular interest were advanced greenhouse systems and precision livestock management solutions.",
    ],
  },
  "soil-health-mapping": {
    title: "National Soil Health Mapping Initiative Launched",
    category: "Research",
    author: "Dr. Tariq Mahmood",
    date: "February 20, 2026",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&h=600&fit=crop",
    readTime: "4 min read",
    content: [
      "PPO has launched a comprehensive National Soil Health Mapping Initiative aimed at creating detailed soil health databases for all agricultural regions in Pakistan. This project will provide critical data for evidence-based fertilizer recommendations.",
      "The initiative involves collecting soil samples from over 10,000 locations across the four provinces, analyzing them for key parameters including organic matter, pH, macro and micronutrients, and physical properties.",
      "Advanced GIS technology will be used to create interactive soil health maps accessible through a web portal. Farmers and agricultural advisors will be able to input their location and receive customized soil health reports.",
      "The project is expected to be completed within 18 months, with preliminary results available by the end of 2026. The data generated will also support research on soil carbon sequestration and climate change mitigation.",
    ],
  },
  "ai-plant-disease-detection": {
    title: "AI-Powered Plant Disease Detection: A Breakthrough",
    category: "Technology",
    author: "Dr. Asif Patel",
    date: "February 15, 2026",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop",
    readTime: "5 min read",
    content: [
      "Our research team has developed a groundbreaking mobile application that uses artificial intelligence and machine learning to identify plant diseases from smartphone photographs. The app, named 'CropGuard', can detect over 50 common crop diseases.",
      "Using a database of over 100,000 labeled disease images, the AI model achieves accuracy rates exceeding 92% in identifying diseases in wheat, rice, cotton, and vegetables. The app provides instant diagnosis along with recommended treatment options.",
      "CropGuard works offline, making it accessible to farmers in remote areas with limited internet connectivity. The app is available in Urdu, English, and regional languages to ensure wide accessibility.",
      "During pilot testing with 200 farmers across Punjab, the app helped reduce crop losses by an average of 18% by enabling early disease detection and timely intervention. Farmers reported that the app was easy to use and provided reliable recommendations.",
      "PPO plans to release CropGuard as a free download on both Android and iOS platforms by April 2026, along with training workshops for agricultural extension workers to promote its adoption.",
    ],
  },
};

function BlogPostPage() {
  const { blogId } = Route.useParams();
  const blog = blogsData[blogId];

  if (!blog) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#212529]">Blog post not found</h2>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm text-[#104591] hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    Research: "bg-[#0E8B1A]",
    Policy: "bg-[#104591]",
    Technology: "bg-[#C7474C]",
    Events: "bg-amber-600",
  };

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative h-[300px] overflow-hidden sm:h-[400px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-[800px]">
            <span
              className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase text-white ${categoryColors[blog.category]}`}
            >
              {blog.category}
            </span>
            <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[800px] px-4 py-10 sm:px-6">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#65676b]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {blog.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag className="h-4 w-4" />
            {blog.category}
          </span>
          <span>{blog.readTime}</span>
        </div>

        <hr className="my-6" />

        {/* Article Body */}
        <div className="prose max-w-none">
          {blog.content.map((paragraph, idx) => (
            <p key={idx} className="mb-5 text-base leading-relaxed text-[#444]">
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="my-8" />

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-[#104591] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <button className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-[#65676b] transition-colors hover:bg-gray-50">
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
