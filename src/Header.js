import React from 'react'
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      maxWidth: '500px',
      minWidth: '350px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#463C2D',
      border: '0',
      padding: '30px',
      borderRadius: '13px'
    },
  };

function Header() {
  const [account, setAccount] = useState();
  const [acct, setAcct] = useState();

  const [HLYBal, setHLYBAL] = useState(0);

  const [modalIsOpenProfile, setIsOpenProfile] = React.useState(false);

  function openModalProfile() {
    setIsOpenProfile(true);
  }

  function closeModalProfile() {
    setIsOpenProfile(false);
  }

  useEffect(() => {
    async function listenMMAccount() {
        window.ethereum.on("accountsChanged", async function() {
          // Time to reload your interface with accounts[0]!
          const web3 = new Web3(window.ethereum);
          var accounts = await web3.eth.getAccounts();
          // accounts = await web3.eth.getAccounts();
          setAccount(accounts);
          var modacct = accounts[0].slice(0, 15) + '...';
          setAcct(modacct);
          // console.log(accounts);
          // window.location.reload();
        });

    }
    listenMMAccount();	
    
}, []);

async function load() {
    // const web3 = new Web3('https://one.rpcgator.com');
    const web3 = new Web3(window.ethereum);
    await window.ethereum.send('eth_requestAccounts');

    var accounts = await web3.eth.getAccounts();

    const block = await web3.eth.getBlockNumber();
    setAccount(accounts);
    var modacct = accounts[0].slice(0, 15) + '...';
    setAcct(modacct);

    // console.log(accounts[0])

    // console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    const chainId = await web3.eth.getChainId();

    if (chainId !== 1666600000) {
        console.log('Not on Harmony Chain');
        // If we are not on the Harmony chain,
        // Check if MetaMask is installed
        // MetaMask injects the global API into window.ethereum
        if (window.ethereum) {
        try {
            // check if the chain to connect to is installed
            await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x63564C40' }], // chainId must be in hexadecimal numbers
            });
        } catch (error) {
            // This error code indicates that the chain has not been added to MetaMask
            // if it is not, then install it into the user MetaMask
            if (error.code === 4902) {
            try {
                await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                    chainId: '0x63564C40',
                    rpcUrl: 'https://one.rpcgator.com/',
                    },
                ],
                });
            } catch (addError) {
                console.error(addError);
            }
            }
            console.error(error);
        }
        } else {
        // if no window.ethereum then MetaMask is not installed
        alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
        } 
        window.location.reload();
    }

    // const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

    // setContactList(contactList);

    // const counter = await contactList.methods.count().call();

    // for (var i = 1; i <= counter; i++) {
    //   const contact = await contactList.methods.contacts(i).call();
    //   setContacts((contacts) => [...contacts, contact]);
    // }

    const erc20ABI = [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "vrf",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "result",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];

    const web3h = new Web3('https://api.harmony.one');

    const hlytoken = new web3h.eth.Contract(erc20ABI, '0x8D760497554eecC3B9036fb0364156ef2F0D02BC');

    var hlybal = await hlytoken.methods.balanceOf(accounts[0]).call();

    var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];

    function abbreviateNumber(number){
    
        // what tier? (determines SI symbol)
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
    
        // if zero, we don't need a suffix
        if(tier == 0) return number;
    
        // get suffix and determine scale
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
    
        // scale the number
        var scaled = number / scale;
    
        // format number and add suffix
        return scaled.toFixed(1) + suffix;
    }

    var hlybalformat = web3.utils.fromWei(hlybal, 'ether');

    setHLYBAL(abbreviateNumber(hlybalformat));

    }

    async function disconnect(e) {
        e.preventDefault();

        // can't really disconnect from metamask with web3, so just reload the page
        setAccount();
        setAcct();
        setHLYBAL(0);
        document.getElementById("disbtn").style.display = "none";
        setIsOpenProfile(false);
    }

    function disableFX(e) {
        e.preventDefault();

        var disabled = false;

        if (disabled === false) {
            document.getElementById("firefly1").style.display = 'none';
            document.getElementById("firefly2").style.display = 'none';
            document.getElementById("firefly3").style.display = 'none';
            document.getElementById("firefly4").style.display = 'none';
            document.getElementById("firefly5").style.display = 'none';
            document.getElementById("firefly6").style.display = 'none';
            document.getElementById("firefly7").style.display = 'none';
            document.getElementById("firefly8").style.display = 'none';
            document.getElementById("firefly9").style.display = 'none';
            document.getElementById("firefly10").style.display = 'none';
            document.getElementById("firefly11").style.display = 'none';
            document.getElementById("firefly12").style.display = 'none';
            document.getElementById("firefly13").style.display = 'none';
            document.getElementById("disable").style.display = 'none';
            disabled = true;
        } else {

            // tbc
        }
    }

  
  return (
    <div>
    <Modal
        isOpen={modalIsOpenProfile}
        onRequestClose={closeModalProfile}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
               <h2>Your Account <img src="/hly.png" style={{width: "30px", height: "30px", marginRight: "10px", marginBottom: "-8px"}} /></h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
        <p style={{backgroundColor: "#111", padding: "15px", borderRadius: "13px"}}>
        HLY Balance: <span id="available">{HLYBal}</span><br />
        </p>
        </div>
        <div align="center">
          {account}
        </div>

        {/* <button className="hlybtn" id="disbtn" onClick={(e) => disconnect(e)}>Disconnect</button> */}

        <p><div><a href={"https://explorer.harmony.one/address/"+account} target="_blank">View on Harmony Explorer 🔗</a></div></p>
      </Modal>

      <div className="togglefirefly" style={{margin:"15px"}}>
          <button onClick={(e) => disableFX(e)} id="disable" style={{cursor: "pointer", backgroundColor: "rgb(76, 66, 49)", color: "#FFF", border: "3px solid rgb(177, 147, 40)", borderRadius: "5px", padding: "5px", width: "150px", float: "left"}}>Disable FX</button>
      </div>

       {!(account) ? 
       
       (<button id="account" onClick={load} style={{border: "3px solid #b19328", float: "right", marginRight: "25px", cursor: "pointer", backgroundColor: "rgb(76 66 49)", color: "#FFF", padding: "10px", borderRadius: "5px"}}>Connect Wallet</button> )
       
       : 
       
       (<button id="account" onClick={openModalProfile} style={{border: "3px solid #b19328", float: "right", marginRight: "25px", cursor: "pointer", backgroundColor: "rgb(76 66 49)", color: "#FFF", padding: "10px", borderRadius: "5px"}}>{acct}</button>)
       }
       <h1>&nbsp;</h1>
       <div align="center"><a href="https://swap.holygrail.one" target="_blank"><img src="/holygrailonegame.png" border="0" style={{maxWidth: "600px", width: "100%", height: "auto", marginBottom: "40px"}} align="center" /></a><br />
       {/* <h1 align="center" style={{fontSize: "44px", marginBottom: "0px", marginTop: "0px"}} className="shimmer">HOLYGRAIL.ONE</h1>
       <div style={{fontSize: "14px", margin: "0 auto", marginBottom: "25px"}} align="center">One Grail to Rule Them All</div> */}
       
       </div>

    </div>
  )
}

export default Header