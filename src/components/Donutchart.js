import React from "react";
import Chart from 'react-apexcharts';

function Donutchart()
{

    return(

            <div>        
            <h2>Donut Chart</h2>
            <Chart type="donut" width={1349} height={ 500}
            series={[45,67,89,34,43]}

            options={{
             labels:['USA' , 'China' , 'Russia' , 'India' , 'UK'],
             title:{
                text:"Medal Country Name",
             },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

            }} />

            </div>
       
    );
}
export default Donutchart;


