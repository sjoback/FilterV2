import React, { Component } from 'react';
import Cookies from 'universal-cookie';


// Components
import Search from '../../components/header/search/index';
import Burger from '../../components/header/menu-burger/index';
import Logo from '../../components/logo/index';


import Active from '../../assets/images/icons/reportage/active.svg';
import Inactive from '../../assets/images/icons/reportage/inactive.svg';


// Range slider
import InputRange from 'react-input-range';
import StepRangeSlider from 'react-step-range-slider';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';

// Images
import Prev from '../../assets/images/icons/prev.png';
import Next from '../../assets/images/icons/next.png';
import Play from '../../assets/images/icons/play.png';
import Close from '../../assets/images/icons/close.svg';
import Bookmark from '../../assets/images/icons/bokmärke.png';
import TooltipImg from '../../assets/images/icons/tooltip.png';

import headerImg from '../../assets/images/storyopen.png';

import Download from '../../assets/images/icons/reportage/white/download.svg';
import Share from '../../assets/images/icons/reportage/white/share.svg';
import Fav from '../../assets/images/icons/reportage/white/fav.svg';
import Theme from '../../assets/images/icons/reportage/white/theme.svg';
import FavFilled from '../../assets/images/icons/reportage/white/fav-ifylld.svg';



const cookies = new Cookies();

class Article extends Component {
   constructor() {
      super();
      this.state = {
         active: true,
         showTooltip: true,
         fontSize: '',
         bodyColor: "#1A1A1A",
         fontColor: "#FFF",
         showBookmark: false
      }
   }

   toggle() {
      this.setState({
         bodyColor: this.state.fontColor,
         fontColor: this.state.bodyColor,
         active: !this.state.active
      });
   }

   toggleFav() {
      this.setState({
         favPressed: !this.state.favPressed
      })
   }

   closeTooltip() {
      this.setState({showTooltip: false})
   }


   componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
      const bookmarkCookie = cookies.get('Y-pos');
      if(bookmarkCookie){
         window.scrollBy({
            top: bookmarkCookie,
            left: 0,
            behavior: 'smooth'
         });
      }
   }

   handleScroll(e) {
      if(window.pageYOffset > 250) {
         console.log('scrolled');
         this.setState({
            showBookmark: true,
         });
      } else {
         this.setState({
            showBookmark: false,
         });
      }
   }


   render() {

      const bookmarkCookie = cookies.get('Y-pos');

         function scrollYpos(){
            window.scrollBy({
               top: bookmarkCookie,
               left: 0,
               behavior: 'smooth'
            });
         }



      function rmCookie(){
         cookies.remove('Y-pos');
      }

      function setCookie(){
         const Ypos = document.documentElement.scrollTop;
         const cookies = new Cookies();
         cookies.set('Y-pos', Ypos, { path: '/' });
         console.log(Ypos);
      }

      const createSliderWithTooltip = Slider.createSliderWithTooltip;
      const Range = createSliderWithTooltip(Slider.Range);
      const Handle = Slider.Handle;

      const handle = (props) => {
         const { value, dragging, index, ...restProps } = props;

         return (
            <Tooltip
               prefixCls="rc-slider-tooltip"
               overlay={value}
               visible={false}
               placement="top"
               key={index}
               >
               <Handle value={value} {...restProps} />
            </Tooltip>
         );
      };

      return (
         <div className="reportage">
            <div className="bg-color">
               <Logo />
               <Burger />
               <Search />
            </div>
            <p className="timer">15 min</p>
            <div className="reportage-header">
               <img src={headerImg} className="reportage-header-img" alt="" />
               <div className="options-container">
                  <img src={Download} className="options-img" alt="" />
                  <img src={Share} className="options-img" alt="" />
                     {this.state.favPressed?
                           <img src={Fav} className="options-img" alt="" onClick={this.toggleFav.bind(this)} />
                        :(<img src={FavFilled} className="options-img" alt="" onClick={this.toggleFav.bind(this)} />)
                     }
                  {this.state.active?
                     <img src={Active} className="options-img" alt="" onClick={this.toggle.bind(this)} />
                     :(<img src={Inactive} className="options-img" alt="" onClick={this.toggle.bind(this)} />)
                  }
               </div>
            </div>

            <div className="font-container">
               <p className="font-change-icon-small">Aa</p>
               <p className="font-change-icon-large">Aa</p>
               <Slider
                  min={12}
                  max={32}
                  handle={handle}
                  defaultValue={16}
                  onChange={value => this.setState({
                     fontSize: value
                  })}
                  />
            </div>



            <div className="media-container">
               <div className="slider-container">
                  <Slider min={16} max={32} />
               </div>

               <img src={Prev} className="previous" alt="" />
               <img src={Play} className="play" alt="" />
               <img src={Next} className="next" alt="" />
            </div>

            <p className="reportage-text" style={{fontSize:this.state.fontSize, backgroundColor:this.state.bodyColor, color:this.state.fontColor}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero mi, ac malesuada nulla ullamcorper sit amet. Donec eget aliquam augue. Vestibulum lobortis scelerisque sem. Aliquam sagittis metus enim, ac tempor orci aliquam quis. Mauris sit amet condimentum mauris. Nulla facilisi. Maecenas tempor turpis mauris, feugiat auctor eros ullamcorper et. Curabitur gravida turpis sit amet quam faucibus, at venenatis justo blandit. Duis nec luctus odio. Donec feugiat finibus dapibus.
               <br/>
               <br/>
               Etiam sed iaculis erat, sed finibus ligula. In scelerisque convallis molestie. Maecenas ut nisl elit. Etiam laoreet, sem a aliquet lobortis, risus orci malesuada risus, vitae consequat orci risus at lacus. Ut ut quam ut ligula rutrum ullamcorper. Nam ligula arcu, venenatis maximus tortor nec, euismod sagittis nibh. Quisque et lorem mattis arcu placerat pharetra lacinia eu dui.
               <br/>
               <br/>
               Etiam sed iaculis erat, sed finibus ligula. In scelerisque convallis molestie. Maecenas ut nisl elit. Etiam laoreet, sem a aliquet lobortis, risus orci malesuada risus, vitae consequat orci risus at lacus. Ut ut quam ut ligula rutrum ullamcorper vitae consequat orci risus sem ut Ut ut quam ut ligula rutrum ullamcorper vitae consequat orci risus sem ut
               <br/>
               <br/>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero mi, ac malesuada nulla ullamcorper sit amet. Donec eget aliquam augue. Vestibulum lobortis scelerisque sem. Aliquam sagittis metus enim, ac tempor orci aliquam quis. Mauris sit amet condimentum mauris. Nulla facilisi. Maecenas tempor turpis mauris, feugiat auctor eros ullamcorper et. Curabitur gravida turpis sit amet quam faucibus, at venenatis justo blandit. Duis nec luctus odio. Donec feugiat finibus dapibus Maecenas tempor turpis mauris, feugiat auctor eros ullamcorper et. Curabitur gravida turpis sit amet quam
            </p>
            {this.state.showBookmark?
               <div>
               <img src={Bookmark} className="bookmark-btn" alt="" onClick={setCookie} />
               </div>
            :(null)}

         </div>
      );
   }
}

export default Article;
