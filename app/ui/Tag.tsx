type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <div className="text-xs bg-tertiary text-primary font-bold rounded-lg px-3 py-1 w-fit">
      {children}
    </div>
  );
}
