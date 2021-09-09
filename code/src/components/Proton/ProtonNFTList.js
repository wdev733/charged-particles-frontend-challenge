import React from 'react';
import Grid from '@material-ui/core/Grid';

import ProtonNFT from './ProtonNFT';

const ProtonNFTList = ({data}) => {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={4} md={3} key={`proton-nft-${item.id}`}>
          <ProtonNFT data={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProtonNFTList;
