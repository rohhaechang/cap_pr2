import styles from "../page.module.css";
import Link from "next/link";


export default function Card({params}: {params: {name: string, cik: string, recent_year: string}}) {
  return (
    <Link
    href={`/item/${params.cik}`}
    className={styles.customCard}
    // target="_blank" 새 창 띄우기
  >
    <h2>
      {params.name} <span>-&gt;</span>
    </h2>
    <p>
      <p>Company cik: {params.cik}</p>
      <p>recent_filing_year: {params.recent_year}</p>
    </p>
  </Link>
  )
}