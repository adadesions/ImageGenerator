import Canvas100 from "../components/Canvas100";
import GradientBtn from "../components/GradientBtn";
import { useEffect, useState, useRef } from "react";
import quotes from "../assets/json/quotes.json";

const randomImage = () => {  
  const ctx = require.context('../assets/bg')
  const imgs = ctx.keys()  
  const len = imgs.length
  const randIdx = Math.floor(Math.random() * len);
  
  return imgs[randIdx].replace('./', '')
}

const GeneratePage = () => {
  const randomIdx = Math.floor(Math.random() * quotes.quotes.length);
  let quote = quotes.quotes[randomIdx].quote;
  let author = "- " + quotes.quotes[randomIdx].author;
  
  const randomImg = randomImage();
  const bg = require(`../assets/bg/${randomImg}`)

  const [days, setDays] = useState(3);

  useEffect(() => {
    document.title = `(${days} days) Generator`;
  });

  const downloadRef = useRef(null);

  const saveImage = () => {
    const download = downloadRef.current;
    const canvas = document.getElementById("myCanvas");
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
  };

  const dayHandle = (event) => {
    if (event.key === "Enter") {
      let day = parseInt(event.target.value);
      day < 0 ? setDays(0) : setDays(day);
    }
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid place-items-center py-10 grid-cols-1">
        <Canvas100
          quote={quote}
          author={author}
          img={bg}
          day={days}
          width={800}
          height={600}
        />
        <div className="px-8 py-4">
          <input
            className="mr-6 text-center"
            type="text"
            placeholder="Enter a specific day"
            style={{
              height: "2.5em",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
            }}
            onKeyUp={dayHandle}
          />

          <GradientBtn
            content="Previous Day"
            action={() => {
              if (days > 0) setDays(days - 1);
            }}
          />
          <GradientBtn
            content="Next Day"
            action={() => {
              setDays(days + 1);
            }}
          />
          <a
            href="/"
            ref={downloadRef}
            download="100days.png"
            onClick={saveImage}
          >
            <GradientBtn content="Save me" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
