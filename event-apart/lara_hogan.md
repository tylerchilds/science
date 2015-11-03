## Designing for Performance
by: Lara Hogan

> Performance is user experience

160kb to a page increased bounce rate by 12%

Removing scrolling jank increases more favorites, more often

Performance + aesthetics = user experience

Desktop roundtrip: <50ms
Mobile roundtrip: >300ms

### How to optimize for networks

1. Perceived performance
	* How it feels to load is how more important than how fast it actually loads.
2. How things load, jst in the head blocks loading
3. Number of requests
	* bottlenecks, use fewer files
4. Size of requests

### Images

The bulk of web page size

* jpeg: 
	* lossy, based loosely how humans perceive. 
	* Good at gradients, bad at edges.
	* decrease quality, decrease file size. Balance file size and speed.
	* Blur unimportant areas, crop smooth areas.
* gif:
	* Best for animations that can't be replaced by CSS
	* Don't use them
	* If you MUST use them, dither it down.
	* GIFs are really good at horizontal redundancy
	* Replace non animated gifs with PNG-8
	* Replace movie GIFs with async-videos
* png-8:
	* Improved non-patented gif, from 1996
	* lossless, 256 color palettes
	* horizontal and vertical compression
* png-24
	* full/partial transparency
	* decrease noise, colors
	* if you don't need transparency, just use JPEG
* WebP:
	* New image file format from google
	* Both lossless and lossy
	* Transparency and animation
	* Support is chrome, opera and android
	* Photoshop plugin
	* Encodes with predictions and only stores the differences from the predictions and reality
* svg:
	* Not supported < ie8
	* Exports a lot of cruft, you can remove a lot from what illustrator exports.
	* portable, inline html or css
* sprites:
	* larger files, but fewer requests.

#### Sizes

Responsive images from the new spec

* `srcset="small.jpg,"`
* `sizes="(max-width: 480px) 75vw, (), 60vw"`
* `type="image/svg+xml"`

ImageOptim, essentially lossless compression tool.
SVG Scrubber to get rid of the cruft
	
### Fonts

IE 6-8 downloads all @font-face files, even if they aren't used. (including newer IE running in these compat. modes)

Only @import the font weights that you use.

User media queries for larger desktops and newer browsers

Document the subsetting so others can use it and edit it.

Optimizing is not a redesign, just do it.

### CSS

Remove inneficient selectors

Remove unnecessary elements

Create patterns in CSS for re-useablity.
* Less overhead with patterns

Simplifying to one font weight for headers saved a lot of kb and 5 requests.

### Tips

* Go mobile-first
* Create a performance budget
* Be deliberate about loading assets, fonts and JS
* Always load 3rd party scripts async
* Make it easy for non-devs to do perfomance
* Create performance, automate resizing, automate optimizing, optimize ALL THE THINGS
* Split test aesthetics vs performance

Who is responsible for performance?

It's everyone's responsibility, a culture around performance. Changing culture is hard. One person doing it is unsustainable.

Help people "feel" your site's performance. Use web page test for before and after. Helps show for buy in.

Publish performance numbers, forces us to iterate and improve. Helps internal and external and the data isn't secret. Anyone can go and test it anyhow. If you haven't been looking, your competitors definitely are.

Motivated our dev teams to get better.

It uncovers performance improvements in areas that would have been missed. Celebrate performance heroes in all areas of the business.

Not all users are using blazing fast connections and shiny devices. We need to have empathy.

> Good performance is good design.

Addressing performance is designing with empathy.