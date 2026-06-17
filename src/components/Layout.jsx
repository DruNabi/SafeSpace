import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-500'
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-2xl">🌿</div>
              <h1 className="text-2xl font-bold text-purple-700">SafeSpace</h1>
            </Link>
            <p className="text-sm text-gray-500">Your mental wellness sanctuary</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex gap-6 border-t border-purple-100 pt-4">
            <Link 
              to="/" 
              className={`pb-2 font-medium transition-colors ${isActive('/')}`}
            >
              🌿 Home
            </Link>
            <Link 
              to="/rant" 
              className={`pb-2 font-medium transition-colors ${isActive('/rant')}`}
            >
              💬 Rant Room
            </Link>
            <Link 
              to="/toolkit" 
              className={`pb-2 font-medium transition-colors ${isActive('/toolkit')}`}
            >
              🛠️ Toolkit
            </Link>
            <Link 
              to="/garden" 
              className={`pb-2 font-medium transition-colors ${isActive('/garden')}`}
            >
              🌸 Garden
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-purple-100 mt-12 py-6 text-center text-sm text-gray-500">
        <p>SafeSpace © 2024 • Take care of yourself ✨</p>
      </footer>
    </div>
  )
}

export default Layout
