import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Image,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

import notFoundImage from "../assets/not_found.svg";
import type { food } from "../declarations";

function AccordionTable({ data }: { data: Array<food> }) {
	if (data.length === 0) {
		return (
			<>
				<div>
					The aliment does not exist in the database. Please check spelling.
				</div>
				<Image
					src={notFoundImage}
					boxSize="37vw"
					objectFit="contain"
					alt="Not found"
				/>
			</>
		);
	}
	return data.map((item: food, index: number) => (
		<Accordion
			allowMultiple
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			minWidth="70vw"
			textAlign="left"
			key={index}
		>
			<AccordionItem>
				<h2>
					<AccordionButton
						textAlign="left"
						minWidth="70vw"
						justifyContent="space-between"
						_expanded={{ bg: "#6c63ff", color: "white" }}
					>
						<Box>{item["Food description"]}</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4} maxWidth="70vw">
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
									<Td>{item["Category description"]}</Td>
									<Td>{item["Carbohydrate (g)"]}</Td>
									<Td>{item["Energy (kcal)"]}</Td>
									<Td>{item["Fiber, total dietary (g)"]}</Td>
									<Td>{item["Protein (g)"]}</Td>
									<Td>{item["Total Fat (g)"]}</Td>
								</Tr>
							</Tbody>
						</Table>
					</TableContainer>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	));
}

export default AccordionTable;
