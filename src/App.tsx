import Like from "./components/Like";

const App = () => {
  return (
    <div>
      <Like onClick={() => {console.log('Clicked')}}/>
    </div>
  );
};

export default App;
