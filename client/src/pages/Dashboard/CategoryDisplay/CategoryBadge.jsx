import { SiYourtraveldottv } from 'react-icons/si'
import { MdDining, MdLocalGroceryStore } from 'react-icons/md'
import { FaGasPump } from 'react-icons/fa'

// const allCategoryBadges = [{MdDining}, MdLocalGroceryStore, SiYourtraveldottv, FaGasPump]
const allCategoryBadges = [
  {
    category: 'dining',
    icon: MdDining,
    action: null,
  },
  {
    category: 'grocery',
    icon: MdLocalGroceryStore,
    action: null,
  },
  {
    category: 'travel',
    icon: SiYourtraveldottv,
    action: null,
  },
  {
    category: 'gas',
    icon: FaGasPump,
    action: null,
  },
]

const CategoryBadge = ({ handleSortCategory }) => {
  return (
    <div className="text-gray-50 flex flex-row mx-auto justify-around my-5">
      {/*/!*travel*!/*/}
      {/*<SiYourtraveldottv className=""/>*/}
      {/*/!* groceries*!/*/}
      {/*<MdLocalGroceryStore />*/}
      {/*/!* Dining*!/*/}
      {/*<MdDining />*/}
      {/*/!*Gas*!/*/}
      {/*<FaGasPump />*/}
      {allCategoryBadges.map((ele, idx) => (
        <div key={idx} className="mx-auto ">
          <button type="button" onClick={(e) => console.log(e)}>
            <ele.icon className="text-blue-500 w-10 h-10" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default CategoryBadge
