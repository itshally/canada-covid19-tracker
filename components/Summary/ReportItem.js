import {Grid} from '@material-ui/core'
import styles from '../../styles/Home.module.css'

const ReportItem = ({report}) => {
    console.log('cases', report)
    const { grid_item } = styles
    const numberFormatter = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <>

            {/* Total Cases */}
            <Grid item xs={12} sm={12} md={4}>
            <div className={grid_item}>
                <h4>Total Cases</h4>
                <h5>{numberFormatter(report.total_cases)}</h5>
            </div>
            </Grid>

            {/* Total Recovered */}
            <Grid item xs={12} sm={12} md={4}>
            <div className={grid_item}>
                <h4>Total Recovered</h4>
                <h5>{numberFormatter(report.total_recoveries)}</h5>
            </div>
            </Grid>

            {/* Total Deaths */}
            <Grid item xs={12} sm={12} md={4}>
            <div className={grid_item}>
                <h4>Total Deaths</h4>
                <h5>{numberFormatter(report.total_fatalities)}</h5>
            </div>
            </Grid>
        </>
    )
}

export default ReportItem
