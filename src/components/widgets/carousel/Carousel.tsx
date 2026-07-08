import scss from "./carousel.module.scss";
import { TbArrowsUpDown } from "react-icons/tb";
import { BsTextareaResize } from "react-icons/bs";

const Carousel = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.carousel}>
            <h1>Популярные дома</h1>
            <div className={scss.btns}>
              <button>🔥 По популярности</button>
              <button>
                <span>
                  <TbArrowsUpDown />
                </span>
                По цене
              </button>
              <button>
                <span>
                  <BsTextareaResize />
                </span>
                По площади
              </button>
            </div>
          </div>
          <div className={scss.cards}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
