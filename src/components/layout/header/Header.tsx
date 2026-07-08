"use client";
import Link from "next/link";
import scss from "./header.module.scss";
import { MdOutlineHome } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const links = [
    { title: "Главная", href: "/" },
    { title: "Купить", href: "/buy" },
    { title: "Аренда", href: "/rent" },
    { title: "О нас", href: "/about" },
    { title: "Контакты", href: "/contact" },
  ];
  const { push } = useRouter();
  const pathname = usePathname();
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.logo}>
            <span>
              <MdOutlineHome />
            </span>
            <h2>HomeSphere</h2>
          </div>
          <nav>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? scss.active : ""}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className={scss.right}>
            <div className={scss.span}>
              <span>
                <FaRegHeart />
              </span>
              <span>
                <AiOutlineUser />
              </span>
            </div>
            <button onClick={() => push("/admin")}>Добавить дом</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
