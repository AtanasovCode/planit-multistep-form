import { useEffect } from "react";
import { useStore } from "../../useStore";
import Heading from "../components/Heading";

const StepFour = () => {

    const {
        selectedPlan,
        selectedModel,
        addons,
        pricing,
        checkedAddons,
        saveCheckedAddons,
    } = useStore();

    const getPlanPrice = () => {
        const planPrice = pricing.find((item) => item.type === selectedModel)
            ?.plans.find(plan => plan.name === selectedPlan)?.price || 0;

        return planPrice;
    }

    const getCheckedAddons = () => {
        const checkedAddons = addons.filter((addon) => addon.checked);

        return checkedAddons;
    }

    //get price of individual addons based on their id
    const getAddonPrice = (id) => {
        const addonPrice = getCheckedAddons().find((item) => item.id === id)
            ?.pricing.find((item) => item.type === selectedModel)?.price || 0;

        return addonPrice;
    }

    //calculate the total price (plan + addons)
    const getTotalPrice = () => {
        const totalAddons = addons.reduce((total, addon) => {
            if (addon.checked) {
                const addonPrice = addon.pricing.find(i => i.type === selectedModel)?.price || 0;
                return total + parseInt(addonPrice);
            }
            return total;
        }, 0);

        return parseInt(getPlanPrice()) + totalAddons;
    }


    return (
        <div className="
        flex flex-col items-center justify-center text-text z-[99] 
        lg:w-full
    ">
            <Heading
                title="Finishing up"
                subtitle="Double-check everything looks OK before confirming."
            />
            <div className="flex flex-col items-cente justify-center w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-center relative">
                        <div className="text-md font-semibold capitalize flex items-center justify-center">
                            {selectedPlan} <span className="text-gray-300 ml-2 text-xs capitalize">({selectedModel})</span>
                        </div>
                        <div className="
                            text-gray-300 text-xs absolute left-0 bottom-[-70%]
                            before:content-[''] before:absolute before:bottom-[-30%] before:w-full before:h-[.13rem] before:bg-gray-500
                        ">
                            Change
                        </div>
                    </div>
                    <div className="text-semibold text-lg">
                        ${getPlanPrice()}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full mt-16">
                    {getCheckedAddons().length > 0 ? (
                        getCheckedAddons().map((addon) => {
                            return (
                                <div className="w-full flex items-center justify-between" key={addon.id}>
                                    <div className="text-md text-gray-300 font-semibold">
                                        {addon.name}
                                    </div>
                                    <div className="text-gray-300 font-sm">
                                        ${getAddonPrice(addon.id)}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-gray-300 text-md">
                            No addons selected.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default StepFour;