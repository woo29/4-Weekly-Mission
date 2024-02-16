import "./CardList.css";
import noImage from "../assets/noImage.svg";
import formatDate from "../utils/formatDate.js";
import formatTimeDifference from "../utils/formatTimeDifference.js";

function CardListItem({ item }) {
  const {
    title,
    createdAt,
    created_at,
    url,
    description,
    imageSource,
    image_source,
  } = item;
  const src = (imageSource || image_source) ?? noImage;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={src} className="card-box-img" alt="" />
      <div className="text-container">
        <p className="time-difference">
          {formatTimeDifference(createdAt || created_at)}
        </p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <p className="date"> {formatDate(createdAt || created_at)}</p>
      </div>
    </a>
  );
}

function CardList({ items }) {
  return (
    <div className="card-container-center">
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card-box">
            <CardListItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
