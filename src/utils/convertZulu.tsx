function convertZulu(time: string) {
    const outputString = (time).split(" ")[1].substring(0, 5) + "Z";
    return outputString
}

export default convertZulu