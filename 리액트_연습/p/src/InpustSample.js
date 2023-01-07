import React, {useState} from 'react'

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onRest = () => {
    setText("");
  }
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onRest}>초기화</button>
      <div>
        <d>값 : {text}</d>
      </div>
    </div>
  )
}

export default InputSample