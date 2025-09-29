'use client';

import { usePayment } from '../context/payment-context';

const volumeOptions = [
  { value: 1, label: '1M' },
  { value: 2, label: '2M' },
  { value: 3, label: '3M' },
  { value: 5, label: '5M' },
  { value: 7, label: '7M' },
  { value: 10, label: '10M' },
];

export function RequestVolumeSlider() {
  const { requestVolume, updateRequestVolume } = usePayment();
  
  const handleVolumeChange = (newVolume: number) => {
    updateRequestVolume(newVolume);
  };
  
  return (
    <div className="space-y-4">
      {/* Slider Label */}
      <div className="text-sm font-medium text-gray-200">
        {requestVolume}M requests
      </div>
      
      {/* Slider Container */}
      <div className="relative">
        <div className="h-10 bg-gray-700 rounded-full p-1">
          <div className="relative h-full">
            {/* Slider Track */}
            <div className="absolute inset-0 bg-gray-600 rounded-full"></div>
            
            {/* Active Fill */}
            <div 
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((requestVolume - 1) / 9) * 100}%` }}
            ></div>
            
            {/* Volume Marks */}
            <div className="absolute inset-0 flex justify-between items-center px-2">
              {volumeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleVolumeChange(option.value)}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-200
                    ${requestVolume === option.value
                      ? 'bg-blue-500 text-white border-2 border-white shadow-lg'
                      : 'bg-transparent text-gray-400 hover:text-white'
                    }
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Volume Labels */}
      <div className="flex justify-between text-xs text-gray-500 px-1">
        {volumeOptions.map((option) => (
          <span key={option.value}>{option.label}</span>
        ))}
      </div>
    </div>
  );
}
