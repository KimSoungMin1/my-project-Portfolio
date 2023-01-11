import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";

const Header = () => {
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    if (window.pageYOffset > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFollow);
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, []);

  return (
    <header className={BtnStatus ? "header" : ""}>
      <div className="head">
        <h1 className="title">LOGO</h1>
        <ul className="nav">
          <li
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Home
          </li>
          <li
            onClick={() =>
              window.scrollTo({
                top: 500,
                behavior: "smooth",
              })
            }
          >
            Skill
          </li>
          <li
            onClick={() =>
              window.scrollTo({
                top: 920,
                behavior: "smooth",
              })
            }
          >
            Project
          </li>
          <li
            onClick={() =>
              window.scrollTo({
                top: 2950,
                behavior: "smooth",
              })
            }
          >
            About
          </li>
          <li>
            <a
              href="https://github.com/KimSoungMin1"
              target="_blank"
              className="my_git"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
