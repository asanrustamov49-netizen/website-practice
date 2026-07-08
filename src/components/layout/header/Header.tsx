import Link from "next/link";
import scss from "./header.module.scss";

const Header = () => {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.logo}>
            <h1>EG</h1>
            <h2>EverGreen</h2>
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/about">Cantact us</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
