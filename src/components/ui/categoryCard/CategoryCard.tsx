import scss from "./categoryCard.module.scss";
import { RxHome } from "react-icons/rx";

interface ICategory {
  image: string;
  title: string;
  count: number;
}

const CategoryCard = ({ count, image, title }: ICategory) => {
  return (
    <div className={scss.card}>
      <img src={image} alt="" />
      <div className={scss.info}>
        <h3>{title}</h3>
        <p>{count} обьекта</p>
      </div>
      <span>
        <RxHome />
      </span>
    </div>
  );
};

export default CategoryCard;
