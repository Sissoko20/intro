import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

import { Avatar, Button,Badge, Space,Card, Row, Col } from 'antd';
import ListMenu from './List';
import TabsMenu from './Components/TabsMenu';
import ProductList from './Components/ProductList';
import CardContent from './Components/CardContent';
import { posters } from './Components/datas';
import { message } from './Components/message';



function ProfilsUser(){
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return(
    <>
      <Avatar style={{
        width: user.imageSize,
        height: user.imageSize,
      }}>
        <img src={user.imageUrl} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
        
       
        
      }}/>
      </Avatar>
    </>
  )
}



function App() {

//initialisation



const [isLogged, setisLogged] = useState(true);

const [counter, setcounter] = useState(0);
const handleClick=()=>{
  setcounter(counter+1);
  console.log(counter,"nbre de clik")
 
}

const [count, setcount] = useState(0)

const handleClickCounter = () => {
  setcount(count+1)
}

let content;
const text="Hello, Bienvenue sur ma page"
if(isLogged ? content=<Button style={{
  color:"red",
  backgroundColor:"yellow",
  borderRadius:"10px",
  padding:"10px",
  margin:"10px",
  
}}>Logout</Button>  : content=<Button>Login</Button>);


  




//modification de la state

  

//rendu
  return (

 /* <h2>{text}</h2>
{content}
<ProfilsUser/>
<br/>
<MyBtn counter={counter} handleClick={handleClick}/>
<MyBtn counter={counter} handleClick={handleClick}/>

<Couting count={count} handleClickCounter={handleClickCounter}/>
<Couting/>

<CardContent/> */

<div>
<Data/>
<GetComment/>
<PizzaData/>
</div>
)}



function PizzaData(){
  const [pizzas,setPizza]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
//1- Déclaration des états avec UseState

useEffect(() => {
  const url='http://my-json-server.typicode.com/Sissoko20/dbnanidelice/pizza';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setPizza(data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
};

fetchData();
}, []);

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {setError.message}</div>;
}
  
return (
  <div>
    <h1>Pizza</h1>
    <ul>{pizzas.map((pizza,index)=>(
      <li key={pizza.index}>
        <h2> Nom : {pizza.title}</h2>
        <p>Description ; {pizza.description}</p>
        <img src={pizza.img} alt={"image pizza de" +pizza.title}/>
        <p>prix : {pizza.price}</p>
      </li>
    ))}</ul>


     <div>
  <Row gutter={16}>

    {pizzas.map((pizza)=>
    <div>
    <Col span={8} key={pizza.title}>
      <Card title={pizza.title} bordered={false}
      cover={ <img src={pizza.img} alt=''/>}
      >
       
      
        {pizza.description}

      </Card>
    </Col>

    </div>
    )}
  </Row>
</div>

  </div>

  
)
  
}

function GetComment(){
  
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]= useState(null);

useEffect(() => {
  const url="http://localhost:3000/comments"
  
  
 const fetchData = async () => {
   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     const data = await response.json();
     setComment(data);
     setLoading(false);
   } catch (error) {
     setError(error);
     setLoading(false);
   }
 };
 
 fetchData();
 }, []);

// si la data a été recupéree affiché 
// chargement en cours sinon le message d'erreur
if (loading) {
  return <div>Loading on going</div>;
}

if (error) {
  return <div>{error.message}</div>;
}

return(
  <div>
  <ul>{comment.map((comments,index)=>(
    <li key={index}>
      <p>{comments.text}</p>
     {comments.postId}
      </li>
       
  
  ))}</ul>
  </div>
)
}


function Data() {
  /*
  1-il s'agit d'initialiser les etats utilisant useState(post, loading, error)
2-se connecter à l'api externe avec useEffect en déclarant url 
pour recuperer les données à partir du lien
3- vérifier si la connexio a API est OK
4 Et si c'est OK de recuperer les données en les stockant 
dans une constante
5- Affiche un message de chargement pendant que les données sont récupérées.
Affiche un message d'erreur si la récupération échoue.

6- Affiche les données récupérées sous forme de composants React.
Utilise join(', ') pour afficher les tags sous forme de chaîne de caractères séparés par des virgules.


  */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:3000/posts';
    


  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {posts.map((post,index) => (
        <div key={index}>
          <h3>{post.id}</h3>
          <h3>{post.title}</h3>
          <h3>{post.views}</h3>
        </div>
      ))}
    </div>
  );
  }



function MyBtn({counter, handleClick}){
  //c=initialisation
    return(
   
      <Button type='primary' onClick={handleClick}>Cliqué {counter} fois</Button>
  
    )
  }
  function Couting({count,handleClickCounter}){


    return(
      <Space size={'large'}>
      <Badge count={count} onClick={handleClickCounter}>
      <Avatar shape="square" size="large" />
    </Badge>
    </Space>

    



    )

  }




export default App;
