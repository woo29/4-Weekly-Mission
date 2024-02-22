import SharePageFolderItem from './SharePageFolderItem';
import styles from './SharePageFolderList.module.css';
import { useFetch } from '../../hooks/useFetch';

const folderUrl = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function SharePageFolderList() {
  const { data: folderData } = useFetch(folderUrl);

  return (
    <div className={styles.folder_list_wrapper}>
      {folderData?.folder.links.map(
        ({ id, createdAt, url, title, imageSource }) => (
          <SharePageFolderItem
            title={title}
            imageSource={imageSource}
            createdAt={createdAt}
            url={url}
            key={id}
          />
        )
      )}
    </div>
  );
}

export default SharePageFolderList;
