import { useState } from 'react';

import { CiShare1 } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TiPencil } from 'react-icons/ti';

import Modal from '../../Modal/Modal';
import GradientButton from '../../common/GradientButton/GradientButton';

import styles from './FolderNavbar.module.scss';

const FolderNavbar = ({ folderName }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showChangeNameModal, setShowChangeNameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  const toggleChangeNameModal = () => {
    setShowChangeNameModal(!showChangeNameModal);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  return (
    <ul className={styles.layout}>
      <li className={styles.item} onClick={toggleShareModal}>
        <CiShare1 />
        <span>공유</span>
        {showShareModal && (
          <Modal title='폴더 공유' onClick={toggleShareModal}>
            <p className={styles.modalSubTitle}>폴더명</p>
          </Modal>
        )}
      </li>
      <li className={styles.item} onClick={toggleChangeNameModal}>
        <TiPencil />
        <span>이름 변경</span>
        {showChangeNameModal && (
          <Modal title='폴더 이름 변경' onClick={toggleChangeNameModal}>
            <input className={styles.modalInput} placeholder={folderName} />
            <GradientButton>변경하기</GradientButton>
          </Modal>
        )}
      </li>
      <li className={styles.item} onClick={toggleDeleteModal}>
        <RiDeleteBinLine />
        <span>삭제</span>
        {showDeleteModal && (
          <Modal title='폴더 삭제' onClick={toggleDeleteModal}>
            <p className={styles.modalSubTitle}>{folderName}</p>
            <GradientButton startColor={'#FF5B56'} endColor={'#FF5B56'}>
              삭제하기
            </GradientButton>
          </Modal>
        )}
      </li>
    </ul>
  );
};

export default FolderNavbar;
