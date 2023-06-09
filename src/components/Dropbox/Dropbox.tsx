import { Link } from "react-router-dom";
import { useState } from "react";

import { useMount } from "../../hooks/useMount";
import stl from "./Dropbox.module.scss";

interface DropboxProps {
  data: {
    title: string;
    items: Array<string | JSX.Element>;
  };
}

const Dropbox: React.FC<DropboxProps> = ({ data }) => {
  const [opened, setOpened] = useState(false);
  const mounted = useMount(opened);

  const onMouseEnter = () => {
    setOpened(true);
  };

  const onMouseLeave = () => {
    setOpened(false);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {data.title}
      {mounted && (
        <div
          className={`${stl.root} ${opened || stl.rootClosed}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <ul className={stl.box}>
            {data.items.map((el, i) => (
              <Link to="/" key={i}>
                <li>{el}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropbox;
