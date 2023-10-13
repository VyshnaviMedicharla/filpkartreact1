import React from'react';
import '../App';
import ma from '../images/topoffer.webp'
import mb from '../images/mobiles.webp'
import mc from '../images/ele.webp'
import md from '../images/tv.webp'
import me from '../images/fashion.webp'
import mf from '../images/beauty.webp'
import mg from '../images/home.webp'
import mh from '../images/fur.webp'
import mi from '../images/fli.webp'
import mj from '../images/gro.webp'
function Menu(){
    return(
        <>
        <div className='row mt-2 com1'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;