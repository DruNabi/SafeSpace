import { useState, useMemo } from 'react'

function CopingToolkit() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const tools = [
    { id: 1, name: 'Box Breathing', category: 'breathing', icon: '🫁', description: '4-4-4-4 count breathing to calm your nervous system' },
    { id: 2, name: 'Grounding (5-4-3-2-1)', category: 'grounding', icon: '🌍', description: 'Notice 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste' },
    { id: 3, name: 'Body Scan', category: 'mindfulness', icon: '🧘', description: 'Slowly scan and relax each part of your body' },
    { id: 4, name: 'Progressive Muscle Relaxation', category: 'relaxation', icon: '💪', description: 'Tense and release muscle groups progressively' },
    { id: 5, name: 'Journaling Prompts', category: 'creative', icon: '📝', description: 'Guided questions to explore your emotions' },
    { id: 6, name: 'Visualization', category: 'mindfulness', icon: '🌅', description: 'Picture your safe place in vivid detail' },
    { id: 7, name: 'Cold Water Splash', category: 'grounding', icon: '💧', description: 'Shock your system back to the present moment' },
    { id: 8, name: 'Music Therapy', category: 'creative', icon: '🎵', description: 'Listen to music that matches or shifts your mood' },
    { id: 9, name: 'Movement/Dance', category: 'physical', icon: '💃', description: 'Move your body to release tension' },
    { id: 10, name: 'Gratitude List', category: 'mindfulness', icon: '🙏', description: 'Write down 3-5 things you\'re grateful for' },
    { id: 11, name: 'Power Pose', category: 'physical', icon: '💪', description: 'Stand in a powerful position for 2 minutes' },
    { id: 12, name: 'Breathing Exercises', category: 'breathing', icon: '😤', description: '4-7-8 breathing for anxiety relief' },
  ]
  
  const categories = [
    { key: 'all', label: 'All Tools', emoji: '🎯' },
    { key: 'breathing', label: 'Breathing', emoji: '🫁' },
    { key: 'grounding', label: 'Grounding', emoji: '🌍' },
    { key: 'mindfulness', label: 'Mindfulness', emoji: '🧘' },
    { key: 'relaxation', label: 'Relaxation', emoji: '😌' },
    { key: 'creative', label: 'Creative', emoji: '🎨' },
    { key: 'physical', label: 'Physical', emoji: '🏃' },
  ]
  
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-6">
        <h2 className="text-3xl font-bold text-purple-900 mb-3">Coping Toolkit</h2>
        <p className="text-gray-600">Discover evidence-based strategies to manage stress, anxiety, and difficult emotions</p>
      </section>
      
      {/* Search Bar */}
      <div className="card p-4">
        <input
          type="text"
          placeholder="Search tools by name or technique..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-calm"
        />
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat.key
                ? 'bg-purple-600 text-white ring-2 ring-purple-300'
                : 'bg-white border-2 border-purple-200 text-gray-700 hover:border-purple-400'
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>
      
      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredTools.length > 0 ? (
          filteredTools.map(tool => (
            <div key={tool.id} className="card border-l-4 border-purple-400 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-900 mb-1">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                  <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                    Try Now →
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No tools found. Try a different search or category.</p>
          </div>
        )}
      </div>
      
      {/* Pro Tips */}
      <section className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold text-purple-900 mb-3">💡 Pro Tips</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Try different techniques to find what works best for you</li>
          <li>• Practice regularly, not just during difficult moments</li>
          <li>• Create a personal "emergency toolkit" of your top 3 techniques</li>
          <li>• It's okay if some techniques don't resonate—everyone is unique</li>
        </ul>
      </section>
    </div>
  )
}

export default CopingToolkit
