import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import RantRoom from './pages/RantRoom'
import CopingToolkit from './pages/CopingToolkit'
import ProgressGarden from './pages/ProgressGarden'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rant" element={<RantRoom />} />
          <Route path="/toolkit" element={<CopingToolkit />} />
          <Route path="/garden" element={<ProgressGarden />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
