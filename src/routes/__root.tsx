import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ParcTopbar } from "@/components/parc/ParcTopbar";
import { ParcHeader } from "@/components/parc/ParcHeader";
import { ParcNewsTicker } from "@/components/parc/ParcNewsTicker";
import { ParcFooterNew } from "@/components/parc/ParcFooterNew";
import { ParcScrollToTop } from "@/components/parc/ParcScrollToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-parc-bg-alt px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-parc-primary-dark">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-parc-primary-dark">Page not found</h2>
        <p className="mt-2 text-sm text-parc-text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#0E8B1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0E8B1A]/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-parc-bg-alt px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-parc-primary-dark">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-parc-text-muted">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-[#0E8B1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0E8B1A]/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-gray-50"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Precision Phytology Organization (PPO)" },
      {
        name: "description",
        content:
          "Precision Phytology Organization — Apex national agricultural research organization coordinating research across Pakistan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-white text-[#1a1a1a]">
        <ParcTopbar />
        <ParcHeader />
        <ParcNewsTicker />
        <main className="flex-1">
          <Outlet />
        </main>
        <ParcFooterNew />
      </div>
      <ParcScrollToTop />
      <Toaster />
    </QueryClientProvider>
  );
}
