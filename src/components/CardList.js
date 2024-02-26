import '../styles/CardList.css';
import Card from './Card';

const CardList = ({ folderLink, folderInfo, isIconVisible }) => {
  const card = folderLink || folderInfo?.folder.links;

  return (
    <>
      <div className='cardlist'>
        {card && card.length !== 0 ? (
          <>
            {card.map(card => (
              <Card card={card} key={card.id} isIconVisible={isIconVisible} />
            ))}
          </>
        ) : (
          <div className='none-link'>저장된 링크가 없습니다.</div>
        )}
      </div>
    </>
  );
};

export default CardList;
