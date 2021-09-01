import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Button, CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Web3 from "web3";
import CountSlider from "../slider";
import NinjaLogo from "../../assets/ninja.gif";
import { HNVTokenABI } from "../../abis/HNVToken";
const HNVTokenAddress = "0xca8fDC8B1188653099d2e0EDA5A2219E1748764e";
function MintCard() {
  const [tokens, setTokens] = useState(1);
  const handleMint = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const contractInstance = new web3.eth.Contract(
      HNVTokenABI,
      HNVTokenAddress
    );
    const receipt = await contractInstance.methods
      .mint(tokens,"https://ipfs.io/ipfs/QmPvkeg1T7LWUsSB2FmAQo445GVxRFHikydZNFkyJZTeeR/")
      .send({ from: accounts[0] });
    console.log(receipt);
  };
  const handleUpdate = (amount) => {
    setTokens(amount);
  };
  return (
    <div>
      <Card
        style={{
          alignItems: "center",
          marginTop:"100px",
          width: "450px",
          height: "800px",
          "border-radius": "50px",
          background: "#3b3681",
          "box-shadow": "20px 20px 60px #282456,-20px -20px 60px #4e48ac",
        }}
      >
        <CardContent style={{ textAlign: "center", padding: "0px" }}>
          <img
            style={{ height: "500px", width: "450px" }}
            src={NinjaLogo}
            alt="card-images"
          />
          <Typography
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Mint a Ninja!
          </Typography>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "500",
              padding: "10px",
              color: "white",
              textAlign: "center",
              marginBottom: "10px",
            }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            0.08 ETH for each ninja + gas fees ⛽. Recommended to mint many at a
            time (maximum 20) to economize gas fees.
          </Typography>
        </CardContent>

        <CardActionArea style={{ textAlign: "center" }}>
          <CountSlider handleUpdate={handleUpdate} />
          <Button
            style={{
              backgroundColor: "#333",
              borderRadius: "15px",
              color: "white",
              fontSize: "1em",
              fontWeight: "1000",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
            variant="contained"
            size="large"
            onClick={handleMint}
          >
            Mint {tokens} Ninja!
          </Button>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default MintCard;
