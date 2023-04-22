import { VscLoading } from "react-icons/vsc";

export function LoadingIcon({ className }) {
  return (
    <>
      <VscLoading className={`animate-spin ${className}`} />
    </>
  );
}
export function Loading() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/80 text-white">
        <VscLoading className="animate-spin text-6xl" />
        <span className="text-2xl">الرجاء الانتظار .. </span>
      </div>
    </>
  );
}
