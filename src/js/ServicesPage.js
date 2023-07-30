import React from "react";
import "../css/ServicesPage.css";

const servicesData = [
  {
    title: "Responsive Web Design",
    content:
      "Craft websites that adapt flawlessly to various devices, ensuring an exceptional user experience on desktops, tablets, and mobile phones. This approach guarantees accessibility, boosts engagement, and ensures your content looks visually appealing, regardless of the screen size.",
    AOS: "flip-left",
    durationAOS: "1000",
  },
  {
    title: "HTML,CSS,JS Development",
    content:
      "Utilize the trio of essential web development technologies to create robust and feature-rich applications. HTML5 structures content, CSS3 enhances design and layout, and JavaScript adds interactivity, resulting in engaging and dynamic user experiences.",
    AOS: "flip-left",
    durationAOS: "1800",
  },
  {
    title: "React Development",
    content:
      "Harness the power of React to build scalable and performant web applications. React's component-based architecture, efficient rendering with the virtual DOM, and rich ecosystem of libraries and tools enable the creation of interactive, responsive, and maintainable user interfaces.",
    AOS: "flip-left",
    durationAOS: "2500",
  },
  {
    title: "API Integration",
    content:
      "Seamlessly integrate third-party APIs to extend functionality and access external services. By leveraging APIs, we enhance your application with features such as data retrieval, social media integration, payment gateways, and more, enabling seamless interactions and expanding the capabilities of your web application.",
    AOS: "flip-left",
    durationAOS: "3000",
  },
];

export default function ServicesPage() {
  return (
    <div className="ServicesPage" id="services">
      <div className="row">
        {servicesData.map((service, index) => (
          <div
            className="servicePageContainer col-lg-6 col-md-6 col-sm-12 "
            key={index}
          >
            <div
              className="cardservicePage"
              data-aos={service.AOS}
              data-aos-duration={service.durationAOS}
            >
              <div className="contentservicePage">
                <p className="headingservicePage">{service.title}</p>
                <p className="paraservicePage">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
