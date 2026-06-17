import { useState } from 'react'

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null)

  const moods = [
    { emoji: '😊', label: 'Great', color: 'from-green-100 to-green-50' },
    { emoji: '🙂', label: 'Good', color: 'from-blue-100 to-blue-50' },
    { emoji: '😐', label: 'Neutral', color: 'from-gray-100 to-gray-50' },
    { emoji: '😔', label: 'Sad', color: 'from-purple-100 to-purple-50' },
    { emoji: '😤', label: 'Frustrated', color: 'from-orange-100 to-orange-50' },
  ]

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood)
    setTimeout(() => {
      setSelectedMood(null)
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4">
          Welcome to SafeSpace
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A calm place for your mental wellness journey. Let's start by checking in with how you're feeling today.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow-lg p-12 mb-8">
        <h2 className="text-2xl font-semibold text-purple-900 mb-8 text-center">How are you feeling?</h2>
        <div className="grid grid-cols-5 gap-4">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleMoodSelect(mood)}
              className={`
                group relative flex flex-col items-center justify-center p-6 rounded-xl
                transition-all duration-300 ease-out
                ${selectedMood?.label === mood.label
                  ? `bg-gradient-to-br ${mood.color} ring-2 ring-purple-500 scale-110`
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-md hover:scale-105'
                }
              `}
            >
              <span className="text-5xl mb-2">{mood.emoji}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                {mood.label}
              </span>
              {selectedMood?.label === mood.label && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  ✓
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <div className="text-3xl mb-2">💭</div>
          <h3 className="font-semibold text-purple-900 mb-2">Rant Room</h3>
          <p className="text-sm text-gray-700">
            A safe space to express your feelings without judgment.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="text-3xl mb-2">🛠️</div>
          <h3 className="font-semibold text-blue-900 mb-2">Coping Toolkit</h3>
          <p className="text-sm text-gray-700">
            Discover healthy techniques to manage your emotions.
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <div className="text-3xl mb-2">🌱</div>
          <h3 className="font-semibold text-green-900 mb-2">Progress Garden</h3>
          <p className="text-sm text-gray-700">
            Watch your wellness journey bloom and grow.
          </p>
        </div>
      </section>
    </div>
  )
}
