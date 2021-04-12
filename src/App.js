import "./styles.css";
import SVGCanvas from "./components/SVGCanvas";
import { useState } from "react";
import Form from "@rjsf/core";
import Drawer from "@material-ui/core/Drawer";
import initialData, { connections } from "./config/initial-data";
import { commonSchema } from "./utils/common-functions";

export default function App() {
  const [selected, setSelected] = useState(-1);
  const [data, setData] = useState(initialData);

  const selectedSchema =
    (data[selected] || {}).type === "circle"
      ? commonSchema("Circle", {
          radius: { type: "number", title: "Radius", default: 100 },
          text: { type: "string", title: "Text", default: "" }
        })
      : commonSchema("Rectangle", {
          height: { type: "number", title: "Height", default: 100 },
          width: { type: "number", title: "Width", default: 100 }
        });
  return (
    <div className="App">
      <h3>Double Click to select, Click and Move to drag</h3>
      <SVGCanvas
        selected={selected}
        setSelected={setSelected}
        data={data}
        setData={setData}
        connections={connections}
      />
      <Drawer
        anchor="right"
        open={selected > -1}
        BackdropProps={{ invisible: true }}
        onClose={() => setSelected(-1)}
        PaperProps={{
          style: {
            width: "350px",
            padding: "10px"
          }
        }}
      >
        <Form
          schema={selectedSchema}
          formData={data[selected]}
          onSubmit={({ formData }) => {
            setData(
              data.map((el, i) => {
                if (i === selected) {
                  return formData;
                }
                return el;
              })
            );
          }}
        />
      </Drawer>
    </div>
  );
}
