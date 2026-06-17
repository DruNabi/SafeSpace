import { useState } from 'react'

function Home() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [moodEntries, setMoodEntries] = useState([])
  
  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😌', label: 'Calm', value: 'calm' },
    { emoji: '😔', label: 'Sad', value: 'sad' },
    { emoji: '😤', label: 'Angry', value: 'angry' },
    { emoji: '😰', label: 'Anxious', value: 'anxious' },
    { emoji: '😴', label: 'Tired', value: 'tired' },
  ]
  
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood)
    const newEntry = {
      id: Date.now(),
      mood: mood,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString()
    }
    setMoodEntries([newEntry, ...moodEntries])
    
    // Reset selection after a moment
    setTimeout(() => setSelectedMood(null), 500)
  }
  
  const todayEntries = moodEntries.filter(entry => entry.date === new Date().toLocaleDateString())
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold text-purple-900 mb-3">How are you feeling today?</h2>
        <p className="text-gray-600 mb-8">Check in with your mood—it's private and judgment-free</p>
        
        {/* Mood Chips */}
        <div className="flex flex-wrap gap-4 justify-center">
          {moods.map(mood => (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood)}
              className={`p-4 rounded-2xl transition-all transform ${
                selectedMood?.value === mood.value
                  ? 'scale-125 bg-purple-100 ring-2 ring-purple-600'
                  : 'bg-white border-2 border-purple-200 hover:border-purple-400 hover:scale-110'
              }`}
            >
              <div className="text-4xl mb-2">{mood.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{mood.label}</div>
            </button>
          ))}
        </div>
      </section>
      
      {/* Today's Check-ins */}
      <section>
        <h3 className="text-xl font-semibold text-purple-900 mb-4">Your Check-ins Today</h3>
        {todayEntries.length === 0 ? (
          <div className="card text-center py-8">
            <p className="text-gray-500">No check-ins yet. Start by selecting a mood above! 💜</p>
          </div>
        ) : (
          <div className="space-y-3">
            {todayEntries.map(entry => (
              <div key={entry.id} className="card flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{entry.mood.emoji}</span>
                  <div>
                    <p className="font-medium text-purple-900">{entry.mood.label}</p>
                    <p className="text-sm text-gray-500">{entry.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      
      {/* Wellness Tips */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-3">💡 Daily Wellness Tip</h3>
        <p className="text-gray-700">Take 3 deep breaths right now. In through your nose for 4 counts, hold for 4, out through your mouth for 6. Your body will thank you. ✨</p>
      </section>
    </div>
  )
}

export default Home
