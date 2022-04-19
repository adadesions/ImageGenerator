import { useRef, useEffect } from "react";

const ImageCanvas = (props) => {
  const { draw, color, text, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 200;
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      if (text) {
        draw(context, frameCount, color, text);
      } else {
        draw(context, frameCount, color);
      }
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <canvas ref={canvasRef} {...rest} />
  );
};

export default ImageCanvas;
