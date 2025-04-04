import MenuItem from './MenuItem';

function MenuList({ foodItems }) {

  return (
    <>
    {foodItems.map((menuItem)=> 
    <MenuItem menu={menuItem} key={menuItem.id}
    />)}
   
          </>
  );
}

export default MenuList;