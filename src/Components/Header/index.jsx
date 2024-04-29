import React, { useState } from 'react'
import "./header.css"
import MenuOptions from './MenuOptions'

const menuData = [
    {
        Img:"https://cdn.hugeicons.com/icons/home-03-stroke-rounded.svg" ,
        name: "Home",
        id: 1
    },
    {
        id:2,
        Img: "https://cdn.hugeicons.com/icons/course-stroke-rounded.svg",
        name: "Courses"
    },
    {
        id:3,
        Img: "https://cdn.hugeicons.com/icons/user-account-stroke-rounded.svg" ,
        name: "My Account"
    },
    {
        id:4,
        Img: "https://cdn.hugeicons.com/icons/dashboard-square-edit-stroke-rounded.svg",
        name: "Dashboard"
    },
    {
        id:5,
        Img: "https://cdn.hugeicons.com/icons/registered-stroke-rounded.svg",
        name: "Registration"
    },
    {
        id:6,
        Img: "https://cdn.hugeicons.com/icons/shopping-cart-01-stroke-rounded.svg" ,
        name: "Cart"
    }
]

const Header =()=>{

    const [activeMenu, setactiveMenu] = useState(false)
    const ToggleBtn =()=>{
        setactiveMenu(!activeMenu)
    }
    return(
        <>
            <div className='header-container'>
                {!activeMenu && <p>Subh Bandela</p>}
                {!activeMenu && <p className='btn absolute-center'>Explore courses</p>}
                <p className='cur-pointer' onClick={ToggleBtn}>Menu</p>
            {activeMenu && <MenuOptions />}
            </div>
        </>
    )
}
export default Header