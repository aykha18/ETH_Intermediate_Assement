import abi from "./contract/Donate2Syria.json";
import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import "./App.css";
import Donate from "./components/Donate";
import DonersDtls from "./components/DonersDtls"; 
import helpsyria from "./helpsyria.png";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("");

  useEffect(()=>{
    const connectWallet = async() =>{
      const contractAddress = "0x0D71Fc0c182D4AcBA436943486d88d3544cB1Bf7";
      const contractABI = abi.abi;
      try {
        const {ethereum} = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
          
          window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
          }
          );
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          )
          setAccount(account);
          setState({provider,signer,contract})
        }
        else{
          alert("Please Install Metamask...");
        }

      } catch (error) {
        console.log(error)
      }
    };
    connectWallet();
  },[]);
  //console.log(state);
  return (
  // <div className="App">
  //   <Donate state={state}/>
  //   <DonersDtls state={state}/>
  // </div>
  <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
  <img src={helpsyria} className="img-fluid" alt=".." width="100%" />
  <p
    class="text-muted lead "
    style={{ marginTop: "10px", marginLeft: "5px" }}
  >
    <small>Connected Account - {account}</small>
  </p>
  <div className="container">
    <Donate state={state} />
    <DonersDtls state={state} />
  </div>
</div>
  );
}

export default App;
