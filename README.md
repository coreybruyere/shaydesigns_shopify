[![Deployment status from DeployBot](https://coreybruyere.deploybot.com/badge/23779029899665/116168.svg)](http://deploybot.com)
# Shay Designs Shopify Development Workflow
1. Install locally.
2. Run `npm install`.
3. Run `gulp shopifywatch` to watch local file changes and upload to theme using gulp shopify-upload.
  - Or use [Theme Kit](https://www.shopify.com/partners/blog/95401862-3-simple-steps-for-setting-up-a-local-shopify-theme-development-environment) to upload local files.
4. For post-launch development:
  1. Clone production theme.
  2. Rename cloned theme using date and a short title describing the fix or update (Think pull request here). For example: '0924_fix_broken_nav'
  3. Preview cloned theme and grab theme ID from URL.
  4. Run `gulpShopify('API KEY', 'PASSWORD', 'MYSITE.myshopify.com', 'THEME ID', options)` (Update task to accept env parameters)
  5. Run standard `gulp` task to push to theme once changes are tested and pushed to master. This will push code to the production theme ID.

## Shopify Development Resources
[Timber Theme Documentation](https://shopify.github.io/Timber/)
[Workflow and Deployment](https://robots.thoughtbot.com/shopify-theme-development)
[Git Theme Deployment](https://www.shopify.com/partners/blog/19752835-using-git-to-simplify-shopify-theme-deployment)

## Workflow
Always update local files with master.
```
git checkout master
git pull --rebase origin master
```
Rebase master into feature branch.
```
git checkout dev 
git rebase master --preserve-merges
```
Edit and commit to feature branch then merge feature into master.
```
git checkout master
git merge dev
```
Push to remote master. Also closes pull request.
```
git push origin master
```

## Deployment
[deploybot.com](https://deploybot.com/)
