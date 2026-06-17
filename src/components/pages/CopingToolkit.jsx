import { useState } from 'react'
import { copingTools } from '../../utils/mockData'

export default function CopingToolkit() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [...new Set(copingTools.map(tool => tool.category))]

  const filteredTools = copingTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Coping Toolkit</h1>
        <p className="text-gray-600">
          Discover healthy techniques to manage your emotions and find peace. All tools are evidence-based and easy to practice.
        </p>
      </section>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <input
          type="text"
          placeholder="Search coping tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 mb-6"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-purple-900">{tool.name}</h3>
                <span className="text-2xl">{tool.emoji}</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-600 bg-white px-3 py-1 rounded-full">
                  {tool.category}
                </span>
                <span className="text-xs text-gray-600">⏱️ {tool.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No coping tools found. Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
