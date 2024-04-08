import Link from "next/link";

type LinkButton = {
  href: string;
  children: React.ReactNode;
};

export function LinkButton({ children, href }: LinkButton) {
  return (
    <Link
      href={href}
      className="w-fit px-4 py-3 text-left rounded-md bg-accent text-primary font-semibold hover:shadow-button transition-shadow"
    >
      {children}
    </Link>
  );
}
