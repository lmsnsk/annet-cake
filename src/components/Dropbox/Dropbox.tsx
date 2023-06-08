import stl from "./Dropbox.module.scss";
import { Link } from "react-router-dom";

interface DropboxProps {
  liArray: Array<string>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Dropbox: React.FC<DropboxProps> = ({ onMouseEnter, onMouseLeave, liArray }) => {
  return (
    <div className={stl.root} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ul className={stl.box}>
        {liArray.map((el) => (
          <Link to="/">
            <li key={el}>{el}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dropbox;
