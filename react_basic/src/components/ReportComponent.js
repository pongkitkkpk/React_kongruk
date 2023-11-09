import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    return (
        <div>

            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>

            {/* แบบแรก */}
            {/* <DataContext.Consumer>
                {context=><p>รายรับ : {context.income} รายจ่าย : {context.expense}</p>}
            </DataContext.Consumer> */}

        </div>
    );
}

export default ReportComponent