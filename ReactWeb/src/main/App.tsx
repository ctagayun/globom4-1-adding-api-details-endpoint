//import { useState } from 'react'

/* 
   This version aims to update the screen data by using
   shared state, caching, controlled re-fetches and retries.
   In addition this version of the app will prevent HouseList hook
   to execute each time it is used.
*/
import HouseList from '../house/HouseList'
import './App.css'
import Header from './Header'

function App() {

  return (
    //container is a bootstrap class that will serve as container
    //for the rest of the layout
    <div className="container">
      <Header subtitle="Providing houses all over the world"/>
      <HouseList />
    </div>
   )
}

export default App
