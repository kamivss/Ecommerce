import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/SideBar/SideBar.jsx'
import data from './db/data.jsx'
import ProductItem from './components/ProductItem.jsx'

function App() {

  return (
    <>
    <Header />
    <Sidebar />
    <section className="Products">
      <div className="product-list">
        {data.map((item, index) => (
          <ProductItem
            key={index}
            img={item.img}
            titulo={item.titulo}
            avaliaçao={item.avaliaçao}
            comentarios={item.comentarios}
            Preco={item.Preco}
            tipo={item.tipo}
            categoria={item.categoria}
          />
        ))}
      </div>
    </section>
  
    </>
  )
}

export default App
