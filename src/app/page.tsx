import AccessLevels from "@/components/documentation/AccessLevels";
import CommonQueryParams from "@/components/documentation/CommonQueryParams";
import DocumentationTitle from "@/components/documentation/DocumentationTitle";
import ErrorCodes from "@/components/documentation/ErrorCodes";
import Limits from "@/components/documentation/Limits";
import Usage from "@/components/documentation/Usage";

export default function Home() {
    return (
        <div className="space-y-2 mb-10">
            <section>
                <DocumentationTitle id="usage">Usage</DocumentationTitle>

                <Usage />
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

                <ErrorCodes />
            </section>
        </div>
    );
}
