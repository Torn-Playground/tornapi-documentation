import { Param } from "@/api-schema/schema.types";

interface QueryParamsProps {
    params?: Array<Param>;
}

export default function QueryParams({ params }: QueryParamsProps) {
    if (!params?.length) {
        return null;
    }

    return (
        <section className="mt-4">
            <span className="text-xl capitalize">Query Parameters</span>

            <div className="overflow-x-auto mt-1">
                <table className="table table-compact table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {params.map((param) => (
                            <tr key={param.name}>
                                <td>{param.name}</td>
                                <td>{param.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
