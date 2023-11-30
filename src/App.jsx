import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer';
import ProductList from './components/productList';

function App() {

  return (
    <div className="App">
      <Header/>
      <ProductList/>
      <Footer/>
    </div>
    
  );
}

export default App;
