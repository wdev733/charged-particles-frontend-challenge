import PROTON_NFT_ABI from './abis/proton_nft_abi.json';

const PROTON_NFT_ADDRESS = '0xD4F7389297d9cea850777EA6ccBD7Db5817a12b2';

export const protonNFTContract = (web3) => {
  const address = PROTON_NFT_ADDRESS;
  const abi = PROTON_NFT_ABI;
  const instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance,
  };
};
