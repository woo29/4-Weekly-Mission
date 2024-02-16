import styles from "./LinkFilterBox.module.css";
import LinkFilterButton from "./LinkFilterButton";
function LinkFilterBox() {
  const filterButtons = {
    filters: [
      { filterName: "전체", id: 0 },
      { filterName: "⭐️ 즐겨찾기", id: 1 },
      { filterName: "코딩 팁", id: 2 },
      { filterName: "채용 사이트", id: 3 },
      { filterName: "나만의 장소", id: 4 },
    ],
  };
  return (
    <div className={styles.link_filter_box}>
      {filterButtons.filters.map(({ filterName, id }) => {
        return <LinkFilterButton filterName={filterName} key={id} />;
      })}
    </div>
  );
}

export default LinkFilterBox;
