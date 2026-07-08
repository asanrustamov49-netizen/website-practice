import scss from "./banner.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import BannerPart from "@/components/ui/bannerPart/BannerPart";

const Banner = () => {
  return (
    <div className={scss.banner}>
      <div className="container">
        <div className={scss.mainBanner}>
          <h1>
            Лучшие дома <br /> для вашей жизни
          </h1>
          <p>
            Тысячи проверенных домов по лучшим ценам. <br />
            Выбирайте, сравнивайте и находите идеальный вариант.
          </p>
          <div className={scss.btns}>
            <button>
              Смотреть дома{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
            <button>
              <span>
                <FaRegPlayCircle />
              </span>
              Как это работает?
            </button>
          </div>
        </div>
        <div className={scss.search}>
          <BannerPart />
        </div>
      </div>
    </div>
  );
};

export default Banner;
