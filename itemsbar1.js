import { Component,createRef} from "react";
import data1 from "./iimagedata";
import "./itemsbar1.css";
import larrow from   "../larrow.png"
export default class Itemone extends Component{
  constructor(props){
    super(props)
    this.state={index: 0,
                slide :data1[0].map(function(e, i){
                  return(
                    <div>
                      <div id="itemone" className="itemone">
                      <a href={e.href}><div className="card"><img src={e.src} /><div className="name">{e.name}</div>
                      <div className="off">{e.off}</div><div className="cat">{e.cat}</div></div></a>
                      </div>
                      </div>
                  )
                })
    }
}
// handleShow() {
//   document.getElementById('row1').scrollTo({
//     top: 100,
//     left: 100,
//     behavior: 'smooth'
//   })
// }
render(){
    return (<div> <div className="row1"> {this.state.slide}</div>
                  <div className="la"><button ><img src={larrow}/></button></div>
                  <div className="ra"><button><img src={larrow}/></button></div>
       </div>)
}
}
