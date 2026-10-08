import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[80vh] max-w-[640px] flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="display text-[48px]">This page doesn&apos;t exist.</h1>
      <p className="lead mt-4">The link may be old, or the address may have a typo.</p>
      <Link href="/" className="text-link mt-8 text-[19px]">
        Go to the home page
      </Link>
    </main>
  );
}
