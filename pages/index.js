import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  /**
   * useEffect to fetch the data. I can also fetch it server side using
   * Home.getInitialProps = () => {} but to make this work more like standard react
   * I opted out to use it in the effect.
   */
  useEffect(() => {
    if (!fetched) {
      fetch("https://api.jsonbin.io/b/5f50130e993a2e110d3d18bd", {
        headers: {
          "secret-key":
            "$2b$10$dsxJFlK5eq20hdMeMPaVWeOX1XxhtGcgSE4hNBqaANOukbimkLM6C",
        },
      }).then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(function (data) {
          if (data && data.data) {
            setFetched(true);
            setData(data.data);
          }
        });
      });
    }
  }, [fetched]);

  /** Here I add a check for when the page changes */
  if (typeof window !== "undefined") {
    function confirmExit() {
      return "Are you sure you want to navigate to the page?";
    }

    window.onbeforeunload = confirmExit;
  }

  return (
    <div>
      <Head>
        <title>Cute Anime Girls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cute Anime Girls</h1>

        <div className={styles.grid}>
          {data.map((girl, index) => {
            return (
              <a key={`girl-${index}`} href={girl.link} className={styles.card}>
                <h3>{girl.title}</h3>
                <p>
                  <img src={girl.image} className={styles.image} />
                </p>
                <p>{girl.description}</p>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
