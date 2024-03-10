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
      aria-label="Donation Goal..."
      size="md"
      value={25}
      color="primary"
      className="max-w-xl"
    />
  );
}
