import styles from "./MissionCard.module.css";

export default function MissionCard ({name, status, crew}) {
	return (
		<>
	<h2 className={styles.title}>{name}</h2>
<p className={styles.detail}>Status: {status}</p>
<p className={styles.detail}>Crew: {crew.join(", ")}</p>
		</>
	);
}