import { NewsBlock } from "../../app/slices/newsSlice";
import stl from "./News.module.scss";

interface NewsBlockProps {
  obj: NewsBlock;
}

const NewsBlockItem: React.FC<NewsBlockProps> = ({ obj }) => {
  return (
    <div className={stl.newsBlock}>
      <div className={stl.textBlock}>{obj.text}</div>
      <div className={stl.imageWrapper}>
        {obj.images.map((image) => (
          <div key={image} className={stl.imageBox}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlockItem;
