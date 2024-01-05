import React from "react";
import "./project.css";
import { ProjectCart } from "../../components/projectCart/ProjectCart";
import ecommerceImage from "../../assets/ecomimage.png";
import weathrerImage from "../../assets/weatherimage.png";
export const Project = () => {
  return (
    <section id="projects">
      <div className="project_container">
        <h2 className="project_heading">Projects</h2>

        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <ProjectCart
                image={ecommerceImage}
                title="E-commerce Website"
                description="User Authentication: Create accounts with name, email, and password. Secure login for account access.Product Catalog: Display    
                products with images, descriptions, prices. Organize into categories, with filtering options.Search Feature: Quick product search for 
                users to find items easily Shopping Cart: Add products, view, modify, or remove items from the shopping cart.Logout: Secure 
               'Logout' option for users to sign out.Support Channels: Provide customer support through email, chat, and phone for user assistance."
              />
            </div>
            <div className="carousel-item">
              <ProjectCart
                image={weathrerImage}
                title="A weather casting web application"
                description=" Weather apps enable users to get instant alerts regarding weather conditions. Weather apps are the simplest method to know about the updates of the weather.
"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
