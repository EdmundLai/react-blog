import React from 'react';
import './PhotoCarousel.css'

// PhotoCarousel code created with lots of help from tutorial at https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na
class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.calculateNextIndex = this.calculateNextIndex.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  // if nextSlide called, next_or_prev is true
  // if previousSlide called, next_or_prev is false
  calculateNextIndex(next_or_prev) {
    const lastIndex = this.props.imgURLs.length - 1;

    const resetValueChk = next_or_prev ? lastIndex : 0;
    const increment_val = next_or_prev ? 1 : -1;

    const currIndex = this.state.currentIndex;
    const needsReset = currIndex === resetValueChk;
    
    const newIndex = needsReset ? (lastIndex - resetValueChk) : currIndex + increment_val;
    // console.log("new index: " + newIndex);

    return newIndex;
  }

  previousSlide() {
    const newIndex = this.calculateNextIndex(false);

    this.setState( {
      currentIndex: newIndex
    }
    );
  }

  nextSlide() {
    const newIndex = this.calculateNextIndex(true);

    this.setState( {
      currentIndex: newIndex
    }
    );
  }

  render() {
    return (
      <div className="carousel">
        <Arrow 
        direction="left"
        clickFunction={this.previousSlide}
        glyph="&#9664;"
        />

        <ImageSlide url={ this.props.imgURLs[this.state.currentIndex]} />

        <Arrow 
        direction="right"
        clickFunction={this.nextSlide}
        glyph="&#9654;"
        />
      </div>
    );
  }
}

const ImageSlide = function({url}) {
  // const styles = {
  //   backgroundImage: `url(${url})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center'
  // };

  return (
    <div className="image-slide">
      <img src={url} alt="Some Random Thing"></img>
    </div>
  );
}

const Arrow = function({direction, clickFunction, glyph}) {
  return (
    <button className={`slide-arrow ${direction}`}
    onClick={clickFunction}>
      {glyph}
    </button>
  );
}

export default PhotoCarousel;