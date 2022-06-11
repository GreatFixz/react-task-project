import React from 'react'
import ReactDOM from 'react-dom'
import DateGraphics from '../DateGraphics/DateGraphics'
import Tables from '../../Tables/Tables1/Tables'
import GraphicsPage from '../../../Pages/GraphicsPage'
import { Routes, Route, Link } from 'react-router-dom'
import TablesPage from '../../../Pages/TablesPage'
import HomePage from '../../../Pages/HomePage'

const DateTables = () => {
    const currentDate = new Date()
    const [tables,setTables] = React.useState([])
    const [tablesSecond,setTablesSecond] = React.useState([])
    const [DateTables,setDateTables] = React.useState({
        date: `${currentDate.getFullYear()}-0${currentDate.getMonth()+1}-${currentDate.getDate()}`
    })
    const handleChangeDatePicker = (dates, table1, table2) => {
        setDateTables({
            date: dates
        })
        return table1(),  table2()
    }
    const handleRequestToFecthTable1 = async () => {
        const request = await fetch('http://178.21.11.175/table-2017-01-01_A.json');
        const response = await request.json();
        setTables(response.Table1);
    }
    const handleRequestToFecthTable2 = async () => {
        const request = await fetch('http://178.21.11.175/table-2017-01-01_B.json');
        const response = await request.json();
        setTablesSecond(response.Table2);
    }
    console.log(DateTables)
  return ReactDOM.createPortal(
      <div>
        <div className='m-4'>
            <div className='flex flex-col justify-center items-center'>
                <input 
                    type="date" 
                    className='border-solid border-2 border-sky-800 p-1 ' 
                    onChange={e => handleChangeDatePicker(e.target.value, handleRequestToFecthTable1, handleRequestToFecthTable2)}
                />
                <Tables DateTables={DateTables.date} tables={tables} tablesSecond={tablesSecond}/>
            </div>
        </div>
    </div>,
    document.querySelector("#datetables")
  )
}

export default DateTables