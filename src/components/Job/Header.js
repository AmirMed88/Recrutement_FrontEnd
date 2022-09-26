import React from 'react'
import headerImg from '../images/bg-header-desktop.svg'
import Search from './Search'

function Header() {
    return (
        <div className="py-4 relative h-32 cyan">
            {/* <img src={headerImg}  /> */}
            <Search/>
        </div>
    )
}

export default Header
