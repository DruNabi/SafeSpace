import { useState, useEffect } from 'react'
import FlowerGarden from '../ui/FlowerGarden'

export default function ProgressGarden() {
  const [stats, setStats] = useState({
    totalCheckIns: 12,
    currentStreak: 5,
    toolsLearned: 8,
    flowersGrown: 3,
  })

  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    // Generate flowers based on stats
    const generatedFlowers = Array(stats.flowersGrown).fill(null).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      color: ['#a855f7', '#d8b4fe', '#e9d5ff'][i % 3],
      size: 30 + Math.random() * 20
    }))
    setFlowers(generatedFlowers)
  }, [stats.flowersGrown])

  const handleGrowFlower = () => {
    setStats(prev => ({
      ...prev,
      flowersGrown: prev.flowersGrown + 1
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Progress Garden</h1>
        <p className="text-gray-600">
          Every check-in, every tool you learn, every moment of self-care grows your garden. Watch your wellness journey bloom.
        </p>
      </section>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 text-center">
          <div className="text-3xl mb-2">📊</div>
          <p className="text-sm text-gray-600 mb-1">Check-ins</p>
          <p className="text-3xl font-bold text-purple-700">{stats.totalCheckIns}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 text-center">
          <div className="text-3xl mb-2">🔥</div>
          <p className="text-sm text-gray-600 mb-1">Current Streak</p>
          <p className="text-3xl font-bold text-orange-700">{stats.currentStreak} days</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 text-center">
          <div className="text-3xl mb-2">🛠️</div>
          <p className="text-sm text-gray-600 mb-1">Tools Learned</p>
          <p className="text-3xl font-bold text-blue-700">{stats.toolsLearned}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 text-center">
          <div className="text-3xl mb-2">🌸</div>
          <p className="text-sm text-gray-600 mb-1">Flowers Grown</p>
          <p className="text-3xl font-bold text-green-700">{stats.flowersGrown}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-purple-900 mb-6">Your Wellness Garden</h2>
        <FlowerGarden flowers={flowers} />
      </div>

      <div className="text-center">
        <button
          onClick={handleGrowFlower}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105"
        >
          Plant a Flower 🌱
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Complete a wellness activity to grow your garden naturally
        </p>
      </div>
    </div>
  )
}
