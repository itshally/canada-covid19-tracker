import useSWR from 'swr'
import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'
import axios from "axios";
import moment from 'moment'
import { Grid, Paper, Container } from '@material-ui/core'
import Report from '../components/Summary/Report'

// const fetcher = url => axios.get(url).then(res => res.data)
const fetcher = url => fetch(url).then((res) => res.json())

export default function Home(props) {
  const { grid_item } = styles
  const { data, error } = useSWR('/api/summary', fetcher)
  const numberFormatter = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  return (
    <div className={styles.container}>

      {/* Head Tag */}
      <Meta title="Home"/>

      {/* summary */}
      <Container maxWidth="md" className={styles.summary_container}>
        <h1>Canada COVID-19 Overview</h1>
        <p><em>I don't own the data. For more info, please check this source.</em></p>
        <p><strong>Last Update: </strong>{data ? moment(data.last_updated).format('dddd, MMMM Do YYYY, h:mm a') : `...`}</p>
        {
          data ? (
            <Report data={data.data[0]}/>
          ) : <p>Loading...</p>
        }

        <h2>Vaccines Report</h2>

        {
          data ? (
            <Grid container spacing={3}>

              {/* Total Cases */}
              <Grid item xs={12} sm={12} md={4}>
                <div className={grid_item}>
                  <h4>Total Vaccines Distributed</h4>
                  <h5>{numberFormatter(data.data[0].total_vaccines_distributed)}</h5>
                </div>
              </Grid>

              {/* Total Recovered */}
              <Grid item xs={12} sm={12} md={4}>
                <div className={grid_item}>
                  <h4>Total Vaccinations</h4>
                  <h5>{numberFormatter(data.data[0].total_vaccinations)}</h5>
                </div>
              </Grid>

              {/* Total Deaths */}
              <Grid item xs={12} sm={12} md={4}>
                <div className={grid_item}>
                  <h4>Total Vaccinated</h4>
                  <h5>{numberFormatter(data.data[0].total_vaccinated)}</h5>
                </div>
              </Grid>
            </Grid>
          ) : <p>Loading...</p>
        }
      </Container>
    </div>
  )
}