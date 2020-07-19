import React, { useContext } from 'react';

 引入父组件的上下文
import { CounterContext } from '.Counter';

export default function Count() {
  const count = useContext(CounterContext);
  return h2{count}h2
}