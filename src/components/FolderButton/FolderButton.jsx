import "./FolderButton.css";

const FolderButton = ({ text, onClick, isChosen = false }) => {
  const classNames = `folderbutton-container ${isChosen ? 'chosen' : ''}`;

  return (
    <button className={classNames} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default FolderButton;