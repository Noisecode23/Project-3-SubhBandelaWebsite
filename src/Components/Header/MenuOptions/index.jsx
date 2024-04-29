import React from 'react'
import "./menuOptions.css"


const MenuOptions = () => {

  const menuData = [
    {
      id:1,
      Img:"https://cdn.hugeicons.com/icons/home-06-stroke-rounded.svg" ,
      title: "Home"
    },
    {
      id:2,
      Img: "https://cdn.hugeicons.com/icons/course-stroke-rounded.svg",
      title: "Courses"
    },
    {
      id:3,
      Img: "https://cdn.hugeicons.com/icons/user-account-stroke-rounded.svg",
      title: "My account"
    },
    {
      id:4,
      Img: "https://cdn.hugeicons.com/icons/dashboard-square-01-stroke-rounded.svg" ,
      title: "Dashboard"
    },
    {
      id:5,
      Img: "https://cdn.hugeicons.com/icons/register-stroke-rounded.svg",
      title: "Student Registration"
    },
    {
      id:6,
      Img: "https://cdn.hugeicons.com/icons/shopping-cart-01-stroke-rounded.svg",
      title: "Cart"
    }
  ]

  return (
    <>
    <div className='menu'>
      {menuData.map((item)=>{
        return(
          <div className='menu-options'>
            <h2>{item.title}</h2>
            <img src={item.Img} alt={item.title} className='menu-option-img ' data-scroll data-scroll-speed="0.2" />
          </div>
        )
      })}
    </div>
    </>
  )
}

export default MenuOptions
