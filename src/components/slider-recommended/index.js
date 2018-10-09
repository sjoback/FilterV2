import React, { Component } from 'react';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Reco from '../../assets/images/rekommenderat.png';

import './style.css';


class Recommended extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         show: false
      }
   }

   operation(){
      this.setState({
         show: !this.state.show
      })
   }

   componentWillMount() {
      this._fetchData();
   }

   _fetchData = async () => {
      const response = await fetch('http://localhost:3000/stories/?genre=samhälle');
      const json = await response.json();

      this.setState({
         data: json
      });
   }




   render() {
      return (
         <div className="recommended">
            <p className="slider-titel">Rekommenderat</p>
               <Carousel onClick={()=>this.operation()}

                  showThumbs={false}
                  showIndicators={false}
                  showArrows={false}
                  showStatus={false}
                  centerMode={true}
                  centerSlidePercentage={30}
                  swipeable={true}
                  dynamicHeight={false}
                  >
                                 { this.state.data.map(data => (
                                    <img src={Reco} className="thumbnail_img2" alt="" onClick={()=>this.operation()}/>
                                 ))}
               </Carousel>


            {
               this.state.show?
               <div className="storyInfo">
                  <button className="close-storyInfo" onClick={()=>this.operation()}>X</button>
               </div>
               :null
            }
            {
               this.state.show?
               <div className="storyInfo-overlay" onClick={()=>this.operation()}></div>
               :null
            }

         </div>


      );
   }
}


export default Recommended;
