import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <div className="pl-desc">
          <div className="project1">
            <a href="https://github.com/comrade16/Social-Media-website"><h3 className="head_project"><b>1. Social Media Website</b></h3></a>
            <p>Designed a responsive homepage for a Social Media website<br></br>
              Tools & technologies used: HTML , CSS , JavaScript<br></br>
              Theme ,background color and font size can be customized according to users choice<br></br>
              The homepage is optimized for various screen sizes, including desktops, laptops, tablets, and mobile devices
            </p>
          </div>
          <div className="project2">
            <a href="https://github.com/comrade16/Weather-App"><h3 className="head_project"><b>2. Weather App</b></h3></a>
            <p><b></b>Live weather update of any location<br></br>

              Tools & technologies used : Python, Tkinter, API integration (e.g., OpenWeatherMap API)<br></br>

              The application provides real-time weather information for a given location, including temperature, humidity, wind
              speed<br></br>

              Created an intuitive and user-friendly interface using Tkinter, allowing users to easily access accurate weather
              information</p>
          </div>
        </div>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
