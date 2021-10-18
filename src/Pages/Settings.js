import React, { Component,useState,useEffect} from "react";    
import './Settings.css' 
import axios from "axios";
import ReactPlayer from 'react-player/lazy'

const baseURL = "http://localhost:5000/get_config_file_data";
var data_config 

export function App() {
  const [conf, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!conf) return null;
  data_config = conf
  return (conf);
}

export function read_values() {
    return App()
}  


function replacer(whole_str,str,value_to_change){
    var config=''
    var result =''
    config = whole_str
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
    whole_str = whole_str.split(final_value).join(value_to_change);
    return(whole_str)
    }

}


function write_values(var1,val1,var2,val2,var3,val3,var4,val4,var5,val5) {
    var mydata
    mydata = data_config
    mydata=replacer(mydata,var1,val1)
    mydata=replacer(mydata,var2,val2)
    mydata=replacer(mydata,var3,val3)
    mydata=replacer(mydata,var4,val4)
    mydata=replacer(mydata,var5,val5)
    //console.log(mydata)
    var to_change = {data: mydata};
    axios.post('http://localhost:5000/change_config_file_data', to_change);
}



class Settings extends Component {
    constructor(props) {    
        super(props);    
        this.state = {    
            deployment: '',    
            nodeid: '',    
            cameraid: '',    
            gatewayid: '',    
            interfaceid: '',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;
    } 
    handleFormValidation() {    
        const { deployment, nodeid, cameraid, gatewayid, interfaceid } = this.state;    
        let formErrors = {};    
        let formIsValid = true;

        if (!deployment) {    
            formIsValid = false;    
            formErrors["deploymentErr"] = "Mandatory Field";    
        }    

        if (!nodeid) {    
            formIsValid = false;    
            formErrors["nodeidErr"] = "Mandatory Field";   
        }  

        if (!cameraid) {    
            formIsValid = false;    
            formErrors["cameraidErr"] = "Mandatory Field";    
        }  

        if (!gatewayid) {    
            formIsValid = false;    
            formErrors["gatewayidErr"] = "Mandatory Field";    
        }  

        if (!interfaceid) {    
            formIsValid = false;    
            formErrors["interfaceidErr"] = "Mandatory Field";    
        } 

        this.setState({ formErrors: formErrors });    
        return formIsValid; 
    }

    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }  
    
    handleSubmit = (e) => {    
        e.preventDefault(); 
        if (this.handleFormValidation()) {    

            write_values("config.deployment.id",this.state.deployment,
            "config.device.node",this.state.nodeid,
            "config.device.type",this.state.cameraid,
            "config.device.gateway",this.state.gatewayid,
            "config.device.interface",this.state.interfaceid)

            alert('Data Successfully registered.')    
            this.setState(this.initialState)    
        }    
    }  

    render() {    
        const { deploymentErr, nodeidErr, cameraidErr, gatewayidErr, interfaceidErr} = this.state.formErrors;
        return (    
        <div >   
             <h1 style={{ textAlign: "center" }} >Change Settings </ h1>
            
            <ReactPlayer className="reactplayer" url='https://www.youtube.com/watch?v=AohUh4Wx2ps' controls />
            <div className="formDiv">
                <form onSubmit={this.handleSubmit}> 
                    <div>    
                        <label>Deployment:</label>    
                        <input type="text" name="deployment"
                        value={this.state.deployment}    
                        onChange={this.handleChange}        
                        className={deploymentErr ? ' showError' : ''} 
                        placeholder={deploymentErr}
                        />     
                    </div>   

                    <div>    
                        <label>Node Id:</label>    
                        <input type="text" name="nodeid"
                        value={this.state.nodeid}    
                        onChange={this.handleChange}        
                        className={nodeidErr ? ' showError' : ''} 
                        placeholder={nodeidErr}/>   
                    </div>   

                    <div>    
                        <label>Camera Id:</label>     
                        <input type="text" name="cameraid"
                        value={this.state.cameraid}    
                        onChange={this.handleChange}        
                        className={cameraidErr ? ' showError' : ''} 
                        placeholder={cameraidErr}
                        />    
                    </div>

                    <div>    
                        <label>Gateway Id:</label>     
                        <input type="text" name="gatewayid"
                        value={this.state.gatewayid}    
                        onChange={this.handleChange}        
                        className={gatewayidErr ? ' showError' : ''} 
                        placeholder={gatewayidErr}
                        />    
                    </div>   

                    <div>    
                        <label>Interface:</label>     
                        <input type="text" name="interfaceid"
                        value={this.state.interfaceid}    
                        onChange={this.handleChange}        
                        className={interfaceidErr ? ' showError' : ''} 
                        placeholder={interfaceidErr}
                        />         
                    </div>    
{/*}
                    <div>    
                        <label>Sampling Timestamps:</label>     
                        <input type="text" name="samplingtp"/>      
                    </div>   

                    <div>    
                        <label>Update Timestamps:</label>     
                        <input type="text" name="updatetp"/>      
                    </div>   
                        */}  

                    <input type="submit" value="Submit" />    
                </form>    
            </div > 
        </div >   
        )    
    }    
}    

export default Settings;