import Text from "../../ui/Text";

function Progressbar() {
  return (
    <div className="flex items-center gap-2">
      <Text size="small">12</Text>
      <progress value={12} max={20} className="progress-bar"></progress>
      <Text size="small">20</Text>
    </div>
  );
}

export default Progressbar;
