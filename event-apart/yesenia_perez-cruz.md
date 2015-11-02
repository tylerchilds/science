## Design Decisions through the lens of performance
by: Yesenia Perez-Cruz

* Inform the designer of how something may impact the performance of the site
* Performance is a design feature, not just a technical concern
* 250 milliseconds is the gap where users will switch to a competitor
* Design can be beautiful and branded without heaving heavy graphics, fonts and scripts
* Starting optimizing for performance can't begin after development, it needs to be a project goal
* Amazon observed a 1% decrease in revenue for every 100ms increase in pageload
* Performance budgets are a tangible way to discuss perfomance
	* Should take no more than 10 seconds over a 3G connection
* Little features that add up are the biggest hits for the performance budget.

### To Set a Budget
* Look at your pages <http://webpagetest.org>
* Look to your competitors
* Side by side comparison videos, really put the speed into perspective
* Figure out metrics (bytes, requests, etc)
* 20% rule: try and beat the competitor by 20%
* Designers and developers need to talk about the budgets
* Need to be smart about how/why we're using webfonts (no more than 6 webfonts)

### Design Constraints
* Emphasis (personality), Function, Weight
* Does this have the right personality AND does it perform well?
* iOS 9 allows users to block webfonts (choose smart fallbacks, don't rely too heavily)
	* Think about platforms for the fallbacks, Win, iOS, Android, OSX

	
> Performance is a marketable feature, not just something we should do

#### When feedback would push the performance over budget:

1. Remind (goal: to create a lightning fast experience. 600kb goal, the carousel alone is ~700kb)
2. Educate
3. Find a balance

### How to design on a budget

* Find reusable patterns
* Don't add styles you don't _need_
* Take your normal patter and for variations ask, "What's the minimum I need to do to show X"
	* Be deliberate and minimal
* Edit consistently, compare patterns in different contexts side by side to identify commonalities. Simplify.
* Get designs into code earlier
* Prototype in the design phase
* Create a living styleguide (+10)

*Remember it isn't beauty vs function for performance*

#### Personal Investigation
* Integrations with WebPageTest.org in the build process for performance testing
