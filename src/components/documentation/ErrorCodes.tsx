import errors from "@/api-schema/errors";

export default function ErrorCodes() {
    return (
        <div className="overflow-x-auto mt-1">
            <table className="table table-compact table-zebra w-full">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Message</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {errors.map((error) => (
                        <tr key={error.code}>
                            <td>{error.code}</td>
                            <td>{error.message}</td>
                            <td>{error.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
