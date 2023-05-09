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
      <div className="pointer-events-none fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-100/10 text-slate-700 backdrop-blur-sm">
        <VscLoading className="animate-spin text-6xl" />
        <span className="text-2xl">الرجاء الانتظار .. </span>
      </div>
    </>
  );
}
