import DocumentationTitle from "@/components/documentation/DocumentationTitle";
import ErrorCodes from "@/components/documentation/ErrorCodes";
import CommonQueryParams from "@/components/documentation/CommonQueryParams";
import Limits from "@/components/documentation/Limits";
import AccessLevels from "@/components/documentation/AccessLevels";

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
                    <li>TODO: id</li>
                </ul>
            </section>
            <section>
                <DocumentationTitle id="query">Common Query Parameters</DocumentationTitle>

                <CommonQueryParams />
            </section>
            <section>
                <DocumentationTitle id="limits">Automatic Limits</DocumentationTitle>

                <Limits />
            </section>
            <section>
                <DocumentationTitle id="access-levels">Access Levels</DocumentationTitle>

                <AccessLevels />
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
