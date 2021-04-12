import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import Rectangle from "./Rectangle";
import { v4 as uuidv4 } from "uuid";

const SVGCanvas = ({
  selected,
  setSelected,
  data,
  setData,
  connections = []
}) => {
  const InnerElements = data.map((elem, i) => {
    // if (selected === i || elem.dragging) {
    //   return null;
    // }

    if (elem.type === "circle")
      return (
        <Circle
          key={i}
          {...elem}
          index={i}
          selected={selected === i}
          clickHandler={(index) =>
            selected === i ? setSelected(-1) : setSelected(index)
          }
          dragHandler={(index, sentData) =>
            setData(
              data.map((elm, i) => {
                if (i === index)
                  return {
                    ...elm,
                    ...sentData
                  };
                return elm;
              })
            )
          }
        />
      );
    else if (elem.type === "rect") {
      return (
        <Rectangle
          key={i}
          {...elem}
          index={i}
          selected={selected === i}
          clickHandler={(index) =>
            selected === i ? setSelected(-1) : setSelected(index)
          }
          dragHandler={(index, sentData) =>
            setData(
              data.map((elm, i) => {
                if (i === index)
                  return {
                    ...elm,
                    ...sentData
                  };
                return elm;
              })
            )
          }
        />
      );
    }
  });

  const Connectors = connections.map(({ p1, p2 }) => {
    const dataP1 = data[p1.index];
    const dataP2 = data[p2.index];
    const getSize = (data) => {
      if (data.type === "circle") {
        // prettier-ignore
        return {
          height: (data.radius * 2) ,
          width: (data.radius * 2) + data.strokeWidth
        };
      }
      return {
        height: data.height,
        width: data.width
      };
    };

    const getPoint = (data, p) => {
      const { height, width } = getSize(data);
      let x, y;
      switch (p.position) {
        case "left":
          x = data.x + 0;
          y = data.y + height / 2;
          break;
        case "right":
          x = data.x + width;
          y = data.y + height / 2;
          break;
        case "top":
          x = data.x + width / 2;
          y = data.y + 0;
          break;
        case "bottom":
          x = data.x + width / 2;
          y = data.y + height;
          break;
        default:
          break;
      }

      return { x, y };
    };

    const c1 = getPoint(dataP1, p1);
    const c2 = getPoint(dataP2, p2);

    return (
      <line
        key={uuidv4()}
        stroke="red"
        x1={c1.x}
        y1={c1.y}
        x2={c2.x}
        y2={c2.y}
      />
    );
  });

  return (
    <svg className="svg-canvas">
      {InnerElements}
      {Connectors}
    </svg>
  );
};

export default SVGCanvas;
