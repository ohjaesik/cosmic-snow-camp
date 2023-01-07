import React, {useState} from 'react'

function InputSample() {
  const [inputs, setInputs] = useState({
    name:'',
    nickname: '',
  });
  const {name, nickname} = inputs;

  const onChange = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onRest = () => {
    setInputs({
      name:'',
      nickname:'',
    })
  }
  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} value={name}/>
      <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname}/>
      <button onClick={onRest}>초기화</button>
      <div>
        <d>값 :</d>
        {name} ({nickname})
      </div>
    </div>
  )
}

export default InputSample