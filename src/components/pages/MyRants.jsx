import { useState, useEffect } from 'react'

export default function MyRants() {
  const [myRants, setMyRants] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRants = () => {
      const savedRants = JSON.parse(localStorage.getItem('rants') || '[]')
      savedRants.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      setMyRants(savedRants)
      setLoading(false)
    }

    loadRants()

    window.addEventListener('rantAdded', loadRants)
    window.addEventListener('rantDeleted', loadRants)
    return () => {
      window.removeEventListener('rantAdded', loadRants)
      window.removeEventListener('rantDeleted', loadRants)
    }
  }, [])

  const deleteRant = (id) => {
    try {
      const savedRants = JSON.parse(localStorage.getItem('rants') || '[]')
      const filtered = savedRants.filter(r => r.id !== id)
      localStorage.setItem('rants', JSON.stringify(filtered))
      window.dispatchEvent(new Event('rantDeleted'))
    } catch (error) {
      console.error('Error deleting rant:', error)
    }
  }

  const formatTimestamp = (ts) => {
    const date = new Date(ts)
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">My Rants</h1>
        <p className="text-gray-600">
          Your personal collection of emotional expressions. Track your feelings over time and see your progress.
        </p>
      </section>

      {loading ? (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="text-2xl">Loading...</div>
        </div>
      ) : myRants.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No rants yet</h2>
          <p className="text-gray-600">
            Visit the Rant Room to start expressing your feelings. They'll appear here so you can look back on your journey.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {myRants.map((rant) => (
            <div
              key={rant.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed mb-3">{rant.content}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">{formatTimestamp(rant.timestamp)}</span>
                    {rant.sharedToEchoWall && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                        🌊 Shared to Echo Wall
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteRant(rant.id)}
                className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
              >
                Delete ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {myRants.length > 0 && (
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">📊 Your Journey</h3>
          <p className="text-sm text-gray-700 mb-3">
            You've shared <span className="font-bold text-blue-600">{myRants.length}</span> rants. Each one is a step towards understanding yourself better.
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-purple-600">{myRants.filter(r => r.sharedToEchoWall).length}</span> of them have helped others feel less alone. 💜
          </p>
        </div>
      )}
    </div>
  )
}
