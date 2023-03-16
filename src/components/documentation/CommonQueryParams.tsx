import { LIMIT, TIME_FROM, TIME_TO } from "@/api-schema/common-params";
import { Param } from "@/api-schema/schema.types";
import ExtendedLink from "@/components/global/extended-link/ExtendedLink";

type CommonParam = {
    param: Param;
    everywhere?: boolean;
};

export default function CommonQueryParams() {
    const params: Array<CommonParam> = [
        {
            param: {
                name: "key",
                description: (
                    <>
                        Required api key. Defines the owner and{" "}
                        <ExtendedLink href={{ hash: "access-levels" }} className="link">
                            access level
                        </ExtendedLink>
                        .
                    </>
                ),
            },
            everywhere: true,
        },
        {
            param: {
                name: "comment",
                description: "Message to show in the api usage log. Every character over 10 will not be shown.",
            },
            everywhere: true,
        },
        {
            param: {
                name: "selections",
                description:
                    "Select what selections to pull data from. Providing no value will fall back to the default selection, if there is one. Supports multiple values, comma separated.",
            },
            everywhere: true,
        },
        { param: TIME_FROM },
        { param: TIME_TO },
        { param: LIMIT },
    ];

    return (
        <section>
            Query parameters are used to control the data your receive. Some of them are common on all selections or a lot of them.
            <div className="overflow-x-auto mt-1">
                <table className="table table-compact table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Description</th>
                            <th>Applicable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {params.map((commonParam) => (
                            <tr key={commonParam.param.name}>
                                <td>{commonParam.param.name}</td>
                                <td>{commonParam.param.description}</td>
                                <td>{commonParam.everywhere ? "on every section" : "where listed"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
