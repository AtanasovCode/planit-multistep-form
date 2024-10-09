
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useStore } from "../../useStore";

const MultiStep = () => {

    const {
        currentRoute,
        changeCurrentRoute,
        step,
    } = useStore();
    const navigate = useNavigate(); // Hook to manually navigate

    const changeRoute = () => {
        switch (step) {
            case 1:
                changeCurrentRoute("/multi-step/step-one");
                break;
            case 2:
                changeCurrentRoute("/multi-step/step-two");
                break;
            case 3:
                changeCurrentRoute("/multi-step/step-three");
                break;
            case 4:
                changeCurrentRoute("/multi-step/step-four");
                break;
            case 5: 
                changeCurrentRoute("/finish");
                break;
            default:
                return "/multi-step/step-one"; // Fallback in case step is undefined or invalid
                break;
        }
    };

    useEffect(() => {
        changeRoute();
        navigate(currentRoute); // Navigate to the updated route
    }, [step, currentRoute, navigate])

    return (
        <div className="bg-background min-h-[100dvh] flex items-center justify-center">
            <Outlet />
        </div>
    );
}

export default MultiStep;