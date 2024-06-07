import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = (): [MousePosition, (newPosition: MousePosition) => void] => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  // 定义一个更新鼠标位置的函数，不需要指定 Element 类型
  const updateMousePosition = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    // 添加鼠标移动事件监听器到 window
    window.addEventListener('mousemove', updateMousePosition);

    // 组件卸载时移除事件监听器
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // 返回当前的鼠标位置和更新位置的方法
  return [mousePosition, setMousePosition];
};

export default useMousePosition;