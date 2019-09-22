import React from 'react';
import './AboutMe.css';
import ProfilePhoto from '../../images/stock_profile.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMe">
        <h2>Hi, I'm Test User</h2>
        {/* Using text from Bacon Lorum Ipsum */}
        <div className="BioContent">
          <div className="BioDescription">
            <p>Spicy jalapeno bacon ipsum dolor amet tri-tip hamburger beef tongue prosciutto pig shank. </p>
            <p>Salami cupidatat shoulder pork loin. Meatball shankle short ribs culpa alcatra tail flank ribeye.</p>
            <p>Consectetur eu jerky, ut pastrami fugiat buffalo duis nulla shoulder esse aliquip incididunt deserunt.</p>
            <p>Short loin enim sint non, pork belly elit quis kielbasa sunt pancetta dolor ea est.</p>
            <p>Cupidatat ribeye tri-tip swine leberkas consectetur cow fatback ipsum.</p>
            <p>Turducken culpa boudin, brisket incididunt buffalo tongue alcatra frankfurter magna capicola exercitation pariatur. </p>
            <p>Nostrud laboris venison non cow sunt tenderloin picanha est flank tri-tip in. Eiusmod cillum venison commodo et fatback ipsum.</p>
          </div>
          <div className="BioPortrait">
            <img src={ProfilePhoto} alt="Random Person"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;