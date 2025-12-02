import Button from "./components/Button"

const App = () => {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log('Clicked')} buttonLabel="Click me" />
    </div>
  )
}

export default App