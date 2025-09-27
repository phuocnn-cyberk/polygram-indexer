'use client';

import { ArrowLeft, Sun } from 'lucide-react';

export function TopNavigationBar() {
  return (
    <div className="bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
      {/* Back Button */}
      <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>
      
      {/* User Controls */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button className="p-2 text-white hover:text-gray-300 transition-colors">
          <Sun size={20} />
        </button>
        
        {/* User Indicator */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">SG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
