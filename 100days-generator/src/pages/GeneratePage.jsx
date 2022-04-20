import background from "../assets/img/100dayBG.png";
import Canvas100  from "../components/Canvas100";

const GeneratePage = () => {
  let qoute =
    "The road to success and the road to failure are almost exactly the same.";
  let day = 3;

  return (
    <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid grid-cols-2 gap-12">

        <div className="px-4 py-4">
          <Canvas100
            qoute={qoute}
            img={background}
            day={day}
            width={800}
            height={600}
          />
        </div>
        <div className="px-8 py-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full py-2"
          >
            Save me
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage