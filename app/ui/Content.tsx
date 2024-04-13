type ContentWrapperProps = {
  children: React.ReactNode;
};

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="border-l-2 border-secondary pl-5 text-justify">
      {children}
    </div>
  );
}

type ContentTitleProps = {
  text: string;
};

export function ContentTitle({ text }: ContentTitleProps) {
  return (
    <div className="font-semibold text-3xl pb-3">
      <p>{text}</p>
    </div>
  );
}
