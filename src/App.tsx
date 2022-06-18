import "./styles.css";

export const App = () => {
  const getCount = (str: string) => {
    let vowelsCount = 0;
    vowelsCount = (str.match(/[aeiou]/gi) || []).length;
    return vowelsCount;
  };
  getCount("abrakatabura");
  return (
    <div className="App">
      {console.log(getCount)}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
