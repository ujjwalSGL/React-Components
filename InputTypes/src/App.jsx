import { useState } from 'react'
import Input from './input'

function App() {
  const [email,setEmail] = useState("")
  return (
    <div className='bg-slate-600 mx-20'>
      <div className='grid grid-cols-3 items-center justify-center border-2'>
      <Input type="file"></Input>
      <Input type="text"placeholder={"Enter email"} value={email} onChange={setEmail}/>
      <Input type="number" placeholder={"Enter number"}/>
      <Input type="email" placeholder={"qwerty@example.com"}></Input>
      <Input type="password" placeholder={"Enter Password"}></Input>
      <Input type="search" placeholder={"Type"}></Input>
      <Input type="tel" placeholder={"Enter Number"}></Input>
      <Input type="url" placeholder={"Enter URL"}></Input>
      <Input type="datetime-local"></Input>
      <Input type="date"></Input>
      <Input type="time"></Input>
      <Input type="submit"></Input>
      <Input type="checkbox"></Input>
      <Input type="radio" ></Input>
      </div>
    </div>
  )
}
export default App