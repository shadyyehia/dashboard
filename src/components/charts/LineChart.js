import React from "react";
import { Line } from 'react-chartjs-2';

import {options} from '../../helpers/Options';
function LineChart({ chartData }) {
    return (
       
        <div className="wrapper">
            <Line className="chart-style" data={chartData}  options={options}/>
        </div>


    );
}

export default LineChart;
