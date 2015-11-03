## Modern Layouts: Getting Out of Our Ruts
by Jen Simmons

People have stopped looking at the sidebar. Heatmaps were pretty depressing to see.

Content is our focus.

Missing the point, RWD is not just moving the sidebars around.

Panes are the new page, but the content is each pane is super simple.

Web design used to be really punk rock. Crazy designs, poor alignment, no convention.

> The medium shapes the medium

There's a world of graphic design that's older than the web.

Magazine and print spread is much different from web. Vogue does beautiful magazine spreads, intricate photos, unique text placement and alignment. Then it just SHITS it out onto a webpage.

1. Layout Should serve the conent.

We can learn a lot from magazine design. We've fought long and hard that the web is not print, however, we can learn a lot from our roots in magazine and the print medium.

### CSS

#### Shapes

Let's get crazy up in here. Mind-blowing and exciting

Float an image left and then BOOM: `shape-outside: circle;

CSS Shapes, Level 1 March 2014 spec. Good old fallbacks.

labs.webahead
jensimmons/theweb

CSS Shapes editor
Masks can be used to point to a URL

Bee poem.

shape-inside will be coming later.

#### Columns

column-count: n;

OR

column-width: x;
column-gap: m;

Very well supported currently.

#### Regions

Content flowing from one section into another.

Not currently supported, like, at all.

### Viewport Units

Paper is always the same size. Full bleed. The web is fluid and doesn't have that luxury.

vh - viewport height
vw - viewport width
vmin - smaller viewport number
vmax - larger viewport number

Essentially allows for "bleeds" on the web.

100vh is perfect height of the viewport.

### Grids

Specification that's coming, it's a working draft.

Rachel Andrew is talking a lot about it and more about it tomorrow.

People should stop using outsourced grid layout code.

Stuck with floats for now.

Grid system is the art of the thing. Always 12 or 16 columns currently.

#### Dynamic grids: 

Use odd numbers for columns. Make column widths be different sizes, maybe golden ratios.

### Closing comments

When? Why did you tell me what I can't use?

<http://dowebsitesneedtolookexactlythesameineverybrowser.com>

Let's go back to magazines and the web.

We need to design on a dynamic canvas, we don't know how big screen sizes are.

Developers should code up some examples and show it off to the designers. They'll get excited.

5 years from now our current grids and layouts will look super old and "I can't believe we used to write that"

> The most dangerous phrase in the language is 'We've always done it this way.' 
- Grace Hopper

### CSS to dig further into


shape-outside
shape-inside (in progress)
column-count
column-width
column-gap
display: flex;
align-items;
justify-content;
exclusions
fragmentation
figures
overflow
round