import { useState } from 'react';
import './App.css';
import Card from './Ui/Card/Card';
import Header from './Ui/Header/Header';
import Wrapper from './Components/Wrapper/Wrapper';
import classes from './Ui/Global.module.css'
import Button from './Components/Button/Button';
import Textitem from './Components/Textitem/Textitem';


const App = () => {
  const [numbers,setNumbers] = useState([]);
  const [newNumberId, setNewNumberId] = useState(1)

  const addRandomNUmber = () => {
    const newRandomNumber = {
      value: Math.ceil(Math.random() * 1000),
      id: newNumberId
    };
    setNumbers(numbers.concat(newRandomNumber));
    setNewNumberId(newNumberId + 1)
  }

  const sortNumbers = () => {
    setNumbers([].concat(numbers.sort((itemFirst,itemSecond) => itemFirst.value - itemSecond.value)))
  }

  const deleteItem = (id) => {
      setNumbers(numbers.filter(number => number.id !== id))
  }

  return (
    <Wrapper>
      <Header className={classes['header-block']}>
        <Button onClick={addRandomNUmber} className={classes['header-block__button']}> Add Number </Button>
        <Button onClick={sortNumbers} className={classes['header-block__button']}> Sort Numbers </Button>
      </Header>
      <Card className={classes['main-block']}>
           {
            numbers.map(number => {
              return (
                <Textitem className={classes['main-block__item']} key={number.id}>
                  <Button className={classes['delete-item']} onClick={() => deleteItem(number.id)}>x</Button>
                  {number.value}
                </Textitem>
              )
            })
           }
      </Card>
    </Wrapper>
  ) 
}

export default App