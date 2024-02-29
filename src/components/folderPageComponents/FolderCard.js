import React from 'react';
import Card from '../common/Card';
import { NonLink } from '../../styles/styledComponents/folderStyled';

export const FolderCard = ({ folder }) => {
  const hasFolder = folder && folder.length >= 1;
  return (
    <>
      <div className="content-wrapper">
        {hasFolder ? (
          folder.map((folderData) => (
            <Card
              key={folderData.id}
              imageSource={folderData.image_source}
              createdAt={folderData.created_at}
              description={folderData.description}
              url={folderData.url}
              folder
            ></Card>
          ))
        ) : (
          <NonLink>저장된 링크가 없습니다</NonLink>
        )}
      </div>
    </>
  );
};
