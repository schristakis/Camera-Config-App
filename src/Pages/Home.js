import React from 'react';
import {read_values} from './Settings.js';
import "./Home.css"


function splitter(str){
    var config=''
    var result =''
    config = read_values()
    if (config != null) {
    var split = config.toString().split("\n");
 
    var index, value;
    for (index = 0; index < split.length; ++index) {
        value = split[index];
        if (value.substring(0, str.length) === str ) {
           result = value;
            break;
        }
    }
    var final_value = result.toString().split('"')[1]
    return(final_value)
    }

}
export default function Home() {
    
    return (  
        <div>
            
            <h1>Current Settings </h1>
            <p className="p">Deployment:   {splitter("config.deployment.id")}</p>
            <p className="p">Gateway Id:    {splitter("config.device.gateway")}</p>
            <p className="p">Interface:    {splitter("config.device.interface")}</p>
            <p className="p">Camera Id:     {splitter("config.device.type")}</p>
            <p className="p">Node Id:       {splitter("config.device.node")}</p>
        </div>

    )
}