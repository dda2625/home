function AvailabilityDecodeFunc(status: any) {
    if (status === "AVL") {
        return <a title="Available and can be reached on a daily basis" data-tooltip-placement="top" className="bg-[#1a475f] text-sm text-white px-2 py-1 rounded-md  absolute top-0 right-0">AVL</a>
    } else if (status === "OOO") {
        return <a title="Out of Office (longer vacation, 3-6 weeks)" data-tooltip-placement="top" className="bg-[#366694] text-sm text-white px-2 py-1 rounded-md absolute top-0 right-0">OOO</a>
    } else if (status === "DEP") {
        return <a title="Away for more than 2 months" data-tooltip-placement="top" className="bg-[#893333] text-sm text-white px-2 py-1 rounded-md absolute top-0 right-0">DEP</a>
    } else if (status === "VAC") {
        return <a title="Position vacant" data-tooltip-placement="top" className="bg-gray-200 text-sm text-vatsca3 px-2 py-1 rounded-md absolute top-0 right-0">VAC</a>
    }
}

const AvailabilityDecode = (props: {Availability: string}) => {  
    return (
        AvailabilityDecodeFunc(props.Availability)
    )
}
export default AvailabilityDecode;