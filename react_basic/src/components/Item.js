
import PropTypes from 'prop-types';
//แบบหรู
const Item = (props) => {
    const {title,amount}=props
    return (
        <li >{title} <span>{amount}</span></li>
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