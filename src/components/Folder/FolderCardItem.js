import logoImg from '../../assets/images/logo.png';
import caculateTime from '../../utils/caculateTime';
import formatDate from '../../utils/formatDate';
import starIcon from '../../assets/icons/star.svg';
import kebabIcon from '../../assets/icons/kebab.svg';
import '../../assets/styles/FolderCardItem.css';
import { useState } from 'react';
import ModalPortal from '../common/ModalPortal';
import Modal from '../modal/Modal';

const FolderCardItem = ({ link, folderList }) => {
  const { created_at, description, image_source, title, url } = link;
  const [dropdown, setDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState('');

  const handleClick = (text) => {
    setAction(text);
    setIsModalOpen(true);
    setDropdown(false);
  };

  return (
    <div className="card">
      <a href={url} target="_blank">
        <img className="star-icon" src={starIcon} alt="star-icon" />
        {image_source ? (
          <div className="card-img">
            <img id="img-logo" src={image_source} alt={title} />
          </div>
        ) : (
          <div className="card-img no-img">
            <img id="no-img-logo" src={logoImg} alt="noImg" />
          </div>
        )}
        <div className="card-contents">
          <h3 id="card-created-time">{caculateTime(created_at)}</h3>
          <h2 id="card-description">{description}</h2>
          <h3 id="card-date">{formatDate(created_at)}</h3>
        </div>
      </a>
      <img
        className="kebab-icon"
        src={kebabIcon}
        alt="kebab-icon"
        onClick={() => setDropdown(!dropdown)}
      />
      {dropdown && (
        <div className={`card-dropdown`}>
          <div className="card-dropdown-menu" onClick={() => handleClick('delete-link')}>
            삭제하기
          </div>
          <div className="card-dropdown-menu" onClick={() => handleClick('add-link')}>
            폴더에 추가
          </div>
        </div>
      )}
      {isModalOpen && (
        <ModalPortal>
          <Modal
            action={action}
            data={{ link: link.url, folderList }}
            closeModal={() => setIsModalOpen(false)}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default FolderCardItem;
