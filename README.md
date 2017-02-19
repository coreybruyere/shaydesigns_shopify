# Shay Designs Shopify
1. Install locally.
2. Run `npm install`.
3. Run `gulp shopifywatch` to watch local file changes and upload to theme using gulp shopify-upload.
  - Or use [Theme Kit](https://www.shopify.com/partners/blog/95401862-3-simple-steps-for-setting-up-a-local-shopify-theme-development-environment) to upload local files.

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
Rebase feature onto master.
```
git checkout dev
git rebase master
```
Push to remote master. Also closes pull request.
```
git push origin master
```

## Deployment
[deploybot.com](https://deploybot.com/)
