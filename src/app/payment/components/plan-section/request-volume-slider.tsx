'use client';

import { usePayment } from '../context/payment-context';

export function RequestVolumeSlider() {
  const { requestVolume, updateRequestVolume } = usePayment();
  
  const handleVolumeChange = (newVolume: number) => {
    updateRequestVolume(newVolume);
  };
  
  // Define volume options and their positions
  const volumeOptions = [1, 2, 3, 5, 7, 10];
  const currentIndex = volumeOptions.indexOf(requestVolume);
  const progressPercentage = (currentIndex / (volumeOptions.length - 1)) * 100;
  
  return (
    <div className="space-y-3">
      {/* Slider Label */}
      <div className="text-sm font-medium text-[#F3F4F6] font-raleway">
        {requestVolume}M requests
      </div>
      
      {/* Slider Container */}
      <div className="relative h-6 flex items-center">
        {/* Slider Track Background */}
        <div className="h-1.5 bg-[#374151] rounded-full relative flex-1">
          {/* Slider Track Fill */}
          <div 
            className="absolute top-0 left-0 h-1.5 bg-[#2196F3] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {/* Volume Markers - positioned over the track */}
        <div className="absolute left-0 right-0 h-full flex justify-between items-center">
          {volumeOptions.map((volume, index) => {
            const isActive = requestVolume === volume;
            const position = (index / (volumeOptions.length - 1)) * 100;
            
            return (
              <button
                key={volume}
                onClick={() => handleVolumeChange(volume)}
                className={`
                  w-4 h-4 rounded-full transition-all duration-200 ease-out
                  ${isActive
                    ? 'bg-[#2196F3] border-2 border-white shadow-lg shadow-[#2196F3]/30 scale-110'
                    : 'bg-transparent hover:bg-white/10 hover:scale-105'
                  }
                `}
                style={{ 
                  position: 'absolute',
                  left: `calc(${position}% - 8px)`,
                  transform: isActive ? 'translateY(-1px) scale(1.1)' : 'translateY(0)'
                }}
              >
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Volume Labels Below */}
      <div className="flex justify-between text-xs font-medium text-[#9CA3AF] px-1 font-raleway">
        {volumeOptions.map((volume) => (
          <span key={volume} className="text-center">
            {volume}M
          </span>
        ))}
      </div>
    </div>
  );
}
