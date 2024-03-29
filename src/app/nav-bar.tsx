import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full">
      <ul className="flex justify-between items-center max-w-lg m-auto">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/create">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
}
