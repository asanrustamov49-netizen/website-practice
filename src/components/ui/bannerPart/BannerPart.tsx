import scss from "./bannerPart.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { TbChartArea } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const BannerPart = () => {
  return (
    <div className={scss.bannerPart}>
      <div className={scss.mainPart}>
        <div className={scss.city}>
          <h2>
            <span>
              <IoLocationOutline />
            </span>{" "}
            Город
          </h2>
          <select>
            <option value="">Все города</option>
          </select>
        </div>
        <div className={scss.home}>
          <h2>
            <span>
              <IoLocationOutline />
            </span>{" "}
            Тип дома
          </h2>
          <select>
            <option value="">Все типы</option>
          </select>
        </div>
        <div className={scss.price}>
          <h2>
            <span>
              <RiMoneyEuroCircleLine />
            </span>{" "}
            Цена
          </h2>
          <select>
            <option value="">Любая цена</option>
          </select>
        </div>
        <div className={scss.area}>
          <h2>
            <span>
              <TbChartArea />
            </span>{" "}
            Площадь
          </h2>
          <select>
            <option value="">Любая площадь</option>
          </select>
        </div>
        <button>
          <span>
            <IoSearch />
          </span>{" "}
          Найти
        </button>
      </div>
    </div>
  );
};

export default BannerPart;
