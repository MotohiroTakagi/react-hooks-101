import React, {useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const { name, price } = state

  useEffect(() => {
    console.log('レンダリングの後で毎回実行される')
  })

  useEffect(() => {
    console.log('最初の一回のみ実行される')
  }, [])

  useEffect(() => {
    console.log('nameが変更された時のみ実行される（コールバック）')
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}です</p>
      <input value={name} onChange={e => setName(e.target.value)}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
