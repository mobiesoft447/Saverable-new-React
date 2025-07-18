import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery1-text3">
                  Explore Our Dog Puzzles and Toys Gallery
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery1-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery1-text4">
                  Browse through our collection of engaging and interactive dog
                  puzzles and toys. Keep your furry friend entertained and
                  mentally stimulated with our products.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1584513727612-d7b63876b18c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1Nzk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1675130081414-26632af657e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1Nzk0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Happy dog solving a puzzle game',
  image3Src:
    'https://images.unsplash.com/photo-1513904178077-6c5730ddd446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1Nzk0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image1Alt: 'Dog playing with a puzzle toy',
  image2Alt: 'Various dog puzzles on display',
  content1: undefined,
}

Gallery1.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Gallery1
