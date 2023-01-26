import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';



export default class Chart extends PureComponent {

  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render(props) {
    const food = props.food;
    const data = 
      [ {name: '탄수화물',vlaue: food.NUTR_CONT2}
        ,{name: '단백질',vlaue: food.NUTR_CONT3}
        ,{name: '지방',vlaue: food.NUTR_CONT4}
        
      ]
    
    return (
      

        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
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
}
