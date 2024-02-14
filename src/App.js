import React from 'react';
import{ useState } from 'react';

const App = () => {
const [redCube, setRedCube] = useState ('red')
const [blueCube, setBlueCube] = useState ('blue')
const handleCube = () => {
  setRedCube ((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
  setBlueCube ((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'))
}
  return (
    <div style={{display: 'flex', width: '500px', height: '300px', justifyContent: 'center', alignItems: 'center', gap: '30px', margin: '60px auto', backgroundColor: '#888'}}>
      <div style={{ width: '100px', height: '100px', backgroundColor: redCube, border: '5px solid black'}} onClick={handleCube}></div>
      <div style={{ width: '100px', height: '100px', backgroundColor: blueCube, border: '5px solid black' }} onClick={handleCube}></div>
    </div>
  )
}

export default App