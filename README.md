# screen-reader-tags

This is a node.js program that parses exixiting HTML documents and replacesnon-distinguishable links with appropriate lables your specifiy. The labels are generally of the sr-only variety because the layouts make sense to a user who can see well (because of the visual hierarchy) but can become confusing for visually impaired useres and people who use screen readers.

I will make a number of flavors with different use cases.

The first use case a list of items with links using numbers as anchor text. E.G.:

- Red Elderberry (Sambucus racemosa) 1 2 3
- Red Huckleberry (Vaccinium parvifolium) 1 2 3
- Red Osier Dogwood (Cornus stolonifera) 1 2
