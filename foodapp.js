import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import img from './image.jpg'; 
const Pageheader = () => {
    return(
        <>
        <div className="header">
        <div >
                <img className='logo'
                src="https://static.vecteezy.com/system/resources/previews/008/659/362/non_2x/minimalist-fast-food-design-free-vector.jpg"/>
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search "/>
                </div>
                <div>
                <img className='right'
                src={img}/>
            </div>

        </div>
        </>
    )
}
const htmlRoot = document.getElementById("app-container");
const rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<Pageheader/>);