export default function Usage() {
    return (
        <section>
            Torn&apos;s API is split up in sections, with each section having their own unique selections. Selections can be combined, allowing you to query
            more data while only using a single API call.
            <br />
            Format for the url: <code>https://api.torn.com/:SECTION/:ID?selections=:SELECTIONS&key=:KEY</code>
        </section>
    );
}
