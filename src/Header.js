import React from 'react'
import { useEffect, useState } from 'react';
import Web3 from 'web3';

function Header() {
  const [account, setAccount] = useState();
  const [acct, setAcct] = useState();
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
    }

  
  return (
    <div>
       <button id="account" onClick={load} style={{float: "right", marginRight: "25px", cursor: "pointer", border: "0", backgroundColor: "rgb(76 66 49)", color: "#FFF", padding: "10px", borderRadius: "5px"}}>{!(account) ? 'Connect Wallet' : acct}</button>
       <h1>&nbsp;</h1>
       <div align="center"><img src="/hly.png" border="0" width="200px" align="center" /><br />
       <h1 align="center" style={{fontSize: "44px", marginBottom: "0px", marginTop: "0px"}} className="shimmer">HOLYGRAIL.ONE</h1>
       <div style={{fontSize: "14px", margin: "0 auto", marginBottom: "25px"}} align="center">One Grail to Rule Them All</div></div>

    </div>
  )
}

export default Header