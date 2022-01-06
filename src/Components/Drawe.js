import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import CardDisplay from "./CardDisplay";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";

const items = [
    {
      text: "Dashboard",
      icon: "k-i-inbox",
      selected: true,
    },
    {
      text: "Calendar",
      icon: "k-i-calendar", 
      route: "/Calender"
    },
    {
      text: "Attachments",
      icon: "k-i-hyperlink-email",
    },
    {
      text: "Favourites",
      icon: "k-i-star-outline",
    },
    {
        text: "Maps",
        icon: "k-i-marker-pin-target",
      },
  ];

function Drawe({expanded, contactData}) {
    
    return(
        <React.Fragment>
        <div className="custom-toolbar">
<Drawer
        expanded={expanded}
        position={"start"}
        mode={"push"}
        mini={true}
        items={items.map((item, index) => ({
            ...item,
            selected: item.text === "Calender",
          }))}
      >
          <DrawerContent>
          <CardDisplay contactData={contactData} />
          </DrawerContent>
      </Drawer>


        </div>
        </React.Fragment>
    )

}
export default Drawe;