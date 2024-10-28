import iconClose from '../assets/icon-close.svg';
export default function Lightbox({image}){
    return(
        <div className="absolute h-screen w-screen top-0 left-0">
            <div className="bg-[rgba(0,0,0,0.5)] h-full w-full"></div>
            <div className="flex flex-col items-end gap-5 absolute left-1/2 top-1/2 max-w-[500px] -translate-x-1/2 -translate-y-1/2">
                <button>
                    <svg width="30" height="30" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path height='100%' width='100%' d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" className='fill-[#ffffff] transition-colors hover:fill-orange-500 hover:stroke-orange-500' /></svg>
                    
                </button>
                <div>
                
                    <img src={image} alt="Lightbox image" className="rounded-3xl" />
                </div>
            </div>
        </div>
    );
}