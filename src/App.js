import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';

import { CartProvider } from './context/CartContext';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
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
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </CartProvider>

      </BrowserRouter>

    </div>
  );
}


