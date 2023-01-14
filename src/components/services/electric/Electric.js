import React from 'react'
import './Electric.css';
import GrainSampler from "../../../assets/complete_probe.png";
import Probe from '../../../assets/probe.png';

const Electric = () => {
  return (
    <>
      <div className="makina">
        <div className="image-section">
          <a href="#">
            <img src={GrainSampler} />
          </a>
        </div>

        <div className="description-section">
          <span>
           
          </span>
        </div>
      </div>
      <div className="makina">
        <div className="image-section">
          <a href="#">
            <img src={Probe} />
          </a>
        </div>

        <div className="description-section">
          <span>
            
          </span>
        </div>
      </div>
    </>
  )
}

export default Electric