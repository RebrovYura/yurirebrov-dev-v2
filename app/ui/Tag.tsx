type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <div className="text-xs bg-slate-100 text-slate-400 rounded-lg px-3 py-1 w-fit">
      {children}
    </div>
  );
}
