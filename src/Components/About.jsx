import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CakeIcon from "@mui/icons-material/Cake";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import contactImg from "../img/contact-img.svg";

const About = () => {
  const about = [
    {
      title: "이름",
      icon: <AccountCircleIcon fontSize="large" />,
      name: "김성민",
    },

    {
      title: "주소지",
      icon: <PlaceIcon fontSize="large" />,
      name: "부산시 사하구",
    },

    {
      title: "이메일",
      icon: <EmailIcon fontSize="large" />,
      name: "tjdals247470@naver.com",
    },
    {
      title: "학력",
      icon: <CalendarMonthIcon fontSize="large" />,
      name: "부산과학기술대학교",
    },
  ];
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about_wrap">
        <img src={contactImg} alt="" />
        <ul className="about-list">
          {about.map((about) => {
            return (
              <li key={about.name}>
                {about.icon}
                <div>
                  <h3>{about.title}</h3>
                  <p>{about.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
