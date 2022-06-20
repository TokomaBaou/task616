import "./styles.css";

export const App = () => {
  const getCount = (str: string) => {
    let vowelsCount = 0;
    vowelsCount = (str.match(/[aeiou]/gi) || []).length;
    return vowelsCount;
  };
  getCount("abrakatabura");

  // let number = 7;
  const even_or_odd = (number: number) => {
    return number % 2 ? "Odd" : "Even";
  };

  interface Obj {
    a: number;
    b: number;
    c: number;
  }
  const obj: Obj = {
    a: 3,
    b: 4,
    c: 5
  };
  const setReserach = Object.keys(obj).reduce(
    (researchResult, key) => ({
      ...researchResult,
      [key]: obj[key] * 2
    }),
    {}
  );

  const setReserachList = Object.keys(obj).map(
    (researchResult) => obj[researchResult] * 2
  );

  console.log(setReserach);
  console.log(setReserachList);
  // a:researchResult.a,
  // b:researchResult.b,
  // c:researchResult.c
  // const setData = () => {
  //   researchResult.
  // }
  // return setData

  return (
    <div className="App">
      {console.log(getCount("abrakatabura"))}
      {console.log(even_or_odd(7))}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
