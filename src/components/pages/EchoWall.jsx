import { useState, useEffect } from 'react'

export default function EchoWall() {
  const [echoRants, setEchoRants] = useState([])
  const [reactions, setReactions] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRants = () => {
      const savedRants = JSON.parse(localStorage.getItem('rants') || '[]')
      const shared = savedRants.filter(r => r.sharedToEchoWall)
      shared.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      setEchoRants(shared)
      setLoading(false)
    }

    loadRants()

    const savedReactions = JSON.parse(localStorage.getItem('echoWallReactions') || '{}')
    setReactions(savedReactions)

    window.addEventListener('rantAdded', loadRants)
    window.addEventListener('rantDeleted', loadRants)
    return () => {
      window.removeEventListener('rantAdded', loadRants)
      window.removeEventListener('rantDeleted', loadRants)
    }
  }, [])

  const handleReaction = (rantId, reaction) => {
    const newReactions = { ...reactions }
    if (!newReactions[rantId]) {
      newReactions[rantId] = {}
    }
    newReactions[rantId][reaction] = (newReactions[rantId][reaction] || 0) + 1
    setReactions(newReactions)
    localStorage.setItem('echoWallReactions', JSON.stringify(newReactions))
  }

  const getReactionCount = (rantId, reaction) => {
    return reactions[rantId]?.[reaction] || 0
  }

  const formatTimestamp = (ts) => {
    const date = new Date(ts)
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Echo Wall</h1>
        <p className="text-gray-600">
          A community space where people share their struggles anonymously. You're not alone. 💜
        </p>
      </section>

      {loading ? (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="text-2xl">Loading...</div>
        </div>
      ) : echoRants.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="text-5xl mb-4">🌊</div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">The Echo Wall is quiet right now</h2>
          <p className="text-gray-600">
            Be the first to share your feelings and let others know they're not alone.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {echoRants.map((rant) => (
            <div
              key={rant.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border-l-4 border-purple-500"
            >
              <p className="text-gray-800 mb-4 leading-relaxed">{rant.content}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{formatTimestamp(rant.timestamp)}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleReaction(rant.id, 'support')}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 hover:bg-red-100 transition-colors"
                  >
                    <span>💗</span>
                    <span className="text-sm text-red-600 font-medium">{getReactionCount(rant.id, 'support')}</span>
                  </button>
                  <button
                    onClick={() => handleReaction(rant.id, 'strength')}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-50 hover:bg-yellow-100 transition-colors"
                  >
                    <span>💪</span>
                    <span className="text-sm text-yellow-600 font-medium">{getReactionCount(rant.id, 'strength')}</span>
                  </button>
                  <button
                    onClick={() => handleReaction(rant.id, 'hope')}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
                  >
                    <span>✨</span>
                    <span className="text-sm text-green-600 font-medium">{getReactionCount(rant.id, 'hope')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
