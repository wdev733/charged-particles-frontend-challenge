import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/charged-particles/kovan-universe",
  cache: new InMemoryCache(),
});

export const getProtonNFTs = async () => {
  const result = await client.query({
    query: gql`
          {
            protonNFTs(first: 20) {
              id
              tokenId
              owner
              creator
              metadataUri
              particleType
              creatorAnnuity
              salePrice
              lastSalePrice
              resaleRoyalties
              resaleRoyaltiesRedirect
              name
              description
              external_url
              animation_url
              youtube_url
              icon
              image
              thumbnail
              symbol
              decimals
              background_color
              attributes {
                name
                value
              }
            }
          }
        `,
  });
  return result;
};
