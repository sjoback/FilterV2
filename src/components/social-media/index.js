import React, { Component } from 'react';
import './style.css';

// Imgs
import twitter from '../../assets/images/icons/tw.png';
import ig from '../../assets/images/icons/ig.png';
import fb from '../../assets/images/icons/fb.png';


class SocialMedia extends Component {
   render() {

      return (
         <div className="social-media">
            <a href="https://twitter.com/magasinetfilter" className="media-circle twitter"><img className="twitter-img" src={twitter} alt="" /></a>
            <a href="https://www.facebook.com/magasinetfilter/" className="media-circle facebook"><img className="twitter-img" src={fb} alt="" /></a>
            <a href="https://www.instagram.com/magasinetfilter/" className="media-circle instagram"><img className="twitter-img" src={ig} alt="" /></a>
         </div>
      );
   }
}

export default SocialMedia;
