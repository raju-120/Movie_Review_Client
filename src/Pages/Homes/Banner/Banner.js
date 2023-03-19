import React from 'react';
import img1 from '../../../Assets/Banner/img1.jpg'
import img2 from '../../../Assets/Banner/img2.jpg'
import img3 from '../../../Assets/Banner/img3.png'
import img4 from '../../../Assets/Banner/img4.jpg'
import img5 from '../../../Assets/Banner/img5.jpg'
import img6 from '../../../Assets/Banner/img6.jpg'
import img7 from '../../../Assets/Banner/img7.png'
import img8 from '../../../Assets/Banner/img8.jpg'
import img9 from '../../../Assets/Banner/img9.avif'
import img10 from '../../../Assets/Banner/img10.jpg'
import img11 from '../../../Assets/Banner/img11.jpg'
import img12 from '../../../Assets/Banner/img12.jpg'
import img13 from '../../../Assets/Banner/img13.jpg'
import img14 from '../../../Assets/Banner/img14.jpg'
import img15 from '../../../Assets/Banner/img15.jpeg'
import BannerItem from './BannerItem';


const Banner = () => {
    
     const bannerData = [
        {
            image: img1,
            prev: 15,
            id: 1,
            next: 2,
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3,
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4,
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5,
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6,
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 7,
        },
        {
            image: img7,
            prev: 6,
            id: 7,
            next: 8,
        },
        {
            image: img8,
            prev: 7,
            id: 8,
            next: 9,
        },
        {
            image: img9,
            prev: 8,
            id: 9,
            next: 10,
        },
        {
            image: img10,
            prev: 9,
            id: 10,
            next: 11,
        },
        {
            image: img11,
            prev: 10,
            id: 11,
            next: 12,
        },
        {
            image: img12,
            prev: 11,
            id: 12,
            next: 13,
        },
        {
            image: img13,
            prev: 12,
            id: 13,
            next: 14,
        },
        {
            image: img14,
            prev: 13,
            id: 14,
            next: 15,
        },
        {
            image: img15,
            prev: 14,
            id: 15,
            next: 1,
        },
    ] 

    return (
        <div >
            
            <div className="carousel w-full">
                {
                    bannerData.map(slide =><BannerItem
                    key={slide.id}
                    slide={slide}></BannerItem>)
                }

               
                
            </div>
        </div>
    );
};

export default Banner;