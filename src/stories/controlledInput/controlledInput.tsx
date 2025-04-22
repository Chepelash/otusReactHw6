import { useState } from "react";
import { Title } from "../title/title";

export const ControlledInput = () => {
  const [value, setValue] = useState<string>("Change state");
  return (
    <div>
      <Title>
        Shows <i>controlled input</i>
      </Title>
      <p>&nbsp;{value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
