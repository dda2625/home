function fixNetworkTime(str: string) {
    
    return str.split('T')[0]+" "+(str.split('T')[1]).split('.')[0]
}
export default fixNetworkTime
