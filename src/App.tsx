import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';


interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

const INITIAL_STATE =[  {
  nick: "dapelu",
  subMonths: 3,
  avatar: "https://i.pravatar.cc/150?u=dapelu",
  description: "Dapelu hace de moderador a veces"
},
{
 nick: 'sergio_serrano',
 subMonths: 7,
 avatar: 'https://i.pravatar.cc/150?u=sergio'
}
]

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}
function App() {

  // No se puede cambiar el tipo de una variable al declarar el tipo inicial
  // const [number, setNumber] = useState<number>(5)

  // const changeNumber = () => {Array
  //   setNumber("2")
  // }

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  

useEffect(()=>{
  setSubs(INITIAL_STATE)
}, [])

  return (
    <div className="App">
    <h1>
      midu subs
    </h1>
   <List subs={subs}/>
    </div>
  );
}

export default App;
