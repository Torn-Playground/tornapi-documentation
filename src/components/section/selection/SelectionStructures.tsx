import { Structure, StructureEnum } from "@/api-schema/schema.types";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";
import SelectionEnum from "@/components/section/selection/SelectionEnum";
import SelectionStructure from "@/components/section/selection/SelectionStructure";

interface SelectionStructuresProps {
    structures: (Structure | StructureEnum)[];
}

export default function SelectionStructures({ structures }: SelectionStructuresProps) {
    if (!structures.length) {
        return null;
    }

    return (
        <section className="mt-4">
            <span className="text-xl capitalize">Structures</span>

            <div className="space-y-6">
                {structures
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((structure) => (
                        <div key={structure.id}>
                            <span className="text-lg capitalize italic" id={structure.id}>
                                <ExtendedLink href={{ hash: structure.id }} prefetch={false}>
                                    {structure.name}
                                </ExtendedLink>
                            </span>

                            {"schema" in structure && <SelectionStructure schema={structure.schema} />}
                            {"values" in structure && <SelectionEnum type={structure.type} values={structure.values} incomplete={structure.incomplete} />}
                        </div>
                    ))}
            </div>
        </section>
    );
}
