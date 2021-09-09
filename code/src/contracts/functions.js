import { getGasPrice, getGasFee } from "./index";

export const createProtonForSaleAsync  = async (instance, web3, address, params) => {

  const { creator, receiver, tokenMetaUri, annuityPercent, royaltiesPercent, salePrice } = params;

  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .createProtonForSale(creator, receiver, tokenMetaUri, annuityPercent, royaltiesPercent, salePrice)
    .estimateGas({ from: address });

  return await instance.methods
    .createProtonForSale(creator, receiver, tokenMetaUri, annuityPercent, royaltiesPercent, salePrice)
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: getGasFee(gasLimit),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};