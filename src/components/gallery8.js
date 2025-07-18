import React from 'react'

import PropTypes from 'prop-types'

import './gallery8.css'

const Gallery8 = (props) => {
  return (
    <div
      className={`gallery8-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery8-max-width thq-section-max-width">
        <div className="gallery8-section-title"></div>
        <div className="gallery8-container">
          <div className="gallery8-content">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="true"
              className="gallery8-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide1 swiper-slide"
                >
                  <img
                    alt={props.image1Alt}
                    src={props.image1Src}
                    className="gallery8-image1 thq-img-ratio-4-3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide2 swiper-slide"
                >
                  <img
                    alt={props.image2Alt}
                    src={props.image2Src}
                    className="gallery8-image2 thq-img-ratio-4-3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide3 swiper-slide"
                >
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="gallery8-image3"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide4 swiper-slide"
                >
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="gallery8-image4"
                  />
                </div>
                <div
                  data-thq="slider-slide"
                  className="gallery8-slider-slide5 swiper-slide"
                >
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="gallery8-image5"
                  />
                </div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
              <div
                data-thq="slider-pagination"
                className="gallery8-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery8.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/imgpsh_fullsize_anim%20(14)-400h.png',
  image1Alt: 'Dog Puzzle Game',
  image2Src: '/imgpsh_fullsize_anim%20(15)-600w.png',
  image1Src: '/imgpsh_fullsize_anim%20(1)-400h.jpeg',
  imageSrc1: '/imgpsh_fullsize_anim_16_2_optimized_1000-400h.png',
  image2Alt: 'Interactive Dog Toy',
  imageAlt2: 'image',
  imageAlt1: 'image',
  rootClassName: '',
  imageSrc2: '/imgpsh_fullsize_anim_12-400h.png',
}

Gallery8.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  imageSrc1: PropTypes.string,
  image2Alt: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default Gallery8
