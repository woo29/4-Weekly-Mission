import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from 'components/Common/Button';
import styles from 'components/Common/SelectMenu.module.css';
import AddToFolderModal from 'components/Modal/AddToFolderModal';
import DeleteLinkModal from 'components/Modal/DeleteLinkModal';

function SelectMenu({ className }) {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuList = [
    {
      id: 1,
      label: '삭제하기',
    },
    {
      id: 2,
      label: '폴더에 추가',
    },
  ];

  const openModalById = (menuId) => {
    let modal = null;

    switch (menuId) {
      case 1:
        modal = <DeleteLinkModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
        break;
      case 2:
        modal = <AddToFolderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
        break;
      default:
        break;
    }

    return modal;
  };

  const handleMenuClick = (e, key) => {
    e.stopPropagation();
    const targetMenu = menuList.find((menu) => menu.id === key);
    setSelectedMenu(targetMenu);
    setIsModalOpen(true);
    openModalById(key);
  };

  const handleMenuMouseEnter = (key) => {
    const targetMenu = menuList.find((menu) => menu.id === key);
    setHoveredMenu(targetMenu);
  };

  const handleMenuMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuContainerClasses = classNames(styles['menu-container'], 'background-white', className);
  const menuElementClasses = classNames(styles['menu-element'], 'text-center', 'border-none', 'width-full');

  const hoveredMenuClasses = classNames('background-bg', 'text-color-primary');
  const defaultMenuClasses = classNames('background-white', 'text-color-gray100');

  return (
    <div>
      <div className={menuContainerClasses}>
        {menuList.map((menu) => (
          <Button
            key={menu.id}
            className={`${menuElementClasses} 
            ${hoveredMenu?.id === menu.id ? hoveredMenuClasses : defaultMenuClasses}`}
            text={menu.label}
            onClick={(e) => handleMenuClick(e, menu.id)}
            onMouseEnter={() => handleMenuMouseEnter(menu.id)}
            onMouseLeave={handleMenuMouseLeave}
          />
        ))}
      </div>
      {selectedMenu && openModalById(selectedMenu.id)}
    </div>
  );
}

SelectMenu.propTypes = {
  className: PropTypes.string,
};

SelectMenu.defaultProps = {
  className: '',
};

export default SelectMenu;
