import { useState } from 'react';
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg';


const thumbnails =[
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4
]

function Gallery({large}){
    const [active,setActive] = useState(0);
    return (
        <div className='max-w-[500px] mx-auto'>
             <div className='preview w-full '>
                <img src={large[active]} className='rounded-2xl' alt="product image" />
             </div>
             <div className='flex gap-5 mt-9'>
                {thumbnails.map((thumb,index) => <div className={`w-full rounded-xl ${index == active ? 'border-2 border-orange-500' : ''}`}><img onMouseOver={()=>setActive(index)} className={`w-full cursor-pointer ${active == index? 'opacity-50': ' opacity-100'} rounded-md transition-opacity hover:opacity-50`} src={thumb} alt="Product Thumbnail" key={thumb}/> </div>)}
             </div>
        </div> 
        
        
    )
}

export default Gallery;