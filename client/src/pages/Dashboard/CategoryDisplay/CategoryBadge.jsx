import {SiYourtraveldottv} from "react-icons/si";
import {MdDining, MdLocalGroceryStore} from "react-icons/md";
import {FaGasPump} from "react-icons/fa";


const CategoryBadge = ({handleSortCategory}) => {
    return (
        <div className="hidden">
            <SiYourtraveldottv /> // travel
            <MdLocalGroceryStore /> // groceries
            <MdDining /> // Dining
            <FaGasPump /> // Gas

        </div>
    );
};

export default CategoryBadge;