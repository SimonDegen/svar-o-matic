import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center gap-4 overflow-hidden">
      <div className="bg-slate-400 flex-grow h-screen flex justify-center items-center">
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <div className="flex flex-col gap-4 flex-grow h-screen">
        <div className="bg-slate-500 flex-grow"></div>
        <div className="bg-slate-700 flex-grow"></div>
      </div>
    </main>
  );
}
