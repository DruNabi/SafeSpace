import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/common/Navigation'
import ErrorBoundary from './components/common/ErrorBoundary'
import Home from './components/pages/Home'
import RantRoom from './components/pages/RantRoom'
import MyRants from './components/pages/MyRants'
import EchoWall from './components/pages/EchoWall'
import CopingToolkit from './components/pages/CopingToolkit'
import ProgressGarden from './components/pages/ProgressGarden'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
        {/* Decorative flowers */}
        <div className="flower-decoration flower-top-left">🌸</div>
        <div className="flower-decoration flower-top-right">🌹</div>
        <div className="flower-decoration flower-bottom-left">🌺</div>
        <div className="flower-decoration flower-bottom-right">🌷</div>

        <Navigation />
        <main className="container mx-auto px-4 py-8 relative z-10">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rant-room" element={<RantRoom />} />
              <Route path="/my-rants" element={<MyRants />} />
              <Route path="/echo-wall" element={<EchoWall />} />
              <Route path="/coping-toolkit" element={<CopingToolkit />} />
              <Route path="/progress-garden" element={<ProgressGarden />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </BrowserRouter>
  )
}
