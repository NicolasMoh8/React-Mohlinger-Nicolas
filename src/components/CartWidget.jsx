import cart from './assets/carrito.png'
const styles ={
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color: "blue",
        paddingLeft: 20,
    }
}

export const CartWidget =()=>(
    <>
    <img src={cart} style={styles.img} alt="carrito" /> 
    <span style={styles.span}>0</span>
    </>
)

