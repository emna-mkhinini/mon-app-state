import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NotificationToas from './components/Notification'
export default function App() {
  const { theme } = useContext(ThemeContext);

  // La classe "light" ou "dark" choisit les couleurs définies dans index.css
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main className="main-layout">
        <ProductList />
        <Cart />
      </main>
       <NotificationToas />
    </div>
  );
}
