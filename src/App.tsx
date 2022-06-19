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
  return (
    <div className="App">
      {console.log(getCount("abrakatabura"))}
      {console.log(even_or_odd(7))}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
