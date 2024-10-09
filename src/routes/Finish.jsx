import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

import checkmarkIcon from '../assets/icon-thank-you.svg';

const Finish = () => {

    const [explode, setExplode] = useState(true);

    return (
        <div className="bg-background min-h-[100vh] flex items-start justify-center text-text lg:items-center">
            <div className="
                flex flex-col items-center justify-start
                lg:p-4 lg:rounded-xl lg:bg-card-background lg:flex-row lg:justify-center
                lg:w-[75vw] lg:h-[75vh] xl:w-[65vw] xl:h-[73vh] xl:max-w-[58rem]
            ">

                <div className="
                    w-[100vw] h-[25dvh] bg-sidebar-mobile bg-cover bg-center bg-no-repeat lg:bg-sidebar-desktop
                    lg:w-[33%] lg:h-[100%]
                ">{/* Background Image */}</div>

                <div className="
                    flex flex-col items-center justify-center z-[99] py-12 px-6 rounded-xl
                    w-[95%] mt-[-60px] xs:w-[90%] sm:w-[85%] md:w-[70%] bg-card-background
                    lg:mt-0 lg:w-[66%] lg:bg-transparent lg:z-[1] lg:mx-16      
                ">
                    <div className="flex flex-col items-center justify-center">
                        {
                            explode &&
                            <ConfettiExplosion
                                particleCount={400}
                                particleSize={16}
                                duration={3600}
                                zIndex={99999}
                                onComplete={() => setExplode(false)}
                            />
                        }
                        <div className="flex items-center justify-center">
                            <img
                                src={checkmarkIcon}
                                alt="checkmark illustration"
                                className="w-10 lg:w-12 xl:w-16"
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
