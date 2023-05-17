import "./Navbar.css"
import CartWidget from "../cartwidget/CartWidget"


function Navbar() {
    return (
        <nav>
            <img src="/logo_transparent.png" className="logo"></img>
            <div className="Options">
                <h2 className="Views">Productos</h2>
                <h2 className="Views">Quienes somos</h2>
                <h2 className="Views">Local</h2>
                <h2 className="Views">Contacto</h2>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default Navbar