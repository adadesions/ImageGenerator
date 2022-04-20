import background from "../assets/img/100dayBG.png";
import Canvas100 from "../components/Canvas100";
import { useEffect, useState, useRef } from "react";

const GeneratePage = () => {
  let qoute =
    "The road to success and the road to failure are almost exactly the same.";

  const [days, setDays] = useState(3);
  const [noti, setNoti] = useState(0);

  useEffect(() => {
    document.title = `(${noti}) Generator`;
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
      <div className="grid grid-cols-2 gap-12">
        <div className="px-4 py-4">
          <Canvas100
            qoute={qoute}
            img={background}
            day={days}
            width={800}
            height={600}
          />
        </div>
        <div className="px-8 py-4">
          <a
            href="#"
            ref={downloadRef}
            download="100days.png"
            onClick={saveImage}
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full py-2"
              onClick={() => {
                setNoti(noti + 1);
                setDays(days + 1);
                console.log(document.getElementById("myCanvas"));
              }}
            >
              Save me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
