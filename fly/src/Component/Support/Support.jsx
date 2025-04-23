import React from 'react';
import gridImage from '../../assets/gridimage.jpg';


function Support() {
  return (
    <div className='support container section'>
      <div className="sectionContainer">
        
        <div className="titleDiv">
          <small>Travel Support</small>
          <h2>Plan Your Travel With Confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey</p>
        </div>

        {/* Main content area */}
        <div className="infoDiv grid">

          {/* Left side: Text with 01, 02, 03 in beautiful boxes */}
          <div className="textDiv">
            <div className="singleInfo appear delay1">
              <div className="badgeBox">
                <span className="number">01</span>
              </div>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey</p>
            </div>

            <div className="singleInfo appear delay2">
              <div className="badgeBox">
                <span className="number">02</span>
              </div>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey</p>
            </div>

            <div className="singleInfo appear delay3">
              <div className="badgeBox">
                <span className="number">03</span>
              </div>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey</p>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="imgDiv">
            <img src={gridImage} alt="Travel support visual" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
