import { useRef, useEffect } from "react";
import character from "../assets/img/character.png";

const Canvas100 = (props) => {
  const { img, quote, author, day, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas = canvasRef.current;
    let image = new Image();
    let character0 = new Image();
    let context = canvas.getContext("2d");

    const draw = (ctx) => {
      let dayText = day + " /100 Days";
      let offsetText = 0;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);      

      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };

      image.src = img;

      character0.onload = () => {
        ctx.drawImage(character0, -200, 80, 800, 600);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "18px Verdana";
        
        let limit = 80
        if (quote.length > limit) {
          offsetText = 30
          ctx.fillText(quote.slice(0, 80), 40, 60)
          ctx.fillText(quote.slice(80, quote.length), 40, 60 + offsetText);
        } else {
          ctx.fillText(quote, 40, 60); 
        }
        
        ctx.fillText(author, 40, 100 + offsetText);

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
  }, [day, quote, img, author]);

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
      style={{objectFit:"contain"}}
    ></canvas>
  );
};

export default Canvas100;
