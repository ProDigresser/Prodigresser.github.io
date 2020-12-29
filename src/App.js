import React from 'react'
import './styles/style.scss'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Exp from './components/Exp'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return <main>
    < Intro />
    < Nav />
    < Projects />
    < Skills />
    < Exp />
    < About />
    < Contact />
    <div className="footer">
      <p>Lovingly crafted by Laurence Walshe <span className="green">//</span> 2020 <span className="green">//</span> In React.js 16.13</p>
    </div>
  </main>
}

export default App