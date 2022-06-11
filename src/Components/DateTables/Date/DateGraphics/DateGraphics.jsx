import React from 'react'
import ReactDOM from 'react-dom'
import TablesThird from '../../Tables/Tables3/Tables3'

const DateGraphics = () => {

    const [tablesThird, setTablesThird] = React.useState([])
    const currentDate = new Date()
    const [DateGraphics,setDateGraphics] = React.useState({
        date: `${currentDate.getFullYear()}-0${currentDate.getMonth()+1}-${currentDate.getDate()}`
    })
    const handleChangeDatePicker = (dates, table3_1) => {
        setDateGraphics({
            date: dates
        })
        return table3_1()
    }
    const handleRequestToFetchTable3_1 = async () => {
        const request = await fetch(`http://localhost:3000/otpusk_tepla-Mozyrskaia_TEC-2015.12.10-2016.03.08.json`);
        const response = await request.json();
        setTablesThird(response);
    }
  return ReactDOM.createPortal(
    <>
        <div className='m-4'>
            <div className='flex flex-col justify-center items-center'>
                <input 
                type="date" 
                className='border-solid border-2 border-sky-800 p-1 ' 
                onChange={e => handleChangeDatePicker(e.target.value, handleRequestToFetchTable3_1)}/>
                <TablesThird DateGraphics={DateGraphics.date} tablesThird={tablesThird} />
            </div>
        </div>
    </>,
    document.querySelector('#dategraphics')
  )
}

export default DateGraphics