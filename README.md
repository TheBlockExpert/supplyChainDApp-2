# Coffee Authenticity and Handling Tracker

This repository containts an Ethereum DApp that demonstrates the _Supply Chain flow of Coffee_ from coffee farmers, to coffee distributors, to retailers and ultimately end consumers. Farmers harvest, process, pack, and sell coffee grains, distributors buy from farmers and ship to retailers, which in term receive and ultimately consumers buy. For more on the the actors, states, and activities check the UML diagrams in the UML folder.

Solidity Contract are deployed in:
__Contract Address:__ 0xad43Cc2b214c1a6fc1FC5aEe123Ed79bff96Bb17
__TX Hash:__ 0x3df90e3fbd0f065eb30efec7d18514b9a15a5fa82fd4a0298f2e05979d459d34
__Deployed by:__ 0x27d8d15cbc94527cadf5ec14b69519ae23288b95

### Libraries
  - npm v. 6.4.1
  - truffle v. 4.1.15
  - truffle-hdwallet-provider v. 1.0.5

### IPFS

Currently the project's source files — html, css, js, media files — are not hosted on IPFS.
This is a To-Do. 

### Steps

To deploy locally:
1. Make sure you have installed ganache-cli, Truffle, and MetaMask extension enabled in your browser.
2. Run `npm install`
3. Run a local ethereum network with `ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"`
4. Run `truffle compile`, `truffle migrate`, and `truffle test`. Verify there are no errors and all tests passed. 
5. In a separate terminal window, run the dapp by `npm run dev`.
```

## Built With

* [Ethereum/Solidity](https://www.ethereum.org/)
* [Truffle Framework](http://truffleframework.com/)
* [Ganache-cli](https://truffleframework.com/ganache)

