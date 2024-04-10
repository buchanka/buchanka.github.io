import Send from '../assets/used/send.webp'

function MessageInput() {
return (
 		<form className='px-8 my-10'>
			<div className='w-full'>
 				<input
 					type='text'
 					className='border text-sm rounded-2xl block w-full p-3  bg-paleblue text-manatee'
 					placeholder='Отправить сообщение'
 				/>
 				<button type='submit' className='absolute flex '>
					<img className="max-w-8" src={Send} alt=''></img>
 				</button>
 			</div>
 		</form>
	);
 };
 export default MessageInput;