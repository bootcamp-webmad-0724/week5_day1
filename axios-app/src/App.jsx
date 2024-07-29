import './App.css'
import CoastersListPage from './components/CoastersListPage/CoastersListPage'

import Navigation from "./components/Navigation/Navigation"
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/coasters" element={<CoastersListPage />} />

        <Route path="*" element={<h1>404 aw D:</h1>} />
      </Routes>

    </div>
  )
}

export default App