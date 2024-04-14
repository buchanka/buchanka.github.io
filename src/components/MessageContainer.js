import MessageInput from "./MessageInput";
import Sidebar from '../sidebar/Sidebar';
import ChatMenu from '../sidebar/ChatMenu';
import Nav from '../sidebar/Nav';
import { useState } from 'react';

function MessageContainer(){
	const [isMenuOpen, setIsMenuOpen] = useState(false);
return (
<div className='md:min-w-[450px] flex flex-col p-4 border border-ashen mb-6 mt-36'>
	<div className="flex h-screen ">
		<div className="w-1/4 h-full border-r">
		<Sidebar/>
		</div>
		
		<div className="w-3/4 max-h-[300px]">
		<div className="absolute end-52 -z-10">
      				<ChatMenu setMenuStatus={setIsMenuOpen} />
      				<Nav isOpen={isMenuOpen} />
    	</div>
			<div className="absolute start-46 bottom-0 w-[900px] border-t">
				<MessageInput />
			</div>
		</div>
	</div>
</div>
 	);
 };
export default MessageContainer;