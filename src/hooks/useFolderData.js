import { useState } from 'react';
import { formatDate, getLastTime } from '../utils/timeCalculater';
function useFolderData(section) {
  const [owner, setOwner] = useState({
    ownerImg: '',
    ownerName: '',
    folderName: '',
  });
  const [linksArray, setLinksArray] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/folder'
      );
      const result = await response.json();
      setOwner({
        ownerImg: result.folder.owner.profileImageSource,
        ownerName: result.folder.owner.name,
        folderName: result.folder.name,
      });
      setLinksArray(
        result.folder.links.map((link) => ({
          id: link.id,
          url: link.url,
          imgUrl: link.imageSource,
          title: link.title,
          description: link.description,
          lastTimeString: getLastTime(link.createdAt),
          uploadDate: formatDate(link.createdAt),
        }))
      );
    } catch (e) {
      console.log('폴더 데이터 GET 오류', e);
    }
  };
  getData();
  if (section === 'profile') {
    return owner;
  } else if (section === 'cards') {
    return linksArray;
  }
}
export default useFolderData;
