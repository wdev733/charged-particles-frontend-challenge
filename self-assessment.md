# Self-Assessment

## Implementation:

### Q) What libraries did you add? What are they used for?
- web3
  To connect the ethereum node.
- use-wallet
  To connect the wallet

### Q) What's the command to start the application locally?
  yarn run start

## General:

### Q) If you had more time, what further improvements or new features would you add?
- I'd like to implement web3modal library 
  Currently, I've used <UseWalletProvider> and set the Kovan network as default.
  I'll add more providers and chains.

- Currently, Async actions are implemented inside the <Component> and I think it's not smart
  If we can implement Redux and saga, we can manage the async actions more comfortably.
  Also, we can manage the global statements also. 

- I've just called the createProtonForSale function with static information.
  We can improve it by using the more complex form (image, name) and ipfs API.

### Q) Which parts did you spend the most time with? What did you find most difficult?
  Actually, I have spent most of time for the folder architecture.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.
  I think, the repository is a quite skeleton :)
  I very appreciate it much if user can more focus to build the core & required functionalties

  Thank you!