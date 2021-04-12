const Rectangle = ({
  x = 0,
  y = 1,
  height = "100",
  width = "100",
  stroke = "green",
  fill = "darkgreen",
  strokeWidth = 4,
  index,
  clickHandler,
  selected,
  dragHandler,
  dragging,
  offset
}) => {
  return (
    <g
      className={dragging ? "draggable" : ""}
      onMouseDown={(e) =>
        dragHandler(index, {
          dragging: true,
          offset: { x: e.clientX - x, y: e.clientY - y }
        })
      }
      onMouseUp={() =>
        dragHandler(index, { dragging: false, offset: undefined })
      }
      onMouseLeave={() =>
        dragHandler(index, { dragging: false, offset: undefined })
      }
      onMouseMove={(e) => {
        if (dragging) {
          dragHandler(index, {
            x: e.clientX - offset.x,
            y: e.clientY - offset.y
          });
        }
      }}
    >
      <rect
        onDoubleClick={(e) => clickHandler(index)}
        x={x + strokeWidth + 1}
        y={y + strokeWidth + 1}
        height={height}
        width={width}
        stroke={stroke}
        fill={fill}
        strokeWidth={selected ? strokeWidth * 1.3 : strokeWidth}
      />
    </g>
  );
};

export default Rectangle;
