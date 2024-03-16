import React from "react";
import {Progress} from "@nextui-org/react";

export default function DonationGoal() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
    isStriped
      aria-label="Donations"
      size="lg"
      value={25}
      maxValue={200}
      color="primary"
      label="Current donations"
      className="max-w-xl"
      formatOptions={{style: "currency", currency: "EUR"}}
      showValueLabel={true}
    />
  );
}
