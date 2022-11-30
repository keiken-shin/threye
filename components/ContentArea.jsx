import { useContext, useEffect } from "react";
import { Context } from "../lib/Context";
import { Card } from "./Card";

export const ContentArea = () => {
  const { actionType, data, setData } = useContext(Context);

  const fetchData = async ({ actionType }) => {
    const response = await fetch(`/api?key=${actionType}`);
    const result = await response.json();

    setData(result);
  };

  useEffect(() => {
    fetchData({ actionType });
  }, [actionType]);

  return (
    <Card title="Content Area">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Card>
  );
};
