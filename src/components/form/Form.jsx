import React, {useEffect, useState} from 'react'
import AddPicture from '../pictures/AddPicture';
import ProgressBar from '../progressbar/ProgressBar';
import './form.css';

import logo from '../../assets/images/home.png';
import { render } from '@testing-library/react';


const Form = () => {
    // const getData = () => {

    let results = false;

    const [images, setImages] = useState([]);
    const [result, setResult] = useState(true);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const showResults = () => {
        console.log('emi', results);
        setResult(prev => !prev);
    };
    
    const invisibile = {
        visibility: "hidden"
    }

    console.log(result)

    const testData1 = [
        { bgcolor: "#DE8971", completed: 60, platform: 'Instagram'},
        { bgcolor: "#7B6079", completed: 30, platform: 'Twitter' },
        { bgcolor: "#A7D0CD", completed: 53, platform: 'Facebook'},
        { bgcolor: "#506D84", completed: 89, platform: 'LinkedIn'},
      ];

    const testData2 = [
    { bgcolor: "#DE8971", completed: 20, platform: 'Instagram'},
    { bgcolor: "#7B6079", completed: 10, platform: 'Twitter' },
    { bgcolor: "#A7D0CD", completed: 89, platform: 'Facebook'},
    { bgcolor: "#506D84", completed: 99, platform: 'LinkedIn'},
    ];

    return (
        <div>
            {result ? 
            // starea initiala a proiectului
            <div class="container">
                <div class="two_form">
                    <div> Add your first post here: </div>
                    <form>
                        <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                        <label for="nme"></label>
                    </form>

                    <div class="top_logo">
                        <div>
                            <img src={logo} alt="company logo" />
                        </div>
                    </div>
                    <div> Add your second post here: </div>
                    <form>
                        <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                        <label for="nme"></label>
                    </form>
                </div>
                <button className="button-63" onClick={showResults}>Compare</button>
            </div> : 
            // resultatele obtinute prin compararea postarilor
            <div class="container">
                <div class="two_form">

                <div>
                    {testData1.map((item, idx) => (
                    <div>
                        <span>{item.platform}</span>
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
                    </div>
                    ))}
                </div>  

                <div class="top_logo">
                    <div>
                        <img src={logo} alt="company logo" />
                    </div>
                </div>


                <div>
                    {testData2.map((item, idx) => (
                    <div>
                        <span>{item.platform}</span>
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
                    </div>
                    ))}
                </div>
                </div>


                <button className="button-63" onClick={showResults}>Try again</button>  
            </div>
            }
        </div>
    )
}

export default Form
