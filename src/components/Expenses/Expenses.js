import React,{useState} from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterchangehandler = SelectedYear =>{
        setFilteredYear(SelectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected = {filteredYear} onChangeFilter={filterchangehandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpenseList items = {filteredExpenses}/>
            </Card>
        </div>
    );
}
