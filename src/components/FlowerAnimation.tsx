import React from 'react';

const FlowerAnimation: React.FC = () => {
  // Generate flower petals with different sizes, positions, and animation delays
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10, // 10-30px
    left: Math.random() * 100, // 0-100%
    animationDelay: Math.random() * 10, // 0-10s
    animationDuration: Math.random() * 10 + 15, // 15-25s
    opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-float"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.animationDelay}s`,
            animationDuration: `${petal.animationDuration}s`,
            opacity: petal.opacity,
          }}
        >
          <div
            className="flower-petal"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size}px`,
            }}
          >
            🌸
          </div>
        </div>
      ))}
      
      {/* Additional scattered petals */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`small-${i}`}
          className="absolute animate-drift"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 8 + 12}s`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        >
          <span className="text-pink-300 text-xs">🌺</span>
        </div>
      ))}
    </div>
  );
};

export default FlowerAnimation;