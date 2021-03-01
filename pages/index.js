import useSWR from 'swr'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data)

export default function Home() {
  const { data, error } = useSWR('/api/summary', fetcher)

  return (
    <div className={styles.container}>
      

      {/* Head Tag */}
      <Meta title="Home"/>

      {/* summary */}
      <div>
        <h1>Print Canadian Provinces</h1>

        {
          data ? data.map((x,index) => <p key={index}>{x.province}</p>) : <p>loading...</p>
        }
      </div>
    </div>
  )
}