import React from "react";
import Navbar from "./Navbar";
import MobileProperties from "./Testex.jsx";
import chevronRight from "../assets/images/Chevron_right.svg.png";
import chevronLeft from "../assets/images/Chevron_left.svg.png";
import "../assets/stylesheets/FeaturedProperties.css";
import fiftyeight from "../assets/images/fiftyeight.png";
import Carousel from "nuka-carousel";
import FeaturedProperty1 from "./FeaturedProperty1";
import FeaturedProperty2 from "./FeaturedProperty2";
import FeaturedProperty3 from "./FeaturedProperty3";


class CustomDots extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.currentSlide !== nextProps.currentSlide;
  }

  render() {
    let props = this.props;
    let slideCount = props.slideCount;
    let buttons = [];
    for (let i = 0; i < slideCount; i++) {
      let active = props.currentSlide === i ? "active" : "";
      buttons.push(
        <li
          className={"carousel_control " + active}
          key={i}
          onClick={props.goToSlide.bind(null, i)}
        />
      );
    }

    return <ul className="carousel_controls">{buttons}</ul>;
  }
}

class FeaturedProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  render() {
    return (
      <div className="">
        <main
          className="d-none d-xl-block"
          style={{ width: "100vw", height: "85vh" }}
        >
          <Carousel
            style={{ width: "100vw", height: "85vh" }}
            id="carousel"
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
            renderTopCenterControls={({
              previousSlide,
              nextSlide,
              slideCount,
              currentSlide,
              goToSlide
            }) => {
              return (
                <CustomDots
                  goToSlide={goToSlide}
                  previousSlide={previousSlide}
                  currentSlide={currentSlide}
                  previousSlide={previousSlide}
                  slideCount={slideCount}
                />
              );
            }}
            renderCenterRightControls={({ nextSlide }) => {
              return (
                <img
                  src={chevronRight}
                  onClick={nextSlide}
                  className="chevron"
                />
              );
            }}
            renderCenterLeftControls={({ previousSlide }) => {
              return (
                <img
                  style={{ "margin-left": "470px" }}
                  src={chevronLeft}
                  onClick={previousSlide}
                  className="chevron"
                />
              );
            }}

            renderBottomCenterControls={() => null}
          >
            <FeaturedProperty1
              currentSlide={this.state.slideIndex}
              slideIdx={0}
              className="property-component"
            />
            <FeaturedProperty2
              currentSlide={this.state.slideIndex}
              slideIdx={1}
              className="property-component"
            />
            <FeaturedProperty3
              currentSlide={this.state.slideIndex}
              slideIdx={2}
              className="property-component"
            />
          </Carousel>
        </main>
        <main className="d-block d-xl-none">
          <MobileProperties />
        </main>
      </div>
    );
  }
}

export default FeaturedProperties;
// <div>1</div>
// <div>2</div>
// <div>3</div>
