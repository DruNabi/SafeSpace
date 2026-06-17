import { useState } from 'react'

function RantRoom() {
  const [rant, setRant] = useState('')
  const [rants, setRants] = useState([])
  const [selectedRant, setSelectedRant] = useState(null)
  const [aiResponse, setAiResponse] = useState('')
  const [echoWall, setEchoWall] = useState(false)
  
  const generateAIResponse = (text) => {
    // Simulated AI responses based on keyword detection
    const responses = [
      "I hear you. Your feelings are valid and important. 💜",
      "Thank you for sharing. It takes courage to express what you're feeling.",
      "I understand this is difficult. You're doing great by letting it out.",
      "Your emotions matter. You're not alone in what you're experiencing.",
      "I acknowledge your struggle. Let's focus on moving forward together.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  const handleRelease = () => {
    if (rant.trim()) {
      const response = generateAIResponse(rant)
      const newRant = {
        id: Date.now(),
        text: rant,
        response: response,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString(),
        shared: echoWall
      }
      setRants([newRant, ...rants])
      setAiResponse(response)
      setSelectedRant(newRant)
      setRant('')
    }
  }
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-6">
        <h2 className="text-3xl font-bold text-purple-900 mb-3">The Rant Room</h2>
        <p className="text-gray-600">A safe, private space to release what's on your mind. No judgment, no filters. Just you.</p>
      </section>
      
      {/* Rant Input */}
      <section className="card p-6 border-2 border-purple-200">
        <label className="block text-sm font-semibold text-purple-900 mb-3">Let it all out</label>
        <textarea
          value={rant}
          onChange={(e) => setRant(e.target.value)}
          placeholder="Write whatever you need to get off your chest. It's private and safe here..."
          className="input-calm h-32 mb-4"
        />
        
        {/* Echo Wall Toggle */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-purple-100">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={echoWall}
              onChange={(e) => setEchoWall(e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm font-medium text-gray-700">
              Share to Echo Wall (optional) - let others know they're not alone
            </span>
          </label>
        </div>
        
        {/* Release Button */}
        <button
          onClick={handleRelease}
          disabled={!rant.trim()}
          className={`w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Release 💨
        </button>
      </section>
      
      {/* AI Acknowledgment */}
      {selectedRant && (
        <section className="card bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">💜 We Hear You</h3>
          <p className="text-gray-700 mb-4">{aiResponse}</p>
          <p className="text-sm text-gray-500">
            You're taking a step toward healing by acknowledging your feelings. That takes strength.
          </p>
        </section>
      )}
      
      {/* Previous Rants */}
      {rants.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold text-purple-900 mb-4">Your Past Releases</h3>
          <div className="space-y-4">
            {rants.map(r => (
              <div key={r.id} className="card">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm text-gray-500">{r.time}</p>
                    {r.shared && <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full mt-1">Shared on Echo Wall</span>}
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{r.text}</p>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-300">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-purple-900">AI: </span>
                    {r.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Echo Wall */}
      {rants.some(r => r.shared) && (
        <section className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-4">🔄 Echo Wall - Community Support</h3>
          <p className="text-gray-700">Your shared releases help others know they're not alone. Anonymously.</p>
        </section>
      )}
    </div>
  )
}

export default RantRoom
