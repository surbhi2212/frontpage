import React from "react";
import Header from "./Header";
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Footer from "./Footer";

const useStyle = makeStyles({
    root:{
        display:"flex",
        alignContent:"center",
        justifyContent:"center"
    },
    subRoot:{
        display:'flex',
        background:'#FFF',
        padding:20,
        width:250,
        
        margin:10,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:10,
        border:'0.5px solid grey'
    }


})



export default function Home() {

    const classes = useStyle();

    const buyProduct=()=>{
        return(<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <div className={classes.subRoot}>
      
      <div  style={{width:240,fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:20}}>
       Monthly
      </div>
      <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20,fontSize:40,fontWeight:'bold',color:'#130f40'}}>
      $150.00
      </div>
      <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20}}>
      Billed Monthly
      </div>
</div>

<div className={classes.subRoot}>
      
      <div  style={{width:240,fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:20}}>
       Quaterly
      </div>
      <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20,fontSize:40,fontWeight:'bold',color:'#130f40'}}>
      $250.00
      </div>
      <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20}}>
      Billed Monthly
      </div>
</div>

<div className={classes.subRoot}>
      
      <div  style={{width:240,fontWeight:'bold',display:'flex',justifyContent:'center',fontSize:20}}>
       Annually
      </div>
      <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20,fontSize:40,fontWeight:'bold',color:'#130f40'}}>
      $800.00
      </div>
      <div  style={{width:240,display:'flex',justifyContent:'center',marginTop:10,marginLeft:20}}>
      Billed Monthly
      </div>
</div>
</div>
        )}   
    
    return (
        <div>
            
            <Header style={{width:'100%'}} />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div style={{width:'95%'}}>
           
        <img height="80%" width="100%" src="/banner.jpg" />
                
        
        </div>

        </div>

        <div style={{ backgroundColor:'#dfe6e9',}}>
            <Grid container spacing={2}>
            <Grid item xs={6} >
            <p>APEX ONLINE COACHING $150 PER MONTH</p>
            <Divider style={{margin:30}}/> 
              <h1> What's Include </h1>
            <ui>
                <li>
                Advanced, but no lifting required. Create a custom experience and rapidly grow your fitness tribe in 2021 and beyond!
                </li>
                <li>
                Advanced, but no lifting required. Create a custom experience and rapidly grow your fitness tribe in 2021 and beyond!
                </li>
                <li>
                Advanced, but no lifting required. Create a custom experience and rapidly grow your fitness tribe in 2021 and beyond!
                </li>
                <li>
                Advanced, but no lifting required. Create a custom experience and rapidly grow your fitness tribe in 2021 and beyond!
                </li>
                <li>
                Advanced, but no lifting required. Create a custom experience and rapidly grow your fitness tribe in 2021 and beyond!
                </li>
            </ui>
            <Button variant="contained">Read More</Button>
                       </Grid>
            <Grid item xs={6}>
            <img height="80%" width="100%" src="/3.png" />
            </Grid>
            </Grid>
        </div>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <img height="80%" width="100%" src="/5.jpg" />
                </Grid>
                <Grid item xs={6}>
                <p>APEX ONLINE COACHING $150 PER MONTH</p>
            <Divider style={{margin:30}}/> 
              <h1> What's Include </h1>
              <p>Automate messages, workouts, tasks, and habits so you can focus on delivering high-value coaching at scale.Drive engagement and increase client retention with
comprehensive coaching and more touch points, such as
automatic reminders and community forums.</p>
            </Grid>
            </Grid>

        </div>

        <div style={{ backgroundColor:'#dfe6e9',}}>
            <Grid container spacing={2}>
               
                <Grid item xs={6}>
                <p>APEX ONLINE COACHING $150 PER MONTH</p>
            <Divider style={{margin:30}}/> 
              <h1> Customized Programming </h1>
              <p>Automate messages, workouts, tasks, and habits so you can focus on delivering high-value coaching at scale.Drive engagement and increase client retention with
comprehensive coaching and more touch points, such as
automatic reminders and community forums.</p>
            </Grid>
            <Grid item xs={6}>
                <img height="80%" width="100%" src="/5.png" />
                </Grid>
            </Grid>

        </div>

        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <img height="80%" width="100%" src="/8.jpg" />
                </Grid>
                <Grid item xs={6}>
                <p>APEX ONLINE COACHING $150 PER MONTH</p>
            <Divider style={{margin:30}}/> 
              <h1> What's Include </h1>
              <p>Automate messages, workouts, tasks, and habits so you can focus on delivering high-value coaching at scale.Drive engagement and increase client retention with
comprehensive coaching and more touch points, such as
automatic reminders and community forums.</p>
            </Grid>
            </Grid>

        </div>
<div style={{ backgroundColor:'#dfe6e9',}} >
    <h1 style={{display:'flex', justifyContent:'center',alignItems:'center'}}>APEX SHOP</h1>
    <Grid container spacing={1}>
       <Grid item xs={4}>
       <img  src="/10.jpg" />  
       </Grid>
       <Grid item xs={4}>
       <img  src="/11.jpg" />  
       </Grid>
       <Grid item xs={4}>
       <img  src="/12.jpg" />  
       </Grid>
    </Grid>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginTop:'15px'}}>
    <Button  variant="contained">Enter Apex Shop</Button>
    </div>
</div>
<div style={{backgroundColor:'#3742fa'}}>
<h1 style={{display:'flex', justifyContent:'center',alignItems:'center',fontWeight:'bold',color:'#FFF'}}>JOIN APEX APP TODAY</h1>
{buyProduct()}
<h4 style={{display:'flex', justifyContent:'center',alignItems:'center',fontWeight:'bold',color:'#FFF'}}>Available on IOS and android Devices</h4>
<div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
<img src="/13.png" /> 
</div>
 
</div>
<Footer style={{width:'100%'}} />
        </div>
      )
}