import React from "react";
import { useNavigate } from 'react-router-dom';
function Header() {
    let navigate = useNavigate()
    return (
        <header>
            <div className="icon" onClick={() => {
                navigate('/')
            }}>BToo</div>
        </header>
    )
}
export default Header;