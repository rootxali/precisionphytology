import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employees/webmail")({
  component: WebmailPage,
});

function WebmailPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Employee Webmail</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 max-w-md rounded border border-[#e9e9e9] bg-[#fbfbfb] p-6">
          <p className="text-sm text-[#65676b]">
            Access your PPO email account through the webmail portal.
          </p>
          <div className="mt-4 space-y-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#104591] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-[#104591] focus:outline-none"
            />
            <button className="w-full rounded bg-[#104591] py-2.5 text-sm font-semibold text-white hover:bg-[#0d3a7a]">
              Login to Webmail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
