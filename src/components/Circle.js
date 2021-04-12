const Circle = ({
  x = 105,
  y = 105,
  radius = "100",
  stroke = "green",
  fill = "darkgreen",
  strokeWidth = 4,
  index,
  clickHandler,
  selected,
  dragHandler,
  dragging,
  offset,
  text
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
      <circle
        onDoubleClick={(e) => clickHandler(index)}
        cx={x + radius + strokeWidth + 1}
        cy={y + radius + strokeWidth + 1}
        r={radius}
        stroke={stroke}
        fill={fill}
        strokeWidth={selected ? strokeWidth * 1.3 : strokeWidth}
      />
      {text ? (
        <text
          x={x + radius + strokeWidth}
          y={y + radius + strokeWidth}
          text-anchor="middle"
        >
          {text}
        </text>
      ) : null}
    </g>
  );
};

export default Circle;
