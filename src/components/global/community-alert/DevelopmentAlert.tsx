import InfoIcon from "@/components/global/icons/InfoIcon";

export default function DevelopmentAlert() {
    return (
        <div className="flex items-center w-full px-1 py-2">
            <div className="alert alert-error shadow-lg">
                <div>
                    <InfoIcon size={24} />
                    <span>We are still working hard on the documentation of all the sections. There will be some missing for now.</span>
                </div>
            </div>
        </div>
    );
}
