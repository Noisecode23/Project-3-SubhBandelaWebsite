import React from 'react'
import './skill.css'
const courseData = [
    {
        id:1,
        img: "https://shubhbundela.com/wp-content/uploads/2023/08/DSC_9051-02-01-1536x864.jpeg",
        title: "Make clickable title  + Thumbnail",
        subTitle: "By Subh Bundela"
    },
    {
        id:2,
        img: "https://shubhbundela.com/wp-content/uploads/2023/08/InShot_20230819_142118455-1536x863.jpg",
        title: "FULL COURSE AND SOME EXTRA KNOWELDGE",
        subTitle: "By Subh Bundela"
    }
  ]
const Skill = () => {
  return (
    <>
    <div className='container-cr absolute-center'>
        {courseData.map((item)=>{
            return <div className='cr ' key={item.id}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <h2 className='btn m-1'>Open course</h2>
            </div>
        })}
    </div>
    </>
  )
}

export default Skill
