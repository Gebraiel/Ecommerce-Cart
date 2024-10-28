import { useState } from 'react';
import cartIcon from '../assets/icon-cart.svg';
import ItemsList from './ItemsList';
export default function Cart(){
    const [show,setShow] = useState(false);
    
    return(
        <div className='relative'>
            <button onClick={() => setShow(!show)}>
                <img src={cartIcon} alt="cart-icon" />
            </button>
            {
                show &&
                <div className='rounded shadow-lg mt-9 w-80 m-auto absolute right-0 top-full  py-3'>
                    <h3 className=' ps-3 pb-5 border-b'> Cart</h3>

                    <ItemsList />
                </div>
            }
        </div>
    )
}