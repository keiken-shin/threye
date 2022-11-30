import { Card } from "./Card";
import { Button, Input, Select, Switch } from "./Forms";
import styles from "../styles/Sidebar.module.css";
import { Modal } from "./Modal";
import { useContext, useState } from "react";
import { Context } from "../lib/Context";

const roadList = ["markings"];
const lightList = ["color", "height", "state"];
const initialValues = {
  lane: 0,
  markings: "",
  divider: false,
  color: "",
  height: "",
  state: "on",
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [modalOpt, setModalOpt] = useState("lane");
  const { actionType, setData } = useContext(Context);

  const [values, setValues] = useState(initialValues);

  const handleModalPopup = (label) => {
    setOpen(true);
    setModalOpt(label);
  };

  const PlaceholderBlock = ({ label, value, onClick }) => (
    <div className={styles["placeholder-block"]}>
      <span>{label}</span>
      <div className={styles["input-section"]} onClick={onClick}>
        {value}
      </div>
    </div>
  );

  const RoadForm = () => (
    <>
      <Input
        label="lane"
        type="number"
        value={values.lane}
        name="lane"
        onChange={handleInput}
      />

      {roadList.map((item, idx) => (
        <PlaceholderBlock
          key={idx}
          label={item}
          value={values[item]}
          onClick={() => handleModalPopup(item)}
        />
      ))}

      <Switch
        label="Divider"
        name="divider"
        checked={values.divider}
        onChange={handleInput}
      />
    </>
  );

  const LightForm = () => (
    <>
      {lightList.map((item, idx) => (
        <PlaceholderBlock
          key={idx}
          label={item}
          value={values[item]}
          onClick={() => handleModalPopup(item)}
        />
      ))}
    </>
  );

  const ModalContent = (label) => {
    if (label === "state") {
      return (
        <Select
          label="State"
          name="state"
          options={[
            { label: "On", value: "on" },
            { label: "Off", value: "off" },
          ]}
          onChange={handleInput}
        />
      );
    }

    return (
      <Input
        label={label}
        value={values[label]}
        name={label}
        onChange={handleInput}
      />
    );
  };

  function handleInput(e) {
    if (e.target.name === "divider") {
      setValues((prev) => ({ ...prev, divider: !prev.divider }));
      return;
    }

    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    return;
  }

  async function handleContentUpdate(e, { actionType }) {
    e.preventDefault();

    let data;

    if (actionType === "road") {
      data = {
        key: "road",
        type: "Action",
        values: [
          {
            key: "lane",
            type: "number",
            value: values.lane,
          },
          {
            key: "markings",
            type: "string",
            value: values.markings,
          },
          {
            key: "divider",
            type: "boolean",
            value: values.divider,
          },
        ],
      };
    } else if (actionType === "light") {
      data = {
        key: "light",
        type: "Action",
        values: [
          {
            key: "color",
            type: "string",
            value: values.color,
          },
          {
            key: "height",
            type: "string",
            value: values.height,
          },
          {
            key: "state",
            type: "enum",
            value: [values.state],
          },
        ],
      };
    }

    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    setData((prev) => ({ result: [...prev.result, res] }));
    setValues(initialValues);
  }

  return (
    <>
      <Card title="Right Hand Panel">
        <Card
          title={actionType === "road" ? "Road Form" : "Light Form"}
          footer={
            <Button onClick={(e) => handleContentUpdate(e, { actionType })}>
              Apply
            </Button>
          }
        >
          <section className={styles["form-container"]}>
            {actionType === "road" ? <RoadForm /> : <LightForm />}
          </section>
        </Card>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Card
          title="Update Info"
          footer={
            <div className={styles["modal-bottom-bar"]}>
              <Button
                onClick={() => setOpen(false)}
                style={{ backgroundColor: "tomato" }}
              >
                Close
              </Button>
              <Button onClick={() => setOpen(false)}>Ok</Button>
            </div>
          }
        >
          <div className={styles["modal-body"]}>{ModalContent(modalOpt)}</div>
        </Card>
      </Modal>
    </>
  );
};
