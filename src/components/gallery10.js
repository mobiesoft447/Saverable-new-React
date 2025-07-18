import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery10.css'

const Gallery10 = (props) => {
  return (
    <div className="gallery10-gallery3 thq-section-padding">
      <div className="gallery10-max-width thq-section-max-width">
        <div className="gallery10-section-title">
          <h2 className="gallery10-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery10-text3">
                  Explore Our Collection of Dog Puzzle Games
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery10-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery10-text4">
                  Watch dogs have fun while solving puzzles to find hidden
                  treats.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery10-container">
          <div className="gallery10-content">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery10-image1 thq-img-ratio-4-6"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery10-image2 thq-img-ratio-4-6"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery10-image6 thq-img-ratio-4-6"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery10-image7 thq-img-ratio-4-6"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery10.defaultProps = {
  image4Alt: 'Close-up of a dog interacting with a puzzle game',
  image4Src:
    'https://images.unsplash.com/photo-1697988528239-0cb79e34d18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1ODY3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image1Alt: 'Dog playing with puzzle game',
  image3Src:
    'https://images.unsplash.com/photo-1606336031680-e49e51511de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1ODY3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image2Alt: 'Various Nina Ottosson dog puzzle games',
  image2Src:
    'https://images.unsplash.com/photo-1516934406976-ac3b5ceca2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1ODY2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Dog enjoying a treat after solving a puzzle',
  image1Src:
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzg1ODY2OXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery10.propTypes = {
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Gallery10
