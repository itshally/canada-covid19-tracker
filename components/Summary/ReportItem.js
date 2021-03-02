import { Grid } from '@material-ui/core'
import styles from '../../styles/Home.module.css'

const ReportItem = ({cases, vaccines}) => {

    const { grid_item } = styles

    const numberFormatter = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const displayCasesReport = () => {
        if(cases){
            return (
                <>
                    {/* Total Cases */}
                    <Grid item xs={12} sm={12} md={4}>
                    <div className={grid_item}>
                        <h4>Total Cases</h4>
                        <h5>{numberFormatter(cases.total_cases)}</h5>
                    </div>
                    </Grid>
    
                    {/* Total Recovered */}
                    <Grid item xs={12} sm={12} md={4}>
                    <div className={grid_item}>
                        <h4>Total Recovered</h4>
                        <h5>{numberFormatter(cases.total_recoveries)}</h5>
                    </div>
                    </Grid>
    
                    {/* Total Deaths */}
                    <Grid item xs={12} sm={12} md={4}>
                    <div className={grid_item}>
                        <h4>Total Deaths</h4>
                        <h5>{numberFormatter(cases.total_fatalities)}</h5>
                    </div>
                    </Grid>
                </>
            )
        }
    }

    const displayVaccinesReport = () => {
        if(vaccines){
            return (
                <>
                    {/* Total Vaccines Distributed */}
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={grid_item}>
                            <h4>Total Vaccines Distributed</h4>
                            <h5>{numberFormatter(vaccines.total_vaccines_distributed)}</h5>
                        </div>
                    </Grid>

                    {/* Total Vaccinations */}
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={grid_item}>
                            <h4>Total Vaccinations</h4>
                            <h5>{numberFormatter(vaccines.total_vaccinations)}</h5>
                        </div>
                    </Grid>

                    {/* Total Vaccinated */}
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={grid_item}>
                            <h4>Total Vaccinated</h4>
                            <h5>{numberFormatter(vaccines.total_vaccinated)}</h5>
                        </div>
                    </Grid>
                </>
            )
        }
    }

    return (
        <>
            {displayCasesReport()}
            {displayVaccinesReport()}
        </>
    )
}

export default ReportItem