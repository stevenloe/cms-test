module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/images`
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");


  eleventyConfig.addCollection("postsReversed", collection => {
    return collection.getFilteredByTag("post").reverse();
  });

  /*
    ^^ Here we create a new collection. then we reverse the collection based on the order of the dates 
    in the date YAML tag in each post. Then we'll use this collection on the blog index page.
    The result, we now have blog posts displayed newest-to-oldest on the /blog index page. 

  */

  
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  // eleventyConfig.addPassthroughCopy("css/fonts");
};