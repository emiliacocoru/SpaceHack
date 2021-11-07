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
        {hastag:'mere'},
        {hastag:'pere'},
        {hastag:'cirese'},
        {hastag:'visini'}

    ]
    return (
        <div>
            <div className="containerInsta">

                <div className="textClass">
                    <div> Add your post here: </div>
                    <form>
                        <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                        <label for="nme"></label>
                    </form>

                    <button className="buttonInsta" onClick={saveText}>Generate</button>
                </div>

                <div className="logoInsta">
                        <img src={logo} alt="company logo" />
                </div>
                <div>
                    <AddPicture />
                    <button className="buttonInsta" onClick={showResults}>Generate</button>
                </div>
            </div>
            {result ? 
            <div class="container">
                <h2>Try this hashtags in your next post:</h2>
                <div>
                    {hashtags.map(item => (
                        <div>{item.hastag}</div>
                        ))}
                </div>

                
            </div>
            : <div></div>
            }
        </div>
    )
}

export default FormInstagram
