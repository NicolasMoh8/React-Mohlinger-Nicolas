import Container from 'react-bootstrap/Container';
const styles ={
    h1: {
        color: "white",
        
    },
    
}
export const ItemListContainer = (props)=>(
    <Container className='mt-5 bg-success d-flex align-items-center justify-content-center'>
        <h1 style={styles.h1}>{props.greeting}</h1>
    </Container>
) 