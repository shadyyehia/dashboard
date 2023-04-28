import React from "react";
import {Bar} from 'react-chartjs-2';
// import {Chart as ChartJS} from 'chart.js/auto';
import {options} from '../../helpers/Options';

function BarChart({chartData}) {
  return (
<div className="wrapper"  >
    <Bar  data={chartData} options={options}/>
</div>
    
    
  );
}

export default BarChart;
