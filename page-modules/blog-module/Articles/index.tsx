import React from 'react'
import Article from './Article'
import dp from "../../../public/assets/imgs/display-picture.png"
import blogImage from "../../../public/assets/imgs/sample-blog-image.png"



const Articles = () => {
  return (
    <div className='w-[77%] m-auto mt-[50px] mb-20'>
        <div className='w-[100%] flex justify-end items-start text-otaku-blue-1 font-bold text-2xl'>Latest</div>
        <div>
            <Article 
                image = {dp}
                username = "House of Gold"
                userId='zamani'
                articleTitle='The Hype that October 
                brings to the Otaku 
                Community'
                articleIntro='With the expected realese of multiple long awaited anime serise and movies the thought to be discontinued Bleach anime is said to make a return along with others '
                articleImage={blogImage}
            />
            <Article 
                image = {dp}
                username = "House of Gold"
                userId='zamani'
                articleTitle='The Hype that October 
                brings to the Otaku 
                Community'
                articleIntro='With the expected realese of multiple long awaited anime serise and movies the thought to be discontinued Bleach anime is said to make a return along with others '
                articleImage={blogImage}
            />
        </div>
    </div>
  )
}

export default Articles