import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Header () {
  const [food, setFood] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [foodInput, setFoodInput] = useState('');
  useEffect(() => {
    const getFood = async () => {
      try{
        setError(null);
        setFood(null);
        setLoading(true);
      const response = await axios.get(
        `https://openapi.foodsafetykorea.go.kr/api/5106e02c83604344bb93/I2790/json/1/100`
    )
    setFood(response.data)
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
  if(foodInput) return <div>
    {food.filter((food) => food.text.toLowerCase().includes(foodInput))}
  </div>
  const onChange = (e) => {
    e.preventDefault();
    setFoodInput(e.target.value);
  }
  const onClick = (e) => {
    e.preventDefault();
    
    setFoodInput('');
    
  }
  
  
  return(
    <React.Fragment>
      <h1>음식 영양 성분 검색기</h1>
      <input type="text" onChange={onChange}></input><button type='submit' onClick={onClick}>button</button>
    </React.Fragment>
  )
}
export default Header;