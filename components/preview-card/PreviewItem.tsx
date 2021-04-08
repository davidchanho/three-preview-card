import React from "react";
import styles from "./PreviewItem.module.scss";

interface Props {
  title: string;
  icon: string;
  description: string;
}

function PreviewItem({ title, icon, description }: Props) {
  return (
    <li className={styles.item}>
      <img
        className={styles.icon}
        src={icon}
        alt={title}
        width={64}
        height={40}
      />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>Learn More</button>
    </li>
  );
}

export default PreviewItem;
