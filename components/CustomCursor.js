import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, size: 40 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setCursor({ ...cursor, x: e.clientX, y: e.clientY });
    };

    const updateCursorSize = (size) => {
      setCursor(cursor => ({ ...cursor, size: size }));
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.querySelectorAll('[data-cursor-type="hover"]').forEach(elem => {
      elem.addEventListener('mouseenter', () => updateCursorSize(400));
      elem.addEventListener('mouseleave', () => updateCursorSize(40));
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('[data-cursor-type="hover"]').forEach(elem => {
        elem.removeEventListener('mouseenter', () => updateCursorSize(400));
        elem.removeEventListener('mouseleave', () => updateCursorSize(40));
      });
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursor.x - (cursor.size / 2)}px`,
        top: `${cursor.y - (cursor.size / 2)}px`,
        width: `${cursor.size}px`,
        height: `${cursor.size}px`,
        transition: 'width 0.3s ease, height 0.3s ease'
      }}
    />
  );
};

export default CustomCursor;
