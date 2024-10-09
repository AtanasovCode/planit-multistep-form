import checkmarkIcon from '../assets/icon-thank-you.svg';

const Finish = () => {
    return (
        <div className="bg-background flex items-center justify-center text-text">
            <div className="flex flex-col items-center justify-start">
                <div className="
                    w-[100vw] h-[25dvh] bg-sidebar-mobile bg-containt bg-center bg-no-repeat lg:bg-sidebar-desktop
                    lg:w-[33%] lg:h-[100%]
                ">{/* Background Image */}</div>
                <div className="
                    flex flex-col items-center justify-center z-[99] py-12 px-6 rounded-xl
                    w-[95%] mt-[-60px] xs:w-[90%] sm:w-[85%] md:w-[70%] bg-card-background              
                ">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center">
                            <img
                                src={checkmarkIcon}
                                alt="checkmark illustration"
                                className="w-10"
                            />
                        </div>
                        <div className="font-bold text-3xl my-6">
                            Thank You!
                        </div>
                    </div>
                    <div className="text-gray-300 font-sm text-center">
                        Thanks for confirming your subscription! We
                        hope you have fun using our platform. If
                        you ever need support, please feel free
                        to email us at support@loremgaming.com.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Finish;
