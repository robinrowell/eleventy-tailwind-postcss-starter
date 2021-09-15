# Instructions

for VSCode Nunjucks emmett, get extension: https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks then 

In addition, you may want to ensure Emmet works on .njk files by updating/adding the following in the settings.json:

``
"emmet.includeLanguages": {
	"nunjucks": "html",
},
``
## Commands
- install with: npm install
- develop with: npm run dev *note:* this takes a good 10+ seconds to kickoff
- produce with: npm run build *note:* this purges (treeshakes) the CSS

## Other notes
- postcss-import is enabled. This will allow you to import CSS similar to how you might in SASS. See https://tailwindcss.com/docs/using-with-preprocessors Pay attention to the gotcha situations with its use
- nesting is also enabled, although I would avoid using it as the VSCode IDE might see things as an error
- purging is handled in the package.json within the dev and build scripts