import Project1 from "../img/project1.png";
import Project2 from "../img/project2.png";
import Project3 from "../img/project3.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
const Project = () => {
  return (
    <div className="project">
      <h1 className="project_title">Projects</h1>
      <div className="project_wrap">
        <div className="project_list">
          <img src={Project1} alt="" className="project_img" />
        </div>
        <div className="project_information">
          <h2>신한카드</h2>
          <div>
            <p>
              <span>
                개인 프로젝트 <br />
              </span>
              참가인원:1명
            </p>
            <p>
              본 웹은 개인 프로젝트로 제작된 신한카드 페이지 입니다
              <br />
              인기, 추천 카드 페이지를 통해 비교하고자 하는 <br />
              카드를 한눈에 비교할 수 있습니다
              <br />
              자신에게 맞는 카드를 찾아보세요
            </p>
            <p>
              <span> #나의 기여도</span>
              <br /> ✔반응형 제작 {" (태블릿 지원)"} <br />
              ✔contextAPI를 활용 하여 공통으로 적용되는 전역 데이터 관리
              <br /> ✔swiper custom,
            </p>
            <p>
              <span>사용기술 목록</span>
              <br />
              React,swiper,react-router-dom
            </p>
          </div>
          <p className="project_link_icon">
            {" "}
            <a
              href="https://github.com/KimSoungMin1/shinhan/tree/master/shinhan"
              target="_blank"
              className="project_nav"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://kimsoungmin1.github.io/shinhan/"
              target="_blank"
              className="project_nav"
            >
              <DesktopWindowsOutlinedIcon />
            </a>
          </p>
        </div>
      </div>
      <div className="project_wrap">
        <div className="project_list">
          <img src={Project2} alt="" className="project_img" />
        </div>
        <div className="project_information">
          <h2>
            traval <span>{"(여행자를 위한 SNS)"}</span>
          </h2>

          <div>
            <p>
              <span>
                팀 프로젝트 <br />
              </span>
              참가인원:4명
            </p>
            <p>
              본 웹은 여행관련 SNS입니다
              <br />
              자신이 여행한 곳을 올리고 공유할 수 있습니다.
              <br /> 또 내가 여행 하고자 하는 곳이 있다면 <br />
              여행계획 쪽에서 계획을 하고 공유하여 동행자를 찾을 수도 있습니다
              <br />
              자신 과 비슷한 성향에 여행 친구를 찾아보세요
              <br />
              {"(태블릿 과 모바일에서도 지원하고 있습니다)"}
            </p>
            <p>
              <span> #나의 기여도</span>
              <br /> ✔ 글작성:개시글 작성과 이미지 삽입 해쉬태그 이모티콘 기능
              추가 <br /> ✔ 개시글: 공개 비공개 기능
              <br />
              ✔ 글수정:자신이 작성한 개시글 수정 기능
              <br />
              ✔ 작성 글 더보기:작성한 내용 더보기 구현
              <br /> ✔ 마이페이지:UI,프로필 편집 기능 ,팔로우 기능 팔로우
              알림,유저 팔로우 팔로워 목록
            </p>
            <p>
              <span>사용기술 목록</span>
              <br />
              React, firebase, Material-UI,redux-toolkit,react-router-dom
            </p>
          </div>
          <p className="project_link_icon">
            {" "}
            <a
              href="https://github.com/94Jun/Team-Project-D"
              target="_blank"
              className="project_nav"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://travel-1g.firebaseapp.com/"
              target="_blank"
              className="project_nav"
            >
              <DesktopWindowsOutlinedIcon />
            </a>
          </p>
        </div>
      </div>
      <div className="project_wrap">
        <div className="project_list">
          <img src={Project3} alt="" className="project_img" />
        </div>
        <div className="project_information">
          <h2>
            개인 포트폴리오<span>{" (포트폴리오용으로 제작)"}</span>
          </h2>
          <div>
            <p>
              <span>
                개인 프로젝트 <br />
              </span>
              참가인원:1명
            </p>

            <p>
              본 웹은 개인 포트폴리오용으로 제작된 페이지 입니다
              <br />
              현재 보고있는 웹 입니다
            </p>
            <p>
              <span> #나의 기여도</span>
              <br />✔ Material-UI를 활용한 빠른 개발
            </p>
            <p>
              <span>사용기술 목록</span>
              <br />
              React, Material-UI,slick-slider
            </p>
          </div>
          <p className="project_link_icon">
            <a
              href="https://github.com/KimSoungMin1/my-project-Portfolio"
              target="_blank"
              className="project_nav"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://kimsoungmin1.github.io/my-project-Portfolio/"
              target="_blank"
              className="project_nav"
            >
              <DesktopWindowsOutlinedIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
