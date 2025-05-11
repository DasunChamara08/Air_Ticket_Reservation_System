// Carousel.jsx
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Font Awesome React icons
import { SiRclone } from 'react-icons/si';
import DutyFree from '../../assets/DutyFree1.png'; // adjust path as needed
import Insurance from '../../assets/Insurance1.png';
import Meal from '../../assets/Meal11.png';
import NFree from '../../assets/NFree.jpg';
import Space from '../../assets/Space.jpg';




const Carousel = () => {
  const slideRef = useRef(null); // Reference to the slide container

  // Function to go to the next slide
  const handleNext = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]);
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div className="scontainer">
      <div className="slide" ref={slideRef}>
        {/* Slide Items */}
        <div className="item" style={{ backgroundImage: `url(${DutyFree})` }}>
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Insurance})` }}>
          <div className="content">
            <div className="name">Finland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Meal})` }}>
          <div className="content">
            <div className="name">Iceland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${NFree})` }}>
          <div className="content">
            <div className="name">Australia</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${Space})` }}>
          <div className="content">
            <div className="name">Netherland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        
      </div>

      {/* Navigation Buttons */}
      <div className="button">
        <button className="prev" onClick={handlePrev}><FaArrowLeft /></button>
        <button className="next" onClick={handleNext}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Carousel;
