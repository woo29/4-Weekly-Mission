import ModalContainer from "./ModalContainer";

const ModalAddFolder = ({ isOpen, onClose }) => {
  const addContent = (
    <>
      <h2>폴더 추가</h2>
      <input placeholder="내용 입력" className="modalInput"></input>
      <button className="blueButton">추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addContent} />
  );
};
export default ModalAddFolder;
