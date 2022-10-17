import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { Loader } from "components/Loader/Loader";

export const Modal = ({ currentImage: { src, alt }, closeModal }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const closeByEsc = ({ code }) => {
      if (code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", closeByEsc);

    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const loadHandler = () => {
    setLoaded(true);
  };

  return (
    <div className={styles.backdrop} onClick={closeByBackdrop}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={closeModal}>
          Close
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${src}`}
          onLoad={loadHandler}
          alt={alt}
          style={{ display: loaded ? "block" : "none" }}
        />
        {!loaded && <Loader />}
      </div>
    </div>
  );
};
