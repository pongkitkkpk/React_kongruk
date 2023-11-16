import { useState, useEffect } from "react";
import Transection from "./components/Transaction"
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Switch(versionเก่า ตอนนี้ใช้ Routes แทน) ถ้า user กรอก path นี้ก็จะทำงานตามชื่อ path
// Route ตั้งชื่อเส้นทางว่าชื่ออะไร
// Likn url

function App() {
  //ข้อมูลตัวอย่าง ถ้าใช้จริงๆจะเป็น array เปล่าๆ
  // const initData =
  //   [
  //     { id: 1, title: "ทำงาน", amount: 2000 },
  //     { id: 2, title: "ค่าหมาล่า", amount: -4000 },
  //     { id: 3, title: "ค่าเช้าห้อง", amount: -200 },
  //   ];

  const [items, setItems] = useState([])

  const [reportIncome, serReportIncome] = useState(0)
  const [reportExpense, serReportExpense] = useState(0)
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  useEffect(() => {
    const amonuts = items.map(items => items.amount)
    const income = amonuts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expense = (amonuts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1
    serReportIncome(income.toFixed(2))
    serReportExpense(expense.toFixed(2))
  }, [items, reportIncome, reportExpense])
  //reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true)
  //     case "HIDE":
  //       return setShowReport(false)

  //   }
  // }
  // const [result, dispatch] = useReducer(reducer, showReport)

  // const [count, setCount] = useState(0)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD":
  //       return state + action.payload
  //     case "SUB":
  //       return state - action.payload

  //   }
  // }
  // const [result, dispatch] = useReducer(reducer, count)
  return (

    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1>แอพรายรับ-รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />} />
              <Route path="/insert" element={<><FormComponent onAddItem={onAddNewItem} /><Transection items={items} /> </>} />
            </Routes>
          </div>
        </Router>



        {/* {showReport && <ReportComponent />} */
        /* <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}

        {/* <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>เพิ่ม</button>
        <button onClick={() => dispatch({ type: "SUB", payload: 5 })}>ลด</button> */}
      </div>
    </DataContext.Provider>



  )
}
export default App;