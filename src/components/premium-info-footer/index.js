import React, { Component } from 'react';
import './style.css';
import Correct from '../../assets/images/icons/correct.svg';
import PremiumIcon from '../../assets/images/icons/crown.svg';
import FreeIcon from '../../assets/images/icons/gift.png';

class PremiumInfoFooter extends Component {
  render(){
    return (
      <div className="premium-footer">
        <div className="premium-info-footer">
          <img className="premium-icon" src={PremiumIcon} />
          <div className="footer-header-1">Premiumkonto</div>
          <div className="footer-price-text">
            <div className="price">79,00 kr</div>
            <div className="month">/mån</div>
          </div>
            <ul>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Ladda ner artiklarna</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Placera ut ditt bokmärke</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Få tillgång till alla artiklar</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Personalisera ditt innehåll</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Läs efter dina preferenser</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Ingen reklam</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Filtrering</p>
              </li>
            </ul>
          </div>

          <div className="free-info-footer">
          <img className="free-icon" src={FreeIcon} />
          <div className="footer-header-2">Gratiskonto</div>
          <div className="footer-price-text">
            <div className="price">00,00 kr</div>
            <div className="month">/mån</div>
          </div>
            <ul>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Begränsat innehåll</p>
              </li>
              <li>
                <img className="correct" src={Correct} />
                <p className="info-text">Filtrering</p>
              </li>
              <li>
                <img className="correct-opacity" src={Correct} />
                <p className="p-opacity">Få tillgång till alla artiklar</p>
              </li>
              <li>
                <img className="correct-opacity" src={Correct} />
                <p className="p-opacity">Personalisera ditt innehåll</p>
              </li>
              <li>
                <img className="correct-opacity" src={Correct} />
                <p className="p-opacity">Läs efter dina preferenser</p>
              </li>
              <li>
                <img className="correct-opacity" src={Correct} />
                <p className="p-opacity">Ingen reklam</p>
              </li>
              <li>
                <img className="correct-opacity" src={Correct} />
                <p className="p-opacity">Ladda ner artiklarna</p>
              </li>
              <li>
                <img className="correct-opacity" src={Correct} />
                <p className="p-opacity">Placera ut ditt bokmärke</p>
              </li>
            </ul>
            <div className="skaffa-premium">Skaffa premium</div>
          </div>
      </div>
    )
  }
};

export default PremiumInfoFooter;
