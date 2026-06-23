import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face",
    user: "Dr. Syed Murtaza",
    action: "chaired the 13th session of IPARCC at",
    target: "NARC Islamabad",
    timestamp: "15 minutes ago",
    unread: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face",
    user: "Research Team",
    action: "published a new article in",
    target: "PPJ — Plant Disease Diagnostics",
    timestamp: "45 minutes ago",
    unread: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&h=64&fit=crop&crop=face",
    user: "Admin Office",
    action: "updated the tenders for",
    target: "Q2 Procurement Cycle",
    timestamp: "4 hours ago",
    unread: false,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
    user: "Extension Services",
    action: "announced a new training program at",
    target: "BARDC Quetta",
    timestamp: "12 hours ago",
    unread: false,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    user: "Coordination Cell",
    action: "shared the monthly progress report for",
    target: "March 2026",
    timestamp: "2 days ago",
    unread: false,
  },
];

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="6"
      height="6"
      fill="currentColor"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export function NotificationBell() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };

  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, unread: false } : notification,
      ),
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="relative hover:bg-white/15" aria-label="Open notifications">
          <img src="/bell.png" alt="Notifications" className="h-[22px] w-[22px] object-contain" />
          {unreadCount > 0 && (
            <Badge className="absolute -right-1.5 -top-1.5 min-w-5 rounded-full px-1 text-[10px]">
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-1" align="end" sideOffset={8}>
        <div className="flex items-baseline justify-between gap-4 px-3 py-2">
          <div className="text-sm font-semibold">Notifications</div>
          {unreadCount > 0 && (
            <button
              className="text-xs font-medium text-[#104591] hover:underline"
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </button>
          )}
        </div>
        <div
          role="separator"
          aria-orientation="horizontal"
          className="-mx-1 my-1 h-px bg-border"
        />
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent cursor-pointer"
          >
            <div className="relative flex items-start gap-3 pe-3">
              <img
                className="size-9 rounded-md object-cover"
                src={notification.image}
                width={32}
                height={32}
                alt={notification.user}
              />
              <div className="flex-1 space-y-1">
                <button
                  className="text-left text-foreground/80 after:absolute after:inset-0"
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <span className="font-medium text-foreground hover:underline">
                    {notification.user}
                  </span>{" "}
                  {notification.action}{" "}
                  <span className="font-medium text-foreground hover:underline">
                    {notification.target}
                  </span>
                  .
                </button>
                <div className="text-xs text-muted-foreground">{notification.timestamp}</div>
              </div>
              {notification.unread && (
                <div className="absolute end-0 self-center">
                  <Dot className="text-[#0E8B1A]" />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="border-t border-border mt-1" />
        <Link
          to="/public-notice/notifications"
          className="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-[#104591] hover:bg-accent transition-colors"
        >
          View all notifications
          <ChevronRight className="h-3 w-3" />
        </Link>
      </PopoverContent>
    </Popover>
  );
}
