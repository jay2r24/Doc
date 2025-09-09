import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronUp, ChevronDown, RotateCcw, Eye, EyeOff } from 'lucide-react';

const MiddleScrollControl = ({ leftContainerId, rightContainerId }) => {
  const scrollBarRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const getContainers = useCallback(() => ({
    left: document.getElementById(leftContainerId),
    right: document.getElementById(rightContainerId)
  }), [leftContainerId, rightContainerId]);

  const updateScrollPosition = useCallback(() => {
    const { left } = getContainers();
    if (!left) return;
    
    const scrollTop = left.scrollTop;
    const maxScroll = Math.max(1, left.scrollHeight - left.clientHeight);
    const position = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
    
    setScrollPosition(position);
  }, [getContainers]);

  const scrollToPosition = useCallback((position) => {
    const { left, right } = getContainers();
    if (!left || !right) return;

    const leftMaxScroll = Math.max(0, left.scrollHeight - left.clientHeight);
    const rightMaxScroll = Math.max(0, right.scrollHeight - right.clientHeight);
    
    const scrollRatio = position / 100;
    const leftScrollTop = Math.round(leftMaxScroll * scrollRatio);
    const rightScrollTop = Math.round(rightMaxScroll * scrollRatio);

    left.scrollTo({ top: leftScrollTop, behavior: 'smooth' });
    right.scrollTo({ top: rightScrollTop, behavior: 'smooth' });
  }, [getContainers]);

  const handleScrollBarClick = useCallback((e) => {
    if (!scrollBarRef.current) return;
    
    const rect = scrollBarRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const position = Math.min(100, Math.max(0, (clickY / rect.height) * 100));
    
    scrollToPosition(position);
  }, [scrollToPosition]);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    handleScrollBarClick(e);
  }, [handleScrollBarClick]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !scrollBarRef.current) return;
    
    const rect = scrollBarRef.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const position = Math.min(100, Math.max(0, (mouseY / rect.height) * 100));
    
    scrollToPosition(position);
  }, [isDragging, scrollToPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const scrollUp = useCallback(() => {
    const newPosition = Math.max(0, scrollPosition - 10);
    scrollToPosition(newPosition);
  }, [scrollPosition, scrollToPosition]);

  const scrollDown = useCallback(() => {
    const newPosition = Math.min(100, scrollPosition + 10);
    scrollToPosition(newPosition);
  }, [scrollPosition, scrollToPosition]);

  const resetScroll = useCallback(() => {
    scrollToPosition(0);
  }, [scrollToPosition]);

  const togglePreview = useCallback(() => {
    setIsPreviewMode(prev => !prev);
  }, []);

  // Set up event listeners
  useEffect(() => {
    const { left, right } = getContainers();
    if (!left || !right) return;

    const handleScroll = () => updateScrollPosition();
    
    left.addEventListener('scroll', handleScroll, { passive: true });
    right.addEventListener('scroll', handleScroll, { passive: true });

    // Initial position update
    updateScrollPosition();

    return () => {
      left.removeEventListener('scroll', handleScroll);
      right.removeEventListener('scroll', handleScroll);
    };
  }, [getContainers, updateScrollPosition]);

  // Mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-gray-600">
            Common Scroll
          </div>
          <button
            onClick={togglePreview}
            className={`p-1 rounded transition-colors ${
              isPreviewMode 
                ? 'bg-blue-100 text-blue-600' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
            title={isPreviewMode ? 'Hide preview' : 'Show preview'}
          >
            {isPreviewMode ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="p-3 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={scrollUp}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            title="Scroll up"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          
          <div className="text-xs text-gray-500 text-center">
            {Math.round(scrollPosition)}%
          </div>
          
          <button
            onClick={scrollDown}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            title="Scroll down"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          
          <button
            onClick={resetScroll}
            className="p-1 rounded hover:bg-gray-200 transition-colors mt-1"
            title="Reset to top"
          >
            <RotateCcw className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Scroll Bar */}
      <div className="flex-1 p-3">
        <div 
          ref={scrollBarRef}
          onClick={handleScrollBarClick}
          onMouseDown={handleMouseDown}
          className="relative w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300 cursor-pointer overflow-hidden transition-all duration-200 hover:border-blue-300 hover:shadow-md"
          title="Click or drag to scroll both documents"
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute left-0 right-0 border-t border-gray-400"
                style={{ top: `${i * 10}%` }}
              />
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div
            className="absolute left-1 right-1 bg-blue-500 rounded-sm transition-all duration-200 shadow-lg border border-blue-600"
            style={{ 
              top: `${scrollPosition}%`, 
              height: '20px',
              transform: 'translateY(-50%)',
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)'
            }}
          />
          
          {/* Percentage markers */}
          <div className="absolute left-0 top-0 text-xs text-gray-500 pointer-events-none">0%</div>
          <div className="absolute left-0 top-1/2 text-xs text-gray-500 pointer-events-none transform -translate-y-1/2">50%</div>
          <div className="absolute left-0 bottom-0 text-xs text-gray-500 pointer-events-none">100%</div>
        </div>
      </div>

      {/* Preview Mode */}
      {isPreviewMode && (
        <div className="border-t border-gray-200 bg-gray-50 p-3">
          <div className="text-xs font-medium text-gray-600 mb-2">Document Preview</div>
          <div className="bg-white rounded border border-gray-200 p-2 max-h-32 overflow-hidden">
            <div className="text-xs text-gray-500 text-center">
              Preview mode - shows document thumbnails
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1">
              <div className="bg-blue-50 border border-blue-200 rounded p-1 text-xs text-center">
                Left Doc
              </div>
              <div className="bg-green-50 border border-green-200 rounded p-1 text-xs text-center">
                Right Doc
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="p-3 border-t border-gray-200 bg-gray-50">
        <div className="text-xs text-gray-500 text-center space-y-1">
          <div>• Click or drag to scroll</div>
          <div>• Use arrows for fine control</div>
          <div>• Reset button returns to top</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleScrollControl;