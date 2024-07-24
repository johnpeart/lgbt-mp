const filters = require("./filters");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    console.log("Running Eleventy Configuration...");
    eleventyConfig.addPassthroughCopy({ "assets": "assets" });

    eleventyConfig.addPassthroughCopy("assets/styles");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("assets/fonts");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    
    const md = new markdownIt({
        html: true,
    });
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content);
    });
    
    eleventyConfig.addCollection("members", function(collection) {
        const members = require('./_data/members.json');
        return members;
    });
    
    eleventyConfig.addCollection("parliaments", function(collection) {
        const parliaments = require('./_data/parliaments.json');
        return parliaments;
    });
    
    // Custom filter to format date as day month year
    eleventyConfig.addFilter("prettyDate", function(date) {
        let options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-GB', options);
    });
   
    //Custom filters
    eleventyConfig.addFilter("currentMembers", filters.currentMembers);
 
    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};
