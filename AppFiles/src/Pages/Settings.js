import React, { Component } from "react";    
import './General_Settings.css' 

class General_Settings extends Component {    

    render() {    
        return (    
        <div >
            <h2 style={{ textAlign: "center" }} >General Settings </ h2>   
            <div className="formDiv">    
                <form onSubmit={this.handleSubmit}>    
                    <div>    
                        <label>Camera Model</label>    
                        <input type="text" name="type"/>    
                    </div>    
                    <div>    
                        <label>Camera ID</label>    
                        <input type="text" name="cameraId"/>    
                    </div>       
                    <div>    
                        <label>Resolution</label>    
                        <select>    
                            <option value="select">--Select--</option>    
                            <option value="hd">1080x720(HD)</option>    
                            <option value="fhd">1920x1080(FHD)</option>    
                            <option value="4k">3840x2160(4K)</option>    
                        </select>      
                    </div>    

                    <input type="submit" value="Submit" />    
                </form>        
            </div > 
        </div >   
        )    
    }    
}    
    
export default General_Settings;
