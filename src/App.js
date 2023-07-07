import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemCount } from './components/ItemCount';






export default function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting='Bienvenidos a su tienda de mascotas' />}
          />
          <Route
            path="/tipo/:id"
            element={<ItemListContainer greeting='Bienvenidos a su tienda de mascotas' />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer/>}
          />
        </Routes>

        <br />
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        <br />
        
      </BrowserRouter>

    </div>
  );
}


