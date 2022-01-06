import React, { Component, useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs'
import './App.css';
import { Form, Field } from '@progress/kendo-react-form';
import NavBar from './Components/Navbar';
import Drawe from './Components/Drawe';
import CardDisplay from './Components/CardDisplay';
import { ListView, ListViewHeader, ListViewFooter } from '@progress/kendo-react-listview';

// const userContacts = [
//   {
//     "name": "Ryan",
//     "email": "jenson.delaney@mail.com",
//     "messages": 1

//   },
//   {
//     "name": "steven",
//     "email": "jenson.delaney123@mail.com",
//     "messages": 4
//   },
//   {
//     "name": "alan",
//     "email": "jenson@mail.com",
//     "messages": 2

//   },

// ]
const contactsData = [
  {
    headerTitle: "Huddersfield",
    headerSubtitle: "Spain, Europe",
    postLikes: 678,
    image: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg"
  },
  {
    headerTitle: "Wakefield",
    headerSubtitle: "Spain, Europe",
    postLikes: 120,
    image: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg"
  },
  {
    headerTitle: "Leeds",
    headerSubtitle: "Spain, Europe",
    postLikes: 28,
    image: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg"
  },
 {
  headerTitle: "Harrogate",
  headerSubtitle: "Spain, Europe",
  postLikes: 45,
  image: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg"
 },
 {
  headerTitle: "Harrogate",
  headerSubtitle: "Spain, Europe",
  postLikes: 45,
  image: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg"
 },
 {
  headerTitle: "Harrogate",
  headerSubtitle: "Spain, Europe",
  postLikes: 45,
  image: "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg"
 }
]

// const MyFooter = () => {
//   let messages = 0;
//   userContacts.map((i) => {
//     messages = messages + i.messages;
//   });
//   return (
//     <ListViewFooter
//       style={{
//         color: "rgb(160, 160, 160)",
//         fontSize: 14,
//       }}
//       className="pl-3 pb-2 pt-2"
//     >
//       {messages} unread messages in total
//     </ListViewFooter>
//   )
// }

// const itemRender = (props) => {
//   let item = props.dataItem;
//   return (
//     <div>
//       <h2
//         style={{
//           fontSize: 14,
//           color: "#454545",
//           marginBottom: 0,
//         }}
//       >
//         {item.name}
//       </h2>
//       <div
//         style={{
//           fontSize: 12,
//           color: "#a0a0a0",
//         }}
//       >
//         {item.email}
//       </div>
//       <div className="col-4">
//         <div className="k-chip k-chip-filled">
//           <div className="k-chip-content">{item.messages} new messages</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Listview() {
//   return (
//     <div>

//       <ListView
//         data={contactsData}
//         item={itemRender}
//         footer={MyFooter}
//       />

//     </div>
//   )
// }

function App() {
  const [contacts, setContacts] = useState(contactsData);
  return (
    <div className="App">
      {/* <Routes> 
      <Route exact={true} path="/Calender" Component={Calendar}/>
      </Routes> */}
     <NavBar contactData={contacts}/>
      
    </div>
  );
}

export default App;
