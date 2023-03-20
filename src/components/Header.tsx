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
          <a href="/">
            <img
              src="/logo.svg"
              alt="Deno Logo"
              className="h-14 w-14"
            />
          </a>
          <StarGazers />
        </nav>
      </header>
    )
}