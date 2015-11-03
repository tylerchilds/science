## CSS Grid Layout
by: Rachel Andrew

*CSS in 2015 is amazing.*

There's quite a lot of problems with current css grid layouts.

Flexbox is for a one dimensional layout. Flexbox isn't our silver bullet to cure css grids.

We don't want hacks. We want a solution.

CSS Grid Layout is a spec that' currently being worked on and was proposed by the IE team.

```
.grid{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto auto;
}

.grid-element{
  grid-column-start
  grid-column-end
  grid-row-start
  grid-row-end
  
  // alt syntax 
  grid-column: 1 / 2;
  grid-row: 1 / 2;
 
  // more alt syntax, don't do this.
  grid-area: 1 / 1 / 2 / 2;
}
```

Chrome Canary, enable experimental web platform features to play with this.

Direct children of the grid are automatically cells/items.

You can name grid lines instead of using the numbers.
You can also name areas.

Naming lines uses [brackets] for names
Naming areas uses "quotes" for names. These quotes enable "ascii art layout styles". Repeated names, span that column.

By using names areas, we get implicitly named grid lines.

The grid can be layered using the z-index property.

repeat() keyword

#### terminology
grid lines (invisible lines around the cells, like table borders) used for stating column/row spaces

grid tracks (rows?)

grid cells

grid area (collections of cells)


#### new unit

fr - fraction unit

### CSS Box Alignment Module

Properties from flexbox have been modularized and implmented in CSS grid. So justify-items and align-self are available for us!


### Grid and Accessibility

Seperation of content and presentation. We're moving things around the document flow, so accessibility concerns are raised.

Great power and responsibility.

Grid item placement and reordering must not be used as a substitute for correct source ordering.

### Subgrid

The grid is nestable, exactly as you'd expect.

There's a subgrid keyword that also lets you inherit lines from the parent grid.

Currently an at risk spec detail for level 1.

### Browser support

We'll be able to do this soon-ish. Browsers are finally moving along quickly.