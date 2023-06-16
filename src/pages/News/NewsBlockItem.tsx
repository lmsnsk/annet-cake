import { useState, useRef, useEffect } from "react";

import stl from "./News.module.scss";

import { NewsBlock } from "../../app/slices/newsSlice";
import FullImage from "../../components/FullImage/FullImage";

interface NewsBlockProps {
  obj: NewsBlock;
}

const NewsBlockItem: React.FC<NewsBlockProps> = ({ obj }) => {
  const [fullImageVisible, setFullImageVisible] = useState(false);
  const [imageCurrentUrl, setImageCurrentUrl] = useState("");
  const [numberOfImg, setNumberOfImg] = useState(0);
  const imageClickRef = useRef<HTMLDivElement[]>([]);

  const imageClickHandler = (index: number, img: string) => {
    setFullImageVisible(true);
    setImageCurrentUrl(img);
    setNumberOfImg(index);
  };

  const addToRefs = (el: HTMLDivElement | null) => {
    if (!el) return;
    if (!imageClickRef.current.includes(el)) imageClickRef.current.push(el);
  };

  useEffect(() => {
    fullImageVisible ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  }, [fullImageVisible]);

  return (
    <>
      {fullImageVisible && (
        <FullImage
          numberOfImg={numberOfImg}
          setNumberOfImg={setNumberOfImg}
          currentUrl={imageCurrentUrl}
          setUrl={setImageCurrentUrl}
          clickHandler={setFullImageVisible}
          isVisible={fullImageVisible}
          imageClickRef={imageClickRef.current[numberOfImg]}
          urls={obj.images}
        />
      )}
      <div className={stl.newsBlock}>
        <div className={stl.textBlock}>{obj.text}</div>
        <div className={stl.imageWrapper}>
          {obj.images.map((image, index) => (
            <div ref={(el) => addToRefs(el)} key={image} className={stl.imageBox}>
              <img src={image} onClick={() => imageClickHandler(index, image)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsBlockItem;
