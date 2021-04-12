export const commonSchema = (title, additions = {}) => {
  return {
    title: title,
    type: "object",
    properties: {
      x: { type: "number", title: "X - Position", default: 0 },
      y: { type: "number", title: "Y - Position", default: 0 },
      strokeWidth: { type: "number", title: "Stroke", default: 1 },
      fill: {
        type: "string",
        title: "fill color",
        default: "darkgreen",
        enum: ["orange", "darkgreen", "brown", "darkblue"]
      },
      stroke: {
        type: "string",
        title: "Stoke color",
        default: "darkgreen",
        enum: ["black", "green", "yellow", "blue"]
      },
      ...additions
    }
  };
};
