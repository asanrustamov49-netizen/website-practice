import Link from "next/link";
import scss from "./categories.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import CategoryCard from "@/components/ui/categoryCard/CategoryCard";

const Categories = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.categories}>
            <h1>Популярные категории</h1>
            <Link href="/">
              Смотреть все{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div className={scss.cards}>
            <CategoryCard
              count={1254}
              image="https://i.pinimg.com/1200x/6b/4d/eb/6b4deb02c0015d92ff740a3cf6ec3a43.jpg"
              title="Частные дома"
            />
            <CategoryCard
              count={856}
              title="Коттеджи"
              image="https://i.pinimg.com/736x/e5/14/b2/e514b281f3e5a36f63e18ac0c678c40f.jpg"
            />
            <CategoryCard
              count={623}
              title="Таунхаусы"
              image="https://i.pinimg.com/736x/f5/9f/c2/f59fc22305e9b1af2d5dc989033fd8b5.jpg"
            />
            <CategoryCard
              count={412}
              title="Дома у озера"
              image="https://i.pinimg.com/736x/17/4a/d7/174ad777cc9929f8796236c1b6ec61c0.jpg"
            />
            <CategoryCard
              count={298}
              title="Элитные дома"
              image="https://i.pinimg.com/736x/33/6a/fc/336afc1c1df5eafd90025f3aa276a300.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
