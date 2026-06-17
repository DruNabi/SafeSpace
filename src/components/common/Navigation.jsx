import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'text-purple-700 border-b-2 border-purple-500' : 'text-gray-600 hover:text-purple-600'

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl">🌸</div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              SafeSpace
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/" className={`pb-2 font-medium transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/rant-room" className={`pb-2 font-medium transition-colors ${isActive('/rant-room')}`}>
              Rant Room
            </Link>
            <Link to="/my-rants" className={`pb-2 font-medium transition-colors ${isActive('/my-rants')}`}>
              My Rants
            </Link>
            <Link to="/echo-wall" className={`pb-2 font-medium transition-colors ${isActive('/echo-wall')}`}>
              Echo Wall
            </Link>
            <Link to="/coping-toolkit" className={`pb-2 font-medium transition-colors ${isActive('/coping-toolkit')}`}>
              Toolkit
            </Link>
            <Link to="/progress-garden" className={`pb-2 font-medium transition-colors ${isActive('/progress-garden')}`}>
              Garden
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
