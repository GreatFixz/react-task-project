import React, {Profiler} from 'react'
import {Route, Routes,Link} from 'react-router-dom' 
import './App.css';
import DateTables from './Components/DateTables/Date/DateTables/DateTables';
import DateGraphics from './Components/DateTables/Date/DateGraphics/DateGraphics';
import HomePage from './Components/Pages/HomePage';
import TablesPage from './Components/Pages/TablesPage';
import GraphicsPage from './Components/Pages/GraphicsPage';
function App() {
  function callback(id,phase, actualDuration,baseDuration){
    console.log(id,phase,actualDuration, baseDuration);
  }
  return (
    <div>
    <Profiler id='DateTables' onRender={callback}>
      <HomePage>
        <h1 className='flex justify-center'>Выберите ссылку по которой хотите перейти, для просмотра таблиц/графиков</h1>
      </HomePage>
      <div className='flex justify-between m-4'>
        <TablesPage>
            <Link to='/tables' target="_blank">Таблица</Link>
        </TablesPage>
        <GraphicsPage>
            <Link to="/graphics" target="_blank">Графики</Link>
        </GraphicsPage>
      </div>
      <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/tables' element={<DateTables />}/>
          <Route path='/graphics' element={<DateGraphics />} />
      </Routes>
      </Profiler>
    </div>
  );
}

export default App;
