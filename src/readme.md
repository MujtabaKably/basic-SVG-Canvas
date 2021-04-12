Appknit SVG Canvas PoC 1, using all SVG approach(similar to draw.io)

To Edit initial data you can edit src/config/initData.js.
Only supported types are 'circle' and 'rectangle.

On the PoC webpage, DoubleClick the element to select and show options.
Drag and Move works normally Click + Move.

NOTE:
Currently using no libraries for SVG.

More PoC info.
Entire background page is a SVG.
Each and every shape is added, into the existing SVG surronded by a <g />.
with a bit more work on the PoC, it is possble implment DragDrop, Mouse Resize.
Though creating smart pathing will be considerably more work.

PS: there will have to be better performance optimizations as well.
