import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import web3 from "web3";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const ProtonNFT = ({ data }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Price: ${web3.utils.fromWei(data.salePrice.toString(), "ether")} ETH`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProtonNFT;
