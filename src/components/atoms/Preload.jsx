import Logo from "./Logo";

export default function Preload() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-zinc-950">
      <div>
        <Logo />
      </div>
    </div>
  );
}
