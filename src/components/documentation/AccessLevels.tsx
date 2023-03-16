import _ from "underscore";
import { schema } from "@/api-schema/data";
import { KeyAccess } from "@/api-schema/schema.types";

type AccessSelection = { name: string; access: KeyAccess };

export default function AccessLevels() {
    const selections: AccessSelection[][] = Object.values(schema).map((section) =>
        section.selections.sort((a, b) => a.name.localeCompare(b.name)).map(({ name, access }) => ({ name, access })),
    );
    const rows: (AccessSelection | null)[][] = _.zip(...selections) as (AccessSelection | null)[][];

    const getClassName = (access: KeyAccess) => {
        switch (access) {
            case "public":
                return "bg-gray-200 text-gray-700";
            case "minimal":
                return "bg-green-500 text-gray-700";
            case "limited":
                return "bg-yellow-300 text-gray-700";
            case "full":
                return "bg-red-500 text-gray-700";
            default:
                return "";
        }
    };

    return (
        <>
            <p>
                Which selections can be accessed using a specific API key depends on their access levels. There exist 4 predefined access levels, namely{" "}
                <span>public</span>, <span>minimal access</span>, <span>limited access</span> and <span>full access</span>.
            </p>

            <p className="mt-1">
                It&apos;s also possible to create an API key with custom access, using <code>https://www.torn.com/preferences.php#tab=api?step=addNewKey</code>{" "}
                with query parameters. These parameters are title and the separate sections, like user, where the value is a comma-separated list of selections.
                <br />
                Example:&nbsp;
                <a
                    className="link"
                    target="_blank"
                    href="https://www.torn.com/preferences.php#tab=api?step=addNewKey&title=TornAPI&user=basic,bars,cooldowns,notifications&faction=basic,contributors&torn=bank"
                    rel="noreferrer"
                >
                    https://www.torn.com/preferences.php#tab=api?step=addNewKey&title=TornAPI&user=basic,bars,cooldowns,notifications&faction=basic,contributors&torn=bank
                </a>
            </p>
            <div className="overflow-x-auto mt-1">
                <table className="table table-compact">
                    <thead>
                        <tr>
                            <th>Key Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={getClassName("public")}>Public</td>
                        </tr>
                        <tr>
                            <td className={getClassName("minimal")}>Minimal Access</td>
                        </tr>
                        <tr>
                            <td className={getClassName("limited")}>Limited Access</td>
                        </tr>
                        <tr>
                            <td className={getClassName("full")}>Full Access</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto mt-4">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            {Object.keys(schema).map((section) => (
                                <th key={section}>{section}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                {row.map((selection, j) =>
                                    selection ? (
                                        <td key={j} className={getClassName(selection.access)}>
                                            {selection.name}
                                        </td>
                                    ) : (
                                        <td key={j}></td>
                                    ),
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
