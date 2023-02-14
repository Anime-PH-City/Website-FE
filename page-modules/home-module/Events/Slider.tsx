import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import arrowLeft from "../../../public/assets/svgs/arrow-left.svg";
import arrowRight from "../../../public/assets/svgs/arrow-right.svg";

const withExternalControls = (props: any) => {
  class ExternalControlledCarousel extends Component<
    {},
    { currentSlide: number }
  > {
    constructor(props: {}) {
      super(props);

      this.state = {
        currentSlide: 0,
      };
    }

    next = () => {
      this.setState((state) => ({
        currentSlide: state.currentSlide + 1,
      }));
    };

    prev = () => {
      this.setState((state) => ({
        currentSlide: state.currentSlide - 1,
      }));
    };

    updateCurrentSlide = (index: number) => {
      const { currentSlide } = this.state;

      if (currentSlide !== index) {
        this.setState({
          currentSlide: index,
        });
      }
    };

    render() {
      const buttonStyle = {
        fontSize: 20,
        padding: "2px 8px",
        margin: "2px 0px",
        display: "flex",
        gap: '10%',
        alignItems: "center",
        justifyContent: "space-between",
        border: '2px solid #00AEEF',
        color: "#00AEEF",
        fontWeight: 'bold',
        borderRadius: '5px',
      };
      const containerStyle = {
        margin: "5px 0 20px",
        display: "flex",
        justifyContent: "space-between",
      };
      return (
        <div>
          <div style={containerStyle}>
            <button onClick={this.prev} style={buttonStyle}>
              <Image src={arrowLeft} alt="" />
              Previous
            </button>
            <button onClick={this.next} style={buttonStyle}>
              Next
              <Image src={arrowRight} alt="" />
            </button>
          </div>
          <Carousel
            selectedItem={this.state.currentSlide}
            onChange={this.updateCurrentSlide}
            swipeable={true}
            showThumbs={false}
            showArrows = {false}
            showStatus={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = { marginLeft: 20, marginTop: 40, display: "inline-flex", backgroundColor: "#EDEDED", cursor: "pointer", padding: "1%", borderRadius: "50%", zIndex: "99" };
              const style = isSelected
                ? { ...defStyle, backgroundColor: "#00AEEF" }
                : { ...defStyle };
              return (
                <div
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  data-value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                >
                </div>
              );
            }}
            {...this.props}
          >
            {props.children}
          </Carousel>
        </div>
      );
    }
  }

  return <ExternalControlledCarousel />;
};

export default withExternalControls;
