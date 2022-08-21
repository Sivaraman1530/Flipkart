import { Component} from "react";
import data1 from "./components/iimagedata"
import Itemone from "./components/itemsbar1";
import "./item.css"
import ad from "./ad.jpg"


export default class Item extends Component{
   
   constructor(props){
    super(props)
    this.state={
        time:new Date().getHours()>12? new Date().getHours()-12 : new Date().getHours(),
        minutes:new Date().getMinutes(),
        seconds:new Date().getSeconds()
    }
}
componentDidMount() {
    setInterval(() => {
      this.setState({
        time:new Date().getHours()>12? new Date().getHours()-12 : new Date().getHours(),
        minutes:new Date().getMinutes(),
        seconds:new Date().getSeconds()
      });
    }, 1000);
  }
   render(){
return (
    <div>
    <div className="dod">
        <h3>Deals of the day {this.state.time}:{this.state.minutes}:{this.state.seconds} left</h3>
        <div className='cart'>
                     <a href='/'><button>
                         <span>View All</span> 
                     </button></a>
                 </div>
    </div>
     <div className="Item">
           <Itemone/>
     </div>
     <div className="ad">
        <a href="ad"><img src={ad}/></a> 
     </div>  
    </div>
)
   }
}