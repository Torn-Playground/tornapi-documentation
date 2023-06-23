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

export default function Selection({ selection: { access, description, id, name, params, schema, structures, warning } }: SelectionProps) {
    return (
        <div className="w-full relative mb-10">
            <div className="divider" />

            <div className="flex items-center space-x-2">
                <h4 className="text-xl font-semibold capitalize">{name}</h4>
                {warning && <ExtraInformation tooltip={warning} color="warning" iconElement={<ExclamationIcon size={20} stroke={0.2} />} />}

                <SelectionId id={id} />
                <SelectionPermission access={access} />
            </div>

            <span>{description}</span>
            <QueryParams params={params} />
            <SelectionSchema schema={schema} />
            <SelectionStructures structures={structures} />
        </div>
    );
}
