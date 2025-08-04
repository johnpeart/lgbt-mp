import markdownIt from "markdown-it";
import fetchMembers from './utils/fetch-members.js';

export default function(eleventyConfig) {
    console.log("Running Eleventy Configuration...");

    eleventyConfig.addPassthroughCopy({ "assets": "assets" });
    eleventyConfig.addPassthroughCopy("assets/styles");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("assets/fonts");
    eleventyConfig.addPassthroughCopy("favicon.ico");

    eleventyConfig.on("eleventy.before", async () => {
        const args = process.argv;
        const isWatching = args.includes("--watch") || args.includes("--serve");
    
        if (isWatching) {
            console.log("Skipping fetchMembers (watch/serve mode)");
            return;
        }
    
        console.log("Fetching member data...");
        await fetchMembers();
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
