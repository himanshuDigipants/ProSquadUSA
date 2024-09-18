module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };