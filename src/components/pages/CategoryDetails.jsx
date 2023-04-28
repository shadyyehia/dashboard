import React, { useState } from "react";
import {Report} from '../../helpers/mockArray';
import { useLocation } from "react-router-dom";
import RadialBarChart from "../charts/RadialBarChart";

function CategoryDetails() {
    const [reportData,setreportData]=useState({
          
        series: [25],
        options: {
          chart: {
            height: 200,
            type: 'radialBar',
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -180,
              endAngle: 180,
               hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
          
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '15px'
                },
                value: {
                  formatter: function(val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '25px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Percent'],
          responsive: [
            {
              breakpoint: 800,
              options: {
                chart: {
                    height: 170,
                    type: 'radialBar',
                    toolbar: {
                      show: false
                    }
                  },
                  plotOptions: {
                  dataLabels: {
                   
                    name: {
                     
                      fontSize: '10px'
                    },
                    value: {
                      
                      fontSize: '20px',
                      
                    }
                }
                  }
               
              }
            }
          ]
        },
      
      
      });
    const location = useLocation();
    const data = location.state?.data;
    const Data= Report.result.DQ_index.DataCategories;

    var result = Data.find(item => item.CategoryName === data).Detail;
    

    console.log(Data);
      console.log(result);
    return (
        <div className="col-12 p-5">

     <div className="row d-flex">

    
        {
            result.map((item)=>(
                
            
               
                <div class="col-sm-4 col-12 mt-5 ">
                <div class="customized-graph-card">
                    <div class="graph-image-div text-center ">
                    <RadialBarChart reportData={reportData} series={item.valid_percentage}/>
                    </div>
                    <div class="card-container">
            
                        <p class="paragraph-inside-graph-card"> {item.QueryName}</p>
                       
                    </div>
                </div>
            </div>
                
            ))
                                    }
                                      </div>
                                      </div>

    );
}

export default CategoryDetails;
