import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/media")({
  component: MediaLayout,
});

function MediaLayout() {
  return <Outlet />;
}
