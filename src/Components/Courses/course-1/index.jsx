import React from 'react'
import './course1.css'
import Slider from 'react-slick'
import NextArrow from '../../Carousel/nextArrow'
import PrevArrow from '../../Carousel/prevArrow'
import Skill from '../../skills'


const courseImg = [
    {
        id:1,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_2968.00_34_06_13.Still004-768x432.jpg"
    },
    {
        id:2,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_3002.00_00_51_22.Still003-768x432.jpg"
    },
    {
        id:3,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/09/Screenshot-2023-09-12-205922-768x431.png"
    },
    {
        id:4,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_3002.00_05_18_14.Still003-768x432.jpg"
    },
    {
        id:5,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_2968.00_17_10_07.Still001-768x432.jpg"
    },
    {
        id:6,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_2386.00_02_57_13.Still001-768x432.jpg"
    },
    {
        id:7,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_3002.00_16_37_08.Still001-768x432.jpg"
    },
    {
        id:8,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_2968.00_34_06_13.Still004-768x432.jpg"
    },
    {
        id:9,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_3002.00_23_46_12.Still004-768x432.jpg"
    },
    {
        id:10,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_2968.00_35_39_06.Still007-768x432.jpg"
    },
    {
        id:11,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/08/Nested-Sequence-01.00_04_10_13.Still003-768x432.jpg"
    },
    {
        id:12,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/09/DSC_2386.00_04_37_11.Still004-768x432.jpg"
    },
    {
        id:13,
        Img: "https://shubhbundela.com/wp-content/uploads/2023/09/Screenshot-2023-09-12-210327-768x432.png"
    }
  ]

const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />
  };

const FirstCourse = () => {
  return (
    <>
    <div className='course-main'>
    <div className='course-first absolute-center p-1'>
        <div className='course-info p-1'>
        <h2>MAKE QUALITY VIDEOS</h2>
        <p className='op-1'>By subh Bandela</p>
        <h2 className='btn m-2'>Open Course</h2>
        </div>
        <div className='card'>
            <img src="https://shubhbundela.com/wp-content/uploads/2023/08/DSC_8637-01-02-1536x864.jpeg" alt="img" className='card-image' />
        </div>
    </div>
    </div>
        <Slider {...settings}>
            {courseImg.map((course)=>{
                return <div>
                    <div className='course-img-ctr'>
                        <img src={course.Img} alt="img" className='cour-img' />
                    </div>
                </div>
            })}
        </Slider>
        <div className="course-highlight p-1">
            <h3 className='course-hl-txt'>
            Videos are super popular. This course helps both newbies and experts make better videos with just a few tools
            </h3>
        </div>
    </>
  )
}

export default FirstCourse
