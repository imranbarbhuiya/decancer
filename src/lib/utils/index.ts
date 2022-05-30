export const isAscii = (str: string) => /^[\x00-\x7F]*$/.test(str);
export const isAlnum = (char: string) => /^[a-zA-Z0-9]$/.test(char);
