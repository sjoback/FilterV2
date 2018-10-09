import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import NewImg from '../../assets/images/new.png';
import './style.css';




class New extends Component {
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

      console.log(json);
      console.log(window.location.href);
   }




   render() {


      return (
         <div className="new">
            <p className="slider-titel">Senaste nytt</p>
               <Carousel
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
                     <div>
                     <img src={NewImg} className="thumbnail_img2" alt="" onClick={()=>this.operation()}/>
                     </div>
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


export default New;
