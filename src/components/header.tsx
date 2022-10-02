import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [buttonStyle, setButtonStyle] = useState("container flex justify-between flex-column items-center py-5 hover:bg-sky-500/50 m-3 p-3");

  return (
    <header className="absolute flex justify-center w-full">
      <div className="px-12">
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            buttonStyle === "container flex justify-between flex-column items-center py-5 m-3 p-3" ?
              setButtonStyle("container flex justify-between flex-column items-center py-5 hover:bg-sky-500/50 m-3 p-3") :
              setButtonStyle("container flex justify-between flex-column items-center py-5 m-3 p-3")
          }}
        >
          {isOpen ? (
            <>
              <div className="bg-slate-400 font-bold rounded-2xl my-20">
                <ChevronRight fontSize="large" />
              </div>
            </>
          ) : (
            <>
              <div className="bg-slate-400 font-bold rounded-2xl my-20">
                <ChevronLeft fontSize="large" />
              </div>
            </>
          )}
        </button>
      </div>
      <nav className={buttonStyle}>
        {isOpen && (
          <>
            <Link href="/">
              <a>
                <figure>
                  <Image
                    src="/2022 Space Apps Logos/svg/Colorway=2-Color White.svg"
                    alt="space apps logo"
                    width={200}
                    height={100}
                    layout="fixed"
                  />
                </figure>
              </a>
            </Link>
            <Image
              src="images/team-logo.jpeg"
              alt="team logo"
              width={150}
              height={150}
              layout="fixed"
            />
            <div className="flex flex-row items-center justify-center">
              <Link
                href="/SecondPage/AboutMe"
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
