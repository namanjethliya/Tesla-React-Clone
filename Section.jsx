import React from 'react'
import SectionStyle from './SectionStyle.css'

function Section(props) {
  return (
    <div>
      <div className="model3" style={{backgroundImage: `url(${props.background})`}}>
        <div className="top">
          <h1>{props.name}</h1>
          <p>{props.tagline}</p>
        </div>
        <div className="bottom">
          <div className="button">
            <button className="custom">{props.leftbtn}</button>
            {props.name != 'Accessories' &&
              <button className="exist">{props.rightbtn}</button>
            }
          </div>
          { props.name === 'Model 3' &&
            <img src="tesla-images/down-arrow.svg" className="more" />
          }
        </div>
      </div>
    </div>

  )
}

export default Section