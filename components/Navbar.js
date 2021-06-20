import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo.png";

const menu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Features", path: "/features" },
  { id: 3, title: "About", path: "/about" },
  { id: 4, title: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <header className="w-full h-20 flex items-center justify-between lg:px-64">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="plongo logo" />
          <span className="uppercase font-bold ml-5 text-xl">zarathustra</span>
        </div>
        <nav>
          <ul className="flex items-center w-4/12 -mx-7">
            {menu.map(({ id, title, path }) => {
              return (
                <li className="relative mx-7" key={id}>
                  <Link href={path}>
                    <a className="font-sans font-light text-gray-400 hover:text-gray-600 active:text-gray-600">
                      {title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <a
            href="#"
            className="bg-red-500 hover:bg-red-700 rounded-lg py-2 text-white px-4"
          >
            Download
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
