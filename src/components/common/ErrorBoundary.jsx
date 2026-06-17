import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('🔴 SafeSpace Error:', error)
    console.error('Component stack:', info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-purple-50 p-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <div className="text-5xl mb-4">🌸</div>
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              SafeSpace ran into an error. Check your browser console (F12) for details.
            </p>
            <details className="text-left bg-red-50 rounded-lg p-3 mb-4 text-xs text-red-700 break-words">
              <summary className="cursor-pointer font-medium mb-1">Error details</summary>
              {this.state.error?.message}
            </details>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm hover:bg-purple-700 transition"
            >
              Reload App
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
