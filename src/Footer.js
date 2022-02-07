import React from 'react'
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import swapIcon from './assets/swap.png'
import twitterIcon from './assets/twitter.png'
import discordIcon from './assets/discord.png'
import mediumIcon from './assets/medium.png'
import telegramIcon from './assets/telegram.png'
import githubIcon from './assets/github.png'
import voteIcon from './assets/vote.png'
import rugdocIcon from './assets/rugdoc.png'

const imgStyle = {
  width: 25,
  height: 25,
}

const spaceBetweenIcons = 35;

function Footer() {
  async function addHLY() {
    const tokenAddress = "0x8D760497554eecC3B9036fb0364156ef2F0D02BC";
    const tokenSymbol = "HLY";
    const tokenDecimals = 18;
    const tokenImage = "https://holygrail.one/hly.png";
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("HLY was added to your Metamask!");
      } else {
        console.log("Canceled");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div style={{marginTop: "155px"}} align="center">HLY Token Contract<br />0x8D760497554eecC3B9036fb0364156ef2F0D02BC<br />(<a href="https://swap.holygrail.one" target="_blank">Swap</a>)</div>
      <div style={{marginTop: "155px"}}><h1 align="center">The Lore</h1><p align="center">You can stake many different Harmony ONE tokens here on HolyGrail.one<br />We aren't telling you to invest, but there are very high APRs.</p><p align="center">HolyGrail is holy fantasy story about the temptation of power.<br />It kicks off with a quest from a loss of magic in the land.</p></div>
    <div style={{marginTop: "155px"}}>
      <div align="center"><img src="/holygrail.png" border="0" width="250px" align="center" alt="HolyGrail" /></div><br />
      <div style={{fontSize: "14px", margin: "0 auto", marginBottom: "25px", display: 'grid', 'gridGap': spaceBetweenIcons, gridAutoFlow: 'column', justifyContent: 'center' }} align="center">
        <a href="https://swap.holygrail.one" target="_blank"><img src={swapIcon} style={imgStyle} /></a>
        <a href="https://twitter.com/holygrailone" target="_blank"><img src={twitterIcon} style={imgStyle} /></a>
        <a href="https://discord.gg/a5EkZtB9Fx" target="_blank"><img src={discordIcon} style={imgStyle} /></a>
        <a href="https://medium.com/@holygrailone" target="_blank"><img src={mediumIcon} style={imgStyle} /></a>
        <a href="https://t.me/holygrailone" target="_blank"><img src={telegramIcon} style={imgStyle} /></a>
        <a href="https://github.com/holygrailone" target="_blank"><img src={githubIcon} style={imgStyle} /></a>
        <a href="https://vote.holygrail.one" target="_blank"><img src={voteIcon} style={imgStyle} /></a>
        <a href="https://rugdoc.io/project/holygrail/" target="_blank"><img src={rugdocIcon} style={imgStyle} /></a>        
      </div>
      <div style={{fontSize: "14px", margin: "0 auto", marginBottom: "25px"}} align="center"><a onClick={addHLY} style={{cursor: "pointer"}}>Add HLY to Metamask</a></div>
    </div>
    </div>
  );
}

export default Footer;
