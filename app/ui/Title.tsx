type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return (
    <div className="font-semibold text-3xl pb-3">
      <p>{text}</p>
    </div>
  );
}
