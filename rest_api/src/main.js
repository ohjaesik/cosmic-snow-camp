import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Main(props) {
  const [food, setFood] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFood = async () => {
      try{
        setError(null);
        setFood(null);
        setLoading(true);
      const response = await axios.get(
        `https://openapi.foodsafetykorea.go.kr/api/5106e02c83604344bb93/I2790/json/1/100`
    )
    setFood(response.data.I2790.row)
    
    } catch (e) {
      setError(e);
    }
    setLoading(false);
    }
    getFood();
  }, []);

  if(loading) return <div>로딩중..</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!food) return null;
  if(props.foods) return <div>
    
  {food.filter((food) => 
  ( <div className='food' > {food.DESC_KOR.toLowerCase().includes(props.foods)}</div>))}
</div>
  
  return (
    <React.Fragment>
      <p>아무 것도 존재 하지 않아</p>
    </React.Fragment>
  )
}

export default Main