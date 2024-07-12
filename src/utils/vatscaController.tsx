function vatscaController(str: string): boolean {
    const possibleOptions = ['EK', 'EN', 'ES', 'EF','BI']; // List of possible options

    const firstFourChars = str.substring(0, 2); // Get the first four characters of the string

    return possibleOptions.includes(firstFourChars); // Check if the first four characters are in the list of possible options
}

export default vatscaController