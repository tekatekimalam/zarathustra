import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo.png";

const menu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Features", path: "/features" },
  { id: 3, title: "About", path: "/about" },
  { id: 4, title: "Contact", path: "/contact" },
];

export default function Home() {
  return (
    <>
      <main>
        <h1>Halaman Utama</h1>
      </main>
    </>
  );
}
