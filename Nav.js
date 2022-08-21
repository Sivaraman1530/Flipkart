import './Nav.css';

function Nav(){
      return(
          <div>
          <div className="topnav" >
             <ul>
                 <li>
                     <div className='logo'>
                         <a href='#' style={{textDecoration:"none"}}>
                         <div className='logo1' style={{color:"white"}}><span><i>Flipkart</i></span></div>
                         <div className='logo2'><a href='/'><span style={{color:"white" , fontSize:"10px"}}>Explore</span> <span style={{color:"yellow" , fontSize:"10px"}}>plus </span></a><i class="fa fa-plus" style={{color:"white" , fontSize:"12px"}}></i> </div>
                         </a>
                     </div>
                 </li>
                 <li>
                     <div className='search'>
                         <input type="text" placeholder='Search for products,brands and more'/>
                     </div>
                 </li>
                 <li className='searchbtn'>
                     <button>
                        <i class="fa fa-search"></i>
                     </button>
                 </li>
                 <li className='login'>
                     <button>
                         <i>Login</i>
                     </button>
                 </li>
                 <li className='menu'>
                     <div className='more'>
                     <button>
                         <span>More <i id='arrow' class="fa fa-angle-down" style={{fontSize:"13px"}}></i></span> 
                     </button>
                     <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                     </div>
                     </div>
                 </li>
                 <li className='cart'>
                     <a href='/'><button>
                         <span><i class="fa fa-shopping-cart"></i> Cart</span> 
                     </button></a>
                 </li>
             </ul>
          </div>
          </div>
      )
}

export default Nav;