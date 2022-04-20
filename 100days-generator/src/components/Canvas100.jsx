import { useRef, useEffect } from "react";
import character from "../assets/img/character.png";

const Canvas100 = (props) => {
  const { img, qoute, day, ...rest } = props;
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const charRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let image = new Image();
    let character0 = new Image();
    let context = canvas.getContext("2d");

    const draw = (ctx) => {
      let dayText = day + " /100 Days";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };

      image.src = img;

      character0.onload = () => {
        ctx.drawImage(character0, -220, 70, 800, 600);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "20px Verdana";
        ctx.fillText(qoute, 30, 60);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "80px Brush Script MT";
        ctx.fillText(dayText, 400, 300);

        ctx.font = "60px Brush Script MT";
        ctx.fillText("#100daysOfCode", 400, 360);
      };

      character0.src = character;
    };

    const render = () => {
      draw(context);
    };

    render();
  }, [day, qoute, img]);

  const saveImage = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png", 1.0);
    console.log(dataUrl);
  };

  return (
    <canvas
      id="myCanvas"
      ref={canvasRef}
      {...rest}
      onClick={saveImage}
    ></canvas>
  );
};

export default Canvas100;
