import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"

const App = () => {
  const [alertVisibility, setAlertVisibility] = useState(false)
  const onClose = () => {
    setAlertVisibility(false)
  }
  return (
    <div>
      {alertVisibility && <Alert onClose={onClose}>This is my alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(!alertVisibility)} buttonLabel="Click me" />
    </div>
  )
}

export default App