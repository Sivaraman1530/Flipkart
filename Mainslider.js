import { Component } from "react";
import data from "./components/imagedata"
import Slider from "./components/Slider";
import "./Mainslider.css"
import larrow from   "./larrow.png"

export default class Mainslider extends Component{
   constructor(props){
       super(props)
       this.state={
           slideIndex : 0
       }
   }
   autoplay() {
    this.setState({
      slideIndex: this.state.slideIndex === data.length-1 ? 0 : this.state.slideIndex + 1
    });
  }
  larrow(){
    this.setState({
      slideIndex: this.state.slideIndex === 0 ? data.length-1 : this.state.slideIndex - 1
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.autoplay();
    }, 3000);
  }
   render(){
return (
    <div>
    <div className="Slider">
            <Slider slideIndex={this.state.slideIndex}/>
     </div>
     <div className="la"><button onClick={()=>this.larrow()}><img src={larrow}/></button></div>
     <div className="ra"><button onClick={()=>this.autoplay()}><img src={larrow}/></button></div>
      {/* <div>
      <Dots slideIndex={this.state.slideIndex} />
    </div>
     <div className='main'>
            content
           </div> */}
    </div>
)
   }
}