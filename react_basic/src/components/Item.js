
import PropTypes from 'prop-types';
import './Item.css'

//แบบหรู
const Item = (props) => {
    const {title,amount}=props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    return (
        <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span></li>
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item;

//แบบ 1
// const Item = ({title,amount}) => {
//     return (
//         <li >{title} <span>{amount}</span></li>
//     );
// }
// }
// export default Item;

//แบบเก่า
// const Item = (props) => {
    
//     return (
//         <li >{props.title} <span>{props.amount}</span></li>
//     );
// }
// export default Item;