export type IconButtonProps = {
  children: React.ReactNode;
  toggleMenu: () => void;
};

export function IconButton({ children, toggleMenu }: IconButtonProps) {
  return (
    <button className="block md:hidden square-btn" onClick={toggleMenu}>
      {children}
    </button>
  );
}
