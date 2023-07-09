import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-center text-xs p-3 bg-blue-600 w-full">
      <p className="text-center text-white text-sm">
        © 2023 ConnectCX Tracker. All rights reserved. Developed by{" "}
        <Link href={`https://nextjs-blog-jj39.vercel.app`}>
          John Christian Cabrera
        </Link>
      </p>
    </footer>
  );
}
