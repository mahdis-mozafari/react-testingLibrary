// explain the difference between getBy, findBy, queryBy:z

//getBy=Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found

//queryBy=Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found

//findBy =Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. 