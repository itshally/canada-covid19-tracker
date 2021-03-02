import useSWR from 'swr'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { Container } from '@material-ui/core'
import Report from '../components/Summary/Report'

const fetcher = url => fetch(url).then((res) => res.json())

const Home = () => {
  const { data, error } = useSWR('/api/summary', fetcher)
  
  return (
    <div className={styles.container}>
      
      {/* Head Tag */}
      <Meta title="Home"/>

      <Container maxWidth="md" className={styles.summary_container}>
        <h1>Canada COVID-19 Overview</h1>
        <p><em>I don't own the data. For more info, please check this source.</em></p>
        <p><strong>Last Update: </strong>{data ? moment(data.last_updated).format('dddd, MMMM Do YYYY, h:mm a') : `...`}</p>
        {
          data ? (
            <Report data={data.data[0]}/>
          ) : <p>Loading...</p>
        }
      </Container>     
    </div>
  )
}

export default Home