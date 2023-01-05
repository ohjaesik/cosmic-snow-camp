import React from 'react';

function Hello(props /*비구조화 할당{color, name} */) {
  return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
}

Hello.defaultProps = {
  name: '이름 없음'
}

export default Hello;
