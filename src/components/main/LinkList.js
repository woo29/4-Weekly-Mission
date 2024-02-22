import { useEffect, useState } from 'react';
import FolderPageLinkItem from './FolderPageLinkItem';
import styles from './LinkList.module.css';
function LinkList({ folderId }) {
  const [filterData, setFilterData] = useState(null);
  async function handleFilterClick() {
    await fetch(`https://bootcamp-api.codeit.kr/api/users/1/links${folderId}`)
      .then((res) => res.json())
      .then((result) => setFilterData(result));
  }

  useEffect(() => {
    handleFilterClick();
  }, [folderId]);

  return (
    <div>
      {filterData?.data?.length === 0 ? (
        <div className={styles.no_link_wrapper}>저장된 링크가 없습니다</div>
      ) : (
        <div className={styles.item_card_grid}>
          {filterData?.data?.map(
            ({ image_source, description, created_at, url }, i) => {
              return (
                <FolderPageLinkItem
                  description={description}
                  image_source={image_source}
                  created_at={created_at}
                  url={url}
                  key={i}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default LinkList;
