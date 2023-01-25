import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Main(props) {
  const [food, setFood] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  var filterFood = [];
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
    filterFood = food.filter((p) => {
      return p.DESC_KOR.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())
    })
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
  if(props.foods) { 
    <div>{filterFood.map(food => <div><span>{food.DESC_KOR}</span></div>)}</div>
    }
  
  return (

    <div></div>

  )
}

export default Main

