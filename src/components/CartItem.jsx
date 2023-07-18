



export const CartItem = ({ id, nombre, precio, quantity }) => {
    return (
        <div>
            <h3>{nombre}</h3>
            <p>ID: {id}</p>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
            <h3>Total: ${quantity*precio}</h3>
        </div>
    );
};