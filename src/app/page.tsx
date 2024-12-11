import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <Link href="/item/1">Item 1</Link>
        <Link href="/item/2">Item 2</Link>
        <Link href="/item/3">Item 3</Link>
      </main>
    </div>
  );
}
