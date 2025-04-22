import "./panel.css";

interface PanelProps {
  title: string;
  content: string;
  onClick: () => void;
  isActive: boolean;
}

export const Panel = ({ title, content, onClick, isActive }: PanelProps) => {
  return (
    <div className="panel">
      <h4>{title}</h4>
      {isActive ? <p>{content}</p> : <button onClick={onClick}>Show</button>}
    </div>
  );
};
