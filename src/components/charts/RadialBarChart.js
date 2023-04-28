import React from "react";

import ReactApexChart from 'react-apexcharts';
function RadialBarChart({ reportData,series }) {
    return (
       
       
  <div id="chart" className="d-flex" style={{marginTop:"-20px"}}>
  <ReactApexChart options={reportData.options} series={series}  type="radialBar" height={reportData.options.chart.height} />
</div>


    );
}

export default RadialBarChart;
