import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="absolute  flex justify-center w-full">
      <div className="px-12">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black-400 h-15 py-16 w-16 flex"
        >
          {isOpen ?
            <>
              <div className="bg-slate-400 font-bold rounded-2xl">
                <ChevronRight fontSize="large" />
              </div>
            </>
            :
            <>
              <div className="bg-slate-400 font-bold rounded-2xl">
                <ChevronLeft fontSize="large" />
              </div>
            </>
          }
        </button>
      </div>
      <nav className="container flex justify-between flex-column items-center py-5">
        {isOpen && (
          <>
            <figure>
              <Image
                src="/2022 Space Apps Logos/svg/Colorway=2-Color White.svg"
                alt="space apps logo"
                width={200}
                height={100}
                layout="fixed"
                style={{ color: "white" }}
              />
              <figcaption style={{ color: "white" }}>
                nasa space apps challenge logo - team challenjour
              </figcaption>
            </figure>
            <div className="flex flex-row items-center justify-center">
              <Link
                href="/urmom/rawr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold"
              >
                <a className="bg-blue-500 text-xl font-bold p-4 rounded-2xl">
                  About Me
                </a>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header >
  );
};

export default Header;
