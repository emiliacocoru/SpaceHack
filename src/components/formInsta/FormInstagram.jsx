import React, {useEffect, useState} from 'react'
import AddPicture from '../pictures/AddPicture';
import ProgressBar from '../progressbar/ProgressBar';
import './forminstagram.css';

import logo from '../../assets/images/instagram.png';
import { render } from '@testing-library/react';


const FormInstagram = () => {
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

    const saveText = () => {
        // do something here
    }
    
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

    const hashtags = [
        'mere', 'pere', 'cirese', 'mere', 'pere', 'cirese'
    ]
    return (
        <div>
            {result ? 
            // starea initiala a proiectului
            <div class="containerInsta">
                 <div class="logoInsta">
                    <div>
                        <img src={logo} alt="company logo" />
                    </div>
                </div>
                <div class="twoInsta">
                    
                    <div> Add your first post here: </div>
                    <form>
                        <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                        <label for="nme"></label>
                    </form>
                    <AddPicture />
                </div>

                <div className="alignButtons">
                    <button className="buttonInsta" onClick={saveText}>Save text</button>
                    <button className="buttonInsta" onClick={showResults}>Generate</button>
                </div>
            </div> : 
            // resultatele obtinute prin compararea postarilor
            <div class="containerInsta">
                <div class="twoInsta">

              
                </div>


                <button className="buttonInsta" onClick={showResults}>Try again</button>  
            </div>
            }
        </div>
    )
}

export default FormInstagram
