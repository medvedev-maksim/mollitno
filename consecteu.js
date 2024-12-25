function utcTime() {
    const now = new Date();
    return now.toUTCString();
}

console.log(utcTime());  // Example usage
