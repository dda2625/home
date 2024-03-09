import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";

export default function Bookings() {
  return (
    <Table isStriped aria-label="Example static collection table" className="w-full h-full">
      <TableHeader>
        <TableColumn>Station</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Start</TableColumn>
        <TableColumn>End</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>EKCH_A_TWR</TableCell>
          <TableCell><Chip color="primary" radius="sm">Traning</Chip></TableCell>
          <TableCell>18:32z</TableCell>
          <TableCell> </TableCell>
        </TableRow>
        <TableRow key="2">
            <TableCell>EKCH_A_TWR</TableCell>
          <TableCell><Chip color="success" radius="sm" className="text-white">Event</Chip></TableCell>
          <TableCell>18:32z</TableCell>
          <TableCell> </TableCell>
        </TableRow>
        <TableRow key="3">
            <TableCell>EKCH_A_TWR</TableCell>
          <TableCell><Chip color="danger" radius="sm">Exam</Chip></TableCell>
          <TableCell>18:32z</TableCell>
          <TableCell> </TableCell>
        </TableRow>
        <TableRow key="4">
            <TableCell>EKCH_A_TWR</TableCell>
          <TableCell> </TableCell>
          <TableCell>18:32z</TableCell>
          <TableCell> </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
