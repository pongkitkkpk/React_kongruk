import Item from './Item';
import './Transection.css'
import DataContext from '../data/DataContext';
import { useContext } from 'react';


const Transection = (props) => {
    const {items } = props
    const {income,expense}=useContext(DataContext)
    return (
        <div>
        <ul className="item-list">
            {items.map((element) => {
                // The spread operator is used here to pass all properties of 'element' to the 'Item' component.
                return <Item {...element} key={element.id}/>
            })}
        </ul>
        {/* {name} */}
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
        </div>
    );
}

export default Transection;




// แบบเก่า
// import Item from './Item';
// import './Transection.css'
// const Transection=()=>{
//     return(
//         <ul className="item-list">
//             <Item title="ค่ารักษาพยาบาล" amount="-2000"/>
//             <Item title="ค่าหมาล่า" amount="-4000"/>
//             <Item title="ค่ารถ" amount="-200"/>
//             <Item title="ค่าเช้าห้อง" amount="-20"/>
            
//         </ul>
//     );
// }
// export default Transection;