import React from "react";
import styles from "./PreviewItem.module.scss";

interface Props {
  [x: string]: string;
}

function PreviewItem({ id, type, icon, description }: Props) {
  return (
    <li key={id} className={styles.item}>
      <img src={icon} alt={type} width={64} height={40} />
      <h1>{type}</h1>
      <p>{description}</p>
      <button>Learn More</button>
    </li>
  );
}

export default PreviewItem;
