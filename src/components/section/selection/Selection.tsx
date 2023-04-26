import { Selection as SelectionType } from "@/api-schema/schema.types";
import ExclamationIcon from "@/components/global/icons/ExclamationIcon";
import ExtraInformation from "@/components/section/selection/ExtraInformation";
import QueryParams from "@/components/section/selection/QueryParams";
import SelectionId from "@/components/section/selection/SelectionId";
import SelectionPermission from "@/components/section/selection/SelectionPermission";
import SelectionSchema from "@/components/section/selection/SelectionSchema";
import SelectionStructures from "@/components/section/selection/SelectionStructures";

interface SelectionProps {
    selection: SelectionType;
}

export default function Selection(props: SelectionProps) {
    return (
        <div className="w-full relative mb-10">
            <div className="divider"></div>

            <div className="flex items-center space-x-2">
                <h4 className="text-xl font-semibold capitalize">{props.selection.name}</h4>
                {props.selection.warning && (
                    <ExtraInformation tooltip={props.selection.warning} color="warning" iconElement={<ExclamationIcon size={20} stroke={0.2} />} />
                )}

                <SelectionId id={props.selection.id} />
                <SelectionPermission access={props.selection.access} />
            </div>

            <span>{props.selection.description}</span>
            <QueryParams params={props.selection.params} />
            <SelectionSchema schema={props.selection.schema} />
            <SelectionStructures structures={props.selection.structures} />
        </div>
    );
}
