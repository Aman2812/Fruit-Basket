import React, { useState } from 'react';
import './App.css';
import { Typography, Container,Paper,Box,Button,Grid} from '@material-ui/core';

const prices = {
  Apple: 20,
  Mango: 15,
  Banana: 5,
  Lichi: 10
};

const taxPercent = 2;


function App() {

 const [applesCount, setApplesCount] = useState(0);
 const [mangoesCount, setMangoesCount] = useState(0);
 const [bananasCount, setBananasCount] = useState(0);
 const [lichiCount, setLichiCount] = useState(0);

 const totalFruitsCount = applesCount + mangoesCount + bananasCount + lichiCount;
 const totalFruitsPrice = applesCount * prices.Apple + mangoesCount * prices.Mango + bananasCount * prices.Banana + lichiCount * prices.Lichi;
 const taxPrice = (totalFruitsPrice * taxPercent)/100;
 const totalPrice = totalFruitsPrice + taxPrice;

 function addAppleToBasket() {
   setApplesCount(applesCount+1);
 }

 function removeAppleToBasket() {
  setApplesCount(applesCount-1);
}

function addMangoToBasket() {
  setMangoesCount(mangoesCount+1);
}

function removeMangoToBasket() {
 setMangoesCount(mangoesCount-1);
}

function addbananaToBasket() {
  setBananasCount(bananasCount+1);
}

function removebananaToBasket() {
 setBananasCount(bananasCount-1);
}

function addlichiToBasket() {
  setLichiCount(lichiCount+1);
}

function removelichiToBasket() {
 setLichiCount(lichiCount-1);
}
  return (

    <div>

      <div className="App">
      <div className="container">
         <h2>Fruit Shop</h2>
      </div> </div><br/><br/><br/><br/><br/>


    <Container>
      <Grid container spacing={2}>

      <Grid item lg={3} sm={6}>
             <Paper>
               <Box p={2} borderLeft={17} borderColor="primary.main" boxShadow={4} borderRadius={5}>
               <Button onClick={addMangoToBasket} color="secondary" variant="outlined">+</Button>&nbsp;
                <Button onClick={removeMangoToBasket} color="secondary" variant="outlined">-</Button>&nbsp;&nbsp;
                Mangoes = {mangoesCount}
                </Box>
             </Paper>
        </Grid>

        <Grid item lg={3} sm={6}>
             <Paper>
               <Box p={2} borderLeft={12}  borderColor="primary.main" boxShadow={4} borderRadius={5}>
                  <Button onClick={addAppleToBasket} color="secondary" variant="outlined">+</Button>&nbsp;
                  <Button onClick={removeAppleToBasket} color="secondary" variant="outlined">-</Button>&nbsp;&nbsp;
                  Apples = {applesCount} 
                </Box>
             </Paper>
        </Grid>

        <Grid item lg={3} sm={6}>
             <Paper>
               <Box p={2} borderLeft={17} borderColor="primary.main" boxShadow={4} borderRadius={5}>
                <Button onClick={addlichiToBasket} color="secondary" variant="outlined">+</Button>&nbsp;
                <Button onClick={removelichiToBasket} color="secondary" variant="outlined">-</Button>&nbsp;&nbsp;
                Lichi = {lichiCount}
                </Box>
             </Paper>
        </Grid> 

        <Grid item lg={3} sm={6}>
             <Paper>
               <Box p={2} borderLeft={17} borderColor="primary.main" boxShadow={4} borderRadius={5}>
               <Button onClick={addbananaToBasket} color="secondary" variant="outlined">+</Button>&nbsp;
                <Button onClick={removebananaToBasket} color="secondary" variant="outlined">-</Button>&nbsp;&nbsp;
                 Bananas = {bananasCount}
                </Box>
             </Paper>
        </Grid> 

      </Grid>
    </Container>

      <br/><br/><br/><br/><br/>

    <Container maxWidth="sm">
            <Paper>
            <Box p={4}  borderTop={17} borderColor="primary.main" boxShadow={8} borderRadius={10}>
              <Typography variant="h4">Invoice</Typography><br/>
              <div>Total Fruits in the basket: {totalFruitsCount}</div>
              <div>Total Fruits Price: {totalFruitsPrice}</div>
              <div>Tax Percentage: {taxPercent}%</div>
              <div>Tax Price: {taxPrice}</div>
              <br/>
              <div>Total Price: {totalPrice}/-</div>
            </Box>
           </Paper> 
    </Container>

    </div>

  );
}

export default App;
