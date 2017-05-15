# screen-reader-tags

This is a node.js program that parses exixiting HTML documents and replacesnon-distinguishable links with appropriate lables your specifiy. The labels are generally of the sr-only variety because the layouts make sense to a user who can see well (because of the visual hierarchy) but can become confusing for visually impaired useres and people who use screen readers.

I will make a number of flavors with different use cases.

The first use case a list of items with links using numbers as anchor text. E.G.:

- Red Elderberry (Sambucus racemosa) _1_ _2_ _3_
- Red Huckleberry (Vaccinium parvifolium) _1_ _2_ _3_
- Red Osier Dogwood (Cornus stolonifera) _1_ _2_

The second use case is a table with a date in the first column and repetitive link text to materials.

|Date   |Agenda|Minutes|
|-------|------|-------|
|17Feb17|_Agenda_|_Minutes_|
|24Feb17|_Agenda_|_Minutes_|
|3Mar17|_Agenda_|_Minutes_|
