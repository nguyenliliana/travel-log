//import logo from './logo.svg';
import './App.css';
import data from "./data"

import React from "react"
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"

export default function App() {
  const entries = data.map(item => {
    return (
      <Entry
        title={item.title}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className="entries">
        {entries}
      </section>
    </div>
  )
}

