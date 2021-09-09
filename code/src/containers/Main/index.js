import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useWallet } from "use-wallet";

import { useFetchProtonNFTs } from '../../hooks';

import ProtonNFTList from '../../components/Proton/ProtonNFTList';
import MintFormDialog from '../../components/MintFormDialog';

const Main = () => {
  const protonNFTs = useFetchProtonNFTs();

  const [open, setOpen] = React.useState(false);

  const { account, connect } = useWallet();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box m={3} display='flex' justifyContent='flex-end'>
        {account && <Button variant="contained" size='large' color='primary' onClick={(e) => handleClickOpen()}>MINT NEW</Button>}
        {!account && <Button variant="contained" size='large' color='primary' onClick={(e) => connect()}>Connect Wallet</Button>}
      </Box>
      <Box m={3}>
        {protonNFTs.length > 0 && (
          <ProtonNFTList data={protonNFTs} />
        )}
      </Box>
      <MintFormDialog
        open={open}
        onClose={() => handleClose()}
      />
    </>
  )
}

export default Main;
