/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

const Calculator = ({ x, y, operation }) => {

    let calculator = {
      operation: {
        "sum": () => x + y,
        "subtraction": () => x - y,
        "multiplication": () => x * y,
        "division": () => x / y
      }
    }
    if (!['sum', 'multiplication', 'subtraction', 'division'].includes(operation)) {
      console.error('undefined operation');
    } else {
      return calculator.operation[operation]();
    };
  };
  
  console.log(Calculator({
    operation: 'sum',
    x: 1,
    y: 1 }));

  console.log(Calculator({
    operation: 'subtraction',
    x: 5,
    y: 1}));

    console.log(Calculator({
    operation: 'multiplication',
    x: 5,
    y: 5}));

    console.log(Calculator({
        operation: 'division',
        x: 1000,
        y: 5}));