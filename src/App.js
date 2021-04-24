import './App.css';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



function App() {

  const [data, setData] = useState("");
  console.log(data);

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin:"5px"
  };

  const button1 = () => {
    console.log("You clicked the Button1");

    axios.get('http://117.239.163.143:5000/hello').then(res=> {
            console.log("Status : ", res);
            if(res.data.success === true){
                Swal.fire(
                    'Success!',
                    res.data.msg,
                    'success'
                )
                setData(res.data.msg);
            }
            else {
                Swal.fire(
                        'Opps!',
                        res.data.msg,
                        'error',
                    )
            }
        })
  }

  const button2 = () => {
    console.log("You clicked the Button2");

    axios.get('http://117.239.163.143:5001/hello').then(res=> {
            console.log("Status : ", res);
            if(res.data.success === true){
                Swal.fire(
                    'Success!',
                    res.data.msg,
                    'success'
                )
                setData(res.data.msg);
            }
            else {
                Swal.fire(
                        'Opps!',
                        res.data.msg,
                        'error',
                    )
            }
        })
  }

  const button3 = () => {
    console.log("You clicked the Button3");

    axios.get('http://117.239.163.143:5002/hello').then(res=> {
            console.log("Status : ", res);
            if(res.data.success === true){
                Swal.fire(
                    'Success!',
                    res.data.msg,
                    'success'
                )
                setData(res.data.msg);
            }
            else {
                Swal.fire(
                        'Opps!',
                        res.data.msg,
                        'error',
                    )
            }
        })
  }

  const button4 = () => {
    console.log("You clicked the Button4");

    axios.get('http://117.239.163.143:5003/hello').then(res=> {
            console.log("Status : ", res);
            if(res.data.success === true){
                Swal.fire(
                    'Success!',
                    res.data.msg,
                    'success'
                )
                setData(res.data.msg);
            }
            else {
                Swal.fire(
                        'Opps!',
                        res.data.msg,
                        'error',
                    )
            }
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Mr. Hacker!</h3>
        <div>
          <Button variant="contained" style={mystyle} onClick= { () => button1() }>Click Me! - 1</Button>
          <Button variant="contained" style={mystyle} onClick= { () => button2() }>Click Me! - 2</Button>
          <Button variant="contained" style={mystyle} onClick= { () => button3() }>Click Me! - 3</Button>
          <Button variant="contained" style={mystyle} onClick= { () => button4() }>Click Me! - 4</Button>
        </div>

        <div>
          <p>{ data === "" ? "There is no Data! Please Click any Button" : data }</p>
        </div>
      </header>
    </div>
  );
}

export default App;
