import { useEffect, useState } from 'react';
import { fetchData } from '../helpers/functions';

export function useFetchData(endpoint: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(endpoint);
      setData(data);
    }

    getData();
  }, [endpoint]);

  return [data];
}
