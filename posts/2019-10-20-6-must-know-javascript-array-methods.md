---
title: 6 Must Know Javascript Array Methods
description: Array methods that are going to make your life so much easier.
date: '2019-10-20 08:07:25'
thumbnail: /assets/img/6-must-know-javascript-array-methods.jpg
category: JAVASCRIPT
---

Arrays are one of the most common things that you're going to use as a programmer and JavaScript has array methods that are going to make your life so much easier.

If you know nothing about Array, you can click here for [array introduction](https://frugencefidel.com/blogs/understanding-basics-of-array-in-javascript).

Today we will talk about:

* filter()
* map()
* find()
* forEach()
* some()
* every()

To start with, I have an array of items that we're going to use for all these different array methods.

```javascript
const items = [
    {name: 'Phone',     price: 500},
    {name: 'Mouse',     price: 25},
    {name: 'Computer',  price: 1000},
    {name: 'Chocolate', price: 5},
    {name: 'TV',        price: 200},
    {name: 'Glasses',   price: 100},
    {name: 'Book',      price: 10},
]
```

The first method that we're, going to talk about is the filter method

## Array filter()

Let's assume that we want to get all items in this list that are less than or equal to $100.

So we need to use the filter method to filter out everything that's not $100. 

This filter method just takes a single function that is going to have one parameter, in our case is the array 'items', and inside that function, we have a statement on whether we want to include that in the new array or not.

```javascript

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems); 

/*  output:

    0: {name: "Mouse", price: 25}
    1: {name: "Chocolate", price: 5}
    2: {name: "Glasses", price: 100}
    3: {name: "Book", price: 10}

*/
```

This filtered array method is super easy to use.

What it does is return true or false for each item and if it's true it's in the new array and if it's false it's not in the new array.

And the great thing about these methods that we're covering in this post is that they don't change the old array:

```javascript

console.log(items);  

/*  output:

    0: {name: "Phone", price: 500}
    1: {name: "Mouse", price: 25}
    2: {name: "Computer", price: 1000}
    3: {name: "Chocolate", price: 5}
    4: {name: "TV", price: 200}
    5: {name: "Glasses", price: 100}
    6: {name: "Book", price: 10}

*/
```


That's super convenient because we don't have to worry about changing the old array when we use these new array methods to create new arrays.

## Array map()

The Array map() allows you to take one array and create a new array by calling the provided function in every element.

Let's just say we want to get the name of every item, then we can get an array of the item names by using map().

```javascript

const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames); 

/*  output:

["Phone", "Mouse", "Computer", "Chocolate", "TV", "Glasses", "Book"]

*/
```

This is super convenient when you want to get the names of the object or one array and convert it into another.
There are a lot of different uses, and sometimes I find myself using all the time over, for example, using the map() for a normal 'for loop'.


## Array find()

This method allows you to find a single object in an array that satisfies the provided condition.

Here we are going to return the first item, which the name is *Computer*:


```javascript

const foundItem = items.find((item) => {
    return item.name === 'Computer'
})

console.log(foundItem)

/*  output:

{name: "Computer", price: 1000}

*/
```

## Array forEach()
This is the only method that we talked about which does not return anything.

This method can help you to loop over the *items*.


```javascript

items.forEach((item) => {
    console.log(item.name);
})

/*  output:

Phone Mouse Computer Chocolate TV Glasses Book

*/
```
forEach() is very similar to a 'for loop' but much easier since you don't have to write out the long loop syntax.

##some()

This method is a bit different than most of our other functions since instead of returning a brand-new array it actually checks if at least one of the array's items passed the condition. If positive, it returns 'true', otherwise, 'false'.

For example, I would like to know if there are expensive items in the array, greater than $200:

```javascript


const hasExpensiveItems = items.some((item) => {
    return item.price >= 200
})

console.log(hasExpensiveItems);

/*  output:

true

*/
```

##every()

The next array method every() is very similar to some() except for instead of checking for at least one item, it checks all array's item passed the condition.

Then, if we wanted to know if **all the items** are more expensive than **$1000**:

```javascript

const itemsAreExpensive = items.every((item) => {
    return item.price >= 1000
})

console.log(itemsAreExpensive);

/*  output:

false

*/
```

But if you change it to:

```javascript
const itemsAreExpensive = items.every((item) => {
    return item.price >= 5
})

console.log(itemsAreExpensive);

/*  output:

true

*/
```
That way we get true because all the items in this array are greater than $5, so everything returns true.

These are the array methods I use the most and I hope this article helps you to understand some Javascript array methods.



