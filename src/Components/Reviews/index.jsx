import React from 'react'
import './review.css'

const imageData = [
    {
        id:1,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/Screenshot-2023-09-16-121610.png"
    },
    {
        id:2,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/Screenshot-2023-09-16-121532.png"
    },
    {
        id:3,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/new.png"
    },
    {
        id:4,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/Screenshot-2023-09-16-121417.png"
    }
]
const Review = () => {
  return (
    <>
        <h1 className='m-1 p-1'>STUDENT REVIEWS</h1>
        <div className='images-grid'>
            {imageData.map((item)=>{
                return <div className='img-ctr'>
                    <img src={item.img} alt="img" className='ctr-img' />
                </div>
            })}
        </div>
    </>
  )
}

export default Review
