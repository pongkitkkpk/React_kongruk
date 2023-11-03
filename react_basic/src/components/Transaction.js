
import Item from './Item';
import './Transection.css'
const Transection=()=>{
    const data =[
        {title:"ค่ารักษาพยาบาล",amount:2000},
        {title:"ค่าหมาล่า",amount:4000},
        {title:"ค่าเช้าห้อง",amount:200},
    ]
    return(
        <ul className="item-list">
            {/* <Item title={data[0].title} amount={data[0].amount}/> */}
            {data.map((element)=>{
                // return <Item title={element.title} amount={element.amount}/>
                return <Item {...element} />//ถ้ามีชื่อตัวแปรเหมือนกันนะ Spread Operator
            })}
        </ul>
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