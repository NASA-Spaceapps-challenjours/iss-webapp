import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="absolute z-50 w-full">
      <nav className="container mx-auto flex justify-between flex-column items-center">
        <>
          <Link href="/">
            <Image
              src="/2022 Space Apps Logos/svg/Colorway=2-Color White.svg"
              alt="space apps logo"
              width={200}
              height={100}
              layout="fixed"
            />
          </Link>
          <div className="flex flex-row items-center justify-center ">
            <Link
              href="/about"
              className="bg-blue-500 p-4 rounded-2xl text-2xl font-bold font-sans m-3"
            >
              <p>about</p>
            </Link>
            <Link
              href="https://github.com/NASA-Spaceapps-challenjours"
              className="m-3"
            >
              <Image
                src="/github.png"
                alt="github logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </>
      </nav>
    </header>
  );
};

export default Header;
