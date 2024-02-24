import "./deleteModal.css";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

function DeleteModal({ title, description, changeLinkDeleteSelect }) {
  return (
    <div className="DeleteModal">
      <div className="container">
        <div className="contents">
          <CloseIcon className="close-icon" onClick={changeLinkDeleteSelect} />
          <h1 className="title">{title}</h1>
          <p className="subtitle">{description}</p>
          <button className="button">삭제하기</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
