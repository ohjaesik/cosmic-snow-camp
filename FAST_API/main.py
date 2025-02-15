import fastapi
from pydantic import BaseModel
import requests
import json

app = fastapi.FastAPI()

db =[]

class City(BaseModel):
  name: str
  timezone: str

@app.get("/")
def root():
  return {"Hello":"World"}

@app.get('/cities')
def get_cities():
  results = []
  for city in db:
    strs = f"http://worldtimeapi.org/timezone/{city['timezone']}"
    r = requests.get(strs)
    cur_time = r.json()['datetime']
    results.append({'name':city['name'], 'timezone':city['timezone'], 'current_time':cur_time })

  return results

@app.get('/cities/{city_id}')
def get_city(city_id: int):
  city = db[city_id -1]
  strs = f"http://worldtimeapi.org/timezone/{city['timezone']}"
  r = requests.get(strs)
  cur_time = r.json()['datetime']
  return{'name':city['name'], 'timezone':city['timezone'], 'current_time':cur_time }

@app.post('/cities')
def create_city(city: City):
  db.append(city.dict())

  
  return db[-1]


@app.delete('/cities/{citY_id}')
def delete_cit(city_id: int):
  db.pop(city_id-1)
  return {}
