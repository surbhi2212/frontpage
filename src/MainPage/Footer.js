import React from 'react';
import Divider from '@mui/material/Divider';
import { Grid,Button,TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {IoLogoYoutube} from 'react-icons/io';
import {MdContactPhone} from 'react-icons/md';

const useStyle = makeStyles({
    root:{
        display:'flex',
        alignContent:"center",
        justifyContent:"center",
        width:'100%',
        flexDirection:'row',
        
        
    
    },

    subRoot:{
        display:'flex',
        background:'#7ed6df',
        padding:20,
        width:500,
        marginTop:50,
    }

})


  


export default function Footer(){

    const classes = useStyle();


    
const footerComponents=()=>{

    return(
        
             <Grid container spacing={2} style={{width:'100%'}}>

<Grid item xs={3}>
<div><img src='/logo.jpg' width={100} /> </div>
<div >
            <span style={{color:'#FFF'}}><MdContactPhone/>+420 773 317 811</span>
            
            </div>
            <div>
            <span>info@original-platen</span>
            </div>
<div> <span style={{color:'#FFF'}}><FaFacebookF />     <BsTwitter/>      <IoLogoYoutube/></span></div>
</Grid>


<Grid item xs={3}>
<p><b>APEX APP</b></p>
<p>Manage Description</p>
<p>Forget Password</p>
<p>Sign Up</p>



</Grid>

<Grid item xs={3}>
<p><b>Quick Links</b></p>
<p>Home</p>
<p>Services</p>
<p>The App</p>
<p>Contact Us</p>

</Grid>

<Grid item xs={3}>

<p><b>Other Links </b></p>
<p>Cart</p>
<p>FAQ</p>
<p>Support Center </p>
<p>Terms and Conditions</p>
<p>Privacy Policy</p>

</Grid>



</Grid>
       
    )
}

    return(   
        <div style={{background:'#000',color:'#FFF'}}>
        <div className={classes.root} style={{marginTop:5}}>
            {footerComponents()}
            
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:50,width:'100%',background:'#000'}}>
        <span ><img src="/13.png" margin='5px'/> </span>
        <span style={{color:'#FFF',padding:'300px'}}>2020 @original fitness, all right reserved</span>
        </div>
        
        </div>
    )
}