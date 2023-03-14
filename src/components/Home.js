import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import Particle from './Particle';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="overflow-hidden bg-gray-100 relative z-20 text-white-100 font-spartan">

            {/* menu */}
            <div className=' opacity-1'>

                <div className='container mx-auto lg:px-20 px-5 flex items-center justify-between py-3'>

                    <a href='/'>
                        <img src={logo} alt='logo' className='w-24' />
                    </a>

                    <button className='py-2 px-8 bg-btn-2 font-semibold text-lg rounded-md transition hover:scale-125'>
                        Connect
                    </button>
                </div>

            </div>

            <div className='container mx-auto lg:px-20 px-5'>
                <Particle />

                <div className='flex flex-col items-center justify-center lg:py-20 py-8'>

                    <div className='grid md:grid-cols-2 grid-cols-1 md:grid-row-2 grid-rows-1 gap-6 items-center justify-center text-center'>

                        <div className='bg-btn-1 p-6 lg:w-96 w-72 space-y-4'>
                            <p className='font-semibold text-xl'>
                                Total Stakers
                            </p>

                            <p className='font-bold text-3xl'>
                                14
                            </p>
                        </div>

                        <div className='bg-btn-2 p-6 lg:w-96 space-y-4'>
                            <p className='font-semibold text-xl'>
                                Total Staked
                            </p>

                            <p className='font-bold text-3xl'>
                                2521562.309
                            </p>
                        </div>

                        <div className='bg-btn-2 p-6 lg:w-96 space-y-4'>
                            <p className='font-semibold text-xl'>
                                Total Withdrawn
                            </p>

                            <p className='font-bold text-3xl'>
                                0.000
                            </p>
                        </div>

                        <div className='bg-btn-1 p-6 lg:w-96 space-y-4'>
                            <p className='font-semibold text-xl'>
                                Contract Balance
                            </p>

                            <p className='font-bold text-3xl'>
                                2521562.309
                            </p>
                        </div>


                    </div>

                    <div className='lg:w-7/12 p-5 bg-btn-1 my-12'>

                        <img src={logo} alt='logo' className='w-32 flex mx-auto' />

                        <p className='text-center pb-5'>
                            Calculate your $SnypaticAi depending on staked amount and your lock time.
                        </p>

                        <div className="py-4 px-5 bg-btn-2 flex items-center justify-between rounded-md">
                            <input type="email" placeholder="Stake Amount" id="email" className="bg-transparent focus:ring-0 focus:outline-none text-blue-100" />
                            <button className="text-white-100">Max</button>
                        </div>

                        <p className='text-4xl mt-2 text-center'>+</p>

                        <div className='p-3 bg-btn-2'>

                            <p className='text-center pb-5 text-xl'>
                                Lock Tokens For
                            </p>

                            <hr className='line flex mx-auto mb-8'></hr>

                            <div className="flex items-center justify-center gap-x-6 rounded-md gap-2">
 
                                {/* <button className="btn-shadow xl:px-8 px-2 py-2 text-center">7 Days</button>

                                <button className="btn-shadow xl:px-8 px-2 py-2 text-center">14 Days</button> */}

                                <button className="btn-shadow xl:px-8 px-2 py-2 text-center">30 Days</button>

                                <button className="btn-shadow xl:px-8 px-2 py-2 text-center">50 Days</button>

                                <button className="btn-shadow xl:px-8 px-2 py-2 text-center">60 Days</button>

                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 my-2 flex mx-auto">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>

                            <div className="py-4 px-5 bg-btn-2 flex items-center justify-between rounded-md">
                                <input type="email" placeholder="0" readOnly id="email" className="bg-transparent focus:ring-0 focus:outline-none placeholder:text-white-100" />
                                <button className="text-white-100">
                                $SnypaticAi</button>
                            </div>

                            <button className="btn-shadow px-8 py-2 text-center w-44 flex mx-auto items-center justify-center mt-12">60 Days</button>

                        </div>
                    </div>

                    <div className='text-center'>
                        <p className='text-center pb-5 text-3xl font-bold'>
                            Your Stakes
                        </p>

                        <hr className='line flex mx-auto mb-8'></hr>
                    </div>

                    <div className='lg:w-9/12 w-full bg-btn-1 mt-8'>
                        <div className='p-5'>

                            <table className=''>
                                <thead className='table-header-group'>
                                    <tr className='flex flex-wrap justify-between items-center text-center xl:gap-x-20 gap-x-2 font-work'>
                                        <th className='sm:text-xl text-sm font-normal table-cell'>
                                            AMOUNT
                                        </th>

                                        <th className='sm:text-xl text-sm font-normal table-cell'>
                                            AMOUNT Due
                                        </th>

                                        <th className='sm:text-xl text-sm font-normal table-cell'>
                                            WITHDRAWAL TIME
                                        </th>

                                        <th className='sm:text-xl text-sm font-normal table-cell'>
                                            UNSTAKE
                                        </th>

                                        <th className='sm:text-xl text-sm font-normal table-cell'>
                                            WITHDRAWAL
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <hr></hr>

                        <p className='text-xl text-center font-normal my-5'>
                            You have no staking history yet
                        </p>
                    </div>
                </div>
            </div>

        </div >

    )
}
