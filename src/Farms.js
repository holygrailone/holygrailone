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

import { customStyles } from "./farms/FarmsStyles";
import { hlyIcon } from "./farms/FarmsUtils";
import { loadingMsg, dfkMarketplace } from "./utils/utils";

function Farms() {
  const grailQuestRow = (
    onClick,
    iconSrc,
    name,
    apr,
    liquidity,
    stakeAmount,
    earnings
  ) => (
    <tr onClick={onClick} style={customStyles.hlyQuestRowGrid}>
      <td style={{ border: "0", padding: "10px" }}>
        <div style={{ textAlign: "left" }}>
          <img alt="" src={iconSrc} style={customStyles.grailQuestIcon} />
          <span style={{ fontSize: "18px", fontWeight: "100" }}>{name}</span>
        </div>
      </td>
      <td style={{ border: "0", padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "18px", fontWeight: "100" }}>
            {apr ? `${apr}%` : loadingMsg}
          </span>
        </div>
      </td>
      <td style={{ border: "0", padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "18px", fontWeight: "100" }}>
            {liquidity
              ? `$${liquidity.toLocaleString("en", {
                  style: "decimal",
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                })}`
              : loadingMsg}
          </span>
        </div>
      </td>
      <td style={{ border: "0", padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "18px", fontWeight: "100" }}>
            {stakeAmount ? `$${stakeAmount}` : loadingMsg}
          </span>
        </div>
      </td>
      <td style={{ border: "0", padding: "10px" }}>
        <div style={customStyles.hlyEarningsGrid}>
          {hlyIcon}
          <div style={customStyles.hlyEarningsGap} />
          <span style={customStyles.hlyEarningsAmount}>
            {earnings || loadingMsg}
          </span>
        </div>
      </td>
    </tr>
  );

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

  function closeModalONE() {
    setIsOpenONE(false);
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

  const [account, setAccount] = useState();

  const [HLYmcap, setHLYMCap] = useState(undefined);

  const web3h = new Web3(window.ethereum);

  //HLY-USDC LP
  const [HLYPrice, setHLYUSDCPrice] = useState(undefined);
  const [HLYUSDCBal, setHLYUSDCBal] = useState(undefined);
  const [HLYLiquid, setHLYLiquid] = useState(undefined);
  const [HLYUSDCAPR, setHLYUSDCAPR] = useState(undefined);

  const [HLYUSDCStaked, setHLYUSDCStaked] = useState(undefined);
  const [HLYUSDCStakedPrice, setHLYUSDCStakedPrice] = useState(undefined);
  const [HLYUSDCpending, setHLYUSDCpending] = useState(undefined);

  // HLY-ONE LP
  const [HLYONEBal, setHLYONEBal] = useState(undefined);
  const [HLYONELiquid, setHLYONELiquid] = useState(undefined);
  const [HLYONEAPR, setHLYONEAPR] = useState(undefined);

  const [HLYONEStaked, setHLYONEStaked] = useState(undefined);
  const [HLYONEStakedPrice, setHLYONEStakedPrice] = useState(undefined);
  const [HLYONEpending, setHLYONEpending] = useState(undefined);

  // wONE
  const [HLYWONEBal, setHLYWONEBal] = useState(undefined);
  const [HLYWONELiquid, setHLYWONELiquid] = useState(undefined);

  const [HLYWONEStaked, setHLYWONEStaked] = useState(undefined);
  const [HLYWONEpending, setHLYWONEpending] = useState(undefined);

  // HLY-JEWEL LP
  const [HLYHLYJEWBal, setHLYHLYJEWBal] = useState(undefined);
  const [HLYHLYJEWLiquid, setHLYHLYJEWLiquid] = useState(undefined);
  const [HLYHLYJEWAPR, setHLYHLYJEWAPR] = useState(undefined);

  const [HLYHLYJEWStaked, setHLYHLYJEWStaked] = useState(undefined);
  const [HLYHLYJEWStakedPrice, setHLYHLYJEWStakedPrice] = useState(undefined);
  const [HLYHLYJEWpending, setHLYHLYJEWpending] = useState(undefined);

  // HLY Single Stake
  const [HLYHLYHLYBal, setHLYHLYHLYBal] = useState(undefined);
  const [HLYHLYHLYLiquid, setHLYHLYHLYLiquid] = useState(undefined);
  const [HLYHLYHLYAPR, setHLYHLYHLYAPR] = useState(undefined);

  const [HLYHLYHLYStaked, setHLYHLYHLYStaked] = useState(undefined);
  const [HLYHLYHLYStakedPrice, setHLYHLYHLYStakedPrice] = useState(undefined);
  const [HLYHLYHLYpending, setHLYHLYHLYpending] = useState(undefined);

  const [HLYBal, setHLYBAL] = useState(undefined);

  const [hlyusdcallowed, setHLYUSDCAllowed] = useState(false);
  const [hlyoneallowed, setHLYOneAllowed] = useState(false);
  const [hlywoneallowed, setHLYWoneAllowed] = useState(false);
  const [hlyhlyjewallowed, setHLYHLYJEWAllowed] = useState(false);
  const [hlyhlyhlyallowed, setHLYHLYHLYAllowed] = useState(false);

  useEffect(() => {
    const web3 = new Web3(window.ethereum);

    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function () {
        // Time to reload your interface with account!
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts);
        console.log(accounts);
        // window.location.reload();
      });
    }
    listenMMAccount();

    // HLY 0x8D760497554eecC3B9036fb0364156ef2F0D02BC
    // MasterChef 0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78
    // HLY-USDC LP 0x387d00b1c74e60e7627b7048818372b1b4ec2e3f
    // HLY-ONE LP 0x3e478ed607f79a50f286a5a6ce52a049897291b2
    const BLOCKS_PER_YEAR = 15768000 * 1e18;

    const priceFeed = new web3h.eth.Contract(
      priceOracleABI,
      "0x9bA42cbB93Ff32A877cd9a62eb167Bf92e425668"
    );

    async function loadHLYUSDC() {
      try {
        // TODO
        // find out way to call these few lines (up to *HERE*)
        // externally so code is not repeated
        // need a way to initialise accounts before calling these async loadHLYUSDC()s
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        var modacct = account.slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        await window.ethereum.send("eth_requestAccounts");
        // ------- *HERE* -------

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

        var hlyusdcbal = await lptoken.methods.balanceOf(account).call();

        var hlybal = await hlytoken.methods.balanceOf(account).call();

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
          .userInfo(0, account)
          .call();

        var HLYUSDCstakedwei = web3.utils.fromWei(
          HLYUSDCstaked.amount,
          "ether"
        );

        var HLYUSDCstakedusdc =
          (hlyliquid / hlyusdctotallptoken) * HLYUSDCstakedwei * 1e18;

        var HLYUSDCpending = await masterChef.methods
          .pendingHLY(0, account)
          .call();

        var HLYUSDCpendingwei = HLYUSDCpending / 1e18;

        var hlytotalsupply = await hlytoken.methods.totalSupply().call();

        var HLYmcap = (hlytotalsupply / 1e18) * hlyusdclpwei;

        var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];

        function abbreviateNumber(number) {
          // what tier? (determines SI symbol)
          var tier = (Math.log10(Math.abs(number)) / 3) | 0;

          // if zero, we don't need a suffix
          if (tier === 0) return number;

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

    async function loadHLYONE() {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        var modacct = account.slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        await window.ethereum.send("eth_requestAccounts");

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

    async function loadHLYJEWEL() {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        var modacct = account.slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        await window.ethereum.send("eth_requestAccounts");

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

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        // hlyusdclpHLYJEW = 0.000000748 lp tokens = 1 one

        var hlyusdcbalHLYJEW = await lptokenHLYJEW.methods
          .balanceOf(account)
          .call();

        var hlyusdcformatHLYJEW = web3.utils.fromWei(hlyusdcbalHLYJEW, "ether");

        var hlyusdcliquid = await hlytoken.methods
          .balanceOf("0x7b886d19e5ee9e3188eb29037de21dce944ae0ef")
          .call();

        var hlyusdctotallptokenHLYJEW = await lptokenHLYJEW.methods
          .totalSupply()
          .call();

        // get total lp value

        // console.log(hlyusdcliquid/1e18 * HLYPrices * 2)

        // console.log(liquidcalc);

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

    async function loadHLYPool() {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        var modacct = account.slice(0, 15) + "...";
        document.getElementById("account").innerHTML = modacct;

        await window.ethereum.send("eth_requestAccounts");

        // HLY Pool
        const lptokenHLYHLY = new web3h.eth.Contract(
          erc20ABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const masterChefHLYHLY = new web3h.eth.Contract(
          masterChefABI,
          "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
        );

        const oneprice =
          (await priceFeed.methods.getLatestONEPrice().call()) / 1e8;

        const holyprice = await priceFeed.methods
          .getLatestTokenPrice("0x3e478ed607f79a50f286a5a6ce52a049897291b2", 1)
          .call();

        var HLYPrices = (oneprice / (holyprice / 1e18)).toFixed(5);

        var hlyusdcbalHLYHLY = await lptokenHLYHLY.methods
          .balanceOf(account)
          .call();

        var hlyusdcformatHLYHLY = hlyusdcbalHLYHLY / 1e18;

        var hlyusdcliquidHLYHLY = await lptokenHLYHLY.methods
          .balanceOf("0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        var hlyliquidHLYHLY = (hlyusdcliquidHLYHLY / 1e18) * HLYPrices;

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
          .userInfo(8, account)
          .call();

        var HLYUSDCstakedweiHLYHLY = web3.utils.fromWei(
          HLYUSDCstakedHLYHLY.amount,
          "ether"
        );

        var HLYUSDCstakedusdcHLYHLY = HLYUSDCstakedweiHLYHLY * HLYPrices;

        var HLYUSDCpendingHLYHLY = await masterChefHLYHLY.methods
          .pendingHLY(8, account)
          .call();

        var HLYUSDCpendingweiHLYHLY = HLYUSDCpendingHLYHLY / 1e18;

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
      try {
        await window.ethereum.send("eth_requestAccounts");

        const lpt = new web3h.eth.Contract(
          lpABI,
          "0x387d00b1c74e60e7627b7048818372b1b4ec2e3f"
        );

        const allowed = await lpt.methods
          .allowance(account, "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowed > 0) {
          setHLYUSDCAllowed(true);
        }

        const lpt2 = new web3h.eth.Contract(
          lpABI,
          "0x3e478ed607f79a50f286a5a6ce52a049897291b2"
        );

        const allowedone = await lpt2.methods
          .allowance(account, "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedone > 0) {
          setHLYOneAllowed(true);
        }

        const lpt5 = new web3h.eth.Contract(
          lpABI,
          "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a"
        );

        const allowedwone = await lpt5.methods
          .allowance(account, "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedwone > 0) {
          setHLYWoneAllowed(true);
        }

        const lpt8 = new web3h.eth.Contract(
          lpABI,
          "0x7b886d19e5ee9e3188eb29037de21dce944ae0ef"
        );

        const allowedhlyjew = await lpt8.methods
          .allowance(account, "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedhlyjew > 0) {
          setHLYHLYJEWAllowed(true);
        }

        const lpt9 = new web3h.eth.Contract(
          lpABI,
          "0x8D760497554eecC3B9036fb0364156ef2F0D02BC"
        );

        const allowedhlyhly = await lpt9.methods
          .allowance(account, "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78")
          .call();

        if (allowedhlyhly > 0) {
          setHLYHLYHLYAllowed(true);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadHLYUSDC();
    loadHLYONE();
    loadHLYJEWEL();
    loadHLYPool();
    allowance();

    const interval = setInterval(loadHLYUSDC, 10000);
    const interval3 = setInterval(loadHLYONE, 10000);
    const interval4 = setInterval(loadHLYJEWEL, 10000);
    const interval5 = setInterval(loadHLYPool, 10000);
    const interval2 = setInterval(allowance, 25000);
    return () =>
      clearInterval(interval, interval2, interval3, interval4, interval5);
  }, [account, web3h.eth.Contract]);

  const loadAll = () => {
    this.loadHLYUSDC();
    this.loadHLYONE();
    this.loadHLYJEWEL();
    this.loadHLYPool();
  };

  async function approve(e, token) {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    const erc20 = new web3.eth.Contract(erc20ABI, token);

    erc20.methods
      .approve(
        "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78",
        "1000000000000000000000000000"
      )
      .send({ from: account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        loadAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const depositAmount = (web3, amount, pid) => {
    let depositAmt = 0;
    if (pid === 3) {
      depositAmt = web3.utils.toWei(amount, "gwei") / 10;
    } else if (pid === 5) {
      depositAmt = web3.utils.toWei(amount, "gwei") / 1000;
    } else {
      depositAmt = web3.utils.toWei(amount, "ether");
    }

    return depositAmt;
  };

  async function stake(e, pid, amount) {
    e.preventDefault();

    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    console.log(web3.utils.toWei(amount, "ether"));

    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    masterChef.methods
      .deposit(pid, depositAmount(web3, amount, pid))
      .send({ from: account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        loadAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function withdraw(e, pid, amount) {
    e.preventDefault();

    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");
    console.log(web3.utils.toWei(amount, "ether"));

    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    masterChef.methods
      .deposit(pid, depositAmount(web3, amount, pid))
      .send({ from: account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        loadAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function claim(e, pid) {
    e.preventDefault();

    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    masterChef.methods
      .deposit(pid, 0)
      .send({ from: account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        loadAll();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function harvestAll(e) {
    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.send("eth_requestAccounts");

    const masterChef = new web3.eth.Contract(
      masterChefABI,
      "0xEBBDc5c850dBb0B0894FE13b0F76A7C7Ac431e78"
    );

    masterChef.methods
      .harvestAll()
      .send({ from: account })
      .once("receipt", (receipt) => {
        console.log(receipt);
        loadAll();
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
            alt=""
            src="/hlyusdc.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>

        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance:{" "}
            <span id="available">{HLYUSDCBal || loadingMsg}</span>
            <br />
            Staking:{" "}
            <span id="availablestaked">{HLYUSDCStaked || loadingMsg}</span>
            <br />
            Earned: {HLYUSDCpending || loadingMsg}
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
              rel="noreferrer"
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
            alt=""
            src="/hlyone.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>

        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance:{" "}
            <span id="available">{HLYONEBal || loadingMsg}</span>
            <br />
            Staking:{" "}
            <span id="availablestaked">{HLYONEStaked || loadingMsg}</span>
            <br />
            Earned: {HLYONEpending || loadingMsg}
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
              rel="noreferrer"
            >
              Get HLY-ONE 🔗
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
            alt=""
            src="/wone.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>

        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance:{" "}
            <span id="available">{HLYWONEBal || loadingMsg}</span>
            <br />
            Staking:{" "}
            <span id="availablestaked">{HLYWONEStaked || loadingMsg}</span>
            <br />
            Earned: {HLYWONEpending || loadingMsg}
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
            <a href={dfkMarketplace} target="_blank" rel="noreferrer">
              Get wONE 🔗
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
            alt=""
            src="/hlyjewel.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>

        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance:{" "}
            <span id="available">{HLYHLYJEWBal || loadingMsg}</span>
            <br />
            Staking:{" "}
            <span id="availablestaked">{HLYHLYJEWStaked || loadingMsg}</span>
            <br />
            Earned: {HLYHLYJEWpending || loadingMsg}
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
              rel="noreferrer"
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
            alt=""
            src="/hly.png"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              marginBottom: "-8px",
            }}
          />
        </h2>

        <div>
          <p
            style={{
              backgroundColor: "#111",
              padding: "15px",
              borderRadius: "13px",
            }}
          >
            Available Balance:{" "}
            <span id="available">{HLYHLYHLYBal || loadingMsg}</span>
            <br />
            Staking:{" "}
            <span id="availablestaked">{HLYHLYHLYStaked || loadingMsg}</span>
            <br />
            Earned: {HLYHLYHLYpending || loadingMsg}
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
            <a href={dfkMarketplace} target="_blank" rel="noreferrer">
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
              {HLYLiquid !== undefined &&
              HLYONELiquid !== undefined &&
              HLYWONELiquid !== undefined &&
              HLYHLYJEWLiquid !== undefined &&
              HLYHLYHLYLiquid !== undefined
                ? `$${(
                    parseInt(HLYLiquid) +
                    parseInt(HLYONELiquid) +
                    parseInt(HLYWONELiquid) +
                    parseInt(HLYHLYJEWLiquid) +
                    parseInt(HLYHLYHLYLiquid)
                  ).toLocaleString("en", {
                    style: "decimal",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}`
                : loadingMsg}
            </span>
          </div>
          <div className="col span_1_of_3">
            <span style={{ float: "left" }}>HLY Price</span>
            <br />
            <span
              style={{ float: "right", fontSize: "34px", fontWeight: "100" }}
            >
              {HLYPrice ? `$${HLYPrice}` : loadingMsg}
            </span>
          </div>
          <div className="col span_1_of_3">
            <span style={{ float: "left" }}>Market Cap</span>
            <br />
            <span
              style={{ float: "right", fontSize: "34px", fontWeight: "100" }}
            >
              {HLYmcap ? `$${HLYmcap}` : loadingMsg}
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
            {grailQuestRow(
              openModal,
              "/hlyusdc.png",
              "HLY-USDC",
              HLYUSDCAPR,
              HLYLiquid,
              HLYUSDCStakedPrice,
              HLYUSDCpending
            )}

            {grailQuestRow(
              openModalHLYONE,
              "/hlyone.png",
              "HLY-ONE",
              HLYONEAPR,
              HLYONELiquid,
              HLYONEStakedPrice,
              HLYONEpending
            )}

            {grailQuestRow(
              openModalHLYHLYJEW,
              "/hlyjewel.png",
              "HLY-JEWEL",
              HLYHLYJEWAPR,
              HLYHLYJEWLiquid,
              HLYHLYJEWStakedPrice,
              HLYHLYJEWpending
            )}

            {grailQuestRow(
              openModalHLYHLY,
              "/hly.png",
              "HLY",
              HLYHLYHLYAPR,
              HLYHLYHLYLiquid,
              HLYHLYHLYStakedPrice,
              HLYHLYHLYpending
            )}
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
              {HLYBal || loadingMsg}
            </span>
            <br />
            <span style={{ fontSize: "21px", fontWeight: "100" }}>
              {HLYBal !== undefined
                ? `≈$${(HLYHLYHLYBal * HLYPrice).toLocaleString("en", {
                    style: "decimal",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}`
                : loadingMsg}
            </span>
          </div>
        </div>

        <div class="col2 span_1_of_2">
          <div align="center" style={{ marginTop: "20px" }}>
            <h3 style={{ marginBottom: "-15px" }}>HLY Earnings</h3>
            <br />
            <span style={{ fontSize: "31px", fontWeight: "100" }}>
              {HLYUSDCpending !== undefined &&
              HLYONEpending !== undefined &&
              HLYWONEpending !== undefined &&
              HLYHLYJEWpending !== undefined &&
              HLYHLYHLYpending !== undefined
                ? `≈${(
                    parseFloat(HLYUSDCpending) +
                    parseFloat(HLYONEpending) +
                    parseFloat(HLYWONEpending) +
                    parseFloat(HLYHLYJEWpending) +
                    parseFloat(HLYHLYHLYpending)
                  ).toFixed(4)}`
                : loadingMsg}
            </span>
            <br />
            <span style={{ fontSize: "21px", fontWeight: "100" }}>
              {HLYUSDCpending !== undefined &&
              HLYONEpending !== undefined &&
              HLYWONEpending !== undefined &&
              HLYHLYJEWpending !== undefined &&
              HLYHLYHLYpending !== undefined
                ? `≈$${(
                    (
                      parseFloat(HLYUSDCpending) +
                      parseFloat(HLYONEpending) +
                      parseFloat(HLYWONEpending) +
                      parseFloat(HLYHLYJEWpending) +
                      parseFloat(HLYHLYHLYpending)
                    ).toFixed(4) * HLYPrice
                  ).toLocaleString("en", {
                    style: "decimal",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  })}`
                : loadingMsg}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farms;
