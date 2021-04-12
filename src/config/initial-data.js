export default [
  {
    type: "circle",
    x: 0,
    y: 0,
    radius: 50,
    stroke: "green",
    strokeWidth: 4,
    fill: "darkgreen",
    text: "circle"
  },
  {
    type: "rect",
    x: 210,
    y: 0,
    height: 100,
    width: 100,
    stroke: "green",
    strokeWidth: 4,
    fill: "darkgreen"
  },
  {
    type: "rect",
    x: 110,
    y: 210,
    height: 100,
    width: 200,
    stroke: "yellow",
    strokeWidth: 4,
    fill: "orange"
  }
];

export const connections = [
  {
    p1: {
      index: 0,
      position: "right"
    },
    p2: {
      index: 1,
      position: "left"
    }
  },
  {
    p1: {
      index: 1,
      position: "bottom"
    },
    p2: {
      index: 2,
      position: "right"
    }
  },
  {
    p1: {
      index: 0,
      position: "bottom"
    },
    p2: {
      index: 2,
      position: "left"
    }
  }
];
