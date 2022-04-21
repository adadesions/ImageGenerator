import background from "../assets/img/100dayBG.png";
import Canvas100 from "../components/Canvas100";
import GradientBtn from "../components/GradientBtn";
import { useEffect, useState, useRef } from "react";

const GeneratePage = () => {
  let qoute =
    "The road to success and the road to failure are almost exactly the same.";

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

  return (
    <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid place-items-center h-screen grid-cols-1">
        <Canvas100
          qoute={qoute}
          img={background}
          day={days}
          width={800}
          height={600}
        />
        <div className="px-8">
        <GradientBtn
          content="Next Day"
          action={() => {
            setDays(days + 1);
          }}
        />
        <GradientBtn
          content="Previous Day"
          action={() => {
            if (days > 0) setDays(days - 1);
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
