import { useStore } from "../../useStore";

import Heading from "../components/Heading";
import AddOn from "../components/AddOn";

const StepThree = () => {
    return (
        <div className="
        flex flex-col items-center justify-center text-text z-[99] 
        lg:w-full
    ">
        <Heading 
            title="Pick add-ons"
            subtitle="Add-ons help enhance your gaming experience."
        />
        <div className="
            w-full grid grid-cols-1 gap-3
        ">
            <AddOn 
                title="Add On Title"
                subtitle="Select this add on"
                price="140"
            />
        </div>
    </div>
    );
}

export default StepThree;