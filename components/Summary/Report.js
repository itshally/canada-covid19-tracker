import { Grid } from '@material-ui/core'
import ReportItem from './ReportItem'

const Report = ({data}) => {
    return (
        <>
            <Grid container spacing={3}>
                {/* <p>Report container</p> */}
                <ReportItem cases={data}/>
            </Grid>

            <h2>Vaccines Report</h2>
            
            <Grid container spacing={3}>
                {/* <p>Report container</p> */}
                <ReportItem vaccines={data}/>
            </Grid>
        </>
    )
}

export default Report