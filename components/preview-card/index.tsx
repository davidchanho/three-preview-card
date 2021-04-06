import React from "react";
import cars from "../../data";
import styles from "./PreviewCard.module.scss";
import PreviewItem from "./PreviewItem";

function PreviewCard() {
  return (
    <ul className={styles.list}>
      {cars.map((car) => {
        return <PreviewItem key={car.id} {...car} />;
      })}
    </ul>
  );
}

export default PreviewCard;
