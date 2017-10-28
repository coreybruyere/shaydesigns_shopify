[![Deployment status from DeployBot](https://coreybruyere.deploybot.com/badge/23779029899665/116168.svg)](http://deploybot.com)
# Shay Designs Shopify Development Workflow
1. Install locally.
2. Run `npm install`.
3. Run `gulp shopifywatch` to watch local file changes and upload to theme using gulp shopify-upload.
    - Or use [Theme Kit](https://www.shopify.com/partners/blog/95401862-3-simple-steps-for-setting-up-a-local-shopify-theme-development-environment) to upload local files.
4. For post-launch development:
    - Pull latest from master and create new feature branch. Name branch using date and short title. For example: '0924_fix_broken_nav'
    - Download production theme to new feature branch (In case of changes that were made by 3rd party devs).
    - Clone production theme using same naming convention as feature branch.
    - Preview cloned theme and grab theme ID.
    - Place theme ID in config.json as the value of `shopify_dev_theme_id`.
    - Run `gulp shopifywatch` to open up browser to cloned theme.
    - ~~Run standard `gulp` task to push to theme once changes are tested and pushed to master. This will push code to the production theme ID.~~
    - Test cloned theme and make pull request.
    - Merge pull request to master for deployment through deploybot.

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
