/** 
 * Require plugins
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpShopify = require('gulp-shopify-upload');

/** 
 * Watch Task
 */
gulp.task('shopifywatch', function() {
  return watch('./+(assets|layout|config|snippets|templates|locales)/**')
.pipe(gulpShopify('f36cd30ebf56814f1836d2acb9cceb6b', 'd891359435b5ce1b8bb350f781d9850d', 'shay-designs-jewelry.myshopify.com', '166966279'));
});

/** 
 * Default Task
 */
gulp.task('default', [
  'shopifywatch'
]);
