import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// Images
import Fav from '../../assets/images/fav.png';
import ContinueImg from '../../assets/images/continue.png';
import Download from '../../assets/images/icons/download.png';
import close from '../../assets/images/icons/close.svg';
import Arrow from '../../assets/images/icons/right-arrow.png';
import SportImg from '../../assets/images/sport.png';



import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class Sport extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         shown: false
      }
      this.handlechange = this.handlechange.bind(this);
   }

   handlechange(e) {
      this.setState({input: e.target.value});
      console.log(this.state.input);
   }


   operation(){
      this.setState({
         shown: !this.state.shown
      })
   }

   componentWillMount() {
      this._fetchData();
   }

   _fetchData = async () => {
      const response = await fetch('http://localhost:3000/stories/?genre=fortsätt');
      const json = await response.json();

      this.setState({
         data: json
      });
   }


   render() {
      return (
         <div className="fortsätt" onClick={()=>this.operation()}>

            <p className="slider-titel">Sport</p>

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
                  <img src={SportImg} className="thumbnail_img2" alt="" onClick={()=>this.operation()}/>
                  </div>
               ))}
            </Carousel>


            {
               this.state.shown?
               <div className="storyInfo">

                  <div className="storyinfo-header">
                     <p className="storyinfo-header-title">Storstadsdryll</p>
                     <p className="storyinfo-header-time">Lästid 15 min</p>
                     <img src={Fav} className="storyinfo-header-fav" alt="" />
                  </div>

                  <div className="download">
                     <img src={Download} className="download-img" alt="" />
                     <p className="download-text">Ladda ned</p>
                     <p className="download-size">74 MB</p>
                  </div>

                  <div className="storyinfo-content">
                     <p className="storyinfo-content-title">Storstadsdryll</p>
                     <p className="storyinfo-content-text">Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Suspendisse id semper ipsum. Praesent eget laoreet odio. Nam at risus lobortis, commodo eros et, molestie ante. Etiam nec tellus velit. Proin id diam odio. Sed id velit a massa malesuada tristique vitae sit amet est. Suspendisse id semper ipsum. Praesent eget laoreet odio.</p>

                     <button className="read-storyinfo-content btn">
                        <NavLink to="/article"><p className="right-arrow-text">Läs artikel</p></NavLink>
                        <img src={Arrow} className="right-arrow" alt="" />
                     </button>
                  </div>

                  <img src={close} className="close-storyInfo" alt="" onClick={()=>this.operation()} />
               </div>
               :null
            }

            {
               this.state.shown?
               <div className="storyInfo-overlay" alt="" onClick={()=>this.operation()}></div>
               :null
            }

         </div>


      );
   }
}


export default Sport;
