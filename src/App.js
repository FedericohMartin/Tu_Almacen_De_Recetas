import React from 'react'
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import {Navbar} from './components/Navbar'
import Nosotros from './components/Nosotros'
import Menu from './components/Menu'
import Suscrip from './components/Suscrip'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>

      <main className="App-main mt-2">
        <Switch>
          {/* Componentes sin parametros */}                 
          <Route path="/Menu" component={Menu} />
          <Route path="/Suscrip" component={Suscrip} />

          {/* Componentes para rutas no definidas */}
          <Route component={Nosotros} />
        </Switch>
      </main>

      <footer>
          <Footer/>
      </footer>
    </div>

  );
}

export default App;
