import ListGroup from './components/ListGroup'
const App = () => {
  let items = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div><ListGroup items={items} heading="My List Group" onSelectItem={handleSelectItem} /></div>
  )
}

export default App