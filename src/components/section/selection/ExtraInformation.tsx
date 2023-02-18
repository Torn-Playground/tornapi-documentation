import QuestionMarkIcon from "@/components/global/icons/QuestionMarkIcon";
import Tooltip from "@/components/global/tooltip/Tooltip";

interface ExtraInformationProps {
    tooltip: string;
}

export default function ExtraInformation(props: ExtraInformationProps) {
    return (
        <Tooltip tooltip={props.tooltip}>
            <div className="badge badge-primary ml-1 px-1">
                <QuestionMarkIcon size={10} />
            </div>
        </Tooltip>
    );
}
