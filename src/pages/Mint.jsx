import React, { Component } from "react";
import { Card } from "reactstrap";
import styles from "./mintStyles.css";
//import { BabelLoading } from "react-loadingg";
//import { HicetnuncContext } from "../context/HicetnuncContext";
//import Menu from "../components/Menu";

const IPFS = require("ipfs-api");
const Buffer = require("buffer").Buffer;


export default class Mint extends Component {
  //static contextType = HicetnuncContext;

  state = {
    fileTitle: "",
    title: "",
    description: "",
    tags: "",
    amount: 0,
    selectedFile: null,
    media: "",
    json: "",
    uploaded: false,
    reveal: false,
    loading: false,
    royalties: 10,
    //name: "",
    //decimals: 0,
    //description: "",
    //creators: [],
    date: "",
    nftCidState: null,
    //Tags
    //currentTagText: "",
    //tags: ["javascript", "javascript"],
    //indexOfTagToDelete: 0,

    //airtficialUri: "",
    //displayUri: "",
    //thumbnailUri: "",
    //isBooleanAmount: "true",
    //shouldPreferSymbol: "true",
  };

  //   handelTag = (e) => {
  //     this.setState({ currentTagText: e.target.value });
  //     if (e.keyCode == 13 && this.state.currentTagText) {
  //       //ES6 version
  //       this.setState({ tags: [...this.state.tags, this.state.currentTagText] });
  //       this.setState({ currentTagText: "" });
  //     } else if (e.keyCode == 32 && this.state.currentTagText) {
  //       this.setState({ tags: [...this.state.tags, this.state.currentTagText] });
  //       this.setState({ currentTagText: "" });
  //     }
  //   };

  //   removeTag(index) {
  //     const newTagArray = this.state.tags;
  //     newTagArray.splice(index, 1);
  //     this.setState({ tags: [...newTagArray] });
  //   }
  handleClick = () => {
    // force a re-render
    this.forceUpdate();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      console.log(this.state)
    );
  };

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files,
      fileTitle: event.target.files[0].name,
    });
  };

  onFileUpload = async (e) => {
    const icon = "ipfs://QmNrhZHUaEqxhyLfqoq1mtHSipkWHeT31LNHb1QEbDHgnc";

    const files = this.state.selectedFile;
    const ipfs = new IPFS({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
    });

    console.log(files);
    console.log(Buffer.from(await files[0].arrayBuffer()));

    // 40mb limit
    if (files[0].size < 100000000) {
      const fileCid =
        "ipfs://" +
        (await ipfs.files.add(Buffer.from(await files[0].arrayBuffer())))[0]
          .hash;
      const nftCid = (
        await ipfs.files.add(
          Buffer.from(
            JSON.stringify({
              name: this.state.title,
              description: this.state.description,
              creators: this.state.creators.replace(/\s/g, "").split(","),
              date: this.state.date,
              tags: this.state.tags.replace(/\s/g, "").split(","),
              symbol: "HNV",
              artifactUri: fileCid,
              displayUri: fileCid,
              //creators: [this.context.address],
              formats: [{ uri: fileCid, mimeType: files[0].type }],
              thumbnailUri: icon,
              decimals: 0,
              isBooleanAmount: true,
              shouldPreferSymbol: false,
            })
          )
        )
      )[0].hash;
      console.log("IPFS url: ", `https://ipfs.io/ipfs/${nftCid}`);
      this.setState({ nftCidState: nftCid });

      // this.context.mint(
      //   this.context.getAuth(),
      //   this.state.amount,
      //   nftCid,
      //   this.state.royalties
      // );
    }
  };
  reveal = () => {
    this.setState({
      reveal: !this.state.reveal,
    });
  };

  render() {
    return (
      <Card style={{ border: 0, marginTop: "17%" }}>
        <input
          type='text'
          name='title'
          onChange={this.handleChange}
          placeholder='NFT Title'
        ></input>
        <input
          type='text'
          name='description'
          onChange={this.handleChange}
          placeholder='NFT Description'
        ></input>
        <input
          type='text'
          name='creators'
          onChange={this.handleChange}
          placeholder='NFT Creators (separated by commas)'
        ></input>
        <input
          type='date'
          name='date'
          onChange={this.handleChange}
          placeholder='NFT Date'
        ></input>
        <input
          type='text'
          name='tags'
          onChange={this.handleChange}
          placeholder='NFT Tags (separated by commas)'
        ></input>
        <label
          style={{
            marginTop: "5%",
            paddingTop: "1.25%",
            paddingBottom: "1.25%",
            borderStyle: "dashed",
            textAlign: "center",
          }}
        >
          Upload NFT
          <input
            style={{ display: "none" }}
            type='file'
            name='file'
            onChange={this.onFileChange}
          />
        </label>
        <br />
        <p>{this.state.fileTitle}</p>
        <button
          style={{ lenght: "100%", cursor: "pointer" }}
          onClick={this.onFileUpload}
        >
          Mint
        </button>
        <br />
        <br />
          <div>{`https://ipfs.io/ipfs/${this.state.nftCid}/`}</div>
        {/* redirect to objkt id */}
        {/* {this.context.op != undefined ? <p>injected operation {this.context.op}</p> : undefined} */}
      </Card>
    );
  }
}
