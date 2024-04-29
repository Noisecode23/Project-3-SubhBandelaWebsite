import React from 'react'
import Header from '../../Components/Header'
import Card from '../../Components/Common/card'
import Portfolio from '../../Components/Portfolio'
import Footer from '../../Components/Footer'
import Courses from '../../Components/Courses'
import Skill from '../../Components/skills'
import Review from '../../Components/Reviews'
import Wallpaper from '../../Components/Wallpapers'

const profileData = [
    {
        title: "Youtuber",
        id:1
    },
    {
        id:2,
        title: "Filmmaker"
    },
    {
        id:3,
        title: "Editor"
    }
]
const Home =()=>{
    return(
        <>
        <Header />
       <Portfolio profileData={profileData} />
       <Courses />
       <Review />
       <Wallpaper />
       <Footer />
        </>
    )
}

export default Home