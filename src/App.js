import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Card from 'react-bootstrap/Card';
import { useState, } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Apicreate from './Apicreate'



function App() {
  const [photos,setphotos]=useState([]) 
  var [currentpage,setcurrentpage]=useState(0)
  var [postpage,setpostpage]=useState(5)
  var pages=[1,2,3,4,5,6,7]
  console.log(photos)
  console.log(currentpage,postpage);
  useEffect(()=>{
    // fetch("https://api.tvmaze.com/shows/1/episodes")
    // .then((res)=>{
    //   return res.json()
    // })
    // .then((data)=>setphotos(data)
    // )
   
    // AXIOES
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>
  setphotos(res.data)
    )

},[])

const pagehandle=(value)=>{
    setcurrentpage(value*6)
    setpostpage((value*6)+5)

}

  const a=useNavigate() 
  const Gotofile=(value)=>{
   console.log(value);
  a(`/details/${value}`);
  }
  
  return ( 
     <div>  
       <Banner />
         <Container className='c'  >
        <h1 className='mt-5 mb-5'>Movie List</h1>
     <Row className=''>
     
     {
      photos.map((photo,i)=>{
        return (i>=currentpage && i<=postpage)?
        <Col className='col'>
        <Card style={{ width: '18rem' }}  className='card'>
          <Card.Img variant="top" src={photo.image.medium} />
          <Card.Body>
            <Card.Title>{photo.name}</Card.Title>
            <Card.Text>
             
            
            </Card.Text>
        <Button variant="primary" onClick={()=>Gotofile(photo.id)}>Go To File</Button>
      </Card.Body>
    </Card>
        </Col>
        :""

      }   
)
     }
       </Row>
    </Container>
   
    <div className='page-content-btn'>
        {
            pages.map((e,i)=>{
                return <button className='Apicreate' onClick={()=>{pagehandle(i)}}>{e}</button>
            })
           
        }
    </div>
    <Apicreate />
    </div>
  );
}

export default App;
