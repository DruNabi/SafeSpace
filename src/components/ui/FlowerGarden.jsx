export default function FlowerGarden({ flowers }) {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-blue-100 to-green-50 rounded-lg border-2 border-green-200 relative overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-transparent opacity-50"></div>

      {/* Grass */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-green-300 to-green-400"></div>

      {/* Flowers */}
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-fade-in"
          style={{
            left: `${flower.x}%`,
            bottom: `${flower.y}px`,
          }}
        >
          <svg
            width={flower.size}
            height={flower.size}
            viewBox="0 0 100 100"
            className="drop-shadow-lg"
          >
            {/* Stem */}
            <line
              x1="50"
              y1="100"
              x2="50"
              y2="30"
              stroke="#22c55e"
              strokeWidth="3"
            />

            {/* Petals */}
            {[0, 72, 144, 216, 288].map((angle) => {
              const rad = (angle * Math.PI) / 180
              const x = 50 + 25 * Math.cos(rad)
              const y = 30 + 25 * Math.sin(rad)
              return (
                <ellipse
                  key={angle}
                  cx={x}
                  cy={y}
                  rx="12"
                  ry="18"
                  fill={flower.color}
                  opacity="0.8"
                  transform={`rotate(${angle} 50 30)`}
                />
              )
            })}

            {/* Center */}
            <circle cx="50" cy="30" r="10" fill="#fbbf24" />
          </svg>
        </div>
      ))}

      {/* Sun */}
      <div className="absolute top-6 right-10 text-4xl animate-pulse-soft">☀️</div>

      {/* Clouds */}
      <div className="absolute top-4 left-1/4 text-3xl opacity-60">☁️</div>
      <div className="absolute top-12 right-1/3 text-2xl opacity-50">☁️</div>

      {/* Message if no flowers */}
      {flowers.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl mb-2">🌱</p>
            <p className="text-gray-600 font-medium">Your garden is waiting to bloom...</p>
          </div>
        </div>
      )}
    </div>
  )
}
