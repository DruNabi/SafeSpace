import { useState } from 'react'

function ProgressGarden() {
  const [stats] = useState({
    totalCheckIns: 24,
    thisWeek: 8,
    streak: 5,
    favoriteRant: 'Rant Room',
    topMood: 'Calm',
    toolsUsed: 12,
  })
  
  // SVG Flower Garden Component
  const FlowerGarden = ({ count = 15 }) => {
    const flowers = Array.from({ length: Math.min(count, 20) }, (_, i) => ({
      id: i,
      x: Math.random() * 85 + 7,
      y: Math.random() * 70 + 20,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      delay: i * 0.1,
    }))
    
    return (
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#e9d5ff', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#fce7f3', stopOpacity: 0.3 }} />
          </linearGradient>
          <linearGradient id="grass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#dcfce7' }} />
            <stop offset="100%" style={{ stopColor: '#bbf7d0' }} />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="400" height="300" fill="url(#sky)" />
        
        {/* Grass */}
        <rect y="220" width="400" height="80" fill="url(#grass)" />
        
        {/* Flowers */}
        {flowers.map(flower => (
          <g
            key={flower.id}
            transform={`translate(${flower.x}, ${flower.y}) rotate(${flower.rotation})`}
            opacity={Math.min((flower.id + 1) / 5, 1)}
          >
            {/* Stem */}
            <line x1="0" y1="0" x2="0" y2={flower.size * 0.8} stroke="#22c55e" strokeWidth="2" />
            
            {/* Petals */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <circle
                key={i}
                cx={Math.cos((angle * Math.PI) / 180) * (flower.size * 0.3)}
                cy={Math.sin((angle * Math.PI) / 180) * (flower.size * 0.3)}
                r={flower.size * 0.2}
                fill={`hsl(${270 + i * 15}, 70%, 60%)`}
              />
            ))}
            
            {/* Center */}
            <circle cx="0" cy="0" r={flower.size * 0.15} fill="#fbbf24" />
          </g>
        ))}
      </svg>
    )
  }
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-6">
        <h2 className="text-3xl font-bold text-purple-900 mb-3">Your Progress Garden</h2>
        <p className="text-gray-600">Watch your wellness journey blossom with each step you take</p>
      </section>
      
      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card text-center">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-gray-600 text-sm mb-1">Total Check-ins</p>
          <p className="text-3xl font-bold text-purple-600">{stats.totalCheckIns}</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-2">🔥</div>
          <p className="text-gray-600 text-sm mb-1">Current Streak</p>
          <p className="text-3xl font-bold text-purple-600">{stats.streak} days</p>
        </div>
        <div className="card text-center">
          <div className="text-4xl mb-2">💜</div>
          <p className="text-gray-600 text-sm mb-1">This Week</p>
          <p className="text-3xl font-bold text-purple-600">{stats.thisWeek} check-ins</p>
        </div>
      </div>
      
      {/* Mood & Engagement Stats */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold text-purple-900 mb-3">😌 Your Top Mood</h3>
          <p className="text-2xl font-bold text-purple-600 mb-2">{stats.topMood}</p>
          <p className="text-sm text-gray-600">Appearing most in your check-ins this month</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-purple-900 mb-3">🛠️ Tools Explored</h3>
          <p className="text-2xl font-bold text-purple-600 mb-2">{stats.toolsUsed}</p>
          <p className="text-sm text-gray-600">Coping techniques you've discovered</p>
        </div>
      </div>
      
      {/* Garden Visualization */}
      <div className="card p-6 border-2 border-purple-300 bg-gradient-to-b from-purple-50 to-pink-50">
        <h3 className="font-semibold text-purple-900 mb-4 text-center">🌸 Your Wellness Garden</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          Each check-in and tool used plants a seed. Watch your garden grow! 🌱
        </p>
        <FlowerGarden count={Math.ceil(stats.totalCheckIns / 3)} />
      </div>
      
      {/* Achievements */}
      <section>
        <h3 className="text-xl font-semibold text-purple-900 mb-4">🏆 Achievements</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card border-l-4 border-yellow-400">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌱</span>
              <div>
                <h4 className="font-semibold text-purple-900">First Steps</h4>
                <p className="text-sm text-gray-600">Completed your first check-in</p>
              </div>
            </div>
          </div>
          <div className="card border-l-4 border-green-400">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <h4 className="font-semibold text-purple-900">On Fire</h4>
                <p className="text-sm text-gray-600">5-day check-in streak</p>
              </div>
            </div>
          </div>
          <div className="card border-l-4 border-blue-400">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎨</span>
              <div>
                <h4 className="font-semibold text-purple-900">Explorer</h4>
                <p className="text-sm text-gray-600">Tried 10+ coping tools</p>
              </div>
            </div>
          </div>
          <div className="card border-l-4 border-purple-400">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💬</span>
              <div>
                <h4 className="font-semibold text-purple-900">Voice</h4>
                <p className="text-sm text-gray-600">Shared in the Rant Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reflection Prompt */}
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-3">🌟 Reflection</h3>
        <p className="text-gray-700 mb-4">
          You've made great progress on your mental wellness journey. Take a moment to acknowledge how far you've come.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Remember:</strong> Progress isn't linear. Some days are harder than others, and that's okay. 💜
        </p>
      </section>
    </div>
  )
}

export default ProgressGarden
