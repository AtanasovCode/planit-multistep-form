import { useStore } from "../../useStore";

import Heading from "../components/Heading";
import AddOn from "../components/AddOn";

const StepThree = () => {

    const {
        addons,
        checkAddon,
        selectedModel,
    } = useStore();

    //gets the correct pricing for the addon
    const getAddonPrice = (id) => {
        const selectedAddon = addons.find((item) => item.id === id);
        let price = 0;

        selectedAddon.pricing.map((item) => {
            if (item.type === selectedModel) {
                price = item.price;
            }
        })

        return price;
    }

    return (
        <div className="
            flex flex-col items-center justify-center text-text z-[99] mb-6 lg:mb-0
            bg-card-background lg:bg-transparent  pt-8 pb-4 px-6 lg:p-0
            sm:w-full
        ">
            <Heading
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <div className="
            w-full grid grid-cols-1 gap-3
        ">
                {
                    addons.map((addon) => {
                        return (
                            <AddOn
                                key={addon.id}
                                title={addon.name}
                                subtitle={addon.description}
                                price={getAddonPrice(addon.id)}
                                checked={addon.checked}
                                id={addon.id}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StepThree;