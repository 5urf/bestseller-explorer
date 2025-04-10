"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div>
        <Link href='/'>Surf Bestsellers</Link>
      </div>
      <nav>
        <ul>
          <li className={pathname === "/" ? "active" : ""}>
            <Link href='/'>Home</Link>
          </li>
          <li className={pathname === "/about" ? "active" : ""}>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
