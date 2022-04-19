import "./App.css";
import logo from "./logo.svg"
import ImageCanvas from "./components/ImageCanvas";
import Canvas100 from "./components/Canvas100";

const draw = (ctx, frameCount, color) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.arc(200, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.arc(350, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};

const drawText = (ctx, frameCount, color, text) => {
  ctx.clearRect(0, 0, ctx.canvas.wihth, ctx.canvas.height);
  ctx.fillStyle = color
  ctx.font = "40px Arial"
  ctx.fillText(text, 10, 80)
}

function App() {
  return (
    <div className="container mx-auto">
      <h1>Ada De Sions</h1>
      <ImageCanvas draw={draw} color='#00FF00'/>
      <ImageCanvas draw={draw} color='#FF0000'/>
      <Canvas100 qoute="AdaDeSions" img={logo} day="3" />
    </div>
  );
}

export default App;
