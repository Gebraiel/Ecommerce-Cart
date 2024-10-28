import logo from '../assets/logo.svg';
import avatar from '../assets/image-avatar.png';
import Cart from './Cart';
import Menu from './Menu';
function Header(){
  return (
    <header className='flex justify-between items-center py-5 border-b'>
      <div className='flex gap-3 md:flex-row-reverse'>
        <Menu />

        <a>
          <img src={logo} alt="" />
        </a>
       
      </div>
      <div>
        <div className='flex gap-5 items-center'>
          <Cart />

          <img src={avatar} alt="Avatar" className="w-10 cursor-pointer border-2 rounded-full hover:border-orange-300"/>
        </div>
      </div>
    </header>
  )

}

export default Header;