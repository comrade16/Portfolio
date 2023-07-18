import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Passionate about coding and learning new technologies with excellent problem solving skills and ability to perform well in a team with a Bachelor of engineering in Electronics from Maulana Azad National Institute Of Technology Bhopal.
        </p>
        <p className="a-desc">
        While my academic and professional pursuits have been rewarding, I believe in maintaining a balanced lifestyle. In my free time, I enjoy exploring the outdoors, reading books on technology trends, and staying up-to-date with the latest advancements in the CSE field. These activities provide me with a fresh perspective and inspire creativity in my problem-solving approach.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">50 Days Badge 2022</h4>
            <p className="a-award-desc">
            I was awarded the prestigious "50 Days Badge 2022 on Leetcode." This badge symbolizes my unwavering focus and determination in pursuing a specific endeavor for a continuous period of 50 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
