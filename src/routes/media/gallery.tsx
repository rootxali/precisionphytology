import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Photo Gallery</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop",
          ].map((src, i) => (
            <div key={i} className="group overflow-hidden rounded border border-[#e9e9e9]">
              <img
                src={src}
                alt={`Gallery photo ${i + 1}`}
                className="h-48 w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
