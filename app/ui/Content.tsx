type ContentProps = {
  children: React.ReactNode;
};

type ContentTitleProps = {
  text: string;
};

export function ContentWrapper({ children }: ContentProps) {
  return (
    <div className="border-l-2 border-secondary pl-5 text-justify">
      {children}
    </div>
  );
}

export function ContentTitle({ text }: ContentTitleProps) {
  return (
    <div className="font-semibold text-3xl pb-3">
      <p>{text}</p>
    </div>
  );
}

export function ContentBox({ children }: ContentProps) {
  return (
    <div className="flex flex-col max-w-[480px] pb-6 w-full">{children}</div>
  );
}
