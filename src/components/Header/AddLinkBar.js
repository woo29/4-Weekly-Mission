import classNames from 'classnames';
import React, { useState } from 'react';

import addLinkIcon from 'assets/images/link.svg';

import AddLinkButton from 'components/Common/AddLInkButton';
import styles from 'components/Header/AddLinkBar.module.css';

function AddLinkBar() {
  const [addLinkValue, setAddLinkValue] = useState('');

  const handleInputChange = (e) => {
    setAddLinkValue(e.target.value);
  };

  const addLinkClasses = classNames(styles['add-link-bar'], 'position-relative', 'width-full', 'margin-auto');
  const inputClasses = classNames(styles['add-link-bar-input'], 'background-white', 'text-color-gray60', 'width-full');
  const inputImgClasses = classNames(styles['add-link-bar-icon']);
  const addLinkButtonClasses = classNames(styles['add-link-bar-button'], 'position-absolute');
  const containerClasses = classNames(
    styles['add-link-bar-container'],
    'flex-row',
    'align-center',
    'justify-space-between',
    'position-absolute',
    'width-full'
  );

  return (
    <div className={addLinkClasses}>
      <input
        className={inputClasses}
        type="text"
        value={addLinkValue}
        onChange={handleInputChange}
        placeholder="링크를 추가해 보세요"
      />
      <div className={containerClasses}>
        <img className={inputImgClasses} src={addLinkIcon} alt="addLinkIcon" />
        <AddLinkButton className={addLinkButtonClasses} />
      </div>
    </div>
  );
}

export default AddLinkBar;
