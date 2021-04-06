import React from "react";
import Attribution from "../components/attribution";
import NextHead from "../components/next-head";
import PreviewCard from "../components/preview-card";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextHead />
      <PreviewCard />
      <Attribution />
    </div>
  );
}
