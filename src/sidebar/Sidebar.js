import MyDialogs from "./Dialogs";

import SearchingInput from "./SearchInput";

function Sidebar(){
 	return (
 		<div className='border-r border-slate-500 p-4 flex flex-col'>
 			<SearchingInput />
 			<div className='divider px-3'></div>
 			<MyDialogs />
		</div>
 	);
 };
 export default Sidebar;