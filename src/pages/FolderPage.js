import { useState, useEffect } from 'react';

import { getUser, getFolder } from '../api/BaseUrl';
import AddLink from '../components/AddLink';
import Folder from '../components/Folder';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoldPage = () => {
  const [user, setUser] = useState(null);
  const [folder, setFolder] = useState(null);

  const handleLoad = async (getState, setState) => {
    try {
      const state = await getState();
      setState(state);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoad(getUser, setUser);
    handleLoad(getFolder, setFolder);
  }, []);

  return (
    <div>
      <Header userInfo={user} isSticky={false} />
      <AddLink />
      <Folder folderInfo={folder} />
      <Footer />
    </div>
  );
};

export default FoldPage;
