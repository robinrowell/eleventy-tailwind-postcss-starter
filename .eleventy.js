module.exports = function (eleventyConfig) {
    
    // set markdown engine - default is Liquid
    // eleventyConfig.setTemplateFormats("html,liquid,njk");

    // set directories to pass through to the build
    eleventyConfig.addPassthroughCopy('./src/img/');
    eleventyConfig.addPassthroughCopy('./src/js/');
    
    // set the input and output folders
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };

};