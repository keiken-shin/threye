import { Card } from "./Card";
import { Button, Input, Select, Switch } from "./Forms";
import styles from "../styles/Sidebar.module.css";
import { Modal } from "./Modal";
import { useContext, useState } from "react";
import { Context } from "../lib/Context";

const roadList = ["markings"];
const lightList = ["color", "height", "state"];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [modalOpt, setModalOpt] = useState("lane");
  const { actionType } = useContext(Context);

  const [values, setValues] = useState({
    lane: 4,
    markings: "white",
    color: "green",
    height: "10m",
    state: "on",
  });

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
      <Input label="lane" type="number" value={4} name="lane" />

      {roadList.map((item, idx) => (
        <PlaceholderBlock
          key={idx}
          label={item}
          value={values[item]}
          onClick={() => handleModalPopup(item)}
        />
      ))}

      <Switch label="Divider" name="divider" />
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
            { label: "off", value: "off" },
          ]}
        />
      );
    }

    return <Input label={label} value={values[label]} name={label} />;
  };

  return (
    <>
      <Card title="Right Hand Panel">
        <Card
          title={actionType === "roads" ? "Road Form" : "Light Form"}
          footer={<Button>Apply</Button>}
        >
          <section className={styles["form-container"]}>
            {actionType === "roads" ? <RoadForm /> : <LightForm />}
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
              <Button>Ok</Button>
            </div>
          }
        >
          <div className={styles["modal-body"]}>{ModalContent(modalOpt)}</div>
        </Card>
      </Modal>
    </>
  );
};
