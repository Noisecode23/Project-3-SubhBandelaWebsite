import React from 'react'
import './wallpaper.css'
const dataImg = [
    {
        id:1,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201008-768x512.jpg"
    },
    {
        id:2,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201658-768x512.jpg"
    },
    {
        id:3,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201355-768x512.jpg"
    },
    {
        id:4,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201039-768x512.jpg"
    },
    {
        id:5,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201053-768x512.jpg"
    },
    {
        id:6,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201320-768x512.jpg"
    },
    {
        id:7,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201229-768x512.jpg"
    },
    {
        id:8,
        img: "https://shubhbundela.com/wp-content/uploads/2023/09/20230806_201138-768x512.jpg"
    }
]
const Wallpaper = () => {
  return (
    <>
        <h1 className='p-1'>MY WALLPAPERS</h1>
        <div className='images-grid'>
            {dataImg.map((item)=>{
                return <div className='img-ctr p-3 h-1'>
                    <img src={item.img} alt="img" className='ctr-img'/>
                </div>
            })}
        </div>
        <h2 className='btn m-2 m-3 absolute-center'>DOWNLOAD</h2>
    </>
  )
}

export default Wallpaper
