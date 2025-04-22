import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState<string>("Change state");
  return (
    <div>
      <p>&nbsp;{value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
