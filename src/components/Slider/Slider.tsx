import React, { useEffect, useState } from "react";
import data from "./data.json";
const viewporttWidth = window.innerWidth;
import "./styles.css"


export function Slider() {
  const [counter, setCounter] = useState(0);
  const [i, seti] = useState(6);
  const nextElement = () => {
    if (viewporttWidth > 1440) {
      if (counter < 6) {
        setCounter(counter + 1);
      }
    } else if (viewporttWidth > 750) {
      if (counter < 7) {
        setCounter(counter + 1);
      } else {
        setCounter(counter);
      }
      seti(7);
    } else {
      if (counter < 8) {
        setCounter(counter + 1);
      } else {
        setCounter(counter);
      }
      seti(8);
    }
  };
  const prevElement = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <div className="main--box">
        <h1 className="news--main--text">News</h1>
        <div className="img--box">
          <div className="carousel--box">
            <div className="buttons--box">
              <button
                onClick={prevElement}
                className={counter != 0 ? "left--button" : "left--button--hide"}
              >
                <img
                  src="../src/assets/icon-previous.svg"
                  alt=""
                  className="previous--button"
                />
              </button>
              <button
                onClick={nextElement}
                className={
                  counter < i ? "right--button" : "right--button--hide"
                }
              >
                <img
                  src="../src/assets/icon-next.svg"
                  alt=""
                  className="next--button"
                />
              </button>
            </div>
            {data.map((obj) => {
              return (
                <div
                  className="new--box"
                  style={{ transform: `translateX(-${408 * counter}px)` }}
                  key={obj.id}
                >
                  <img
                    src={obj.image.desktop}
                    alt="new--img"
                    className="new--img"
                  />
                  <p className="new--text">{obj.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
