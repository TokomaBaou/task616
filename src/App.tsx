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

  //仕組み
  // 検索条件が全て空の場合に警告メッセージを表示する
  // if (
  //   !(Object.keys(values) as (keyof SearchInputState["form"])[]).some((key) =>
  //     Boolean(values[key])
  //   )
  // )

  [...Array(50)].map((number: any, index: any) => {
    return ({ id: index + 1, no: index + 1, category: '電気学会 電磁環境研究会', title: `サンプル題目${index + 1}`, date: '2021/10/10' })
    })

  [...Array(3)].map((number: any, index: any) => {
      return ({ no: index + 1, award: 'XXX賞', name: '成果 太郎, 成果 次郎, 成果 三郎', group: 'YYY法人', date: '2021/10/10' })
    })
  return (
    <div className="App">
      {console.log(getCount("abrakatabura"))}
      {console.log(even_or_odd(7))}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
