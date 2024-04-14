import Send from '../assets/used/send.webp';
import LoadMedia from '../assets/used/load-media.svg';
import Emoji from '../assets/used/emoji.webp';


function MessageInput() {
return (
 		<form className='px-8 my-8'>
			<div className='w-full flex flex-row'>
 				<input
 					type='text'
 					className='border text-sm rounded-2xl block min-w-[700px] min-h-[50px] p-3 bg-paleblue text-manatee'
 					placeholder='Отправить сообщение'
 				/>


				<div className='flex flex-row gap-2 m-2'>
					<button>
						<img className='max-w-10 max-h-10' src={Emoji} alt=''></img>
					</button>
					<button type='submit'className=''>
						<img className="max-w-8" src={LoadMedia} alt=''></img>
					</button>
 					<button type='submit' className='flex m-2'>
						<img className="max-w-8" src={Send} alt=''></img>
 					</button>
				</div>
				
 			</div>
 		</form>
	);
 };
 export default MessageInput;