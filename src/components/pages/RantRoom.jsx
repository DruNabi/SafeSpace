import { useState } from 'react'
import { generateAIResponse } from '../../utils/mockAI'

export default function RantRoom() {
  const [rant, setRant] = useState('')
  const [response, setResponse] = useState('')
  const [showResponse, setShowResponse] = useState(false)
  const [shareToEchoWall, setShareToEchoWall] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRelease = async () => {
    if (rant.trim().length === 0) return

    setIsLoading(true)

    // Generate AI response (mock)
    const aiResponse = generateAIResponse(rant)
    setResponse(aiResponse)
    setShowResponse(true)
    setSubmitted(true)
    setIsLoading(false)

    // Save rant to localStorage instead of Firestore
    try {
      const savedRants = JSON.parse(localStorage.getItem('rants') || '[]')
      savedRants.push({
        id: Date.now().toString(),
        content: rant,
        timestamp: new Date().toISOString(),
        sharedToEchoWall: shareToEchoWall
      })
      localStorage.setItem('rants', JSON.stringify(savedRants))
      
      window.dispatchEvent(new Event('rantAdded'))
    } catch (error) {
      console.error('Error saving rant:', error)
    }
  }

  const handleNewRant = () => {
    setRant('')
    setResponse('')
    setShowResponse(false)
    setShareToEchoWall(false)
    setSubmitted(false)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Rant Room</h1>
        <p className="text-gray-600">
          This is your private, judgment-free space. Let it all out. Everything you share here is anonymous and confidential.
        </p>
      </section>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        {!submitted ? (
          <>
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              What's on your mind?
            </label>
            <textarea
              value={rant}
              onChange={(e) => setRant(e.target.value)}
              placeholder="Write freely. No one is judging. This is your safe space..."
              className="w-full h-48 p-4 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none font-normal"
            />

            <div className="mt-6 space-y-4">
              <button
                onClick={handleRelease}
                disabled={rant.trim().length === 0 || isLoading}
                className="w-full bg-gradient-to-r from-burgundy-600 to-purple-700 text-white font-bold py-3 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    AI is thinking...
                  </>
                ) : (
                  <>
                    Release & Get Support 💨
                  </>
                )}
              </button>

              <label className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200 cursor-pointer hover:bg-purple-100 transition-colors">
                <input
                  type="checkbox"
                  checked={shareToEchoWall}
                  onChange={(e) => setShareToEchoWall(e.target.checked)}
                  className="w-5 h-5 accent-purple-600 cursor-pointer"
                />
                <div>
                  <p className="font-medium text-gray-800">Share to Echo Wall (Optional)</p>
                  <p className="text-sm text-gray-600">Let others know they're not alone in feeling this way</p>
                </div>
              </label>
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">Your feelings:</h3>
              <p className="text-gray-700 italic">{rant}</p>
            </div>

            {showResponse && (
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-400">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💚</span>
                  SafeSpace Response
                </h3>
                <p className="text-gray-800 leading-relaxed">{response}</p>
              </div>
            )}

            {shareToEchoWall && (
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-900">
                  ✓ Your message was shared to the Echo Wall. Others will see that they're not alone.
                </p>
              </div>
            )}

            <button
              onClick={handleNewRant}
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Share Another Rant
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
