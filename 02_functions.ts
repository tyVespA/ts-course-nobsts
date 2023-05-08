//specifying the type: number, avoids the *any type* error

function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// const function

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

// default values

export const addStringsWithDefault = (
  str1: string,
  str2: string = "default"
): string => `${str1} ${str2}`;

// union types (i want 1 parameter to be 1 of a set of types)

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// void functions

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// promise function

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);
