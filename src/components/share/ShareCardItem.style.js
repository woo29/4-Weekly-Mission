import styled from "styled-components"

export const Image = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    transition: 0.6s;
    transition-timing-function: cubic-bezier(0.09, 0.54, 0.32, 0.96);
  }
`

export const CardList = styled.li`
  width: 100%;
  height: 335px;

  &:hover ${Image} img {
    transform: scale(1.3);
  }
`

export const Contents = styled.div`
  padding: 15px 20px;
  height: 135px;

  .elapsedTime {
    color: #666666;
    font-size: 13px;
  }

  .description {
    margin: 10px 0;
    line-height: 24px;
    max-height: 49px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .date {
    font-size: 14px;
    color: #333;
  }
`
