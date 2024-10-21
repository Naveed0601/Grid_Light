import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [clicked, setClicked] = useState(Array(9).fill(-1));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (clickOrder.length < 9 && !clickOrder.includes(index)) {
      setClickOrder([...clickOrder, index]);
      const newClicked = [...clicked];
      newClicked[index] = index;
      setClicked(newClicked);

      if (clickOrder.length === 8) {
        uncolorBoxes([...clickOrder, index]);
      }
    }
  };
  // console.log(clickOrder);
  const uncolorBoxes = (order) => {
    order.reverse().forEach((boxIndex, i) => {
      setTimeout(() => {
        setClicked((prevClicked) => {
          const newClicked = [...prevClicked];
          newClicked[boxIndex] = -1;
          return newClicked;
        });
      }, i * 1000);
    });
  };

  return (
    <div className="text-xl font-bold w-full h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-0">
        {clicked.map((box, i) => (
          <div
            key={i}
            className={`w-28 ${
              box !== -1 ? "bg-green-400" : "bg-slate-200"
            } h-32 border border-black flex items-center justify-center m-1`}
            onClick={() => handleClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
