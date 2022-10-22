import { BsFillCaretLeftFill } from "react-icons/Bs";
import { useRef, useEffect, useState } from "react";

interface HeaderProps {
  toggle: boolean;
  setToggle: Function;
}

const Header: React.FC<HeaderProps> = ({ toggle, setToggle}) => {
  const btnRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (toggle) {
      btnRef?.current!.classList.add("burger-toggle");
      setIsOpen(true);
    }
    setIsOpen(false);
    btnRef?.current!.classList.remove("burger-toggle");
  }, [toggle]);

  return (
    <div  className="header">
      <h3>P3tr</h3>
      <section className="list">
        <section className="icon-date">
          <BsFillCaretLeftFill />
        </section>
        <p >{Date().slice(0, 15)}</p>
        <div
          style={{ color: toggle ? "white" : "black" }}
          ref={btnRef}
          onClick={() => setToggle((prev: boolean) => !prev)}
          className="burger"
        >
          <span ></span>
          <span ></span>
        </div>
      </section>
    </div>
  );
};

export default Header;
