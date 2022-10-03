import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const hideUIButton = {
//   return (      <div className="px-12">
//   <button
//     onClick={() => {
//       setIsOpen(!isOpen);
//       buttonStyle === ""
//         ? setButtonStyle(
//             "container flex justify-between flex-column items-center py-5 hover:bg-sky-500/50 m-3 p-3"
//           )
//         : setButtonStyle(
//             "container flex justify-between flex-column items-center py-5 m-3 p-3"
//           );
//     }}
//   >
//     {isOpen ? (
//       <>
//         <div className="bg-slate-400 font-bold rounded-2xl my-20">
//           <ChevronRight fontSize="large" />
//         </div>
//       </>
//     ) : (
//       <>
//         <div className="bg-slate-400 font-bold rounded-2xl my-20">
//           <ChevronLeft fontSize="large" />
//         </div>
//       </>
//     )}
//   </button>
// </div>
// )
// }

const Header = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const [buttonStyle, setButtonStyle] = useState(
  //   "container flex justify-between flex-column items-center py-5 hover:bg-sky-500/50 m-3 p-3"
  // );

  return (
    <header className="absolute flex justify-center w-full">
      <nav className="container flex justify-between flex-column items-center py-5 m-3 p-3">
        <>
          <Link href="/">
            <a>
              <Image
                src="/2022 Space Apps Logos/svg/Colorway=2-Color White.svg"
                alt="space apps logo"
                width={200}
                height={100}
                layout="fixed"
              />
            </a>
          </Link>
          <div className="flex flex-row items-center justify-center ">
            <Link href="/about">
              <a className="bg-blue-500 p-4 rounded-2xl text-2xl font-bold m-3">
                About Us
              </a>
            </Link>
            <Link href="https://github.com/NASA-Spaceapps-challenjours">
              <a className="m-3">
                <Image
                  src="/github.png"
                  alt="github logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
        </>
      </nav>
    </header>
  );
};

export default Header;
