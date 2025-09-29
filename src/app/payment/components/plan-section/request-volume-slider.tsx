'use client';

import { usePayment } from '../context/payment-context';
import { useState, useRef, useCallback, useEffect } from 'react';

export function RequestVolumeSlider() {
  const { requestVolume, updateRequestVolume } = usePayment();
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Define volume options and their positions on a scale of 9 (0-9)
  const volumeOptions = [1, 2, 3, 5, 7, 10];
  const valueToPosition: { [key: number]: number } = {
    1: 0,   // 0/9
    2: 1,   // 1/9
    3: 2,   // 2/9
    5: 4,   // 4/9
    7: 6,   // 6/9
    10: 9   // 9/9
  };
  
  const progressPercentage = (valueToPosition[requestVolume] / 9) * 100;
  
  // Find the closest volume option to a given percentage
  const findClosestVolume = useCallback((percentage: number) => {
    // Convert percentage back to position on scale of 9
    const targetPosition = (percentage / 100) * 9;
    
    // Find the closest volume option based on position
    return volumeOptions.reduce((closest, current) => {
      const currentPosition = valueToPosition[current];
      const closestPosition = valueToPosition[closest];
      return Math.abs(currentPosition - targetPosition) < Math.abs(closestPosition - targetPosition) ? current : closest;
    });
  }, [volumeOptions, valueToPosition]);
  
  // Calculate percentage from mouse/touch position
  const calculatePercentage = useCallback((clientX: number) => {
    if (!sliderRef.current) return 0;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    return percentage;
  }, []);
  
  // Handle volume change with rounding to closest threshold
  const handleVolumeChange = useCallback((newVolume: number) => {
    updateRequestVolume(newVolume);
  }, [updateRequestVolume]);
  
  // Handle mouse down
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const percentage = calculatePercentage(e.clientX);
    const closestVolume = findClosestVolume(percentage);
    handleVolumeChange(closestVolume);
  }, [calculatePercentage, findClosestVolume, handleVolumeChange]);
  
  // Handle mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const percentage = calculatePercentage(e.clientX);
    const closestVolume = findClosestVolume(percentage);
    handleVolumeChange(closestVolume);
  }, [isDragging, calculatePercentage, findClosestVolume, handleVolumeChange]);
  
  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  // Handle touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const touch = e.touches[0];
    const percentage = calculatePercentage(touch.clientX);
    const closestVolume = findClosestVolume(percentage);
    handleVolumeChange(closestVolume);
  }, [calculatePercentage, findClosestVolume, handleVolumeChange]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const percentage = calculatePercentage(touch.clientX);
    const closestVolume = findClosestVolume(percentage);
    handleVolumeChange(closestVolume);
  }, [isDragging, calculatePercentage, findClosestVolume, handleVolumeChange]);
  
  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);
  
  // Add event listeners for mouse and touch events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);
  
  return (
    <div className="space-y-3">
      {/* Slider Label */}
      <div className="text-base font-medium text-[#AEAEAE] font-satoshi">
        {requestVolume}M requests
      </div>
      
      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="relative h-6 flex items-center cursor-pointer select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Slider Track Background */}
        <div className="h-1.5 bg-[#374151] rounded-full relative flex-1">
          {/* Slider Track Fill */}
          <div 
            className="absolute top-0 left-0 h-1.5 bg-[#2196F3] rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {/* Volume Markers - positioned over the track */}
        <div className="absolute left-0 right-0 h-full flex justify-between items-center pointer-events-none">
          {volumeOptions.map((volume) => {
            const isActive = requestVolume === volume;
            const position = (valueToPosition[volume] / 9) * 100;
            
            return (
              <div
                key={volume}
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
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Volume Labels Below */}
      <div className="relative text-xs font-medium text-[#9CA3AF] px-1 font-satoshi">
        {volumeOptions.map((volume) => {
          const position = (valueToPosition[volume] / 9) * 100;
          return (
            <span 
              key={volume} 
              className="absolute text-center"
              style={{ left: `calc(${position}% - 8px)` }}
            >
              {volume}M
            </span>
          );
        })}
      </div>
    </div>
  );
}
