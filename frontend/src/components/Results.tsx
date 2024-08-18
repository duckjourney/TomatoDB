import { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';
import searchImage from '../assets/search.svg';
import AccordionTable  from './AccordionTable.tsx';

function Results() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/aliments`);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fecthing data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Image src={searchImage} boxSize="40vw" objectFit="contain" />
      <AccordionTable />
    </>
  );
}

export default Results;
