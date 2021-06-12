import react, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const flowers = [
    {name:'Lily', price:'100'},
    {name:'Rose', price:'80'}, 
    {name:'Hibiscus',price: '50'},
    {name:'Sun-flower', price:'40'}
  ]
  const persons= ["Fahim", "Mohim", "Mobassir", "Shahrukh", "Salman"]
  const products = [
    {name:'Photoshop', price:'$90.99'},
    { name: 'Illustrator', price: '$60.99' },
    { name: 'Xd', price: '$20.99' },
    { name: 'After Effect', price: '$110.99' },
    { name: 'PDF', price: '$40.99' },
    { name: 'Primier pro', price: '$130.99' }
  ]
  return (
    <div className="App">
      {/*component state display */}
      {
        <Counter></Counter>
      }
      {
        <Users></Users>
      }

      {/* component display*/}
      <h1>component</h1>
      {
        persons.map(person=><Person personName={person}></Person>)
      }
      {
        products.map(product =><Product productName={product}></Product>)
      }
      {
        flowers.map(flower =><Flower flowerCatalog={flower}></Flower>)
      }
    </div>
  );
}
// ---------------------------
// component state function
// ------------------------
function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h2>useState()</h2>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

// load dynamic data api call useEffect
function Users(){
  const userStyle = {
    boxShadow:"2px 2px 4px gray",
    borderRadius: '10px',
    backgroundColor: 'Whitesmoke',
    height: '100%',
    width: '50%',
    margin: 'auto',
  }
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>load dynamic data api call useEffect</h3>
      <div>
        {
          users.map(user => <div style={userStyle}><h1>Name: {user.name}</h1> <h3>Email: {user.email}</h3> <h5>Phone: {user.phone}</h5> <p>Company: {user.company.name}</p> <p>Address:{user.address.city}</p> </div>)
        }
      </div>
    </div>
  )
}

// ---------------------------------------
// component
// -----------------------------------------
// flowers
function Flower(props){
  const flowerStyle ={
    boxShadow:"2px 2px 4px gray",
    borderRadius: '10px',
    backgroundColor: 'Whitesmoke',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px',
  }
  const {name, price} = props.flowerCatalog;
  return(
    <div style={flowerStyle}>
      <h1>{name}</h1>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
// Product
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor:'Whitesmoke',
    height: '200px',
    width:'200px',
    float:'left',
    margin:'20px',
  }
  const {name, price} = props.productName;
  return(
    <div style={productStyle}>
      <h2>Name:{name}</h2>
      <h4>Price:{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

// person
function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'300px', margin:'auto'}}>
      <h3>{props.personName}</h3>
    </div>
  )
}
export default App;
