import React from "react";
import styles from "./PreviewItem.module.scss";

interface Props {
  id: string;
  type: string;
  icon: string;
  description: string;
}

function PreviewItem({ id, type, icon, description }: Props) {
  return (
    <li className={styles.item}>
      <img
        className={styles.icon}
        src={icon}
        alt={type}
        width={64}
        height={40}
      />
      <h1 className={styles.type}>{type}</h1>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>Learn More</button>
    </li>
  );
}

export default PreviewItem;
