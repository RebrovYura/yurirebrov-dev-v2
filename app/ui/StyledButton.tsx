import Link from "next/link";

type LinkButton = {
  href: string;
  children: React.ReactNode;
};

export function StyledButton({ children, href }: LinkButton) {
  return (
    <button className="px-4 py-3 rounded-md w-fit bg-accent text-primary font-semibold hover:shadow-button transition-shadow">
      <Link href={href}>{children}</Link>
    </button>
  );
}
