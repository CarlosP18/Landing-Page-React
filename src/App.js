import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar';
import { Jumbotron } from './components/jbtron';


const App = () => {
  return (
    <>
      <NavBar logo="Start Bootstrap" />
      <div className="container">
        <div className="row col-md-12">
          <Jumbotron tittle="Hello World!" description="This is a simple hero unit, a simple jumbotron-style component for 
        calling extra attention to featured content or information." button="Learn More" />
        </div>
      </div>
    </>
  );
}

export default App;

