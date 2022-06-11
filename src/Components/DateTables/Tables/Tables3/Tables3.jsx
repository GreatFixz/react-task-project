import React, { useState } from 'react'
import { Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from "faker";

const Tables3 = (props) => {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Test',
      },
    },
  };

  const labels = props.tablesThird;

  const data = {
    labels,
    datasets: [
      {
        label: 'Test 1',
        data: labels.map((item) =>  faker.datatype.number({min: item.Goriachaia_voda, max: item.Goriachaia_voda})),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Test 2',
        data: labels.map((item) => faker.datatype.number({min: item.Goriachaia_voda, max: item.Goriachaia_voda})),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return(
    <>
      {props.DateGraphics ? 
        <Line options={options} data={data} /> 
      : <div></div>}
    </>
  )
}

export default Tables3