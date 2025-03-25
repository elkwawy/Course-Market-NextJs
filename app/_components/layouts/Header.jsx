"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CircleArrowOutUpRight, Menu, Sun, Moon } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Services", "Projects", "History", "About"];
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="bg-white relative z-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-6 sm:px-7 lg:px-8">
        <Link href="/" className="block text-teal-600 dark:text-teal-300">
          <span className="sr-only">Home</span>
          <CircleArrowOutUpRight size={32} strokeWidth={3} className="h-8" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`text-gray-500 dark:text-white transition ${
                      index === 0 && pathname === "/"
                        ? "text-teal-600 dark:!text-teal-300"
                        : pathname === `/${item.toLowerCase()}`
                        ? "text-teal-600 dark:!text-teal-300"
                        : "hover:text-gray-500/75 dark:hover:text-white/75"
                    }`}
                    href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-4 ">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                href="/login"
              >
                Login
              </Link>

              <Link
                className="max-[425px]:hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-700 dark:text-white dark:hover:text-white/75"
                href="/register"
              >
                Register
              </Link>
            </div>

            <button
              onClick={toggleTheme}
              className="rounded-md cursor-pointer p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:text-white dark:hover:text-white/75"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-900 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <Menu strokeWidth={3} />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`absolute top-16 z-20 w-full bg-white dark:bg-gray-900 shadow-md md:hidden trans ${
              isMenuOpen ? "left-0" : "-left-[100%] "
            } `}
          >
            <ul className="flex flex-col gap-2 border-t px-4 py-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="block rounded-md py-2 px-4 text-sm font-medium text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-900"
                    href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
