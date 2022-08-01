import styles from "./Background.module.scss";

function Background() {
  return (
    <div className={styles.videoContainer}>
      <video loop autoPlay muted>
        <source
          src={require("../../../public/videos/vidia.webm")}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Background;
