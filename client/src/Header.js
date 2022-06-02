import React from "react";


//шапка страницы
function Header() {
    return(
        <header className="text-white bg-dark py-3">
            <div className="container d-flex justify-content-between">
                <a href="#" className="logo">LOGO</a>
                <nav>
                    <a href="#" className="headmargin">Главная</a>
                    <a href="#" className="ml-5">Корзина</a>
                </nav>
            </div>
        </header>
    )
}

export default Header