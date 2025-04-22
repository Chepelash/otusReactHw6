import { useState } from "react";
import { Panel } from "../panel/panel";
import { Title } from "../../title/title";

export const StateHoister = () => {
  const [activePanel, setActivePanel] = useState<number>(0);
  return (
    <div>
      <Title>
        Shows <i>shared state</i> and <i>conditional rendering</i>
      </Title>
      <Panel
        title="First panel title"
        content="First Panel content"
        onClick={() => setActivePanel(0)}
        isActive={activePanel === 0}
      />
      <Panel
        title="Second panel title"
        content="Second Panel content"
        onClick={() => setActivePanel(1)}
        isActive={activePanel === 1}
      />
    </div>
  );
};
