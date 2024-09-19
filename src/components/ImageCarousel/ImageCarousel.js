import React, {useState, useEffect, useRef} from "react";
import {useFetch} from "./useFetch";

// const data = ["image1", "image2", "image3", "image4"];

const URL = "https://api.slingacademy.com/v1/sample-data/photos";

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, loading, error] = useFetch(URL);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            // console.log("inside setInterval:: ", data)
            if(data && data.photos && data.photos.length) {
                console.log("incsiddee :::: ", currentIndex);
                handleCurrentIndexChange('inc');
            }
        }, 2000);
        return () => {
            clearInterval(timerRef.current);
        }
    }, [data, currentIndex]);

    const handleCurrentIndexChange = (type) => {
        if(type === 'dec') {
            currentIndex <= 0 ? setCurrentIndex(data.photos.length) : setCurrentIndex((currentIndex) => currentIndex - 1);
        } else if(type === 'inc') {
            currentIndex > 4 ? setCurrentIndex((currentIndex) => currentIndex=0) : setCurrentIndex((currentIndex) => currentIndex + 1);
        }
    }

    return (
        <>
            {/* {console.log("data is ", data)} */}
            <button onClick={() => handleCurrentIndexChange('dec')}>Previous</button>
            <span>{data && data.photos && data?.photos[currentIndex]?.url}</span>
            <button onClick={() => handleCurrentIndexChange('inc')}>Next</button>

            {/* <img src="https://api.slingacademy.com/public/sample-photos/1.jpeg" /> */}
        </>
    )
}