import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

function AccordionTable() {
  return (
    <Accordion
      allowToggle
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minWidth="70vw"
      textAlign="left"
    >
      <AccordionItem>
        <h2>
          <AccordionButton
          minWidth='70vw'
          >
            <Box>Milk, NFS</Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} maxWidth='70vw'>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Category description</Th>
                  <Th>Carbohydrate</Th>
                  <Th>Energy (kcal)</Th>
                  <Th>Fiber (g)</Th>
                  <Th>Protein (g)</Th>
                  <Th>Fat (g)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Milk, reduced fat</Td>
                  <Td>4.83</Td>
                  <Td>52</Td>
                  <Td>0</Td>
                  <Td>3.33</Td>
                  <Td>2.14</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionTable;
