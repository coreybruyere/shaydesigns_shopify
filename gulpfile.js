/** 
 * Requirements
 */
const gulp = require('gulp');
const watch = require('gulp-watch');
const gulpShopify = require('gulp-shopify-upload');
const config = require('./config.json');

/** 
 * Watch Task
 * For dev environment: *
 * Choose duplicated test theme, get theme ID and pass to gulpShopify Task.
 * gulpShopify('API KEY', 'PASSWORD', 'MYSITE.myshopify.com', 'THEME ID', options)
 */
gulp.task('shopifywatch', function() {
  return watch('./+(assets|layout|config|snippets|templates|locales)/**')
  .pipe(gulpShopify(
    config.shopify_api_key,
    config.shopify_api_password,
    config.shopify_url,
    config.shopify_dev_theme_id)
  );
});

/** 
 * Deploy Task
 */
gulp.task('deploy', ['build'], function() {  
  return gulp.src('./+(assets|layout|config|snippets|templates|locales)/**')
  .pipe(gulpShopify(
    config.shopify_api_key,
    config.shopify_api_password,
    config.shopify_url,
    config.shopify_theme_ids)
  );
});

/** 
 * Default Task
 */
gulp.task('default', ['shopifywatch']);
