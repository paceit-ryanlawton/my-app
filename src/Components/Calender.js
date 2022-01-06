import * as React from "react";

export default class Calender extends React.Component {

    render(){
        const text = (
            <div>
                <ul>
                    <li>Welcome to the Calender page</li>
                    <li> This is where the calender would be</li>
                </ul>
            </div>
        )
        return <div>{text}</div>
    }
    
}