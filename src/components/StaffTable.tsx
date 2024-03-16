import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const staffteam = [
    {STAFFID: "ACCSCA1",POSITION:"Director",NAME:"Christian Kovanen",EMAIL:"director@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA2",POSITION:"Training Director",NAME:"Simo Pietikäinen",EMAIL:"training-director@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA3",POSITION:"Acting Director of Copenhagen FIR",NAME:"Peter Toft",EMAIL:"denmark@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA4",POSITION:"Director of Norway FIR",NAME:"Krister Larsen",EMAIL:"norway@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA5",POSITION:"Director of Sweden FIR",NAME:"Martin Loxbo",EMAIL:"sweden@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA6",POSITION:"Director of Helsinki FIR",NAME:"Richard Weber",EMAIL:"finland@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA7",POSITION:"Director of Reykjavík CTA",NAME:"Gunnar Gudm",EMAIL:"iceland@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA9",POSITION:"Data Protection Officer",NAME:"Henrik Sønstebø",EMAIL:"dpo@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA11",POSITION:"	Web Services Director",NAME:"Daniel Lange",EMAIL:"web@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA12",POSITION:"Web Services Assistant",NAME:"Thor Høgås",EMAIL:"web@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA13",POSITION:"Web Services Assistant",NAME:"David Mortensen",EMAIL:"web@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA14",POSITION:"Web Services Assistant",NAME:"Markus Nielsen",EMAIL:"web@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA15",POSITION:"Event Coordinator",NAME:"Max Kuhla",EMAIL:"event@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA16",POSITION:"Pilot Training Manager",NAME:"Jere Heiskanen",EMAIL:"pilot-training@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA17",POSITION:"Chief Flight Instructor",NAME:"Arttu Uusi-Kyyny",EMAIL:"pilot-training@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA18",POSITION:"Deputy Chief Flight Instructor",NAME:"Vincent Matsuuke",EMAIL:"pilot-training@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA21",POSITION:"Training Assistant Sweden",NAME:"Håkan Schulz",EMAIL:"training-sweden@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA22",POSITION:"Acting Training Assistant Denmark",NAME:"Kristoffer Michelsen",EMAIL:"training-denmark@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA23",POSITION:"Training Assistant Norway",NAME:"Daniel Lange",EMAIL:"training-norway@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA24",POSITION:"Training Assistant Finland",NAME:"Otto Tuhkunen",EMAIL:"training-finland@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA25",POSITION:"Training Assistant Iceland",NAME:"Kieran Riley",EMAIL:"training-iceland@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA26",POSITION:"Deputy Training Assistant Sweden",NAME:"",EMAIL:"training-sweden@vatsim-scandinavia.org",AVILABILITY:"VAC"},
    {STAFFID: "ACCSCA27",POSITION:"Deputy Training Assistant Denmark",NAME:"	Jakob Ek Jensen",EMAIL:"training-denmark@vatsim-scandinavia.org",AVILABILITY:"AVL"},
    {STAFFID: "ACCSCA28",POSITION:"Deputy Training Assistant Norway",NAME:"Jannik Huttenlocher",EMAIL:"training-norway@vatsim-scandinavia.org",AVILABILITY:"AVL"}
]

export default function App() {
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>STAFF ID</TableColumn>
        <TableColumn>POSITION</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>AVILABILITY</TableColumn>
      </TableHeader>
      <TableBody>
        {staffteam.map((staff) => 
            <TableRow key={staff.STAFFID}>
            <TableCell className="font-semibold">{staff.STAFFID}</TableCell>
            <TableCell>{staff.POSITION}</TableCell>
            <TableCell>{staff.NAME}</TableCell>
            <TableCell><a href={"mailto:"+staff.EMAIL}>{staff.EMAIL}</a></TableCell>
            <TableCell className="font-medium">{staff.AVILABILITY}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
