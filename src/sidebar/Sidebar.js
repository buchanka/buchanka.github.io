import MyDialogs from "./Dialogs";

import SearchingInput from "./SearchInput";

function Sidebar(){
 	return (
 		<div className='flex flex-col '>
 			<SearchingInput />
 			<div className='border-b'></div>
 			<MyDialogs />
		</div>
 	);
 };
 export default Sidebar;