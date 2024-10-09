
import checkmarkIcon from '../assets/icon-thank-you.svg';

const Finish = () => {
    return (
        <div className="
            bg-background flex items-center justify-center text-text
        ">
            <div className="
                flex flex-col items-center justify-start
            ">
                <div className="
                bg-sidebar-mobile bg-center bg-cover bg-no-repeat lg:bg-sidebar-desktop
                h-[25dvh] w-[100vw] lg:w-[33%] lg:h-[100%] lg:rounded-xl
                ">
                    {/* Background Image */}
                </div>
                <div className="
                bg-card-background w-[95%] rounded-xl mt-[-60px] py-12 px-6 z-[90]
                flex flex-col items-center justify-center
                xs:w-[90%] sm:w-[85%] md:w-[60%]
            ">
                    <div className="flex flex-col w-full items-center justify-center">
                        <img
                            src={checkmarkIcon}
                            alt="checkmark icon"
                            className="w-[33%]"
                        />
                        <div className="text-center font-bold text-3xl mt-4">
                            Thank You!
                        </div>
                    </div>
                    <div className="
                    text-gray-300 text-base mt-6 text-center 
                    xs:w-[70%] sm:w-[60%] md:w-[55%
                ">
                        Thanks for confirming your subscription! We hope you have
                        fun using our platform. If you ever need support, please feel
                        free to email us at support@loremgaming.com.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Finish;