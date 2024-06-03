import { Picture } from "../ui/Picture";

export function Hero() {
  return (
    <div className="w-full flex flex-wrap-reverse items-center justify-evenly gap-7 md:gap-0 py-10">
      <div>
        <h1 className="text-h2 font-bold text-center md:text-left">
          Hi, I&apos;m <span className="text-accent">Yuri Rebrov</span>
        </h1>
        <span className="block font-light italic text-center md:text-left">
          self-taught, striving for new heights
        </span>
        <p className="text-lg mt-4 border-2 p-5 rounded-lg border-slate-200">
          Digital creator from Belarus. <br /> Interested, motivated,
          disciplined.
        </p>
      </div>
      <Picture />
    </div>
  );
}
