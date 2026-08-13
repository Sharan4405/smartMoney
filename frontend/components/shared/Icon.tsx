export type IconName = "growth" | "shield" | "heart" | "scale" | "check" | "compass" | "target" | "handshake";

const PATHS: Record<IconName, string> = {
  growth: "M3 17l5-5 4 4 8-9M15 6h5v5",
  shield: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
  heart:
    "M12 21s-7.5-4.7-10-9.3C.5 8.4 2.4 5 6 5c2 0 3.4 1 4 2 .6-1 2-2 4-2 3.6 0 5.5 3.4 4 6.7C19.5 16.3 12 21 12 21z",
  scale: "M12 3v18M5 7l-3 6a4 4 0 008 0l-3-6H5zM19 7l-3 6a4 4 0 008 0l-3-6h-2zM5 7h14",
  check: "M20 6L9 17l-5-5",
  compass: "M12 22a10 10 0 100-20 10 10 0 000 20zM16 8l-2.5 6.5L8 17l2.5-6.5L16 8z",
  target: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 17a5 5 0 100-10 5 5 0 000 10zM12 13a1 1 0 100-2 1 1 0 000 2z",
  handshake:
    "M8 12l3 3 5-5M2 12l4-4 4 2 4-3 4 3 4-2v6l-4 4-4-2-4 3-4-2-4-2z",
};

export function Icon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
