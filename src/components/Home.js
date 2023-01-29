import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import top from '../assets/top.png';
import token from '../assets/token.png';
import justice from '../assets/justice.png';
import faq from '../assets/faq.png';
import law from '../assets/law.png';
import p_1 from '../assets/p-1.png';
import p_2 from '../assets/p-2.png';
import p_3 from '../assets/p-3.png';
// import Particle from './Particle';
import Accordion from './Accordion';



export default function Home() {

    const accordionData = [
        {
            title: 'Why US?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
            laborum cupiditate possimus labore, hic temporibus velit dicta earum
            suscipit commodi eum enim atque at? Et perspiciatis dolore iure
            voluptatem.`
        },
        {
            title: 'How to become a part of it?',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
            reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
            quaerat iure quos dolorum accusantium ducimus in illum vero commodi
            pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
            quidem maiores doloremque est numquam praesentium eos voluptatem amet!
            Repudiandae, mollitia id reprehenderit a ab odit!`
        }
    ];

    return (
        <div className="bg-white-100">
            {/* <Particle /> */}

            {/* top section */}

            <div className="lg:px-20 px-5 container mx-auto z-20">
                <Menu />

                <div className="lg:flex block justify-between items-center pt-12">
                    <div className=" lg:w-1/2">
                        <h1 className="text-blue-100 md:text-6xl text-2xl font-semibold leading-10 tracking-wide font-spartan">
                            Welcome to<br></br>
                            <span className="font-extrabold">
                                LAWYER AI
                            </span><br></br>
                            your favourite<br></br>
                            robot lawyer</h1>

                        <div className="font-work flex items-center gap-5 mt-6">
                            <a href="/">
                                <button className="text-white-100 px-6 py-4 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100">
                                    Buy Now
                                </button>
                            </a>
                            <a href="/">
                                <button className="text-purple-100 px-6 py-4 border-2 border-purple-100 rounded-2xl font-semibold hover:bg-purple-100 hover:text-white-100">
                                    CHART
                                </button>
                            </a>

                        </div>
                    </div>

                    <div className="img md:mt-0 mt-12 lg:w-1/2">
                        <img src={top} alt="Logo" />
                    </div>
                </div>

                <img src={justice} alt="" className='lg:flex mx-auto -mb-44 hidden' />
            </div>

            {/* what make us different */}

            <div className=" bg-img">
                <div className="lg:px-20 px-5 py-12 container mx-auto">

                    <div className="lg:flex items-center justify-between">
                        <div className=" lg:w-1/2">
                            <h2 className="text-blue-100 md:text-6xl text-2xl font-semibold leading-10 tracking-wide font-spartan">
                                WHAT<br></br> MAKES US DIFFERENT?
                            </h2>

                        </div>

                        <div className="img lg:mt-0 mt-5 lg:w-1/3">
                            <p className='font-semibold text-gray-100 font-work opacity-40'>
                                LAWYER AI is the pioneering project of 2023 with the aim to change the way how the world works , Many people do not have access to lawyers or cant afford one.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:gap-y-12 gap-y-6 items-center justify-center lg:py-12 py-6">
                        <h1 className="text-blue-100 md:text-5xl text-2xl font-semibold font-spartan">
                            Check out our Smart Contract
                        </h1>

                        <button className="text-white-100 px-6 py-4 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100">
                            VIEW SMART CONTRACT
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-8">
                        <div className="">
                            <h1 className="text-blue-100 md:text-5xl text-2xl font-semibold font-spartan">
                                Tokenomics
                            </h1>

                        </div>

                        <div className="">
                            <img src={token} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:-mt-5">
                <div className="flex flex-wrap justify-center items-center gap-6">

                    <div className="bg-white-100 lg:w-52 border-4 border-seagreen-100 rounded-xl p-5 flex flex-col">
                        <h4 className="text-lg text-blue-100 font-semibold text-left">
                            1 ETH STARTING LP
                        </h4>
                        <p className='text-gray-100 font-work opacity-40 pt-2'>
                            Total Supply:
                            1,000,000,000
                        </p>
                        <button className='flex gap-2 items-center text-blue-50 font-work pt-5'>
                            Whitepaper
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="bg-white-100 lg:w-52 border-4 border-seagreen-100 rounded-xl p-5 flex flex-col">
                        <h4 className="text-xl text-blue-100 font-bold text-left">
                            4% SELL TAX
                        </h4>
                        <p className='text-gray-100 font-work opacity-40 pt-2'>
                            Total Supply:
                            1,000,000,000
                        </p>
                        <button className='flex gap-2 items-center text-blue-50 font-work pt-5'>
                            Whitepaper
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                    <div className="bg-white-100 lg:w-52 border-4 border-seagreen-100 rounded-xl p-5 flex flex-col">
                        <h4 className="text-xl text-blue-100 font-bold text-left">
                            4% BUY TAX
                        </h4>
                        <p className='text-gray-100 font-work opacity-40 pt-2'>
                            Total Supply:
                            1,000,000,000
                        </p>
                        <button className='flex gap-2 items-center text-blue-50 font-work pt-5'>
                            Whitepaper
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>


            <div className="lg:px-20 px-5 container mx-auto">

                {/* roadmap */}

                <div className='lg:py-20 pt-6'>
                    <h3 className="text-blue-100 md:text-5xl text-2xl font-semibold text-center font-spartan">
                        Q1 2023 Road Map for<br></br> Lawyer AI
                    </h3>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 justify-between mt-16">
                        <div className='flex flex-col gap-y-5'>
                            <div className="flex gap-5 items-center">
                                <div className="w-12 h-12 bg-seagreen-50 rounded-2xl">

                                </div>
                                <h4 className="text-2xl font-bold text-blue-100 font-spartan">
                                    Expand legal research database
                                </h4>
                            </div>

                            <p className="text-blue-100 opacity-40 font-work ml-14">
                                In the first quarter of 2023, we plan to significantly expand the legal research database that is used by Lawyer AI. This will include adding more cases, statutes, and regulations from a wider range of jurisdictions, as well as integrating new sources of legal information.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-5'>
                            <div className="flex gap-5 items-center">
                                <div className="w-12 h-12 bg-purple-50 rounded-2xl">

                                </div>
                                <h4 className="text-2xl font-bold text-blue-100 font-spartan">
                                    Develop new integrations
                                </h4>
                            </div>

                            <p className="text-blue-100 opacity-40 font-work ml-14">
                                We will also be working to improve the machine learning algorithms that power Lawyer AI, with a focus on increasing the accuracy and efficiency of the tool. This will involve training the algorithms on a larger and more diverse dataset, as well as optimizing the underlying code.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-5'>
                            <div className="flex gap-5 items-center">
                                <div className="w-12 h-12 bg-pink-100 rounded-2xl">

                                </div>
                                <h4 className="text-2xl font-bold text-blue-100 font-spartan">
                                    Improve machine learning algorithms
                                </h4>
                            </div>

                            <p className="text-blue-100 opacity-40 font-work ml-14">
                                We will also be working to improve the machine learning algorithms that power Lawyer AI, with a focus on increasing the accuracy and efficiency of the tool. This will involve training the algorithms on a larger and more diverse dataset, as well as optimizing the underlying code.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-5'>
                            <div className="flex gap-5 items-center">
                                <div className="w-12 h-12 bg-pink-200 rounded-2xl">

                                </div>
                                <h4 className="text-2xl font-bold text-blue-100 font-spartan">
                                    Expand marketing and sales efforts:
                                </h4>
                            </div>

                            <p className="text-blue-100 opacity-40 font-work ml-14">
                                In the first quarter of 2023, we plan to significantly expand the legal research database that is used by Lawyer AI. This will include adding more cases, statutes, and regulations from a wider range of jurisdictions, as well as integrating new sources of legal information.
                            </p>
                        </div>
                    </div>

                    <div className="mt-14 lg:w-1/2 flex mx-auto">
                        <div className='flex flex-col gap-y-5'>
                            <div className="flex gap-5 items-center">
                                <div className="w-12 h-12 bg-pink-50 rounded-2xl">

                                </div>
                                <h4 className="text-2xl font-bold text-blue-100 font-spartan">
                                    Enhance user  interface
                                </h4>
                            </div>

                            <p className="text-blue-100 opacity-40 font-work ml-14">
                                To make Lawyer AI even easier to use, we will be working on a number of improvements to the user interface. This will include adding new features and functionality, as well as streamlining the overall design to make it more intuitive and user-friendly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* advance response section */}

                <div className="lg:py-12 py-6">
                    <div className="lg:flex items-center justify-between">
                        <div className="lg:w-1/2">
                            <h3 className="text-blue-100 md:text-5xl mb-5 text-2xl font-semibold font-spartan">
                                Advanced Responses
                            </h3>
                            <p className='font-semibold text-gray-100 font-work opacity-40 text-lg'>
                                One of the most impressive features of Lawyer AI is its advanced responses to complex legal issues. Using its machine learning capabilities, Lawyer AI is able to understand the nuances of a legal issue and provide detailed, accurate advice on how to proceed. This can be incredibly valuable for lawyers who are working on complex cases and need to make informed decisions quickly
                            </p>
                        </div>

                        <div className="lg:w-1/2 lg:mt-0 mt-6">
                            <img src={law} alt="law" className='lg:float-right' />
                        </div>
                    </div>
                </div>

                {/* our partners */}

                <div className="lg:pb-12 pb-6">

                    <h3 className="text-blue-100 md:text-5xl lg:mb-12 mb-5 text-2xl font-semibold text-center font-spartan">
                        Our Partners
                    </h3>

                    <div className="flex justify-between items-center gap-3">
                        <div><img src={p_1} alt="" className='' /></div>
                        <div><img src={p_2} alt="" className='' /></div>
                        <div><img src={p_3} alt="" className='' /></div>
                    </div>
                </div>

                {/* faq section */}
                <div className="lg:pb-12 pb-6">
                    <div className="lg:flex items-center justify-between gap-20">
                        <div className="lg:w-1/2">
                            <h3 className="text-blue-100 md:text-5xl mb-5 text-2xl font-semibold font-work">
                                FAQ
                            </h3>

                            <div className="accordion mt-5">
                                {accordionData.map(({ title, content }) => (
                                    <Accordion title={title} content={content} />
                                ))}
                            </div>

                        </div>

                        <div className="lg:w-1/2 lg:mt-0 mt-6">
                            <img src={faq} alt="" className='lg:float-right' />
                        </div>
                    </div>
                </div>
            </div>

            {/* get in touch */}

            <div id='about' className="pb-20 lg:px-20 px-5 container mx-auto">

                <div className="lg:mt-12 mt-6">
                    <div className="">
                        <h3 className="text-blue-100 md:text-6xl text-2xl font-semibold font-spartan text-center">JOIN OUR COMMUNITY</h3>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-8 font-work text-white-100">
                        <div className="px-8 py-5 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 text-lg">
                            Telegram
                        </div>

                        <div className="px-8 py-5 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 text-lg">
                            Twitter
                        </div>

                        <div className="px-8 py-5 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 text-lg">
                            Discord
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>

    )
}
