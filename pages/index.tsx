import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {useEffect, useState} from "react";
const Home: NextPage = () => {
  const [base64_string, set_base64_string] = useState("");
  const [string, set_string] = useState("");
   function handle_input_change(event){
     set_base64_string(event.target.value);
    set_string(atob(event.target.value));
     
   } 
  return (
    <div>
      <input type="text" value = {base64_string} onChange = {handle_input_change}/>
      <div>{string}</div>
    </div>
    )
};

export default Home;
