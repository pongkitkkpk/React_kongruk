
import PropTypes from 'prop-types';
import './Item.css'

//แบบหรู
const Item = (props) => {
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const {title,amount}=props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    return (
        <li className={status}>{title} <span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
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