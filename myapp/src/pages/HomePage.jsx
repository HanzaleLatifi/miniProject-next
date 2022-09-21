import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { getUsers } from "../services/getUsers";

 const RowCard = React.lazy(() => import('../components/RowCard'));
 const ColumnCard = React.lazy(() => import('../components/ColumnCard'));


function HomePage() {

  const [users, setUsers] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [display, setDisplay] = useState("column"); //row display or column disply for card
  const [count, setCount] = useState("6");    //numberOfUser to show per page


  useEffect(() => {
    getUsers(1, count)
      .then((res) => setUsers(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  const displayHandler=(display)=>{
    setDisplay(display);
    
  }
  const countHandler=(count)=>{
    setCount(count);
    
  }


  return (
    <div className="bg-gray-50  ">
      <Header onChangeDisplay={displayHandler} onChangeCount={countHandler} />
      <main className="container max-w-screen-lg    mx-auto p-4 mb-8">

        <Grid container spacing={6}>
          {users.length.map!==0 ? users.map((user) => {
            if(display==="column"){
                return (
                    <Grid item xs={12} sm={6} md={4}>
                      <ColumnCard email={user.email} firstName={user.first_name} lastName={user.last_name} avatar={user.avatar} />
                    </Grid>
                  );
            }
            else{
                return (
                    <Grid item xs={12} sm={6} md={4}>
                      <RowCard email={user.email} firstName={user.first_name} lastName={user.last_name} avatar={user.avatar} />
                    </Grid>
                  );
            }
           
          }):<p className="text-center font-semibold ">empty ... !</p>}
        </Grid>
        

      </main>
      <footer className="text-center bg-red-900 text-white py-3">developed by <span>Hanzale Latifi</span></footer>
    </div>
  );
}

export default HomePage;
