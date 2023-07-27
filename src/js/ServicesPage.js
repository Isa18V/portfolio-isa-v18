import React from "react";
import "../css/ServicesPage.css";

const servicesData = [
  {
    title: "Responsive Web Design",
    subTitle: "--Hover me--",
    content:
      "Craft websites that adapt flawlessly to various devices, ensuring an exceptional user experience on desktops, tablets, and mobile phones. This approach guarantees accessibility, boosts engagement, and ensures your content looks visually appealing, regardless of the screen size.",
  },
  {
    title: "HTML,CSS,JS Development",
    subTitle: "--Hover me--",
    content:
      "Utilize the trio of essential web development technologies to create robust and feature-rich applications. HTML5 structures content, CSS3 enhances design and layout, and JavaScript adds interactivity, resulting in engaging and dynamic user experiences.",
  },
  {
    title: "React Development",
    subTitle: "--Hover me--",
    content:
      "Harness the power of React to build scalable and performant web applications. React's component-based architecture, efficient rendering with the virtual DOM, and rich ecosystem of libraries and tools enable the creation of interactive, responsive, and maintainable user interfaces.",
  },
  {
    title: "API Integration",
    subTitle: "--Hover me--",
    content:
      "Seamlessly integrate third-party APIs to extend functionality and access external services. By leveraging APIs, we enhance your application with features such as data retrieval, social media integration, payment gateways, and more, enabling seamless interactions and expanding the capabilities of your web application.",
  },
];

export default function ServicesPage() {
  return (
    <div className="ServicesPage" id="services">
      <div className="row row-gap-4">
        {servicesData.map((service, index) => (
          <div
            className="col-md-6 col-sm-12 d-flex justify-content-center "
            key={index}
          >
            <div className="card-container">
              <div className="card">
                <div className="front-content">
                  <p>{service.title}</p>
                  <h6>{service.subTitle}</h6>
                </div>
                <div className="content">
                  <p>{service.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
