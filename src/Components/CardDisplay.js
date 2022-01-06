import { Card, CardBody, CardTitle, CardHeader, CardFooter, CardImage }from "@progress/kendo-react-layout";
import * as React from "react";


function CardDisplay({contactData}) {
        return (
            <div className="page inbox-page" style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                
              }}>
        {contactData.map((card) => {
            console.log(card);
            return (
                <div style={{
                   
                    position: "relative"
                }}>
                    <Card style={{
                        width: "300px",
                        marginRight: "10px",
                        margin: "10px"
                    }}>
                       <div > 
                           <div style={{
                               position: "absolute",
                               marginLeft: "25px",
                               paddingBottom: "50px"
                           }}> 
                        <CardImage src={card.image} style={{
                position: "relative",
                  height: "125px",
                  maxWidth: "50%",
                  float: "left",
                  zIndex: "20px",
                  paddingBottom: "50px"
                }}/>
                </div>
                    <CardBody style={{
                        float: "right"
                    }}> {card.postLikes}
                    <CardTitle>
                            {card.headerTitle}
                        </CardTitle>
                
                    </CardBody> 
                    </div> 
                    <CardFooter>
                        <span style={{
                            
                        }}>Just Now</span>
                    </CardFooter>
                    </Card>
                </div>
            )
        })}
        </div>
        )
}
export default CardDisplay;