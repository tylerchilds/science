## Resilience: Building a Robust Web That Lasts
by: Jeremy Keith

### History of communication

Discussing the origin of transmitting data, going back to horses. References lighting of beacons in LotR: Return of the King.

Optical telegraphs in France, then electrical telegraphs in England. MARCONI!

Transatlantic cable, telegraphy. Changed war and news, communicating about war.

### History of the internet

Internet doesn't really go to space, it's all cables, following the original transatlantic cable. 

Packet switching made resilient networks, in ARPANET, sending partial data (packets) rather than full files.

TCP/IP created to make various intranets interconnected. Made a dumb network to be resilient, secure. Should be able to be inplemented with two tin cans and a string.

Metcalfe's law: More people using the protocol the better. One fax machine: useless. Two fax machines, alright. N fax machines, now we're in business.

CERN created wtih World Wide Web, Tim Berners-Lee. HTTP + URLs + HTML = www

### Resilience and backwards compatability

Original HTML tags were 21 elements. SGML (Standard Generalized Markup Language)

Over 20 years, 121 elements. Still backwards compatible, due to a design decision of HTML. Basic open and closing tags.

The browser doesn't throw an error when it doesn't know tags, fault tolerant. Crucial to the design of HTML, which enables it to grow. Create new elements and old browsers will just ignore the tags.

```
<canvas>
fallback text
</canvas>
```

Not an accident, but there wasn't much thought with `<img>` and other self closing tags, so we have the alt tag, but we could have put that fallback in between open and closing img tags.

HTML design decisions force backwards compatability. New responsive images with `srcset` attr, still requires the `src` attr.

CSS also has similar compatability. The underlying pattern is always the same selector, property and value. CSS doesn't throw an error when it doesn't recognize selectors or properties or values. Very fault tolerant. When parsing, just skips what it doesn't undeerstand.

Newer methodologies, around object oriented css, have always been there, but they've only recently been discovered.

What else is laying hidden, staring back at us, waiting to be found?

Postel's law: conservative in what you send, liberal in what you accept.

Robustness principle is at the heart of HTML and CSS. They are declarative languages. State your desired outcome and the browser handles the rest. Resilient.

Programming languages are imperitive, and you don't want to have loose error handling. Javascript is in this category. Fragile.

We figure stuff out in the imperative layer, but move it into the declarative layer. Rollovers used to be JS, but now it's done with psuedo selectors in CSS.

Scary times about ten years ago with xhtml, html written as xml. xhtml2 was going to adopt the xml error handling too. Would not have been backwards compatible and would not have rendered anything if there was one error.

Now we're relying on javascript to render text on the page, why have we gone back to adopt and rely on the fragility? Murphy's Law. Aerospace physicist, never lost anyone on his watch because of this mindset.

It's a bad assumption to assume everyone has javascript. 

Car manufacturers: "We don't need to put crash test dummies in cars and crash cars. They won't be driven by crash test dummies, they'll be driven on roads and not into walls."

Web developers should take the same approach and build to secure the user.

### 3 step process to build for the web

1. Identify Core functionality
	* Not all the functionality. The most important thing, what do you want *every* user to be able to accomplish.
	* Access the news, send and receive messages, simple, share photos, etc.
2. Make that functionality available using the simplest technology.
	* You want this for the widest number of people.
	* News is just HTML. Messages: HTML, forms. Photos: images and files.
3. Enhance!
	* This is where user experience and delights and seperation comes in.
	* Layout is an enhancement, mobile first approach.
	* web fonts added, differentiation from the competition.
	* ajax, not needing a full page request. Websockets are an enhancement.
	* file api, to play around with images before processing on the server.
	* CSS filters.
	* local storage
	* All this functionality added, to enhance, but doesn't break the core functionality.
	
This process is scale free. You can do it at the full service or even at individual page levels. Or even at the level of modules, patterns.

By using this technique, you spend less time in older browsers. Then you can safely play around in the newer browsers. And this is a responsible way to tweak around with newer browsers.

#### Problems
> This is too easy

> This is too simple

Retrofitting is hard, but this is very easy to do from the start.

People said the same thing when using CSS for layout, instead of using tables.

Responsive design got the same critique. It works for simple things, _but not the complex thing, *I'm* building_

> This is too hard

It is harder at first, if you're not used to thinking this way.

### The state of affairs

nasa.gov is broken 3MB of js is required to download before seeing a single thing on the page.

"If  you build pages with the idea that parts other than html are optional, you will create a better and stronger web page." gov.uk

Instead of technical debt for whatever JS library you are using, you will build technical credit that will protect you against the unknown.

*Developer convenience vs User needs*

Developer convenience should be lower down on the stack. User needs should be more important.

Sturgeon's law: Ninety percent of everything is crud.

We used to ask, "Can we assume everyone has 640px, then 800px, then 1024px"? We always think, "Just around the corner, everything will be great."

Web design will be great when we have 216 colors, System fonts upgrade from Netscape 4, IE 6, Android 2.x, we always want more. That's how it works. 

We've got better computers than imagined by Arthur C. Clarke

Arthur C. Clarke: "Any sufficiently advanced tachnology is indistingushable from magic." [at first, but then we take it for granteed].

Tim Berners-Lee: "Cool URIs don't change."

Delay tolerant networking, interplanetary network communications.

We need to be good ancestors and build a resilient networks that last.

#### Things to research
* service worker

#### Something about a book
Enquire Within Upon Everything.



