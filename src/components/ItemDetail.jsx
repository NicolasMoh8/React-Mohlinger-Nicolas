
const styles = {
    img: {
        height: "20rem",
        width: "auto",
    },
}
export const ItemDetail = ({ articulo }) => {
    return (
        <>
            <div className='bg-success text-center text-xl'>
                <h1 className='bg-warning'>{articulo.nombre}</h1>
                <br />
                <div className='border'>
                    <h5>{articulo.kilos}</h5>
                    <h5>{articulo.etapa}</h5>
                    <h5>{articulo.tipo}</h5>
                    <h5>${articulo.precio}</h5>
                </div>
                <img className='bg-light' src={articulo.imagen} style={styles.img} alt={articulo.nombre} />
            </div>
        </>
    )
}



