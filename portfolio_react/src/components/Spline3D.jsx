import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

export default function Spline3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;

    const hideCta = () => {
      const viewer = containerRef.current?.querySelector('spline-viewer');
      if (!viewer || !viewer.shadowRoot) return;
      const root = viewer.shadowRoot;

      // Try common ids/classes first
      const possibleSelectors = [
        '#cta',
        '.cta',
        '.controls__cta',
        '.cta-button',
        'a[aria-label="cta"]',
      ];
      for (const selector of possibleSelectors) {
        const el = root.querySelector(selector);
        if (el) {
          el.style.display = 'none';
        }
      }

      // Fallback: hide any element whose text content includes "Get in touch"
      const allNodes = root.querySelectorAll('*');
      allNodes.forEach((node) => {
        const text = node.textContent?.trim().toLowerCase();
        if (text && text.includes('get in touch')) {
          node.style.display = 'none';
        }
      });
    };

    const startObserving = () => {
      const viewer = containerRef.current?.querySelector('spline-viewer');
      if (!viewer) return;
      hideCta();
      observer = new MutationObserver(hideCta);
      observer.observe(viewer, { childList: true, subtree: true });
    };

    // Attempt a few times as the web component mounts
    const intervalId = setInterval(() => {
      startObserving();
    }, 300);
    const timeoutId = setTimeout(() => clearInterval(intervalId), 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Spline scene="https://prod.spline.design/TRYWUGxcaepCSmcA/scene.splinecode" className="w-full h-full" />
    </div>
  );
}
