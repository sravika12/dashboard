
import { Link } from "react-router-dom";

import React from 'react';

function Hero(){
    return(
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5 ' id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>

            <div className='  row p-3 m-3' >
            <div className=' col-6 p-3 mb-5' >
                <h1 className='fs-3 mb-5'>Search for an answer or browse help topics to create a ticket</h1>
                <input  className='mb-5' placeholder="Eg. how do I activate F&O, why is my order getting rejected.."  /> 
                <br/>
                <a href="" style={{margin:"15px"}}>Track account opening</a>
                <a href=""  style={{margin:"15px"}}>Track segment activation</a>
                <a href=""  style={{margin:"15px"}} >Intraday margins</a><br/><br/>
                <a href=""style={{marginLeft:"10px"}} >Kite user manual</a>
            </div>
            <div className=' col-6 p-3' >
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li style={{marginBottom:"10px"}}>
                    <a href="">Current Takeovers and Delisting-January 2024</a>
                    </li>
                    <li>
                    <a href="">Latest Intraday leverages-MIS & CO</a>

                    </li>
                </ol>

            </div>
            </div>

        </section>
    );
}

export default Hero;