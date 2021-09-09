import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useWallet } from "use-wallet";

import { getWeb3, Functions, Instances } from '../../contracts';

const initialProtonData = {
  creator: '',
  receiver: '',
  tokenMetaUri: '',
  annuityPercent: 10,
  royaltiesPercent: 10,
  salePrice: 1
}

const MintFormDialog = ({ open, onClose }) => {
  const { account } = useWallet();

  const [nftData, setNftData] = useState(initialProtonData);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setNftData({
      ...nftData,
      creator: account,
      receiver: account
    })
  }, [account]);

  const handleMint = async () => {
    if (loading) {
      return;
    }

    if (!account) {
      return;
    }
  
    setLoading(true);

    const web3 = await getWeb3();
    const proton = Instances.protonNFTContract(web3);

    const tokenId = await Functions.createProtonForSaleAsync(proton.instance, web3, account, {
      ...nftData,
      salePrice: web3.utils.toWei(nftData.salePrice.toString(), "ether")
    });

    console.log('new minted token id', tokenId);

    setLoading(false);
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Create a new Proton NFT</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create a new Proton NFT, please enter the below information. This will be worked only on the Kovan Network!
        </DialogContentText>
        <TextField
          margin="dense"
          label="Creator Address"
          type="text"
          fullWidth
          defaultValue={nftData.creator}
          disabled
        />
        <TextField
          margin="dense"
          label="Receiver Address"
          type="text"
          fullWidth
          defaultValue={nftData.receiver}
          disabled
        />
        <TextField
          margin="dense"
          label="Annuity Percent"
          type="number"
          fullWidth
          defaultValue={nftData.annuityPercent}
          disabled
        />
        <TextField
          margin="dense"
          label="Royalties Percent"
          type="number"
          fullWidth
          defaultValue={nftData.royaltiesPercent}
          disabled
        />
        <TextField
          margin="dense"
          label="Sale Price"
          type="text"
          fullWidth
          defaultValue={`${nftData.salePrice} KETH`}
          disabled
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => onClose()} color="primary">
          Cancel
        </Button>
        <Button onClick={(e) => handleMint()} color="primary" disabled={loading}>
          {loading ? 'Minting...' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MintFormDialog;

