import { Image } from '@chakra-ui/react';
import searchImage from '../assets/search.svg';
import AccordionTable from './AccordionTable.tsx';
import type { food } from '../declarations.d.ts';

function Results({
  data,
  userInput,
}: {
  data: Array<food>;
  userInput: string;
}) {
  return (
    <>
      {userInput === '' ? (
        <Image
          src={searchImage}
          boxSize="40vw"
          objectFit="contain"
          alt="Search"
        />
      ) : (
        <AccordionTable data={data} />
      )}
    </>
  );
}

export default Results;
