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

    //gets all checked addons for displaying
    const getCheckedAddons = () => {
        const checked = addons.filter((item) => item.checked);

        saveCheckedAddons(checked);
    }

    const getTotalPrice = () => {
        let totalAddons = 0;
        let price = 0;

        addons.map((addon) => {
            if (addon.checked) {
                addon.pricing.map((i) => {
                    if (i.type === selectedModel) {
                        totalAddons += parseInt(i.price);
                    }
                })
            }
        })

        pricing.map((item) => {
            if (item.type === selectedModel) {
                item.plans.map((i) => {
                    if (i.name === selectedPlan) {
                        price = parseInt(i.price);
                    }
                })
            }
        })

        return parseInt(price) + parseInt(totalAddons);
    }

    useEffect(() => {
        getCheckedAddons
    }, [])

    return (
        <div className="
        flex flex-col items-center justify-center text-text z-[99] 
        lg:w-full
    ">
            <Heading
                title="Finishing up"
                subtitle="Double-check everything looks OK before confirming."
            />
            <div className="mt-4 font-bold text-xl text-text">
                {getTotalPrice()}
            </div>
        </div>
    );
}

export default StepFour;