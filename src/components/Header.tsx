import Image from "next/image";
import Link from "next/link";
import StarGazers from "./StarGazers";

export default function Header() {
    return (
        <header
        className="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: "url(/header_bg.svg)",
        }}
      >
        <div className="rainfall w-full h-full absolute" />
        <nav className="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width="50"
              height="50"
              className="h-14 w-14"
            />
          </Link>
          <StarGazers />
        </nav>
      </header>
    )
}