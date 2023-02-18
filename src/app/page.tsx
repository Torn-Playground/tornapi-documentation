import DocumentationTitle from "@/components/documentation/DocumentationTitle";
import ErrorCodes from "@/components/documentation/ErrorCodes";

// FIXME 2023/02/12 - Implement documentation page.

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <div className="space-y-2 mb-10">
            <ul>
                <li>TODO: Introduction</li>
            </ul>

            <section>
                <DocumentationTitle id="usage">Usage</DocumentationTitle>

                <ul>
                    <li>TODO: Acceptable usage</li>
                    <li>TODO: Selection usage + combining</li>
                </ul>
            </section>
            <section>
                <DocumentationTitle id="query">Common Query Parameters</DocumentationTitle>

                <ul>
                    <li>TODO: Param - id</li>
                    <li>TODO: Param - to/from (and timestamp)</li>
                    <li>TODO: Param - limit</li>
                </ul>
            </section>
            <section>
                <DocumentationTitle id="limits">Automatic Limits</DocumentationTitle>

                <ul>
                    <li>TODO: Key limit</li>
                    <li>TODO: Cloud limit</li>
                    <li>TODO: IP limit</li>
                </ul>
            </section>
            <section>
                <DocumentationTitle id="access-levels">Access Levels</DocumentationTitle>

                <ul>
                    <li>TODO: Key Levels</li>
                    <li>TODO: Selection table</li>
                </ul>
            </section>
            <section>
                <DocumentationTitle id="errors">Error Codes</DocumentationTitle>

                <ul>
                    <li>TODO: Error format</li>
                </ul>

                <ErrorCodes />
            </section>
        </div>
    );
}
