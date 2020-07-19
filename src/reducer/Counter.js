import React, { useState, createContext } from 'react';
import { Button } from '@material-ui/core';
// 引入子组件
import Num from './Num';

// 创建上下文对象
const CounterContext = createContext();

export default function Counter() {
    
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>点击了 {count} 次</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        点我加一
      </Button>
      <CounterContext.Provider value={count}>
        <Num />
      </CounterContext.Provider>
    </div>
);
}

// 导出上下文对象
export { CounterContext };