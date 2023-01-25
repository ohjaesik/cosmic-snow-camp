import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip} from 'recharts';



export default PureComponent = (props) => ({
  demoUrl : 'https://codesandbox.io/s/two-simple-pie-chart-otx9h',
  
  render() {
    const data = {props.food.map((foodNutrient,idx) => {
      nutrientName = foodNutrient.name;
      value = foodNutrient.value;
    })}

    ;
    const [nutrientName, setNutrientName] = useState([]);
    const [value, setValue] = useState([]);
    return (
      
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data= {data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>

    );
  }
})
