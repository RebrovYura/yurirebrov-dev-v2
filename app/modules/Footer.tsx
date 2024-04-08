export function Footer() {
  const date = new Date();
  return (
    <div className="flex justify-center items-center text-center py-4 border-t">
      <p className="text-slate-400">
        {date.getFullYear()} &copy; Yuri Rebrov | All rights reserved
      </p>
    </div>
  );
}
