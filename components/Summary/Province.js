import useSWR from 'swr'
import MaterialTable from 'material-table';
import styles from '../../styles/Home.module.css'

// const fetcher = url => fetch(url).then((res) => res.json())

const Province = () => {

    const {data: summarySplit} = useSWR('/api/summary/split')
    
    const {data: listOfProvinces} = useSWR('/api/provinces')

    const displayProvinceName = name => {
        
        return listOfProvinces 
                ? listOfProvinces.map( province => {
                    if(name == province.code){
                        return province.name
                    }
                })
                : null
    }
    
    const { table_container } = styles

    return (
        <div className={table_container}> 
         <MaterialTable
            title="Province Summary Report"
            columns={[
                { title: 'Province', field: 'province', render: val => {
                   return displayProvinceName(val.province)
                }},
                { title: 'Total Cases', field: 'total_cases'},
                { title: 'Total Vaccinated', field: 'total_vaccinated', render: val => {
                    return val.total_vaccinated ? val.total_vaccinated : 0
                }},
                { title: 'Total Recoveries', field: 'total_recoveries'},
                { title: 'Total Deaths', field: 'total_fatalities'}
            ]}
            data={summarySplit ? [...summarySplit] : []}
            options={{
                sorting: true
            }}
            />
        </div>
    )
}

export default Province