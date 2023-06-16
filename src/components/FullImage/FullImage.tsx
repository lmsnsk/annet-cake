import { useRef, useEffect } from "react";

import stl from "./FullImage.module.scss";

interface FullImageProps {
  currentUrl: string;
  isVisible: boolean;
  imageClickRef: HTMLDivElement | null;
  numberOfImg: number;
  urls: Array<string>;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  clickHandler: (img: boolean) => void;
  setNumberOfImg: React.Dispatch<React.SetStateAction<number>>;
}

const FullImage: React.FC<FullImageProps> = ({
  currentUrl,
  isVisible,
  imageClickRef,
  numberOfImg,
  urls,
  setUrl,
  clickHandler,
  setNumberOfImg,
}) => {
  const imgRef = useRef<HTMLDivElement>(null);

  const closeImageHandler = () => {
    clickHandler(false);
  };

  const backSlideHandler = () => {
    if (urls.length === 1) return;
    if (currentUrl === urls[0]) {
      setNumberOfImg(urls.length - 1);
      setUrl(urls[urls.length - 1]);
    } else {
      setNumberOfImg(numberOfImg - 1);
      setUrl(urls[numberOfImg - 1]);
    }
  };

  const forwardSlideHandler = () => {
    if (urls.length === 1) return;
    if (currentUrl === urls[urls.length - 1]) {
      setNumberOfImg(0);
      setUrl(urls[0]);
    } else {
      setNumberOfImg(numberOfImg + 1);
      setUrl(urls[numberOfImg + 1]);
    }
  };

  useEffect(() => {
    if (!isVisible) return;
    const handler = (e: MouseEvent) => {
      if (!imgRef.current) return;
      if (!imageClickRef) return;
      if (!e.composedPath().includes(imgRef.current) && !e.composedPath().includes(imageClickRef)) clickHandler(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className={stl.root}>
      <div ref={imgRef} className={stl.imageBox}>
        <div className={stl.closeBtn} onClick={closeImageHandler}>
          <div className={`${stl.chunk} ${stl.chunk1}`}></div>
          <div className={`${stl.chunk} ${stl.chunk2}`}></div>
        </div>
        <div onClick={backSlideHandler} className={`${stl.switchBtn} ${stl.backButton}`}></div>
        <div onClick={forwardSlideHandler} className={`${stl.switchBtn} ${stl.forwardButton}`}></div>
        <img src={currentUrl} alt="" />
      </div>
    </div>
  );
};

export default FullImage;
