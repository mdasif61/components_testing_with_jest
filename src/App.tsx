import './App.css'
import Alert from './components/alert/Alert'

function App() {

  return (
    <div>
      <Alert variant='success' bordered icon dismiss>This is alert message</Alert>
    </div>
  )
}

export default App
