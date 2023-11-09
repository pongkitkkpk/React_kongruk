import { useState } from "react";
import Transection from "./components/Transaction"
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import './App.css'



function App() {
  // const initData = [];
  //ข้อมูลตัวอย่าง ถ้าใช้จริงๆจะเป็น array เปล่าๆ
  // { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
  // { id: 2, title: "ค่าหมาล่า", amount: 4000 },
  // { id: 3, title: "ค่าเช้าห้อง", amount: 200 },

  const [items, setItems] = useState([])

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }
  return (

    <DataContext.Provider value={
      {
        income:50000,
        expense:-8000
      }
    }>
      <div className="container">
        <h1>แอพรายรับรายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem} />
        <Transection items={items} />
      </div>
    </DataContext.Provider>

  )
}
export default App;