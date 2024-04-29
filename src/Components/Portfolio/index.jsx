import React from 'react'
import "./portfolio.css"

const Portfolio = ({profileData}) => {
  return (
    <>
    <div className='card-container absolute-center'>
    <img src='https://shubhbundela.com/wp-content/uploads/2023/08/DSC_8590-03-scaled.jpeg' className='card-container-img' />
    </div>
    <div className='card-titles'>
      <h1>SUBH BUNDELA</h1>
    {profileData.map((item)=>{
      return <p className='titles'>{item.title}</p>
    })}
    </div>
    </>
  )
}

export default Portfolio
