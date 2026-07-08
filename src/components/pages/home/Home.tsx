import Banner from "@/components/widgets/banner/Banner";
import scss from "./home.module.scss";
import Categories from "@/components/widgets/categories/Categories";
import Carousel from "@/components/widgets/carousel/Carousel";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Carousel />
    </div>
  );
};

export default Home;
