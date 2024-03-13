import Link from "next/link";

interface NavbarItem {
  title: string;
  path: string;
}

const NavbarItems: NavbarItem[] = [
  {
    title: "inicio",
    path: "/",
  },
  {
    title: "crypto",
    path: "/crypto",
  },
  {
    title: "dolar",
    path: "/dolar",
  },
];

export default function SideNavbar() {
  return (
    <nav className="bg-black/10 h-screen w-[12%] text-center">
      <div className="flex flex-col items-center justify-around h-full">
        <div>
          <Link className="font-bold text-2xl" href={"/"}>
            BUEN BILLETE
          </Link>
        </div>
        <div className="flex flex-col">
          {NavbarItems.map((item) => (
            <Link
              className="my-5 text-xl tracking-wider hover:underline"
              key={item.title}
              href={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <Link
            className="tracking-wider underline"
            href={"https://github.com/giannidona/Buen-Billete"}
            target="_blank"
          >
            repositorio
          </Link>
        </div>
      </div>
    </nav>
  );
}
