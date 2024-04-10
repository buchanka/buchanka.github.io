import MessageInput from "./MessageInput";
import Messages from "./Messages";
import Sidebar from '../sidebar/Sidebar'

function MessageContainer(){
return (
<div className='md:min-w-[450px] flex flex-col'>
	<div className="flex h-screen">
		<div className="w-1/4 h-full">
		<Sidebar/>
		</div>
		<div className="w-3/4 h-full">
		<Messages />
			<div className="absolute bottom-0 left-0 w-full">
		<MessageInput />
			</div>
		</div>
	</div>
</div>
 	);
 };
export default MessageContainer;