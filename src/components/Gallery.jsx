import { useState } from 'react';
function Gallery({handleClick,large,activeImage,thumbnails}){
    const [active,setActive] = useState(activeImage);
    return (
       <>
        <div className='max-w-[500px] mx-auto'>
             <div className='preview w-full '>
                <img src={large[active]} className='rounded-2xl' alt="product image" />
             </div>
             <div className='flex gap-5 mt-9'>
                {thumbnails.map((thumb,index) => <button onClick={()=>handleClick(index)} className={`w-full rounded-xl ${index == active ? 'border-2 border-orange-500' : ''}`}><img onMouseOver={()=>setActive(index)} className={`w-full cursor-pointer ${active == index? 'opacity-50': ' opacity-100'} rounded-md transition-opacity hover:opacity-50`} src={thumb} alt="Product Thumbnail" key={thumb}/> </button>)}
             </div>
        </div> 
        </>

        
    )
}

export default Gallery;