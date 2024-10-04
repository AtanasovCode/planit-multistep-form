
import { Outlet } from "react-router";

const MultiStep = () => {
    return (
        <div className="bg-background min-h-[100dvh] flex items-center justify-center">
            <Outlet />
        </div>
    );
}

export default MultiStep;