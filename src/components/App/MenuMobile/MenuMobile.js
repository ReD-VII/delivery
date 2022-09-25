import React, { useState } from 'react'

// Component ./Style
import { MenuContent } from './style'


import menuIcon from './icons/menu.svg'
import bagIcon from './icons/bag.svg'
import favoritosIcon from  './icons/favorito.svg'
import userIcon from './icons/user.svg'
 

import menuIconInto from './icons/menuInto.svg'
import bagIconInto from './icons/bagInto.svg'
import favoritosIconInto from  './icons/favoritoInto.svg'
import userIconInto from './icons/userInto.svg'



const MainMenu = () => {
    const pageAtive = 'bag'


    const [ menuActive, setMenuActive ] = useState()
    console.log(menuActive)
    return(
        <MenuContent page={menuActive}>
            <div >
                {menuActive == 'home' ? <img className='icons' src={menuIconInto} /> :<img onClick={()=> setMenuActive('home')} className='icons' src={menuIcon} />}              
            </div>
            <div >
                {menuActive == 'user' ? <img className='icons' src={userIconInto} /> : <img onClick={()=> setMenuActive('user')} className='icons' src={userIcon} />} 
            </div>
            <div >
                {menuActive == 'favoritos' ? <img className='icons' src={favoritosIconInto} /> : <img onClick={()=> setMenuActive('favoritos')} className='icons' src={favoritosIcon} />} 
            </div>
            <div >
                {menuActive == 'bag' ? <img className='icons' src={bagIconInto} /> : <img onClick={()=> setMenuActive('bag')} className='icons' src={bagIcon} />} 
            </div>
        </MenuContent>
    )
}
export {MainMenu}