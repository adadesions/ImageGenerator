import { useRef, useEffect } from "react";

const Canvas100 = (props) => {
  const { img, qoute, day, ...rest} = props;
  const canvasRef = useRef(null);

  const draw = (ctx, qoute, day) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = '#FFFFFF'
      ctx.font = "30px Arial"
      ctx.fillText(qoute, 10, 60)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const render = () => {
        draw(context, qoute, day)
    }

    render()

  }, [draw])

  return <canvas ref={canvasRef} {...rest}>
      <img src={img} alt="background" />
  </canvas>;
};

export default Canvas100;
