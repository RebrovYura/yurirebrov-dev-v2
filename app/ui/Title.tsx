type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return (
    <div className="font-semibold text-4xl pb-3">
      <p className="">{text}</p>
    </div>
  );
}
