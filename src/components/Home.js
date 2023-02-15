import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import top from '../assets/top.png';
import token from '../assets/token.png';
import justice from '../assets/justice.png';
import faq from '../assets/faq.png';
import law from '../assets/law.png';
import p_1 from '../assets/p_1.jpg';
import p_2 from '../assets/p_2.jpg';
import p_3 from '../assets/p_3.jpg';
import Particle from './Particle';
import Accordion from './Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            once: true,
            delay: 50,
        });
        Aos.refresh();
    }, [])

    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const accordionData = [
        {
            title: 'How to use Lawyer AI bot ? ',
            content: `
            Well its really simple to use Lawyer Ai bot you just need to go to our telegram group where our bot is already added or use our bot 🤖 in your telegram chat box - @LawyerAi_bot 
            
            If you have any questions use /query and add your questions like -  /query what if i don’t pay taxes 
            
            Or you can use this /advice like this - /advice what if i don’t pay taxes
            
            Lawyer AI 🤖 will try to give the best answers`
        },
        {
            title: 'Where i can buy Lawyer Ai token?',
            content: `You can buy it from Uniswap or dexview you just need to paste our Contact address there and you can able to buy that,Taxes are 5% so you have to put that and you should have Ethereum in  ERC20 network`
        }
    ];

    return (
        <div className="bg-white-100 overflow-hidden">

            {/* top section */}

            <div className="lg:px-20 px-5 container mx-auto relative z-20">
                <Menu />

                <Particle />

                <div className="lg:flex block justify-between items-center pt-12">
                    <div data-aos="fade-right" className=" lg:w-1/2">
                        <h1 className="text-blue-100 md:text-6xl text-2xl font-semibold leading-10 tracking-wide font-spartan">
                            Welcome to<br></br>
                            <span className="font-extrabold">
                                LAWYER AI
                            </span><br></br>
                            your favourite<br></br>
                            robot lawyer</h1>

                        <div className="font-work flex items-center gap-5 mt-6">
                            <a href="https://app.uniswap.org/">
                                <button className="text-white-100 px-6 py-4 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100">
                                    Buy Now
                                </button>
                            </a>
                            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xa7214ef7b12eb7445a78fd5e31ed0dd7120f4dce">
                                <button className="text-purple-100 px-6 py-4 border-2 border-purple-100 rounded-2xl font-semibold hover:bg-purple-100 hover:text-white-100">
                                    CHART
                                </button>
                            </a>
                            <a href="https://app.unicrypt.network/amm/uni-v2/pair/0xa7214ef7b12eb7445a78fd5e31ed0dd7120f4dce">
                                <button className="text-purple-100 px-5 py-2.5 border-2 border-purple-100 rounded-2xl font-semibold hover:bg-purple-100 hover:text-white-100">
                                    <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
                                </button>
                            </a>

                        </div>
                    </div>

                    <div data-aos="zoom-in" className="img md:mt-0 mt-12 lg:w-1/2">
                        <img src={top} alt="Logo" />
                    </div>
                </div>

                <div data-aos="zoom-in" className="">
                    <img src={justice} alt="" className='lg:flex mx-auto -mb-44 hidden justice' />
                </div>
            </div>

            {/* what make us different */}

            <div className=" bg-img">
                <div className="lg:px-20 px-5 py-12 container mx-auto">

                    <div className="lg:flex items-center justify-between">
                        <div data-aos="fade-right" className=" lg:w-1/2">
                            <h2 className="text-blue-100 md:text-6xl text-2xl font-semibold leading-10 tracking-wide font-spartan">
                                WHAT<br></br> MAKES US<br></br> DIFFERENT?
                            </h2>

                        </div>

                        <div data-aos="fade-left" className="img lg:mt-0 mt-5 lg:w-1/3">
                            <p className='font-semibold text-gray-100 font-work opacity-40'>
                                LAWYER AI is the pioneering project of 2023 with the aim to change the way how the world works , Many people do not have access to lawyers or cant afford one so we have providing the Ai bot which will help you to get legal advice without paying a single penny.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="flex flex-col lg:gap-y-12 gap-y-6 items-center justify-center lg:py-12 py-6">
                        <h1 className="text-blue-100 md:text-5xl text-2xl font-semibold font-spartan">
                            Check out our Smart Contract
                        </h1>

                        <button title="copy" onClick={() => copyToClipBoard('0x3ce38bc4df7112e3944d724572e42b0cb805ad2a')} data-aos="zoom-in" className="text-white-100 px-6 py-4 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 uppercase">
                            Copy contract address
                        </button>
                        <span className="-mt-6 absolute duration-300">
                            {copySuccess}
                        </span>

                    </div>

                    <div id='tokenomics' className="flex items-center justify-center gap-8">
                        <div data-aos="fade-right" className="">
                            <h1 className="text-blue-100 md:text-5xl text-2xl font-semibold font-spartan">
                                Tokenomics
                            </h1>

                        </div>

                        <div data-aos="fade-left" className="">
                            <img src={token} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div xclassName="container mx-auto lg:-mt-8">
                <div className="flex flex-wrap justify-center items-center gap-6">

                    <div data-aos="flip-left" data-aos-duration="3000" data-aos-delay="50" data-aos-once="false" className="bg-white-100 lg:w-52 border-4 border-seagreen-100 rounded-xl p-5 flex flex-col group hover:bg-blue-50 h-48">
                        <h4 className="text-xl text-blue-100 font-bold text-left group-hover:text-white-100">
                            Total Supply: 1,000,000,000
                        </h4>

                        <a href={require("../assets/whitepaper.pdf")} download="Whitepaper">
                            <button className='flex gap-2 items-center text-blue-50 font-work pt-5 group-hover:text-white-100'>
                                Whitepaper
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>

                            </button>
                        </a>

                    </div>
                    <div data-aos="flip-up" data-aos-duration="3000" data-aos-delay="50" data-aos-once="false" className="bg-white-100 lg:w-52 border-4 border-seagreen-100 rounded-xl p-5 flex flex-col group hover:bg-blue-50 h-48">
                        <h4 className="text-xl text-blue-100 font-bold text-left group-hover:text-white-100">
                            5% BUY TAX
                        </h4>

                        {/* <p className='text-gray-100 font-work opacity-40 group-hover:text-white-100 text-sm pt-3'>
                            Total Supply: 1,000,000,000
                        </p> */}

                        <a href='https://app.uniswap.org/' className='flex gap-2 items-center text-blue-50 font-work pt-5 group-hover:text-white-100'>
                            Buy Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </a>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" data-aos-once="false" className="bg-white-100 lg:w-52 border-4 border-seagreen-100 rounded-xl p-5 flex flex-col group hover:bg-blue-50 h-48">
                        <h4 className="text-xl text-blue-100 font-bold text-left group-hover:text-white-100">
                            5% SELL TAX
                        </h4>
{/* 
                        <p className='text-gray-100 font-work opacity-40 group-hover:text-white-100 text-sm pt-3'>
                            Total Supply: 1,000,000,000
                        </p> */}

                        <a href='https://www.dextools.io/app/en/ether/pair-explorer/0xa7214ef7b12eb7445a78fd5e31ed0dd7120f4dce' className='flex gap-2 items-center text-blue-50 font-work pt-5 group-hover:text-white-100'>
                            Chart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>


            <div className="lg:px-20 px-5 container mx-auto">

                {/* roadmap */}

                <div id='roadmap' className='lg:py-20 pt-6'>
                    <h3 data-aos="fade-up" className="text-blue-100 md:text-5xl text-2xl font-semibold text-center font-spartan">
                        Q1 2023 Road Map for<br></br> Lawyer AI
                    </h3>

                    <div className="relative font-spartan text-sm font-semibold lg:pt-8 pt-5">

                        <div
                            className="hidden lg:block w-5 ml-3.5 bg-blue-50 absolute h-full left-1/2 transform -translate-x-1/2 line">
                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-8">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-right" className="flex justify-start w-full mx-auto items-center lg:ml-52">
                                    <div className="w-full sm:w-72 sm:mr-8 p-5 border-2 border-blue-50 rounded-sm shadow space-y-5 text-blue-100">
                                        <h4 className="text-xl font-semibold">
                                            Develop new integrations
                                        </h4>
                                        <p className="text-blue-100 opacity-40 font-work">
                                            We will also be working to improve the machine learning algorithms that power Lawyer AI, with a focus on increasing the accuracy and efficiency of the tool. This will involve training the algorithms on a larger and more diverse dataset, as well as optimizing the underlying code.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute left-1/2 -ml-3.5 text-blue-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 transform rotate-180">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-8">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-left" className="flex justify-end w-full mx-auto items-center lg:mr-36">
                                    <div className="w-full sm:w-72 sm:mr-8 p-5 border-2 border-blue-50 rounded-sm shadow space-y-5 text-blue-100">
                                        <h4 className="text-xl font-semibold">
                                            Improve machine learning algorithms
                                        </h4>
                                        <p className="text-blue-100 opacity-40 font-work">
                                            We will also be working to improve the machine learning algorithms that power Lawyer AI, with a focus on increasing the accuracy and efficiency of the tool. This will involve training the algorithms on a larger and more diverse dataset, as well as optimizing the underlying code.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute left-1/2 ml-2.5 text-blue-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0 sm:mb-8">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-right" className="flex justify-start w-full mx-auto items-center lg:ml-52">
                                    <div className="w-full sm:w-72 sm:mr-8 p-5 border-2 border-blue-50 rounded-sm shadow space-y-5 text-blue-100">
                                        <h4 className="text-xl font-semibold">
                                            Expand marketing and sales efforts:
                                        </h4>
                                        <p className="text-blue-100 opacity-40 font-work">
                                            In the first quarter of 2023, we plan to significantly expand the legal research database that is used by Lawyer AI. This will include adding more cases, statutes, and regulations from a wider range of jurisdictions, as well as integrating new sources of legal information.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute left-1/2 -ml-3.5 text-blue-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 transform rotate-180">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-0">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div data-aos="fade-left" className="flex justify-end w-full mx-auto items-center lg:mr-36">
                                    <div className="w-full sm:w-72 sm:mr-8 p-5 border-2 border-blue-50 rounded-sm shadow space-y-5 text-blue-100">
                                        <h4 className="text-xl font-semibold">
                                            Enhance user  interface
                                        </h4>
                                        <p className="text-blue-100 opacity-40 font-work">
                                            To make Lawyer AI even easier to use, we will be working on a number of improvements to the user interface. This will include adding new features and functionality, as well as streamlining the overall design to make it more intuitive and user-friendly.
                                        </p>
                                    </div>
                                </div>

                                <div className="lg:block hidden absolute left-1/2 ml-2.5 text-blue-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                    </div>



                </div>

                {/* advance response section */}

                <div className="lg:py-12 py-6">
                    <div data-aos="fade-left" className="lg:flex items-center justify-between">
                        <div className="lg:w-1/2">
                            <h3 className="text-blue-100 md:text-5xl mb-5 text-2xl font-semibold font-spartan">
                                Advanced Responses
                            </h3>
                            <p className='font-semibold text-gray-100 font-work opacity-40 text-lg'>
                                One of the most impressive features of Lawyer AI is its advanced responses to complex legal issues. Using its machine learning capabilities, Lawyer AI is able to understand the nuances of a legal issue and provide detailed, accurate advice on how to proceed. This can be incredibly valuable for lawyers who are working on complex cases and need to make informed decisions quickly
                            </p>
                        </div>

                        <div data-aos="fade-right" className="lg:w-1/2 lg:mt-0 mt-6">
                            <img src={law} alt="law" className='lg:float-right' />
                        </div>
                    </div>
                </div>

                {/* our partners */}

                <div id='partners' className="lg:pb-12 pb-6">

                    <h3 data-aos="fade-up" className="text-blue-100 md:text-5xl text-2xl font-semibold text-center font-spartan">
                        Our Partners
                    </h3>

                    <div className="flex justify-between items-center gap-6 lg:my-12 my-5">
                        <div className='p-3 bg-seagreen-50 rounded-md'>
                            <a href='https://twitter.com/Collieinu_token' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" className=''>
                                <img src={p_1} alt="" className='w-72 shadow-xl rounded-md' />
                            </a>

                            <p className='text-xl font-spartan pt-5 text-center'>collie inu - twitter</p>
                        </div>

                        <div className='p-3 bg-seagreen-50 rounded-md'>
                            <a href='https://twitter.com/DogecoinRide' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" className=''>
                                <img src={p_2} alt="" className='w-72 shadow-xl rounded-md' />
                            </a>

                            <p className='text-xl font-spartan pt-5 text-center'>doge coin ride - twitter</p>
                        </div>

                        <div className='p-3 bg-seagreen-50 rounded-md'>
                            <a href='http://twitter.com/teh_bag' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" className=''>
                                <img src={p_3} alt="" className='w-72 shadow-xl rounded-md' />
                            </a>

                            <p className='text-xl font-spartan pt-5 text-center'>Teh bag - twitter</p>
                        </div>

                    </div>
                </div>

                {/* faq section */}
                <div className="lg:pb-12 pb-6">
                    <div data-aos="fade-right" className="lg:flex items-center justify-between gap-20">
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

                        <div data-aos="fade-left" className="lg:w-1/2 lg:mt-0 mt-6">
                            <img src={faq} alt="" className='lg:float-right' />
                        </div>
                    </div>
                </div>
            </div>

            {/* get in touch */}

            <div id='about' className="pb-20 lg:px-20 px-5 container mx-auto">

                <div className="lg:mt-12 mt-6">
                    <div data-aos="fade-up" className="">
                        <h3 className="text-blue-100 md:text-6xl text-2xl font-semibold font-spartan text-center">JOIN OUR COMMUNITY</h3>
                    </div>
                    <div data-aos="fade-down" className="flex flex-wrap justify-center items-center gap-8 mt-8 font-work text-white-100">
                        <div className="px-8 py-5 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 text-lg">
                            Telegram
                        </div>

                        <div className="px-8 py-5 bg-purple-100 rounded-2xl font-semibold hover:bg-white-100 border-2 border-purple-100 hover:text-purple-100 text-lg">
                            Twitter
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div >

    )
}
