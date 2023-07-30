# My Friendly Pet - Aplicación de tienda de mascotas de e-commerce.
My Friendly Pet es una aplicación web de e-commerce que permite a los usuarios generar órdenes de compra de alimento balanceado para mascotas.

Esta construida con React.js y se integra con Firebase y Firestore para almacenar las órdenes de compra y datos del usuario.

# Características:

Contiene una página de inicio donde se muestra un listado de productos de alimento balanceado para mascotas disponible. Los usuarios pueden navegar a través de los productos y ver sus detalles.

Al hace click en un producto, el usuario accede a la página de detalles del producto, donde puede ver una descripción detalalda, el precio y otra incformación relevante. Al seleccionar la cantidad que desea y presionando en "Agregar al carrito" le muestra el precio total. Luego tiene la opcion de finalizar la compra o seguir comprando.

En el carrito, el usuario puede revisar los productos seleccionados, pudiendo eliminar el que ya no desea o limpiar el carrito por completo, dandole la posibilidad en éste último caso, de volver a la página de inicio y continuar comprando.

Una vez que decide finalizar la compra, precionando en "Checkout", el usuario debe completar el formulario colocando su nombre, número de teléfono y dirección de correo electrónico. El formulario incluye una validación para garantizar que todos los campo estén completos. Luego el usuario hace click en el boton "Enviar" para enviar su pedido. 

La aplicación guarda la información del pedido, incluida la propiciada por el usuario, los articulos del carrito y el precio total en la base de datos de Firestore.

Al enviar el pedido de forma correcta, el usuario recibe dicha confirmación y le brinda el ID de pedido.

Por último, al enviar con éxito del pedido, la aplicación borra los datos del carrito.


