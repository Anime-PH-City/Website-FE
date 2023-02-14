import React from 'react'
import MainLayout from "components/mainlayout";
import Articles from './Articles';


const Blog = () => {
  return (
    <MainLayout>
        <div className='h-[150px]'></div>
        <div className='bg-otaku-blog-hero h-[250px] w-[100vw] bg-cover flex justify-center p-[4%]  items-end mb-4'>
            <h1 className = "font-bold text-5xl text-white">Bl<span className='text-otaku-red-1'>og</span></h1>
        </div>
        <Articles />
    </MainLayout>
  )
}

export default Blog