import React from "react";
import "./slider.css";

const Slider = () => {
  return (
    <div className="container-fluid ">
      <div className="row d-flex row-column">
        <div className="col-md-11 main-3">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner bg-warning">
              <div className="carousel-item active">
                <div className="image_size">
                  <img
                    src="https://img.freepik.com/free-psd/horizontal-banner-template-capture-yourself-theme_23-2148686446.jpg?t=st=1721367842~exp=1721371442~hmac=bc02b19db245e1b5c3c349c54ee33cb9e4f364f3c69f702c1a16b7b39edc7b02&w=1060"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div className="carousel-item">
                <div className="image_size">
                  <img
                    src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-1640.jpg?w=2000&t=st=1721367173~exp=1721367773~hmac=ac1ca6886f82b644577b4cec77c66b238a3a0ae66c8b56ffb8a03ba64d24250c"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                  
                </div>
              </div>
              <div className="carousel-item">
                <div className="image_size">
                  <img
                    src="https://img.freepik.com/free-vector/woman-liquid-effect-leaves-landing-page-fashion-sale_23-2148595182.jpg?t=st=1721785690~exp=1721789290~hmac=0ad9a6f82b9befb1e4f06490f0f92953b8cee900b1ef979fea7ac978f60ea115&w=1800"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-2 main-4">
          <marquee
            direction="up"
            scrollamount="3"
            style={{
              height: "498px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            <div className="d-flex flex-column  ">
              <img
                src="https://img.freepik.com/free-photo/discount-sneakers-podium_23-2150165480.jpg?t=st=1721372169~exp=1721375769~hmac=7d1cd42068eaa5c721db967cc04670d4d2ca7416e138432a29424d5913c5b37e&w=826"
                className="w-1002 mb-3"
                alt=""
              />
              <img
                src="https://img.freepik.com/premium-psd/laptop-computer-that-has-brand-new-laptop-it_1101054-17238.jpg?w=740"
                className="w-1002 mb-3"
                alt=""
              />
              <img
                src="https://img.freepik.com/premium-photo/indian-jewellery-closeup-girl-wearing-traditional-designer-gold-bangles-bracelets-showing-graceful-dance-poses-hand-dark-background-selective-focus_466689-7782.jpg"
                className="w-1002"
                alt=""
              />

              <img
                src="https://img.freepik.com/free-photo/still-life-gym-equipment_23-2148197731.jpg?t=st=1721377070~exp=1721380670~hmac=caeef03341a0b48114b954b0fa706889861584de07e0f1d7132a448f1dda5ba6&w=996"
                className="w-1002 mb-3"
                alt=""
              />
              <img
                src="https://img.freepik.com/premium-photo/full-length-woman-walking-street-city_1048944-25511439.jpg?w=996"
                className="w-1002 mb-3"
                alt=""
              />
              <img
                src="https://img.freepik.com/free-photo/front-view-woman-carrying-shopping-bags_23-2148660647.jpg?t=st=1721377331~exp=1721380931~hmac=31749d285bf12f95bf22d85c497aeb356c791a987afc0cdb4c1a1063a3adfe46&w=740"
                className="w-1002"
                alt=""
              />
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Slider;
