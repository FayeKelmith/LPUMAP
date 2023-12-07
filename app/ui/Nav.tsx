"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { quicksand } from "./font";
const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
  return (
    <nav className=" backdrop-blur-sm font-semibold bg-transparent flex flex-row justify-between px-4 py-4">
      <Link href="/" className={`${quicksand.className} text-4xl`}>
        LPU~MAP
      </Link>

      <button className="" onClick={() => handleTheme()}>
        {theme === "light" ? (
          <div>
            <MoonIcon className="w-8 h-8 text-noire hover:text-primary" />
          </div>
        ) : (
          <div>
            <SunIcon className="w-8 h-8 text-blank hover:text-primary" />
          </div>
        )}
      </button>
    </nav>
  );
};

export default Navigation;
