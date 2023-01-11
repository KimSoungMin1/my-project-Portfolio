import { useState, useEffect } from "react";

function TopButton() {
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFollow);
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, [ScrollY]);

  return (
    <button
      className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
      onClick={handleTop} // 버튼 클릭시 함수 호출
    ></button>
  );
}

export default TopButton;
