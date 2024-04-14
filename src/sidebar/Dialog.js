import profileIcon from '../assets/used/chat-icon.png';
import ChatMenu from './ChatMenu';
import Nav from './Nav';
import { useState } from 'react';



function Dialog() {
	
    return (
    		<>
    			
				
     			<div className='flex gap-2 items-center hover:bg-paleblue rounded p-2 py-1 cursor-pointer'>
     				<div className='avatar online'>
     					<div className='w-12 rounded-full'>
     						<img
    							src={profileIcon}
    							alt='user avatar'
    						/>
    					</div>
     				</div>

					
     				<div className='flex flex-col'>
     					<div className=''>
     						<p className='flex gap-3 justify-between font-bold text-darkgrey'>Бот</p>
							<p className='flex pt-1 text-center'>Привет!</p>
							
     					</div>
     				</div>
					 <div className=''>
						<div className='flex justify-center px-3 text-base tracking-wide text-center text-white whitespace-nowrap bg-red-500 rounded-2xl max-w-[40px]'>1</div>
					</div>
     			</div>
    
     			
     		</>
     	);
     };
     export default Dialog;


	 
	 
