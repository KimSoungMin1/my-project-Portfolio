import headerImg from "../img/header-img.svg";
import Skills from "./Skills";
import Typed from "react-typed";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";

const Banner = () => {
  const textLines = [`안녕하세요`, ` 프론트엔드 개발자 <br /> 김성민 입니다`];
  return (
    <div className="banner">
      <div className="box">
        <div>
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>
            <Typed strings={textLines} typeSpeed={60} />
          </h1>
        </div>
        <img
          className="banner_img"
          src={headerImg}
          alt="Header Img"
          width={"526px"}
          height={"473px"}
        />
      </div>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider>
          <Skills />
        </CssVarsProvider>
      </StyledEngineProvider>
    </div>
  );
};

export default Banner;
