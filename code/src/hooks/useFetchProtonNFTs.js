import { useEffect, useState } from 'react';

import { getProtonNFTs } from '../service/graphql';

const useFetchProtonNFTs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProtonNFTs();

      if (result.data && result.data.protonNFTs) {
        setData(result.data.protonNFTs);
      }
    }

    fetchData();
  }, []);

  return data;
}

export default useFetchProtonNFTs;
