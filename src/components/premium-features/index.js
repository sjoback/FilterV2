import React, { Component } from 'react';
import './style.css';
import Download from '../../assets/images/icons/download.png';
import Bookmark from '../../assets/images/icons/bookmark.svg';
import Articles from '../../assets/images/icons/articles.svg';
import Avatar from '../../assets/images/icons/avatar.svg';
import Edit from '../../assets/images/icons/edit.svg';
import Adfree from '../../assets/images/icons/adfree.svg';

class PremiumFeatures extends Component {
  render(){
    return (
      <div className="premium-features">
        <ul>
          <li>
            <img src={Download} />
            <p className="first-text">Ladda ner artiklarna.</p>
            <p className="second-text">Läs när och var du vill.</p>
          </li>
          <li>
            <img src={Bookmark} />
            <p className="first-text">Placera ut ditt bokmärke.</p>
            <p className="second-text">Fortsätt där du slutade.</p>
          </li>
          <li>
            <img src={Articles} />
            <p className="first-text">Få tillgång till alla artiklar.</p>
            <p className="second-text">Tillgång till hela vårt sortiment.</p>
          </li>
          <li>
            <img src={Avatar} />
            <p className="first-text">Personalisera ditt innehåll.</p>
            <p className="second-text">Organisera innehållet.</p>
          </li>
          <li>
            <img src={Edit} />
            <p className="first-text">Läs efter dina preferenser.</p>
            <p className="second-text">Ändra textstorlek och färger.</p>
          </li>
          <li>
            <img src={Adfree} />
            <p className="first-text">Ingen reklam.</p>
            <p className="second-text">Njut av att läsa utan distraktioner.</p>
          </li>
        </ul>
      </div>
    )
  }
};

export default PremiumFeatures;
