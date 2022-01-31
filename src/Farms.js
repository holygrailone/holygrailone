import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import Modal from "react-modal";
import { erc20ABI } from "./resources/erc20ABI";
import { lpABI } from "./resources/lpABI";
import { masterChefABI } from "./resources/masterChefABI";
import { priceOracleABI } from "./resources/priceOracleABI";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    maxWidth: "500px",
    minWidth: "350px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#463C2D",
    border: "0",
    padding: "30px",
    borderRadius: "13px",
  },
  hlyEarningsGrid: {
    marginLeft: "30%",
  },
  hlyEarningsGap: {
    width: 15,
    display: "inline-block",
  },
  hlyEarningsAmount: {
    fontSize: "18px",
    fontWeight: "100",
    textAlign: "start",
  },
  hlyQuestRowGrid: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr 2fr 2fr 3fr",
    cursor: "pointer",
  },
};

const hlyIcon = (
  <img
    src="/hly.png"
    style={{
      width: "20px",
      height: "20px",
      marginTop: "3px",
      marginBottom: "-3px",
    }}
  />
);

function Farms() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [modalIsOpenHLYONE, setIsOpenHLYONE] = React.useState(false);

  function openModalHLYONE() {
    setIsOpenHLYONE(true);
  }

  function closeModalHLYONE() {
    setIsOpenHLYONE(false);
  }

  const [modalIsOpenHLYHLYJEW, setIsOpenHLYHLYJEW] = React.useState(false);

  function openModalHLYHLYJEW() {
    setIsOpenHLYHLYJEW(true);
  }

  function closeModalHLYHLYJEW() {
    setIsOpenHLYHLYJEW(false);
  }

  const [modalIsOpenHLYHLY, setIsOpenHLYHLY] = React.useState(false);

  function openModalHLYHLY() {
    setIsOpenHLYHLY(true);
  }

  function closeModalHLYHLY() {
    setIsOpenHLYHLY(false);
  }

  const [modalIsOpenONE, setIsOpenONE] = React.useState(false);

  function openModalONE() {
    setIsOpenONE(true);
  }

  function closeModalONE() {
    setIsOpenONE(false);
  }

  const [modalIsOpenETH, setIsOpenETH] = React.useState(false);

  function openModalETH() {
    setIsOpenETH(true);
  }

  function closeModalETH() {
    setIsOpenETH(false);
  }

  const [modalIsOpenBTC, setIsOpenBTC] = React.useState(false);

  function openModalBTC() {
    setIsOpenBTC(true);
  }

  function closeModalBTC() {
    setIsOpenBTC(false);
  }

  const [modalIsOpenUSDC, setIsOpenUSDC] = React.useState(false);

  function openModalUSDC() {
    setIsOpenUSDC(true);
  }

  function closeModalUSDC() {
    setIsOpenUSDC(false);
  }

  const [modalIsOpenJEW, setIsOpenJEW] = React.useState(false);

  function openModalJEW() {
    setIsOpenJEW(true);
  }

  function closeModalJEW() {
    setIsOpenJEW(false);
  }

  function maxAmount(e) {
    e.preventDefault();
    const avail = document.getElementById("available").innerHTML;
    console.log(avail);
    var stake = document.getElementById("stake");
    stake.setAttribute("value", avail);
  }

  function unmaxAmount(e) {
    e.preventDefault();
    const avail = document.getElementById("availablestaked").innerHTML;
    console.log(avail);
    var unstake = document.getElementById("unstake");
    unstake.setAttribute("value", avail);
  }

  const [onebalance, setOneBalance] = useState();

  const [account, setAccount] = useState();

  const [HLYmcap, setHLYMCap] = useState(0);

  const web3h = new Web3(window.ethereum);

  //HLY-USDC LP
  const [HLYPrice, setHLYUSDCPrice] = useState(0);
  const [HLYUSDCBal, setHLYUSDCBal] = useState(0);
  const [HLYLiquid, setHLYLiquid] = useState(0);
  const [HLYUSDCAPR, setHLYUSDCAPR] = useState(0);

  const [HLYUSDCStaked, setHLYUSDCStaked] = useState(0);
  const [HLYUSDCStakedPrice, setHLYUSDCStakedPrice] = useState(0);
  const [HLYUSDCpending, setHLYUSDCpending] = useState(0);

  // HLY-ONE LP
  const [HLYONEPrice, setHLYONEPrice] = useState(0);
  const [HLYONEBal, setHLYONEBal] = useState(0);
  const [HLYONELiquid, setHLYONELiquid] = useState(0);
  const [HLYONEAPR, setHLYONEAPR] = useState(0);

  const [HLYONEStaked, setHLYONEStaked] = useState(0);
  const [HLYONEStakedPrice, setHLYONEStakedPrice] = useState(0);
  const [HLYONEpending, setHLYONEpending] = useState(0);

  // 1ETH
  const [HLYETHPrice, setHLYETHPrice] = useState(0);
  const [HLYETHBal, setHLYETHBal] = useState(0);
  const [HLYETHLiquid, setHLYETHLiquid] = useState(0);
  const [HLYETHAPR, setHLYETHAPR] = useState(0);

  const [HLYETHStaked, setHLYETHStaked] = useState(0);
  const [HLYETHStakedPrice, setHLYETHStakedPrice] = useState(0);
  const [HLYETHpending, setHLYETHpending] = useState(0);

  // 1BTC
  const [HLYBTCPrice, setHLYBTCPrice] = useState(0);
  const [HLYBTCBal, setHLYBTCBal] = useState(0);
  const [HLYBTCLiquid, setHLYBTCLiquid] = useState(0);
  const [HLYBTCAPR, setHLYBTCAPR] = useState(0);

  const [HLYBTCStaked, setHLYBTCStaked] = useState(0);
  const [HLYBTCStakedPrice, setHLYBTCStakedPrice] = useState(0);
  const [HLYBTCpending, setHLYBTCpending] = useState(0);

  // wONE
  const [HLYWONEPrice, setHLYWONEPrice] = useState(0);
  const [HLYWONEBal, setHLYWONEBal] = useState(0);
  const [HLYWONELiquid, setHLYWONELiquid] = useState(0);
  const [HLYWONEAPR, setHLYWONEAPR] = useState(0);

  const [HLYWONEStaked, setHLYWONEStaked] = useState(0);
  const [HLYWONEStakedPrice, setHLYWONEStakedPrice] = useState(0);
  const [HLYWONEpending, setHLYWONEpending] = useState(0);

  // USDC
  const [USDCPrice, setUSDCPrice] = useState(0);
  const [USDCBal, setUSDCBal] = useState(0);
  const [USDCLiquid, setUSDCLiquid] = useState(0);
  const [USDCAPR, setUSDCAPR] = useState(0);

  const [USDCStaked, setUSDCStaked] = useState(0);
  const [USDCStakedPrice, setUSDCStakedPrice] = useState(0);
  const [USDCpending, setUSDCpending] = useState(0);

  // JEWEL
  const [JEWELPrice, setJEWELPrice] = useState(0);
  const [JEWELBal, setJEWELBal] = useState(0);
  const [JEWELLiquid, setJEWELLiquid] = useState(0);
  const [JEWELAPR, setJEWELAPR] = useState(0);

  const [JEWELStaked, setJEWELStaked] = useState(0);
  const [JEWELStakedPrice, setJEWELStakedPrice] = useState(0);
  const [JEWELpending, setJEWELpending] = useState(0);

  // HLY-JEWEL LP
  const [HLYHLYJEWPrice, setHLYHLYJEWPrice] = useState(0);
  const [HLYHLYJEWBal, setHLYHLYJEWBal] = useState(0);
  const [HLYHLYJEWLiquid, setHLYHLYJEWLiquid] = useState(0);
  const [HLYHLYJEWAPR, setHLYHLYJEWAPR] = useState(0);

  const [HLYHLYJEWStaked, setHLYHLYJEWStaked] = useState(0);
  const [HLYHLYJEWStakedPrice, setHLYHLYJEWStakedPrice] = useState(0);
  const [HLYHLYJEWpending, setHLYHLYJEWpending] = useState(0);

  // HLY Single STake
  const [HLYHLYHLYPrice, setHLYHLYHLYPrice] = useState(0);
  const [HLYHLYHLYBal, setHLYHLYHLYBal] = useState(0);
  const [HLYHLYHLYLiquid, setHLYHLYHLYLiquid] = useState(0);
  const [HLYHLYHLYAPR, setHLYHLYHLYAPR] = useState(0);

  const [HLYHLYHLYStaked, setHLYHLYHLYStaked] = useState(0);
  const [HLYHLYHLYStakedPrice, setHLYHLYHLYStakedPrice] = useState(0);
  const [HLYHLYHLYpending, setHLYHLYHLYpending] = useState(0);

  const [HLYBal, setHLYBAL] = useState(0);

  const [hlyusdcallowed, setHLYUSDCAllowed] = useState(false);
  const [hlyoneallowed, setHLYOneAllowed] = useState(false);
  const [hlyethallowed, setHLYEthAllowed] = useState(false);
  const [hlybtcallowed, setHLYBtcAllowed] = useState(false);
  const [hlywoneallowed, setHLYWoneAllowed] = useState(false);
  const [usdcallowed, setUSDCAllowed] = useState(false);
  const [jewallowed, setJEWAllowed] = useState(false);
  const [hlyhlyjewallowed, setHLYHLYJEWAllowed] = useState(false);
  const [hlyhlyhlyallowed, setHLYHLYHLYAllowed] = useState(false);

  useEffect(() => {
    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function () {
        // Time to reload your interface with accounts[0]!
        const web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
        // accounts = await web3.eth.getAccounts();
        setAccount(accounts);
        console.log(accounts);
        // window.location.reload();
      });
    }
    listenMMAccount();

    async function load() {
      try {
        // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
        // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
        // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
        // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // HLY-USDC LP
        const lptoken = new web3h.eth.Contract(
          lpABI,
          "0x387d00b1c74e60e7627b7048818372b1b4ec2e3f"
        );

        const hlytoken = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChef = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var hlyusdclpwei = (oneprice / (hlyusdclp / 1e18)).toFixed(5);

        var hlyusdcbal = await lptoken.methods.balanceOf(accounts[0]).call();

        var hlybal = await hlytoken.methods.balanceOf(accounts[0]).call();

        var hlyusdcformat = web3.utils.fromWei(hlyusdcbal, "ether");

        var hlyusdcliquid = await hlytoken.methods
          .balanceOf("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f")
          .call();

        var hlyusdctotallptoken = await lptoken.methods.totalSupply().call();

        var hlyliquid =
          web3.utils.fromWei(hlyusdcliquid, "ether") * hlyusdclpwei * 2;

        var hlyPerSecond = await masterChef.methods.hlyPerSecond().call();

        var allocPoint = await masterChef.methods.totalAllocPoint().call();

        var poolAllocPoint = await masterChef.methods.poolInfo(0).call();

        var poolWeight = poolAllocPoint.allocPoint / allocPoint;

        var persec = (hlyPerSecond * poolWeight) / 1e18;

        var hlyRewardPerYear =
          ((hlyusdclpwei * (persec * BLOCKS_PER_YEAR)) / 1e18 / hlyliquid) *
          365;

        var HLYUSDCstaked = await masterChef.methods
          .userInfo(0, accounts[0])
          .call();

        var HLYUSDCstakedwei = web3.utils.fromWei(
          HLYUSDCstaked.amount,
          "ether"
        );

        var HLYUSDCstakedusdc =
          (hlyliquid / hlyusdctotallptoken) * HLYUSDCstakedwei * 1e18;

        var HLYUSDCpending = await masterChef.methods
          .pendingHLY(0, accounts[0])
          .call();

        var HLYUSDCpendingwei = HLYUSDCpending / 1e18;

        var hlytotalsupply = await hlytoken.methods.totalSupply().call();

        var HLYmcap = (hlytotalsupply / 1e18) * hlyusdclpwei;

        var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];

        function abbreviateNumber(number) {
          // what tier? (determines SI symbol)
          var tier = (Math.log10(Math.abs(number)) / 3) | 0;

          // if zero, we don't need a suffix
          if (tier == 0) return number;

          // get suffix and determine scale
          var suffix = SI_SYMBOL[tier];
          var scale = Math.pow(10, tier * 3);

          // scale the number
          var scaled = number / scale;

          // format number and add suffix
          return scaled.toFixed(1) + suffix;
        }

        var hlybalformat = web3.utils.fromWei(hlybal, "ether");

        setHLYBAL(abbreviateNumber(hlybalformat));

        setHLYUSDCPrice(hlyusdclpwei);
        setHLYUSDCBal(hlyusdcformat);
        setHLYLiquid(hlyliquid);
        setHLYUSDCAPR(
          hlyRewardPerYear.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYUSDCStakedPrice(
          HLYUSDCstakedusdc.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYUSDCStaked(HLYUSDCstakedwei);

        setHLYUSDCpending(HLYUSDCpendingwei.toFixed(4));

        setHLYMCap(
          HLYmcap.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }

    async function load2() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        const account = accounts[0];

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // HLY-ONE LP
        const lptokenONE = new web3h.eth.Contract(
          lpABI,
          "0x3e478ed607f79a50f286a5a6ce52a049897291b2"
        );

        const hlytoken = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefONE = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const hlyusdclpONE = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyusdclpweiONE = (oneprice / (hlyusdclpONE / 1e18)).toFixed(5);

        var hlyusdcbalONE = await lptokenONE.methods.balanceOf(account).call();

        var hlyusdcformatONE = web3.utils.fromWei(hlyusdcbalONE, "ether");

        var totalliquidityONE = await lptokenONE.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyusdcliquid = await hlytoken.methods
          .balanceOf("0x3e478ed607f79a50f286a5a6ce52a049897291b2")
          .call();

        var hlyusdctotallptokenONE = await lptokenONE.methods
          .totalSupply()
          .call();

        //get total lp value
        var liquidcalc = (hlyusdcliquid / 1e18) * hlyusdclpweiONE * 2;

        var priceperLP = liquidcalc / (hlyusdctotallptokenONE / 1e18);

        var hlyliquidONE = (totalliquidityONE / 1e18) * priceperLP;

        var hlyPerSecondONE = await masterChefONE.methods.hlyPerSecond().call();

        var allocPointONE = await masterChefONE.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointONE = await masterChefONE.methods.poolInfo(1).call();

        var poolWeightONE = poolAllocPointONE.allocPoint / allocPointONE;

        var persecONE = (hlyPerSecondONE * poolWeightONE) / 1e18;

        var hlyRewardPerYearONE =
          ((HLYPrices * (persecONE * BLOCKS_PER_YEAR)) / 1e18 / hlyliquidONE) *
          365;

        var HLYUSDCstakedONE = await masterChefONE.methods
          .userInfo(1, account)
          .call();

        var HLYUSDCstakedweiONE = web3.utils.fromWei(
          HLYUSDCstakedONE.amount,
          "ether"
        );

        var HLYUSDCstakedusdcONE =
          (hlyliquidONE / hlyusdctotallptokenONE) * HLYUSDCstakedweiONE * 1e18;

        var HLYUSDCpendingONE = await masterChefONE.methods
          .pendingHLY(1, account)
          .call();

        var HLYUSDCpendingweiONE = HLYUSDCpendingONE / 1e18;

        setHLYONEPrice(hlyusdclpweiONE);
        setHLYONEBal(hlyusdcformatONE);
        setHLYONELiquid(hlyliquidONE);
        setHLYONEAPR(
          hlyRewardPerYearONE.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYONEStakedPrice(
          HLYUSDCstakedusdcONE.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYONEStaked(HLYUSDCstakedweiONE);

        setHLYONEpending(HLYUSDCpendingweiONE.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load3() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // 1ETH Pool
        const lptokenETH = new web3h.eth.Contract(
          erc20ABI,
          "0x6983D1E6DEf3690C4d616b13597A09e6193EA013"
        );

        const hlytokenETH = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefETH = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        const hlyusdclpETH = await priceFeed.methods
          .getLatestTokenPrice("0x864fcd9a42a5f6e0f76bc309ee26c8fab473fc3e", 1)
          .call();

        const getonepriceETH = await priceFeed.methods
          .getLatestONEPrice()
          .call();

        var formatETH = hlyusdclpETH / 1e18;

        var calcETH = 1 / formatETH;

        var ETHprice = (calcETH * getonepriceETH) / 1e8;

        var hlyusdclpweiETH = (hlyusdclp / 1e18).toFixed(3);

        var hlyusdcbalETH = await lptokenETH.methods
          .balanceOf(accounts[0])
          .call();

        var hlyusdcformatETH = web3.utils.fromWei(hlyusdcbalETH, "ether");

        var hlyusdcliquidETH = await lptokenETH.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyusdctotallptokenETH = await lptokenETH.methods
          .totalSupply()
          .call();

        var hlyliquidETH = (hlyusdcliquidETH / 1e18) * ETHprice;

        var hlyPerSecondETH = await masterChefETH.methods.hlyPerSecond().call();

        var allocPointETH = await masterChefETH.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointETH = await masterChefETH.methods.poolInfo(2).call();

        var poolWeightETH = poolAllocPointETH.allocPoint / allocPointETH;

        var persecETH = (hlyPerSecondETH * poolWeightETH) / 1e18;

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyRewardPerYearETH =
          (HLYPrices * (persecETH * BLOCKS_PER_YEAR)) / 1e18 / hlyliquidETH;

        var HLYUSDCstakedETH = await masterChefETH.methods
          .userInfo(2, accounts[0])
          .call();

        var HLYUSDCstakedweiETH = web3.utils.fromWei(
          HLYUSDCstakedETH.amount,
          "ether"
        );

        var HLYUSDCstakedusdcETH = HLYUSDCstakedweiETH * ETHprice;

        var HLYUSDCpendingETH = await masterChefETH.methods
          .pendingHLY(2, accounts[0])
          .call();

        var HLYUSDCpendingweiETH = HLYUSDCpendingETH / 1e18;

        setHLYETHPrice(ETHprice);
        setHLYETHBal(hlyusdcformatETH);
        setHLYETHLiquid(hlyliquidETH);
        setHLYETHAPR(
          hlyRewardPerYearETH.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYETHStakedPrice(
          HLYUSDCstakedusdcETH.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYETHStaked(HLYUSDCstakedweiETH);

        setHLYETHpending(HLYUSDCpendingweiETH.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load4() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // 1BTC Pool
        const lptokenBTC = new web3h.eth.Contract(
          erc20ABI,
          "0x3095c7557bCb296ccc6e363DE01b760bA031F2d9"
        );

        const hlytokenBTC = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefBTC = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        const hlyusdclpBTC = await priceFeed.methods
          .getLatestTokenPrice("0xc3670b927ef42eed252e483e2446352c238d9905", 1)
          .call();

        const getonepriceBTC = await priceFeed.methods
          .getLatestONEPrice()
          .call();

        var formatBTC = hlyusdclpBTC / 1e18;

        var calcBTC = 1 / formatBTC;

        var BTCprice = (calcBTC * getonepriceBTC) / 1e8;

        var hlyusdclpweiBTC = (hlyusdclp / 1e18).toFixed(3);

        var hlyusdcbalBTC = await lptokenBTC.methods
          .balanceOf(accounts[0])
          .call();

        var hlyusdcformatBTC = hlyusdcbalBTC / 1e8;

        var hlyusdcliquidBTC = await lptokenBTC.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyusdctotallptokenBTC = await lptokenBTC.methods
          .totalSupply()
          .call();

        var hlyliquidBTC = (hlyusdcliquidBTC / 1e18) * BTCprice;

        var hlyPerSecondBTC = await masterChefBTC.methods.hlyPerSecond().call();

        var allocPointBTC = await masterChefBTC.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointBTC = await masterChefBTC.methods.poolInfo(3).call();

        var poolWeightBTC = poolAllocPointBTC.allocPoint / allocPointBTC;

        var persecBTC = (hlyPerSecondBTC * poolWeightBTC) / 1e18;

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyRewardPerYearBTC =
          (HLYPrices * (persecBTC * BLOCKS_PER_YEAR)) / 1e18 / hlyliquidBTC;

        var HLYUSDCstakedBTC = await masterChefBTC.methods
          .userInfo(3, accounts[0])
          .call();

        var HLYUSDCstakedweiBTC =
          web3.utils.fromWei(HLYUSDCstakedBTC.amount, "gwei") * 10;

        var HLYUSDCstakedusdcBTC = HLYUSDCstakedweiBTC * (BTCprice / 1e10);

        var HLYUSDCpendingBTC = await masterChefBTC.methods
          .pendingHLY(3, accounts[0])
          .call();

        var HLYUSDCpendingweiBTC = HLYUSDCpendingBTC / 1e18;

        setHLYBTCPrice(BTCprice);
        setHLYBTCBal(hlyusdcformatBTC);
        setHLYBTCLiquid(hlyliquidBTC);
        setHLYBTCAPR(
          hlyRewardPerYearBTC.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYBTCStakedPrice(
          HLYUSDCstakedusdcBTC.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYBTCStaked(HLYUSDCstakedweiBTC);

        setHLYBTCpending(HLYUSDCpendingweiBTC.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load5() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // WONE Pool
        const lptokenWONE = new web3h.eth.Contract(
          erc20ABI,
          "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a"
        );

        const hlytokenWONE = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefWONE = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        const getonepriceWONE = await priceFeed.methods
          .getLatestONEPrice()
          .call();

        var WONEprice = getonepriceWONE / 1e8;

        var hlyusdclpweiWONE = (hlyusdclp / 1e18).toFixed(3);

        var hlyusdcbalWONE = await lptokenWONE.methods
          .balanceOf(accounts[0])
          .call();

        var hlyusdcformatWONE = web3.utils.fromWei(hlyusdcbalWONE, "ether");

        var hlyusdcliquidWONE = await lptokenWONE.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyliquidWONE = (hlyusdcliquidWONE / 1e18) * WONEprice;

        var hlyPerSecondWONE = await masterChefWONE.methods
          .hlyPerSecond()
          .call();

        var allocPointWONE = await masterChefWONE.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointWONE = await masterChefWONE.methods
          .poolInfo(4)
          .call();

        var poolWeightWONE = poolAllocPointWONE.allocPoint / allocPointWONE;

        var persecWONE = (hlyPerSecondWONE * poolWeightWONE) / 1e18;

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyRewardPerYearWONE =
          (HLYPrices * (persecWONE * BLOCKS_PER_YEAR)) / 1e18 / hlyliquidWONE;

        var HLYUSDCstakedWONE = await masterChefWONE.methods
          .userInfo(4, accounts[0])
          .call();

        var HLYUSDCstakedweiWONE = web3.utils.fromWei(
          HLYUSDCstakedWONE.amount,
          "ether"
        );

        var HLYUSDCstakedusdcWONE = HLYUSDCstakedweiWONE * WONEprice;

        var HLYUSDCpendingWONE = await masterChefWONE.methods
          .pendingHLY(4, accounts[0])
          .call();

        var HLYUSDCpendingweiWONE = HLYUSDCpendingWONE / 1e18;

        setHLYWONEPrice(WONEprice);
        setHLYWONEBal(hlyusdcformatWONE);
        setHLYWONELiquid(hlyliquidWONE);
        setHLYWONEAPR(
          hlyRewardPerYearWONE.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYWONEStakedPrice(
          HLYUSDCstakedusdcWONE.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYWONEStaked(HLYUSDCstakedweiWONE);

        setHLYWONEpending(HLYUSDCpendingweiWONE.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load6() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // 1USDC Pool
        const lptokenUSDC = new web3h.eth.Contract(
          erc20ABI,
          "0x985458e523db3d53125813ed68c274899e9dfab4"
        );

        const hlytokenUSDC = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefUSDC = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        var USDCprice = 1;

        var hlyusdclpweiUSDC = (hlyusdclp / 1e18).toFixed(3);

        var hlyusdcbalUSDC = await lptokenUSDC.methods
          .balanceOf(accounts[0])
          .call();

        var hlyusdcformatUSDC = hlyusdcbalUSDC / 1e6;

        var hlyusdcliquidUSDC = await lptokenUSDC.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyusdctotallptokenUSDC = await lptokenUSDC.methods
          .totalSupply()
          .call();

        var hlyliquidUSDC =
          web3.utils.fromWei(hlyusdcliquidUSDC, "gwei") * 1000;

        var hlyPerSecondUSDC = await masterChefUSDC.methods
          .hlyPerSecond()
          .call();

        var allocPointUSDC = await masterChefUSDC.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointUSDC = await masterChefUSDC.methods
          .poolInfo(5)
          .call();

        var poolWeightUSDC = poolAllocPointUSDC.allocPoint / allocPointUSDC;

        var persecUSDC = (hlyPerSecondUSDC * poolWeightUSDC) / 1e18;

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyRewardPerYearUSDC =
          (HLYPrices * (persecUSDC * BLOCKS_PER_YEAR)) / 1e18 / hlyliquidUSDC;

        var HLYUSDCstakedUSDC = await masterChefUSDC.methods
          .userInfo(5, accounts[0])
          .call();

        var HLYUSDCstakedweiUSDC = (
          web3.utils.fromWei(HLYUSDCstakedUSDC.amount, "gwei") * 1000
        ).toFixed(6);

        var HLYUSDCstakedusdcUSDC =
          web3.utils.fromWei(HLYUSDCstakedUSDC.amount, "gwei") * 1000;

        var HLYUSDCpendingUSDC = await masterChefUSDC.methods
          .pendingHLY(5, accounts[0])
          .call();

        var HLYUSDCpendingweiUSDC = HLYUSDCpendingUSDC / 1e18;

        setUSDCPrice(USDCprice);
        setUSDCBal(hlyusdcformatUSDC);
        setUSDCLiquid(hlyliquidUSDC);
        setUSDCAPR(
          hlyRewardPerYearUSDC.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setUSDCStakedPrice(
          HLYUSDCstakedusdcUSDC.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setUSDCStaked(HLYUSDCstakedweiUSDC);

        setUSDCpending(HLYUSDCpendingweiUSDC.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load7() {
      try {
        // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
        // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
        // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
        // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // JEWEL Pool
        const lptoken = new web3h.eth.Contract(
          lpABI,
          "0x72cb10c6bfa5624dd07ef608027e366bd690048f"
        );

        const hlytoken = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChef = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        var hlyusdclpwei = (hlyusdclp / 1e18).toFixed(3);

        var hlyusdcbal = await lptoken.methods.balanceOf(accounts[0]).call();

        var hlyusdcformat = web3.utils.fromWei(hlyusdcbal, "ether");

        var hlyusdcliquid = await hlytoken.methods
          .balanceOf("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f")
          .call();

        var masterjewliquid = await lptoken.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var jewsprice = await priceFeed.methods
          .getLatestTokenPrice("0xa1221a5bbea699f507cc00bdedea05b5d2e32eba", 1)
          .call();

        var jewspricewei = (jewsprice / 1e16).toFixed(2);

        var hlyusdctotallptoken = await lptoken.methods.totalSupply().call();

        var hlyliquid =
          web3.utils.fromWei(hlyusdcliquid, "ether") * hlyusdclpwei * 2;

        var jewliquid =
          web3.utils.fromWei(masterjewliquid, "ether") * jewspricewei;

        var hlyPerSecond = await masterChef.methods.hlyPerSecond().call();

        var allocPoint = await masterChef.methods.totalAllocPoint().call();

        var poolAllocPoint = await masterChef.methods.poolInfo(6).call();

        var poolWeight = poolAllocPoint.allocPoint / allocPoint;

        var persec = (hlyPerSecond * poolWeight) / 1e18;

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyRewardPerYear =
          (HLYPrices * (persec * BLOCKS_PER_YEAR)) / 1e18 / jewliquid;

        var JEWELstaked = await masterChef.methods
          .userInfo(6, accounts[0])
          .call();

        var JEWELstakedwei = web3.utils.fromWei(JEWELstaked.amount, "ether");

        var JEWELstakedusdc = JEWELstakedwei * jewspricewei;

        var JEWELpending = await masterChef.methods
          .pendingHLY(6, accounts[0])
          .call();

        var JEWELpendingwei = JEWELpending / 1e18;

        setJEWELPrice(hlyusdclpwei);
        setJEWELBal(hlyusdcformat);
        setJEWELLiquid(jewliquid);
        setJEWELAPR(
          hlyRewardPerYear.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setJEWELStakedPrice(
          JEWELstakedusdc.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setJEWELStaked(JEWELstakedwei);

        setJEWELpending(JEWELpendingwei.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load8() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        const account = accounts[0];

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // HLY-JEWEL LP
        const lptokenHLYJEW = new web3h.eth.Contract(
          lpABI,
          "0x7b886d19e5ee9e3188eb29037de21dce944ae0ef"
        );

        const hlytoken = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefHLYJEW = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const hlyusdclpHLYJEW = await priceFeed.methods
          .getLatestTokenPrice("0x7b886d19e5ee9e3188eb29037de21dce944ae0ef", 1)
          .call();

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        // hlyusdclpHLYJEW = 0.000000748 lp tokens = 1 one

        var hlyusdclpweiHLYJEW = (oneprice / (hlyusdclpHLYJEW / 1e18)).toFixed(
          5
        );

        var hlyusdcbalHLYJEW = await lptokenHLYJEW.methods
          .balanceOf(account)
          .call();

        var hlyusdcformatHLYJEW = web3.utils.fromWei(hlyusdcbalHLYJEW, "ether");

        var totalliquidityHLYJEW = await lptokenHLYJEW.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyusdcliquid = await hlytoken.methods
          .balanceOf("0x7b886d19e5ee9e3188eb29037de21dce944ae0ef")
          .call();

        var hlyusdctotallptokenHLYJEW = await lptokenHLYJEW.methods
          .totalSupply()
          .call();

        //get total lp value

        // console.log(hlyusdcliquid/1e18 * HLYPrices * 2)

        var liquidcalc = (hlyusdcliquid / 1e18) * hlyusdclpweiHLYJEW * 2;

        // console.log(liquidcalc);

        var priceperLP = liquidcalc / (hlyusdctotallptokenHLYJEW / 1e18);

        var hlyliquidHLYJEW = (hlyusdcliquid / 1e18) * HLYPrices * 2;

        var hlyPerSecondHLYJEW = await masterChefHLYJEW.methods
          .hlyPerSecond()
          .call();

        var allocPointHLYJEW = await masterChefHLYJEW.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointHLYJEW = await masterChefHLYJEW.methods
          .poolInfo(7)
          .call();

        var poolWeightHLYJEW =
          poolAllocPointHLYJEW.allocPoint / allocPointHLYJEW;

        var persecHLYJEW = (hlyPerSecondHLYJEW * poolWeightHLYJEW) / 1e18;

        var hlyRewardPerYearHLYJEW =
          ((HLYPrices * (persecHLYJEW * BLOCKS_PER_YEAR)) /
            1e18 /
            hlyliquidHLYJEW) *
          365;

        var HLYUSDCstakedHLYJEW = await masterChefHLYJEW.methods
          .userInfo(7, account)
          .call();

        var HLYUSDCstakedweiHLYJEW = web3.utils.fromWei(
          HLYUSDCstakedHLYJEW.amount,
          "ether"
        );

        var HLYUSDCstakedusdcHLYJEW =
          (hlyliquidHLYJEW / hlyusdctotallptokenHLYJEW) *
          HLYUSDCstakedweiHLYJEW *
          1e18;

        var HLYUSDCpendingHLYJEW = await masterChefHLYJEW.methods
          .pendingHLY(7, account)
          .call();

        var HLYUSDCpendingweiHLYJEW = HLYUSDCpendingHLYJEW / 1e18;

        setHLYHLYJEWPrice(hlyusdclpweiHLYJEW);
        setHLYHLYJEWBal(hlyusdcformatHLYJEW);
        setHLYHLYJEWLiquid(hlyliquidHLYJEW);
        setHLYHLYJEWAPR(
          hlyRewardPerYearHLYJEW.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYHLYJEWStakedPrice(
          HLYUSDCstakedusdcHLYJEW.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYHLYJEWStaked(HLYUSDCstakedweiHLYJEW);

        setHLYHLYJEWpending(HLYUSDCpendingweiHLYJEW.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function load9() {
      // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
      // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
      // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
      // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2

      try {
        const BLOCKS_PER_YEAR = 15768000 * 1e18;

        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");

        var accounts = await web3.eth.getAccounts();

        var modacct = accounts[0].slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        const priceFeed = new web3h.eth.Contract(
          priceOracleABI,
          "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
        );

        // HLY Pool
        const lptokenHLYHLY = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const hlytokenHLYHLY = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefHLYHLY = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const hlyusdclp = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        const hlyusdclpHLYHLY = await priceFeed.methods
          .getLatestTokenPrice("0x387d00b1c74e60e7627b7048818372b1b4ec2e3f", 1)
          .call();

        const getonepriceHLYHLY = await priceFeed.methods
          .getLatestONEPrice()
          .call();

        var formatHLYHLY = hlyusdclpHLYHLY / 1e18;

        var calcHLYHLY = 1 / formatHLYHLY;

        var HLYHLYprice = (calcHLYHLY * getonepriceHLYHLY) / 1e18;

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyusdclpweiHLYHLY = (hlyusdclp / 1e18).toFixed(3);

        var hlyusdcbalHLYHLY = await lptokenHLYHLY.methods
          .balanceOf(accounts[0])
          .call();

        var hlyusdcformatHLYHLY = hlyusdcbalHLYHLY / 1e18;

        var hlyusdcliquidHLYHLY = await lptokenHLYHLY.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyusdctotallptokenHLYHLY = await lptokenHLYHLY.methods
          .totalSupply()
          .call();

        var hlyliquidHLYHLY = (hlyusdcliquidHLYHLY / 1e18) * HLYPrices;

        // console.log(hlyliquidHLYHLY)

        var hlyPerSecondHLYHLY = await masterChefHLYHLY.methods
          .hlyPerSecond()
          .call();

        var allocPointHLYHLY = await masterChefHLYHLY.methods
          .totalAllocPoint()
          .call();

        var poolAllocPointHLYHLY = await masterChefHLYHLY.methods
          .poolInfo(8)
          .call();

        var poolWeightHLYHLY =
          poolAllocPointHLYHLY.allocPoint / allocPointHLYHLY;

        var persecHLYHLY = (hlyPerSecondHLYHLY * poolWeightHLYHLY) / 1e18;

        var hlyRewardPerYearHLYHLY =
          ((HLYPrices * (persecHLYHLY * BLOCKS_PER_YEAR)) /
            1e18 /
            hlyliquidHLYHLY) *
          365;

        var HLYUSDCstakedHLYHLY = await masterChefHLYHLY.methods
          .userInfo(8, accounts[0])
          .call();

        var HLYUSDCstakedweiHLYHLY = web3.utils.fromWei(
          HLYUSDCstakedHLYHLY.amount,
          "ether"
        );

        var HLYUSDCstakedusdcHLYHLY = HLYUSDCstakedweiHLYHLY * HLYPrices;

        var HLYUSDCpendingHLYHLY = await masterChefHLYHLY.methods
          .pendingHLY(8, accounts[0])
          .call();

        var HLYUSDCpendingweiHLYHLY = HLYUSDCpendingHLYHLY / 1e18;

        setHLYHLYHLYPrice(HLYPrices);
        setHLYHLYHLYBal(hlyusdcformatHLYHLY);
        setHLYHLYHLYLiquid(hlyliquidHLYHLY);
        setHLYHLYHLYAPR(
          hlyRewardPerYearHLYHLY.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYHLYHLYStakedPrice(
          HLYUSDCstakedusdcHLYHLY.toLocaleString("en", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        );
        setHLYHLYHLYStaked(HLYUSDCstakedweiHLYHLY);

        setHLYHLYHLYpending(HLYUSDCpendingweiHLYHLY.toFixed(4));
      } catch (error) {
        console.log(error);
      }
    }

    async function allowance() {
      // e.preventDefault();
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        var accounts = await web3.eth.getAccounts();

        const lpt = new web3h.eth.Contract(
          lpABI,
          "0x387d00b1c74e60e7627b7048818372b1b4ec2e3f"
        );

        const allowed = await lpt.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowed > 0) {
          setHLYUSDCAllowed(true);
        }

        const lpt2 = new web3h.eth.Contract(
          lpABI,
          "0x3e478ed607f79a50f286a5a6ce52a049897291b2"
        );

        const allowedone = await lpt2.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedone > 0) {
          setHLYOneAllowed(true);
        }

        const lpt3 = new web3h.eth.Contract(
          lpABI,
          "0x6983D1E6DEf3690C4d616b13597A09e6193EA013"
        );

        const allowedeth = await lpt3.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedeth > 0) {
          setHLYEthAllowed(true);
        }

        const lpt4 = new web3h.eth.Contract(
          lpABI,
          "0x3095c7557bCb296ccc6e363DE01b760bA031F2d9"
        );

        const allowedbtc = await lpt4.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedbtc > 0) {
          setHLYBtcAllowed(true);
        }

        const lpt5 = new web3h.eth.Contract(
          lpABI,
          "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a"
        );

        const allowedwone = await lpt5.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedwone > 0) {
          setHLYWoneAllowed(true);
        }

        const lpt6 = new web3h.eth.Contract(
          lpABI,
          "0x985458e523db3d53125813ed68c274899e9dfab4"
        );

        const allowedusdc = await lpt6.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedusdc > 0) {
          setUSDCAllowed(true);
        }

        const lpt7 = new web3h.eth.Contract(
          lpABI,
          "0x72cb10c6bfa5624dd07ef608027e366bd690048f"
        );

        const allowedjew = await lpt7.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedjew > 0) {
          setJEWAllowed(true);
        }

        const lpt8 = new web3h.eth.Contract(
          lpABI,
          "0x7b886d19e5ee9e3188eb29037de21dce944ae0ef"
        );

        const allowedhlyjew = await lpt8.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedhlyjew > 0) {
          setHLYHLYJEWAllowed(true);
        }

        const lpt9 = new web3h.eth.Contract(
          lpABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const allowedhlyhly = await lpt9.methods
          .allowance(accounts[0], "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedhlyhly > 0) {
          setHLYHLYHLYAllowed(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    load();
    load2();
    load8();
    load9();
    // load3();
    // load4();
    load5();
    // load6();
    // load7();
    allowance();

    const interval = setInterval(load, 10000);
    const interval3 = setInterval(load2, 10000);
    const interval4 = setInterval(load8, 10000);
    const interval5 = setInterval(load9, 10000);
    const interval6 = setInterval(load5, 10000);
    const interval2 = setInterval(allowance, 25000);
    return () =>
      clearInterval(
        interval,
        interval2,
        interval3,
        interval4,
        interval5,
        interval6
      );
  }, [erc20ABI, lpABI, masterChefABI, priceOracleABI]);

  async function approve(e, token) {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    var accounts = await web3.eth.getAccounts();

    const erc20 = new web3.eth.Contract(erc20ABI, token);

    erc20.methods
      .approve(
        "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78",
        "1000000000000000000000000000"
      )
      .send({ from: accounts[0] })
      .once("receipt", (receipt) => {
        console.log(receipt);
        this.load();
        this.load2();
        this.load8();
        this.load9();
        // this.load3();
        // this.load4();
        this.load5();
        // this.load6();
        // this.load7();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function stake(e, pid, amount) {
    e.preventDefault();

    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    function isString(s) {
      return typeof s === "string" || s instanceof String;
    }

    function toBaseUnit(value, decimals, BN) {
      if (!isString(value)) {
        throw new Error(
          "Pass strings to prevent floating point precision issues."
        );
      }
      const ten = new BN(10);
      const base = ten.pow(new BN(decimals));

      // Is it negative?
      let negative = value.substring(0, 1) === "-";
      if (negative) {
        value = value.substring(1);
      }

      if (value === ".") {
        throw new Error(
          `Invalid value ${value} cannot be converted to` +
            ` base unit with ${decimals} decimals.`
        );
      }

      // Split it into a whole and fractional part
      let comps = value.split(".");
      if (comps.length > 2) {
        throw new Error("Too many decimal points");
      }

      let whole = comps[0],
        fraction = comps[1];

      if (!whole) {
        whole = "0";
      }
      if (!fraction) {
        fraction = "0";
      }
      if (fraction.length > decimals) {
        throw new Error("Too many decimal places");
      }

      while (fraction.length < decimals) {
        fraction += "0";
      }

      whole = new BN(whole);
      fraction = new BN(fraction);
      let wei = whole.mul(base).add(fraction);

      if (negative) {
        wei = wei.neg();
      }

      return new BN(wei.toString(10), 10);
    }

    console.log(web3.utils.toWei(amount, "ether"));

    var accounts = await web3.eth.getAccounts();
    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    if (pid === 3) {
      console.log(web3.utils.toWei(amount, "gwei") / 10);
      masterChef.methods
        .deposit(pid, web3.utils.toWei(amount, "gwei") / 10)
        .send({ from: accounts[0] })
        .once("receipt", (receipt) => {
          console.log(receipt);
          this.load();
          this.load2();
          this.load8();
          this.load9();
          // this.load3();
          // this.load4();
          this.load5();
          // this.load6();
          // this.load7();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (pid === 5) {
      console.log(web3.utils.toWei(amount, "gwei") / 1000);
      masterChef.methods
        .deposit(pid, web3.utils.toWei(amount, "gwei") / 1000)
        .send({ from: accounts[0] })
        .once("receipt", (receipt) => {
          console.log(receipt);
          this.load();
          this.load2();
          this.load8();
          this.load9();
          // this.load3();
          // this.load4();
          this.load5();
          // this.load6();
          // this.load7();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      masterChef.methods
        .deposit(pid, web3.utils.toWei(amount, "ether"))
        .send({ from: accounts[0] })
        .once("receipt", (receipt) => {
          console.log(receipt);
          this.load();
          this.load2();
          this.load8();
          this.load9();
          // this.load3();
          // this.load4();
          this.load5();
          // this.load6();
          // this.load7();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async function withdraw(e, pid, amount) {
    e.preventDefault();

    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");
    console.log(web3.utils.toWei(amount, "ether"));

    var accounts = await web3.eth.getAccounts();
    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    if (pid === 3) {
      console.log(web3.utils.toWei(amount, "gwei") / 10);
      masterChef.methods
        .withdraw(pid, web3.utils.toWei(amount, "gwei") / 10)
        .send({ from: accounts[0] })
        .once("receipt", (receipt) => {
          console.log(receipt);
          this.load();
          this.load2();
          this.load8();
          this.load9();
          // this.load3();
          // this.load4();
          this.load5();
          // this.load6();
          // this.load7();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (pid === 5) {
      console.log(web3.utils.toWei(amount, "gwei") / 1000);
      masterChef.methods
        .withdraw(pid, web3.utils.toWei(amount, "gwei") / 1000)
        .send({ from: accounts[0] })
        .once("receipt", (receipt) => {
          console.log(receipt);
          this.load();
          this.load2();
          this.load8();
          this.load9();
          // this.load3();
          // this.load4();
          this.load5();
          // this.load6();
          // this.load7();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      masterChef.methods
        .withdraw(pid, web3.utils.toWei(amount, "ether"))
        .send({ from: accounts[0] })
        .once("receipt", (receipt) => {
          console.log(receipt);
          this.load();
          this.load2();
          this.load8();
          this.load9();
          // this.load3();
          // this.load4();
          this.load5();
          // this.load6();
          // this.load7();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async function claim(e, pid) {
    e.preventDefault();

    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    var accounts = await web3.eth.getAccounts();
    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    masterChef.methods
      .deposit(pid, 0)
      .send({ from: accounts[0] })
      .once("receipt", (receipt) => {
        console.log(receipt);
        this.load();
        this.load2();
        this.load8();
        this.load9();
        // this.load3();
        // this.load4();
        this.load5();
        // this.load6();
        // this.load7();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function harvestAll(e) {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    var accounts = await web3.eth.getAccounts();
    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    masterChef.methods
      .harvestAll()
      .send({ from: accounts[0] })
      .once("receipt", (receipt) => {
        console.log(receipt);
        this.load();
        this.load2();
        this.load8();
        this.load9();
        // this.load3();
        // this.load4();
        this.load5();
        // this.load6();
        // this.load7();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          HLY-USDC{" "}
          <img
            src="/hlyusdc.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYUSDCBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYUSDCStaked}</span>
            <br />
            Earned: {HLYUSDCpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 0, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlyusdcallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x387d00b1c74e60e7627b7048818372b1b4ec2e3f")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              {/* <button className="hlybtn" onClick={(e) => approve(e, '0x387d00b1c74e60e7627b7048818372b1b4ec2e3f')}>Approve</button><br /> */}
              {/* <button className="hlybtn">Stake</button><br /> */}
              <button className="hlybtn" onClick={(e) => claim(e, 0)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 0, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 0)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/add/0x8D760497554eecC3B9036fb0364156ef2F0D02BC/0x985458E523dB3d53125813eD68c274899e9DfAb4"
              target="_blank"
            >
              Get HLY-USDC 🔗
            </a>
          </div>
        </p>
      </Modal>
      <Modal
        isOpen={modalIsOpenHLYONE}
        onRequestClose={closeModalHLYONE}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          HLY-ONE{" "}
          <img
            src="/hlyone.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYONEBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYONEStaked}</span>
            <br />
            Earned: {HLYONEpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 1, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlyoneallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x3e478ed607f79a50f286a5a6ce52a049897291b2")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 1)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 1, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 1)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/add/0x8D760497554eecC3B9036fb0364156ef2F0D02BC/ONE"
              target="_blank"
            >
              Get HLY-ONE 🔗
            </a>
          </div>
        </p>
      </Modal>
      <Modal
        isOpen={modalIsOpenETH}
        onRequestClose={closeModalETH}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          1ETH{" "}
          <img
            src="/eth.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYETHBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYETHStaked}</span>
            <br />
            Earned: {HLYETHpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 2, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlyethallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x6983D1E6DEf3690C4d616b13597A09e6193EA013")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 2)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 2, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 2)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/marketplace"
              target="_blank"
            >
              Get 1ETH 🔗
            </a>
          </div>
        </p>
      </Modal>
      <Modal
        isOpen={modalIsOpenBTC}
        onRequestClose={closeModalBTC}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          1BTC{" "}
          <img
            src="/btc.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYBTCBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYBTCStaked}</span>
            <br />
            Earned: {HLYBTCpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 3, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlybtcallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x3095c7557bCb296ccc6e363DE01b760bA031F2d9")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 3)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 3, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 3)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/marketplace"
              target="_blank"
            >
              Get 1BTC 🔗
            </a>
          </div>
        </p>
      </Modal>
      <Modal
        isOpen={modalIsOpenONE}
        onRequestClose={closeModalONE}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          wONE{" "}
          <img
            src="/wone.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYWONEBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYWONEStaked}</span>
            <br />
            Earned: {HLYWONEpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 4, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlywoneallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 4)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 4, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 4)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/marketplace"
              target="_blank"
            >
              Get wONE 🔗
            </a>
          </div>
        </p>
      </Modal>
      <Modal
        isOpen={modalIsOpenUSDC}
        onRequestClose={closeModalUSDC}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          1USDC{" "}
          <img
            src="/usdc.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{USDCBal}</span>
            <br />
            Staking: <span id="availablestaked">{USDCStaked}</span>
            <br />
            Earned: {USDCpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 5, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {usdcallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x985458e523db3d53125813ed68c274899e9dfab4")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 5)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 5, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 5)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/marketplace"
              target="_blank"
            >
              Get 1USDC 🔗
            </a>
          </div>
        </p>
      </Modal>
      <Modal
        isOpen={modalIsOpenJEW}
        onRequestClose={closeModalJEW}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          JEWEL{" "}
          <img
            src="/JEWEL.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{JEWELBal}</span>
            <br />
            Staking: <span id="availablestaked">{JEWELStaked}</span>
            <br />
            Earned: {JEWELpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 6, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {jewallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x72cb10c6bfa5624dd07ef608027e366bd690048f")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 6)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 6, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 6)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/marketplace"
              target="_blank"
            >
              Get JEWEL 🔗
            </a>
          </div>
        </p>
      </Modal>

      <Modal
        isOpen={modalIsOpenHLYHLYJEW}
        onRequestClose={closeModalHLYHLYJEW}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          HLY-JEWEL{" "}
          <img
            src="/hlyjewel.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYHLYJEWBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYHLYJEWStaked}</span>
            <br />
            Earned: {HLYHLYJEWpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 7, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlyhlyjewallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x7b886d19e5ee9e3188eb29037de21dce944ae0ef")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 7)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 7, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 7)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/add/0x8D760497554eecC3B9036fb0364156ef2F0D02BC/0x72cb10c6bfa5624dd07ef608027e366bd690048f"
              target="_blank"
            >
              Get HLY-JEWEL 🔗
            </a>
          </div>
        </p>
      </Modal>

      <Modal
        isOpen={modalIsOpenHLYHLY}
        onRequestClose={closeModalHLYHLY}
        style={customStyles}
        overlayClassName="myoverlay"
        contentLabel="Stake"
      >
        <h2>
          HLY{" "}
          <img
            src="/hly.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>
        {/* <button onClick={closeModal}>close</button> */}
        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance: <span id="available">{HLYHLYHLYBal}</span>
            <br />
            Staking: <span id="availablestaked">{HLYHLYHLYStaked}</span>
            <br />
            Earned: {HLYHLYHLYpending}
          </p>
        </div>

        <Tabs>
          <TabList>
            <Tab>Stake</Tab>
            <Tab>Unstake</Tab>
          </TabList>

          <TabPanel>
            <form
              onSubmit={(event) =>
                stake(event, 8, document.getElementById("stake").value)
              }
            >
              <input
                id="stake"
                type="number"
                placeholder="Enter Deposit Amount"
                step="any"
              />{" "}
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={maxAmount}
              >
                Max
              </button>
              <br />
              {hlyhlyhlyallowed ? (
                <>
                  <button type="submit" className="hlybtn">
                    Stake
                  </button>
                  <br />
                </>
              ) : (
                <>
                  <button
                    className="hlybtn"
                    onClick={(e) =>
                      approve(e, "0x8D760497554eecC3B9036fb0364156ef2F0D02BC")
                    }
                  >
                    Approve
                  </button>
                  <br />
                </>
              )}
              <button className="hlybtn" onClick={(e) => claim(e, 8)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) =>
                withdraw(event, 8, document.getElementById("unstake").value)
              }
            >
              <input
                id="unstake"
                type="number"
                placeholder="Enter Withdrawal Amount"
                step="any"
              />
              <button
                style={{
                  display: "inline-block",
                  backgroundColor: "green",
                  border: "0",
                  color: "#FFF",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={unmaxAmount}
              >
                Max
              </button>
              <br />

              <button type="submit" className="hlybtn">
                Unstake
              </button>
              <br />

              <button className="hlybtn" onClick={(e) => claim(e, 8)}>
                Claim Earnings
              </button>
            </form>
          </TabPanel>
        </Tabs>

        <p>
          <div>
            <a
              href="https://beta.defikingdoms.com/#/marketplace"
              target="_blank"
            >
              Get HLY 🔗
            </a>
          </div>
        </p>
      </Modal>

      <div
        style={{
          backgroundColor: "#4C4231DE",
          color: "#FFF",
          maxWidth: "1100px",
          margin: "0 auto",
          borderRadius: "13px",
          padding: "30px",
        }}
      >
        <div className="section group">
          <div className="col span_1_of_3">
            <span style={{ float: "left" }}>TVL</span>
            <br />
            <span
              style={{ float: "right", fontSize: "34px", fontWeight: "100" }}
            >
              $
              {(
                parseInt(HLYLiquid) +
                parseInt(HLYONELiquid) +
                parseInt(HLYETHLiquid) +
                parseInt(HLYBTCLiquid) +
                parseInt(HLYWONELiquid) +
                parseInt(USDCLiquid) +
                parseInt(JEWELLiquid) +
                parseInt(HLYHLYJEWLiquid) +
                parseInt(HLYHLYHLYLiquid)
              ).toLocaleString("en", {
                style: "decimal",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="col span_1_of_3">
            <span style={{ float: "left" }}>HLY Price</span>
            <br />
            <span
              style={{ float: "right", fontSize: "34px", fontWeight: "100" }}
            >
              ${HLYPrice}
            </span>
          </div>
          <div className="col span_1_of_3">
            <span style={{ float: "left" }}>Market Cap</span>
            <br />
            <span
              style={{ float: "right", fontSize: "34px", fontWeight: "100" }}
            >
              ${HLYmcap}
            </span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1>
          Grail Quests{" "}
          <form
            style={{ display: "inline" }}
            action="https://swap.holygrail.one/swap?inputCurrency=ONE&outputCurrency=0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
          >
            <button className="claimall" onClick={harvestAll}>
              Claim All
            </button>
            <button
              type="submit"
              className="claimall"
              style={{ marginRight: "25px" }}
            >
              Buy HLY ↗
            </button>
          </form>
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "#4C4231DE",
          color: "#FFF",
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "25px",
          borderRadius: "13px",
          padding: "30px",
        }}
      >
        <table
          style={{
            width: "100%",
            border: "0",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={customStyles.hlyQuestRowGrid}>
              <th style={{ border: "0", padding: "10px", textAlign: "left" }}>
                Name
              </th>
              <th style={{ border: "0", padding: "10px" }}>APR</th>
              <th style={{ border: "0", padding: "10px" }}>Liquidity</th>
              <th style={{ border: "0", padding: "10px" }}>My Stakes</th>
              <th style={{ border: "0", padding: "10px" }}>HLY Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={openModal} style={customStyles.hlyQuestRowGrid}>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "left" }}>
                  <img
                    src="/hlyusdc.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      marginBottom: "-8px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    HLY-USDC
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    {HLYUSDCAPR}%
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    $
                    {HLYLiquid.toLocaleString("en", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    ${HLYUSDCStakedPrice}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={customStyles.hlyEarningsGrid}>
                  {hlyIcon}

                  <div style={customStyles.hlyEarningsGap} />
                  <span style={customStyles.hlyEarningsAmount}>
                    {HLYUSDCpending}
                  </span>
                </div>
              </td>
            </tr>

            <tr onClick={openModalHLYONE} style={customStyles.hlyQuestRowGrid}>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "left" }}>
                  <img
                    src="/hlyone.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      marginBottom: "-8px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    HLY-ONE
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    {HLYONEAPR}%
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    $
                    {HLYONELiquid.toLocaleString("en", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    ${HLYONEStakedPrice}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={customStyles.hlyEarningsGrid}>
                  {hlyIcon}
                  <div style={customStyles.hlyEarningsGap} />
                  <span style={customStyles.hlyEarningsAmount}>
                    {HLYONEpending}
                  </span>
                </div>
              </td>
            </tr>

            <tr
              onClick={openModalHLYHLYJEW}
              style={customStyles.hlyQuestRowGrid}
            >
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "left" }}>
                  <img
                    src="/hlyjewel.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      marginBottom: "-8px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    HLY-JEWEL
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    {HLYHLYJEWAPR}%
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    $
                    {HLYHLYJEWLiquid.toLocaleString("en", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    ${HLYHLYJEWStakedPrice}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={customStyles.hlyEarningsGrid}>
                  {hlyIcon}
                  <div style={customStyles.hlyEarningsGap} />
                  <span style={customStyles.hlyEarningsAmount}>
                    {HLYHLYJEWpending}
                  </span>
                </div>
              </td>
            </tr>

            <tr onClick={openModalHLYHLY} style={customStyles.hlyQuestRowGrid}>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "left" }}>
                  <img
                    src="/hly.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      marginBottom: "-8px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    HLY
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    {HLYHLYHLYAPR}%
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    $
                    {HLYHLYHLYLiquid.toLocaleString("en", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    ${HLYHLYHLYStakedPrice}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={customStyles.hlyEarningsGrid}>
                  {hlyIcon}
                  <div style={customStyles.hlyEarningsGap} />
                  <span style={customStyles.hlyEarningsAmount}>
                    {HLYHLYHLYpending}
                  </span>
                </div>
              </td>
            </tr>

            {/* <tr onClick={openModalETH} style={{cursor: "pointer"}} className="inactive" title="This quest is closed, please withdraw all funds!">
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "left"}}>
                <img src="/eth.png" style={{width: "30px", height: "30px", marginRight: "10px", marginBottom: "-8px"}} />
                <span style={{fontSize: "18px", fontWeight: "100"}}>1ETH</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>Closed</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${HLYETHLiquid.toLocaleString("en",  { style: 'decimal', maximumFractionDigits : 0, minimumFractionDigits : 0 })}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${HLYETHStakedPrice}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>{HLYETHpending}</span>
                <img src="/hly.png" style={{width: "20px", height: "20px", marginLeft: "10px", marginBottom: "-3px"}} />
                </div>
            </td>
          </tr>

          <tr onClick={openModalBTC} style={{cursor: "pointer"}} className="inactive" title="This quest is closed, please withdraw all funds!">
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "left"}}>
                <img src="/btc.png" style={{width: "30px", height: "30px", marginRight: "10px", marginBottom: "-8px"}} />
                <span style={{fontSize: "18px", fontWeight: "100"}}>1BTC</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>Closed</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${HLYBTCLiquid.toLocaleString("en",  { style: 'decimal', maximumFractionDigits : 0, minimumFractionDigits : 0 })}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${HLYBTCStakedPrice}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>{HLYBTCpending}</span>
                <img src="/hly.png" style={{width: "20px", height: "20px", marginLeft: "10px", marginBottom: "-3px"}} />
                </div>
            </td>
          </tr> */}

            {/* <tr
              onClick={openModalONE}
              style={customStyles.hlyQuestRowGrid}
              className="inactive"
              title="This quest is closed, please withdraw all funds!"
            >
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "left" }}>
                  <img
                    src="/wone.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                      marginBottom: "-8px",
                    }}
                  />
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    wONE
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    Closed
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    $
                    {HLYWONELiquid.toLocaleString("en", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "100" }}>
                    ${HLYWONEStakedPrice}
                  </span>
                </div>
              </td>
              <td style={{ border: "0", padding: "10px" }}>
                <div style={customStyles.hlyEarningsGrid}>
                  {hlyIcon}
                  <div style={customStyles.hlyEarningsGap} />
                  <span style={customStyles.hlyEarningsAmount}>
                    {HLYWONEpending}
                  </span>
                </div>
              </td>
            </tr> */}

            {/* <tr onClick={openModalUSDC} style={{cursor: "pointer"}} className="inactive" title="This quest is closed, please withdraw all funds!">
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "left"}}>
                <img src="/usdc.png" style={{width: "30px", height: "30px", marginRight: "10px", marginBottom: "-8px"}} />
                <span style={{fontSize: "18px", fontWeight: "100"}}>USDC</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>Closed</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${USDCLiquid.toLocaleString("en",  { style: 'decimal', maximumFractionDigits : 0, minimumFractionDigits : 0 })}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${USDCStakedPrice}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>{USDCpending}</span>
                <img src="/hly.png" style={{width: "20px", height: "20px", marginLeft: "10px", marginBottom: "-3px"}} />
                </div>
            </td>
          </tr>

          <tr onClick={openModalJEW} style={{cursor: "pointer"}} className="inactive" title="This quest is closed, please withdraw all funds!">
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "left"}}>
                <img src="/JEWEL.png" style={{width: "30px", height: "30px", marginRight: "10px", marginBottom: "-8px"}} />
                <span style={{fontSize: "18px", fontWeight: "100"}}>JEWEL</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>Closed</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${JEWELLiquid.toLocaleString("en",  { style: 'decimal', maximumFractionDigits : 0, minimumFractionDigits : 0 })}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>${JEWELStakedPrice}</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>{JEWELpending}</span>
                <img src="/hly.png" style={{width: "20px", height: "20px", marginLeft: "10px", marginBottom: "-3px"}} />
                </div>
            </td>
          </tr> */}

            {/* <tr>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "left"}}>
                <img src="/viper.png" style={{width: "30px", height: "30px", marginRight: "10px", marginBottom: "-8px"}} />
                <span style={{fontSize: "18px", fontWeight: "100"}}>VIPER</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>5,000%</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>$53,000,000</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>$3,000,000</span>
                </div>
            </td>
            <td style={{border: "0", padding: "10px"}}>
              <div style={{textAlign: "center"}}>
                <span style={{fontSize: "18px", fontWeight: "100"}}>35.53350</span>
                <img src="/hly.png" style={{width: "20px", height: "20px", marginLeft: "10px", marginBottom: "-3px"}} />
                </div>
            </td>
          </tr> */}
          </tbody>
        </table>
      </div>

      <div
        class="section2 group2"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <div class="col2 span_1_of_2">
          <div align="center" style={{ marginTop: "20px" }}>
            <h3 style={{ marginBottom: "-15px" }}>HLY Balance</h3>
            <br />
            <span style={{ fontSize: "31px", fontWeight: "100" }}>
              {HLYBal}
            </span>
            <br />
            <span style={{ fontSize: "21px", fontWeight: "100" }}>
              ≈$
              {(HLYHLYHLYBal * HLYPrice).toLocaleString("en", {
                style: "decimal",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
        <div class="col2 span_1_of_2">
          <div align="center" style={{ marginTop: "20px" }}>
            <h3 style={{ marginBottom: "-15px" }}>HLY Earnings</h3>
            <br />
            <span style={{ fontSize: "31px", fontWeight: "100" }}>
              ≈
              {(
                parseFloat(HLYUSDCpending) +
                parseFloat(HLYONEpending) +
                parseFloat(HLYBTCpending) +
                parseFloat(HLYETHpending) +
                parseFloat(JEWELpending) +
                parseFloat(USDCpending) +
                parseFloat(HLYWONEpending) +
                parseFloat(HLYHLYJEWpending) +
                parseFloat(HLYHLYHLYpending)
              ).toFixed(4)}
            </span>
            <br />
            <span style={{ fontSize: "21px", fontWeight: "100" }}>
              ≈$
              {(
                (
                  parseFloat(HLYUSDCpending) +
                  parseFloat(HLYONEpending) +
                  parseFloat(HLYBTCpending) +
                  parseFloat(HLYETHpending) +
                  parseFloat(JEWELpending) +
                  parseFloat(USDCpending) +
                  parseFloat(HLYWONEpending) +
                  parseFloat(HLYHLYJEWpending) +
                  parseFloat(HLYHLYHLYpending)
                ).toFixed(4) * HLYPrice
              ).toLocaleString("en", {
                style: "decimal",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farms;
