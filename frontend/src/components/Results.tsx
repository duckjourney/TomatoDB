import { Image } from '@chakra-ui/react';
import searchImage from '../assets/search.svg';
import AccordionTable from './AccordionTable.tsx';
import { food } from '../utils/typeDeclarations.ts'

function Results({ data }:{data : Array<food>}) {
  return (
    <>
      {data.length === 0 ? (
        <Image src={searchImage} boxSize="40vw" objectFit="contain" />
      ) : (
        <AccordionTable data={data} />
      )}
    </>
  );
}

export default Results;
