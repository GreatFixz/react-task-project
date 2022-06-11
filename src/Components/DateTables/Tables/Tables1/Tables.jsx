import React from 'react'
import '../Tables1/styleTable.css'
import Tables2 from '../Tables2/Tables2'

const Tables = (props) => {
  return (
    <div>
    {props.DateTables ? 
      <div>
      <table className="tg">
    <caption>ЕЖЕСУТОЧНАЯ СВОДКА ОБ ОТПУСКЕ ТЕПЛА<br /> {props.DateTables} г.</caption>
    <thead>
      <tr>
        <th className="tg-9wq8" rowSpan="2">N<br />п/п</th>
        <th className="tg-9wq8" rowSpan="2">НАИМЕНОВАНИЕ<br />ТЕПЛОИСТОЧНИКОВ</th>
        <th className="tg-9wq8" colSpan="4">ФАКТ<br />ЗА СУТКИ</th>
        <th className="tg-9wq8" colSpan="4">ФАКТ ЗА СУТКИ<br />ПРОШЛОГО ГОДА</th>
        <th className="tg-9wq8" rowSpan="2">%<br />5/9</th>
        <th className="tg-9wq8" colSpan="4">ФАКТ<br />НАЧАЛА МЕСЯЦА</th>
        <th className="tg-9wq8" colSpan="4">ФАКТ С НАЧАЛА МЕСЯЦА<br />ПРОШЛОГО ГОДА</th>
        <th className="tg-9wq8" rowSpan="2">%<br />14/18</th>
      </tr>
      <tr>
        <th className="tg-9wq8">Т.<br />Н.<br />В.</th>
        <th className="tg-9wq8">С ГОР.<br />ВОДОЙ<br />гкал</th>
        <th className="tg-9wq8">С<br />ПАРОМ<br />гкал</th>
        <th className="tg-9wq8">СУМ-<br />МАРНЫЙ<br />гкал</th>
        <th className="tg-9wq8">Т.<br />Н.<br />В.</th>
        <th className="tg-9wq8">С ГОР.<br />ВОДОЙ<br />гкал</th>
        <th className="tg-9wq8">С<br />ПАРОМ<br />гкал</th>
        <th className="tg-9wq8">СУМ-<br />МАРНЫЙ<br />гкал</th>
        <th className="tg-9wq8">Т.<br />Н.<br />В.</th>
        <th className="tg-9wq8">С ГОР.<br />ВОДОЙ<br />гкал</th>
        <th className="tg-9wq8">С<br />ПАРОМ<br />гкал</th>
        <th className="tg-9wq8">СУМ-<br />МАРНЫЙ<br />гкал</th>
        <th className="tg-9wq8">Т.<br />Н.<br />В.</th>
        <th className="tg-9wq8">С ГОР.<br />ВОДОЙ<br />гкал</th>
        <th className="tg-9wq8">С<br />ПАРОМ<br />гкал</th>
        <th className="tg-9wq8">СУМ-<br />МАРНЫЙ<br />гкал</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <td className="tg-0pky"></td>
        <td className="tg-9wq8">1</td>
        <td className="tg-9wq8">2</td>
        <td className="tg-9wq8">3</td>
        <td className="tg-9wq8">4</td>
        <td className="tg-9wq8">5</td>
        <td className="tg-9wq8">6</td>
        <td className="tg-9wq8">7</td>
        <td className="tg-9wq8">8</td>
        <td className="tg-9wq8">9</td>
        <td className="tg-9wq8">10</td>
        <td className="tg-9wq8">11</td>
        <td className="tg-9wq8">12</td>
        <td className="tg-9wq8">13</td>
        <td className="tg-9wq8">14</td>
        <td className="tg-9wq8">15</td>
        <td className="tg-9wq8">16</td>
        <td className="tg-9wq8">17</td>
        <td className="tg-9wq8">18</td>
        <td className="tg-9wq8">19</td>
      </tr>

      {props.tables.map((item,idx) => {
        return(
        <>
          <tr key={idx.number}>
            <td className="tg-btxf">{item.number}</td>
            <td className="tg-btxf">{item.name}</td>
            <td className="tg-5fiw">{item.daytempeture}</td>
            <td className="tg-5fiw">{item.dayhotwater}</td>
            <td className="tg-5fiw">{item.daysteam}</td>
            <td className="tg-5fiw">{item.daysum}</td>
            <td className="tg-5fiw">{item.lastyeardaytemperature}</td>
            <td className="tg-5fiw">{item.lastyeardayhotwater}</td>
            <td className="tg-5fiw">{item.lastyeardaysteam}</td>
            <td className="tg-5fiw">{item.lastyeardaysum}</td>
            <td className="tg-5fiw">{item.percent59}</td>
            <td className="tg-5fiw">{item.monthtemperature}</td>
            <td className="tg-5fiw">{item.monthhotwater}</td>
            <td className="tg-5fiw">{item.monthsteam}</td>
            <td className="tg-5fiw">{item.monthsum}</td>
            <td className="tg-5fiw">{item.lastyearmonthtemperature}</td>
            <td className="tg-5fiw">{item.lastyearmonthhotwater}</td>
            <td className="tg-5fiw">{item.lastyearmonthsteam}</td>
            <td className="tg-5fiw">{item.lastyearmonthsum}</td>
            <td className="tg-5fiw">{item.percent1418}</td>  
          </tr>
        </>
        )
      })}
      
    </tbody>
</table>

      <Tables2 DateTables={props.DateTables}  tablesSecond={props.tablesSecond}/>

      </div>
     : <div></div>}
  </div>
  )
}

export default Tables