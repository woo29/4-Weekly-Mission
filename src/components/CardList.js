import '../styles/CardList.css';
import Card from './Card';

const CardList = ({ folderInfo, isIconVisible = true }) => {
  const card = folderInfo?.folder.links;
  console.log(card);

  return (
    <>
      <div className='cardlist'>
        {card ? (
          <>
            {card.map(card => (
              <Card card={card} key={card.id} isIconVisible={isIconVisible} />
            ))}
          </>
        ) : (
          <div>폴더가 비어있습니다.</div>
        )}
      </div>
    </>
  );
};

export default CardList;
