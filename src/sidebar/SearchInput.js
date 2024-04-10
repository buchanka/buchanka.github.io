import Finder from '../assets/used/finder.webp'
function SearchInput(){
    	return (
     		<form className='flex gap-2'>
     			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
     			<button type='submit' className='btn btn-circle text-white'>
     				<img src={Finder} alt="" className='w-6 h-6 outline-none' />
     			</button>
    		</form>
     	);
     };
    export default SearchInput;