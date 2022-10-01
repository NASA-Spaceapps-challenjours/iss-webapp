import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute  flex justify-center w-full">
      <nav className="container flex justify-between flex-row items-center py-4">
        <figure>
          <Image
            src="/2022 Space Apps Logos/svg/Colorway=2-Color White.svg"
            alt="space apps logo"
            width={200}
            height={100}
            layout="fixed"
          />
          <figcaption>
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
              your mother.
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
