
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

const App=()=> {
  const expenses=[
    {
      id:1,
      title:'Car Insurances',
      amount:295,
      date:new Date(2022,11,28),
    },
    {
      id:2,
      title:'Paper',
      amount:5,
      date:new Date(2022,11,29),
    },
    {
      id:3,
      title:'Beer',
      amount:10,
      date:new Date(2022,11,23),
    },
    {
      id:4,
      title:'Phone',
      amount:500,
      date:new Date(2022,11,28),
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}


export default App;
