import "./App.css";
import Button from "./component/Button";

function App() {
  let list = [1, 2, 3];
  let user = {
    name: "mustafa",
    id: 8,
  };

  return (
    <div className="row  justify-center text-center items-center">
      <Button varriant="warning" liste={list} user={user}>
        My Button 1<button className="bg-blue-300"> Yeni Button </button>
      </Button>
      <Button varriant="danger" user={user}>
        My Button 2
      </Button>
      <Button varriant="succsess" user={user}>
        My Button 3
      </Button>
      <Button user={user}> My Button 4</Button>
    </div>
  );
}

export default App;
