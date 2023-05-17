import './CartWidget.css'

function CartWidget() {
 return (
   <div className='cartView'>
     <p>0</p>
     <img src="/cart.png" alt="carrito" className='cart' />
   </div>
 )
}

export default CartWidget