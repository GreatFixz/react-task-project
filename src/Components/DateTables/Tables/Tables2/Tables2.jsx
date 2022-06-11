import React from 'react'
import '../Tables1/styleTable.css'
import Tables3 from '../Tables3/Tables3'

const Tables2 = (props) => {
  return (
    <div>
        <table className="tg">
    <caption>ЕЖЕСУТОЧНАЯ СВОДКА О РЕЖИМЕ РАБОТЫ СИСТЕМ ТЕПЛОСНАБЖЕНИЯ ЭНЕРГОСИСТЕМЫ<br />НА {props.DateTables} г.</caption>
    <thead>
      <tr className="tg-9wq8">
        <th rowSpan="2">N<br />п/п</th>
        <th rowSpan="2">НАИМЕНОВАНИЕ<br />ТЕПЛОИСТОЧНИКОВ</th>
        <th rowSpan="2">Т.<br />Н.<br />В.</th>
        <th colSpan="4">ТЕМПЕРАТУРА<br />ПРЯМОЙ СЕТЕВОЙ<br />ВОДЫ В ГРАДУСАХ<br />ЦЕЛЬСИЯ</th>
        <th colSpan="3">ТЕМПЕРАТУРА<br />ОБРАТНОЙ СЕТЕВОЙ<br />ВОДЫ В ГРАДУСАХ<br />ЦЕЛЬСИЯ</th>
        <th colSpan="3">ЦИРКУЛЯЦИЯ<br />В Т/ЧАС.</th>
        <th colSpan="3">ПОДПИТКА<br />В Т/ЧАС.</th>
      </tr>
      <tr>
        <th className="tg-9wq8">ФАКТ</th>
        <th className="tg-9wq8">НОРМА<br />ТИВН.<br />ГРАФ.</th>
        <th className="tg-9wq8">СКОР.<br />ГРА-<br />ФИК</th>
        <th className="tg-9wq8">ФАКТ-<br />СК.ГР</th>
        <th className="tg-9wq8">ФАКТ</th>
        <th className="tg-9wq8">СКОР.<br />ГРА-<br />ФИК</th>
        <th className="tg-9wq8">ФАКТ-<br />СК.ГР</th>
        <th className="tg-9wq8">ФАКТ</th>
        <th className="tg-9wq8">ГРА-<br />ФИК</th>
        <th className="tg-9wq8">Ф-Г</th>
        <th className="tg-9wq8">ФАКТ</th>
        <th className="tg-9wq8">ГРА-<br />ФИК</th>
        <th className="tg-9wq8">Ф-Г</th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
        <td className="tg-0pky">1</td>
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
      </tr>

      {props.tablesSecond.map((item,idx) => {
        return(
        <>
          <tr key={idx.number}>
            <td className="tg-btxf">{item.number}</td>
            <td className="tg-btxf">{item.name}</td>
            <td className="tg-5fiw">{item.temperature}</td>
            <td className="tg-5fiw">{item.directfact}</td>
            <td className="tg-5fiw">{item.directnorm}</td>
            <td className="tg-5fiw">{item.directcorrect}</td>
            <td className="tg-5fiw">{item.dirrectfactcorrect}</td>
            <td className="tg-5fiw">{item.returnfact}</td>
            <td className="tg-5fiw">{item.returncorrect}</td>
            <td className="tg-5fiw">{item.returnfactcorrect}</td>
            <td className="tg-5fiw">{item.circfact}</td>
            <td className="tg-5fiw">{item.circgraf}</td>
            <td className="tg-5fiw">{item.circdifference}</td>
            <td className="tg-5fiw">{item.recharfact}</td>
            <td className="tg-5fiw">{item.rechargraf}</td>
            <td className="tg-5fiw">{item.rechardifference}</td> 
          </tr>
        </>
        )
      })}
    </tbody>
</table>
    </div>
  )
}

export default Tables2