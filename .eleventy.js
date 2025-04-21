import markdownIt from "markdown-it";
import fetchMembers from './_data/fetch-members.js'; // Adjust the path if needed
export default function(eleventyConfig) {
    console.log("Running Eleventy Configuration...");

    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    eleventyConfig.addPassthroughCopy("assets/styles");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("assets/fonts");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    // Run the fetch-members.js script before other Eleventy steps
    eleventyConfig.on('beforeBuild', async () => {
        console.log("Fetching member data...");
        await fetchMembers(); // This ensures it runs before the rest of the build
        console.log("Member data fetched.");
    });
    
    const md = new markdownIt({ html: true });
    eleventyConfig.addFilter("markdown", (content) => md.render(content));

    eleventyConfig.addFilter("prettyDate", function(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString("en-GB", options);
    });
    
    return {
        dir: {
            input: ".",
            includes: "_includes",
            layouts: "_includes/layouts",
            data: "_data",
            output: "_site"
        }
    };
}
