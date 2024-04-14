import Finder from '../assets/used/finder.webp'
function SearchInput(){
    	return (
     		<form className='flex gap-4 p-4'>
     			<input type='text' placeholder='Search…' className='input input-bordered bg-paleblue max-w-[200px] min-h-[50px] rounded-full text-manatee text-center' />
     			<button type='submit' className='btn btn-circle'>
     				<img src={Finder} alt="" className='w-6 h-6' />
     			</button>
    		</form>
     	);
     };
    export default SearchInput;