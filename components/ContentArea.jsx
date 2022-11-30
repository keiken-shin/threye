import { useContext, useEffect } from "react";
import { Context } from "../lib/Context";
import { arrangeData } from "../utils";
import { Card } from "./Card";

export const ContentArea = () => {
  const { actionType, data, fetchData } = useContext(Context);

  useEffect(() => {
    fetchData({ actionType });
  }, [actionType]);

  return (
    <Card title="Content Area">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Card>
  );
};
