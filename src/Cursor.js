import React from "react";
import './App.css';
export function Cursor() {
  const cursorDotOutline = React.useRef();
  const cursorDot = React.useRef();
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  let [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  let cursorVisible = React.useState(false);
  let cursorEnlarged = React.useState(false);
  
  /**
   * Mouse Moves
  */
 const onMouseMove = event => {
   const { pageX: x, pageY: y } = event;
   if (cursorDot.current !== undefined && cursorDotOutline.current != undefined)
   {
     setMousePosition({ x, y });
     positionDot(event);
   }
  };
  const onMouseEnter = () => {
    cursorVisible.current = true;
    if (cursorDot.current !== undefined && cursorDotOutline.current != undefined)
    {
      toggleCursorVisibility();      
    }
  };
  const onMouseLeave = () => {
    cursorVisible.current = false;
    if (cursorDot.current !== undefined && cursorDotOutline.current != undefined)
    {
      toggleCursorVisibility();
    }
  };
  const onMouseDown = () => {
    cursorEnlarged.current = true;
    if (cursorDot.current !== undefined && cursorDotOutline.current != undefined)
    {
      toggleCursorSize();
    }
  };
  const onMouseUp = () => {
    cursorEnlarged.current = false;
    if (cursorDot.current !== undefined && cursorDotOutline.current != undefined)
    {
      toggleCursorSize();
    }
  };
  const onResize = event => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  
  /**
   * Hooks
  */
 React.useEffect(() => {
   document.addEventListener("mousemove", onMouseMove);
   document.addEventListener("mouseenter", onMouseEnter);
   document.addEventListener("mouseleave", onMouseLeave);
   document.addEventListener("mousedown", onMouseDown);
   document.addEventListener("mouseup", onMouseUp);
   window.addEventListener("resize", onResize);
   requestRef.current = requestAnimationFrame(animateDotOutline);
   
   // Handle Link Hovers
   handleLinkHovers();
   
   return () => {
     document.removeEventListener("mousemove", onMouseMove);
     document.removeEventListener("mouseenter", onMouseEnter);
     document.removeEventListener("mouseleave", onMouseLeave);
     document.removeEventListener("mousedown", onMouseDown);
     document.removeEventListener("mouseup", onMouseUp);
     window.removeEventListener("resize", onResize);
     cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;
  
  /**
   * Position Dot (cursor)
   * @param {event}
  */
 function positionDot(e) {
   cursorVisible.current = true;
   toggleCursorVisibility();
   // Position the dot
   endX = e.pageX;
   endY = e.pageY;
   cursorDot.current.style.top = endY + "px";
   cursorDot.current.style.left = endX + "px";
  }
  
  /**
   * Toggle Cursor Visiblity
   */
  function toggleCursorVisibility() {
    if (cursorVisible.current) {
      cursorDot.current.style.opacity = 1;
      cursorDotOutline.current.style.opacity = 1;
    } else {
      cursorDot.current.style.opacity = 0;
      cursorDotOutline.current.style.opacity = 0;
    }
  }
  
  /**
   * Toggle Cursor Size
  */
 function toggleCursorSize() {
    if (cursorDot.current == undefined || cursorDot.current == null || cursorDotOutline.current == undefined || cursorDotOutline.current == null)
    {
      return;
    }
    
   if (cursorEnlarged.current) {
     cursorDot.current.style.transform = "translate(-50%, -50%) scale(5)";
     cursorDotOutline.current.style.transform =
     "translate(-50%, -50%) scale(2)";
    } else {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      cursorDotOutline.current.style.transform =
      "translate(-50%, -50%) scale(1)";
    }
  }
  
  /**
   * Handle LInks
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
  */
 function handleLinkHovers() {
   document.querySelectorAll("a").forEach(el => {
     el.addEventListener("mouseover", () => {
       cursorEnlarged.current = true;
       toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
      });
    });
  }
  
  /**
   * Animate Dot Outline
   * Animates cursor outline with trailing effect.
   * @param {number} time
  */
 const animateDotOutline = time => {
   if (previousTimeRef.current !== undefined && cursorDotOutline.current !== undefined && cursorDotOutline.current !== null) {
     x += (endX - x) / 7;
     y += (endY - y) / 7;
     cursorDotOutline.current.style.top = y + "px";
     cursorDotOutline.current.style.left = x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };
  
  const isMobileTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  if (isMobileTouchDevice())
  {
    return <></>;
  }
  
  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
    </>
  );
}

