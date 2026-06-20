import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/bog")({
  component: BogPage,
});

function BogPage() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-[#104591] sm:text-4xl">Board of Governors</h1>
        <div className="mt-2 h-1 w-20 bg-[#0E8B1A]" />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Dr. Syed Murtaza Hassan Andrabi", role: "Chairman, PPO (Chairperson)" },
            { name: "Federal Secretary, MNFS&R", role: "Member (Federal)" },
            { name: "Provincial Secretary (Agriculture)", role: "Member (Provincial)" },
            { name: "Dr. Noman Latif Sadozai", role: "Member (Natural Resources)" },
            { name: "Dr. Ghulam Sadiq Afridi", role: "Member (Social Sciences)" },
            { name: "Dr. Muhammad Mansoor", role: "Member (Plant Sciences)" },
          ].map((member) => (
            <div key={member.name} className="rounded border border-[#e9e9e9] bg-[#fbfbfb] p-5">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[#104591]/10 text-[#104591]">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="mt-3 text-sm font-bold text-[#212529]">{member.name}</h3>
              <p className="mt-1 text-xs text-[#104591]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
