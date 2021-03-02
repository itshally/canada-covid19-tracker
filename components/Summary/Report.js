import { Grid } from '@material-ui/core'
import { CastForEducationSharp } from '@material-ui/icons'
import ReportItem from './ReportItem'

const Report = ({data}) => {
    console.log('data', data)
    return (
        <Grid container spacing={3}>
            <p>Report container</p>
            <ReportItem report={data}/>
        </Grid>
    )
}

export default Report



