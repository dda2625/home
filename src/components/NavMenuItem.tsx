
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { AirportStandIcon } from "./icons/AirportStandIcon";

export default function App(props:any) {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="solid"
          size="lg"
          radius="none"
          className="text-white bg-transparent hover:bg-transparent text-xl h-20"
        >
          {props.data.lable}
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description" itemClasses={{
                title: ["text-lg font-semibold"]
            }}>
        {props.data.options.map((fields: any) => (
          <DropdownItem
            key={fields.key}
            description={fields.href.includes("http") ? <a href={fields.href} target="_blank">{fields.description}</a> : <a href={fields.href}>{fields.lable}</a>}
            startContent={<AirportStandIcon className={iconClasses} />}
          >
            {fields.href.includes("http") ? <a href={fields.href} target="_blank">{fields.lable}</a> : <a href={fields.href}>{fields.lable}</a>}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
