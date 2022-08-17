
const ethNetwork = 'https://mainnet.infura.io/v3/c32752a8804145f1ade23b65d7f81aff';

import Web3 from 'web3';
import fetch from 'node-fetch';

import { getAddressesBalances } from 'eth-balance-checker/lib/web3.js';


try {
  const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
  const url = "https://tokenlist.aave.eth.link/";

  async function getBalances() {
const addresses = ["0x50a5942255320acc32EF49892a90Afd31FAE5d0c",
];

var tokens = [] ;

tokens = await fetch(url).then(res => res.json()).then(json => json.tokens);

var tokenAddresses = [ ];
for ( var i=0; i < tokens.length; i++) {
    tokenAddresses[i] = tokens[i].address;
}
tokenAddresses[i] = "0x0000000000000000000000000000000000000000";

getAddressesBalances(web3, addresses, tokenAddresses).then(balances => {
  console.log(JSON.stringify(balances));
  console.log(balances);
  //console.log(web3.utils.fromWei(balances))
});
  }

 getBalances();
}
catch(e) {
  console.log("Connection Error!", e);
}
