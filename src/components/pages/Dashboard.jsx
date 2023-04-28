import React, { useState } from "react";
import '../../App.css';
import {AiFillSetting} from 'react-icons/ai';
import {BsFillBellFill} from 'react-icons/bs';
import {FiLogOut} from 'react-icons/fi';
import {HiSquares2X2} from 'react-icons/hi2';
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {BsPersonFill,BsNewspaper} from 'react-icons/bs';
import {FaRunning} from 'react-icons/fa';
import {Report} from '../../helpers/mockArray';
import {UserData} from '../../helpers/Data'; 
import RadialBarChart from "../charts/RadialBarChart";
import {Link} from 'react-router-dom';




function Dashboard() {
    const [userData,setUserData]=useState({
        labels: UserData.map((data)=>data.year),
        datasets:[{
            label:"Users Gained",
            data:UserData.map((data)=>data.userGain),
            backgroundColor:["red","green","blue"],
            borderColor:"black",
            borderWidth:1  
         }],
         options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

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
    const Data = Report.result.DQ_index.DataCategories;
    console.log(Data[0].valid_percentage);
    console.log(reportData.options.chart.height);
    return (

        <div className="container-fluid p-4 bg-light ">
            <div className="row">
                <div className="col-lg-3 col-12">
                    <div className="sideNav text-center">
                        <p className="Nav-Header">RefData Reports</p>
                        <hr style={{color: "white"}} />
                        <div className="d-flex justify-content-center Nav-Button">
                          <HiSquares2X2 className="icon-style"/>
                            <p className="Nav-Button-Text">Dashboard</p>
                        </div>
                        <div className="d-flex justify-content-center Nav-Button">
                           <HiOutlineDocumentReport className="icon-style"/>
                            <p className="Nav-Button-Text">Reports</p>
                        </div>
                        <div className="d-flex justify-content-center Nav-Button">
                           <BsNewspaper className="icon-style" />
                            <p className="Nav-Button-Text">People</p>
                        </div>
                        <div className="d-flex justify-content-center Nav-Button">
                        <BsPersonFill className="icon-style"/>
                            <p className="Nav-Button-Text">Profile</p>
                        </div>
                        <div className="d-flex justify-content-center Nav-Button">
                        <FaRunning className="icon-style"/>
                            <p className="Nav-Button-Text">Logout</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-9">
                    <div className="row d-flex justify-content-between ">
                        <div className="col-lg-3 col-12 ">
                            <p className="Header-Paragraph">Pages / Dashboard</p>
                        </div>
                        <div className="col-lg-3 col-12  d-flex justify-content-end text-center">
                            <button className="btn"> <FiLogOut/></button>

                            <p className="Header-Paragraph">Logout</p>
                            <button className="btn">  <AiFillSetting/></button>
                          
                            <button className="btn"><BsFillBellFill/></button>

                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="row">
                            <div className="col-lg-2 col-12 orange-div ">
                                <p className="Orange-Div-Paragraph">
                                    Data Quality

                                </p>
                            </div>
                        </div>
                        <div className="row  ">
                        <div class="col-md-3 mt-5 col-12 d-flex justify-content-center">
                            <div class="customized-card ">
                                <div class="black-user-div text-center ">
                                    <i class="fa-solid fa-inverse fa-user"></i>
                                </div>
                                <div class="card-container">
                                    <p class="paragraph-inside-card-top text-muted">Accuracy</p>
                                    <p class="paragraph-inside-card-bottom text-muted"> +55% Than last Week</p>
                                </div>
                            </div>
                        </div>
                     
                        <div class="col-md-3 mt-5 col-12 d-flex justify-content-center">
                            <div class="customized-card ">
                                <div class="black-user-div text-center ">
                                    <i class="fa-solid fa-inverse fa-user"></i>
                                </div>
                                <div class="card-container">
                                    <p class="paragraph-inside-card-top text-muted">Accuracy</p>
                                    <p class="paragraph-inside-card-bottom text-muted"> +55% Than last Week</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 mt-5 col-12 d-flex justify-content-center">
                            <div class="customized-card ">
                                <div class="black-user-div text-center ">
                                    <i class="fa-solid fa-inverse fa-user"></i>
                                </div>
                                <div class="card-container">
                                    <p class="paragraph-inside-card-top text-muted">Accuracy</p>
                                    <p class="paragraph-inside-card-bottom text-muted"> +55% Than last Week</p>
                                </div>
                            </div>
                        </div>
                  

                        {
Data.map((item)=>(
    

   
    <div class="col-sm-4 col-12 mt-5 ">
    <div class="customized-graph-card">
        <div class="graph-image-div text-center ">
        <RadialBarChart reportData={reportData} series={item.valid_percentage}/>
        </div>
        <div class="card-container">

            <p class="paragraph-inside-graph-card"> {item.CategoryName}</p>
            <button className="more-btn">
                <Link className="router-link" to="/categoryDetails" 
                state={{data:item.CategoryName}}>
                More Details
                </Link>
              
                
               
            </button>
        </div>
    </div>
</div>
    
))
                        }
                       
 
                 
                
                         
                        </div>
                    </div>
                </div>
            </div>

           
        </div>





    );
}

export default Dashboard;  