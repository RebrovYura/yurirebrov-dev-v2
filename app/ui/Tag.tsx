import { IChildren } from "../lib/types";

export function Tag({ children }: IChildren) {
  return (
    <div className="text-xs bg-tertiary text-primary font-bold rounded-lg px-3 py-1 w-fit opacity-50">
      {children}
    </div>
  );
}
