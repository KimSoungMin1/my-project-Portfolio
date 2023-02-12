import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = () => {
  const [mainProgress, setMainProgress] = useState([
    { name: "HTML", progressBar: 0, progress: "0%" },
    { name: "CSS", progressBar: 0, progress: "0%" },
    { name: "JS", progressBar: 0, progress: "0%" },
    { name: "React.js", progressBar: 0, progress: "0%" },
    { name: "Material-UI", progressBar: 0, progress: "0%" },
  ]);
  const [subProgress, setSubProgress] = useState([
    { name: "Node.js", progressBar: 0, progress: "0%" },
    { name: "firebase", progressBar: 0, progress: "0%" },
    { name: "Next.js", progressBar: 0, progress: "0%" },
    { name: "MySql", progressBar: 0, progress: "0%" },
    { name: "git", progressBar: 0, progress: "0%" },
  ]);

  const timer = () => {
    setMainProgress([
      { name: "HTML", progressBar: 90, progress: "90%" },
      { name: "CSS", progressBar: 90, progress: "90%" },
      { name: "JS", progressBar: 80, progress: "80%" },
      { name: "React.js", progressBar: 75, progress: "75%" },
      { name: "Material-UI", progressBar: 80, progress: "80%" },
    ]);

    setSubProgress([
      { name: "Node.js", progressBar: 40, progress: "40%" },
      { name: "firebase", progressBar: 80, progress: "80%" },
      { name: "Next.js", progressBar: 40, progress: "40%" },
      { name: "MySql", progressBar: 70, progress: "70%" },
      { name: "git", progressBar: 70, progress: "70%" },
    ]);
  };

  useEffect(() => {
    setInterval(() => {
      timer();
    }, 800);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="skills_wrap">
      <Slider {...settings}>
        <div className="skills">
          <h1> {"Main-Skills"}</h1>
          <Stack spacing={3} sx={{ flex: 1 }}>
            {mainProgress.map((skill, i) => (
              <div className="skill_list" key={i}>
                <p className="skill_name">{skill.name}</p>
                <LinearProgress
                  determinate
                  value={skill.progressBar}
                  size="lg"
                  color="info"
                  className="progress"
                />
                <p>{skill.progress}</p>
              </div>
            ))}
          </Stack>
        </div>

        <div className="skills">
          <h1> {"Sub-Skills"}</h1>
          <Stack spacing={3} sx={{ flex: 1 }}>
            {subProgress.map((skill, i) => (
              <div className="skill_list" key={i}>
                <p className="skill_name">{skill.name}</p>
                <LinearProgress
                  determinate
                  value={skill.progressBar}
                  size="lg"
                  color="info"
                  className="progress"
                />
                <p>{skill.progress}</p>
              </div>
            ))}
          </Stack>
        </div>
      </Slider>
    </div>
  );
};
export default Skills;
