import { Link } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <Link to="/fetch">WithFetch</Link>
      <br />
      <Link to="/axios">WithAxios</Link>
    </>
  )
}

export default App
