import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      width="200"
      height="200"
    >
      {/* Градиенты для металлической поверхности */}
      <defs>
        <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3a3a3a", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6b6b6b", stopOpacity: 1 }} />
        </linearGradient>

        {/* Градиент для светящихся деталей */}
        <radialGradient id="shine-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#f0f0f0", stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Форма бака */}
      <rect
        x="50"
        y="50"
        width="200"
        height="150"
        rx="25"
        ry="25"
        fill="url(#metal-gradient)"
        stroke="#333"
        strokeWidth="5"
      />
      
      {/* Декоративные линии на баке */}
      <line
        x1="50"
        y1="100"
        x2="250"
        y2="100"
        stroke="#f0f0f0"
        strokeWidth="3"
        strokeDasharray="8, 8"
      />
      <line
        x1="50"
        y1="130"
        x2="250"
        y2="130"
        stroke="#f0f0f0"
        strokeWidth="3"
        strokeDasharray="8, 8"
      />

      {/* Верхняя часть бака */}
      <rect
        x="50"
        y="35"
        width="200"
        height="20"
        rx="10"
        ry="10"
        fill="url(#metal-gradient)"
        stroke="#333"
        strokeWidth="5"
      />
      
      {/* Элементы свечения и эффект света */}
      <circle cx="150" cy="125" r="40" fill="url(#shine-gradient)" />

      {/* Текст в логотипе */}
      <text
        x="150"
        y="200"
        textAnchor="middle"
        fontSize="30"
        fontFamily="Arial, sans-serif"
        fill="#fff"
        fontWeight="bold"
      >
        Tankinox
      </text>

      {/* Тень для текста */}
      <style>
        {`
          text {
            filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.8));
          }
          rect, line {
            filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
          }
        `}
      </style>
    </svg>
  );
};

export default Logo;
