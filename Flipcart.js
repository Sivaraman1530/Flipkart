import Mainslider from './Mainslider';
import Nav from './Nav'
import Subnav from './Subnav'
import Item from './item'

function Home(){

        return(
            <div>
              <Nav/>
              <Subnav />
              <Mainslider />
              <Item/>
            </div>      
        );
    
    }
    
 export default Home;