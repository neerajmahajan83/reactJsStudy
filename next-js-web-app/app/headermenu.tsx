    import Link from "next/link";
    export default function HeaderMenu() {
    return (
        <nav className="flex gap-6">
          <Link href="/" className="text-black dark:text-zinc-50 hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-black dark:text-zinc-50 hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-black dark:text-zinc-50 hover:underline">
            Contact
          </Link>
          <Link href="/mul-input-field" className="text-black dark:text-zinc-50 hover:underline">
            mul input field
          </Link>
        </nav>
        )
    }