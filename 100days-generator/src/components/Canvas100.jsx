import { useRef, useEffect } from "react";
import character from "../assets/img/character.png";

const Canvas100 = (props) => {
  const { img, qoute, day, ...rest } = props;
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const charRef = useRef(null);

  const draw = (ctx, qoute, day, image, character) => {
    let dayText = day + " /100 Days";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };

    character.onload = () => {
      ctx.drawImage(character, -220, 70, 800, 600);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px Verdana";
      ctx.fillText(qoute, 30, 60);
  
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "80px Brush Script MT";
      ctx.fillText(dayText, 400, 300);
  
      ctx.font = "60px Brush Script MT";
      ctx.fillText("#100daysOfCode", 400, 360);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = imgRef.current;
    const character = charRef.current;
    const context = canvas.getContext("2d");

    const render = () => {
      draw(context, qoute, day, image, character);
    };

    render();
  }, [draw]);

  return (
    <canvas ref={canvasRef} {...rest}>
      <img
        ref={imgRef}
        src={img}
        alt="background"
        width={rest.width}
        height={rest.height}
      />
      <img ref={charRef} src={character} alt="Character" />
    </canvas>
  );
};

export default Canvas100;
