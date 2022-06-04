import { useEffect, useState } from "react";
import "./Nav.scss"

type Props = {
  className?: string;
};

export const Nav = (props: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    // scrollイベントの設定・解除
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={`Nav ${show && "Nav-black"}`}>
      <img
        className="Nav-loop"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />
      <img className="Nav-avater" src={profileImg} alt="avater" />
    </div>
  );
};


//const profileImg = "G7Y2mEMcsvI";
const profileImg = "https://picsum.photos/320";
