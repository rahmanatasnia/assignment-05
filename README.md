# Question: 1
## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer:
getElementById is used when we want a single element by its id. Though ids are unique on a page, it will always return just one element. On the other hand getElementByClassName select all the elemnts with the given class name. I can use querySelector with any CSS-style selector, like an id, a class. But it only gives us the first element it finds. On the other hand if I want all the matching elements with a CSS selector, then I have to use querySelectorAll.


# Question: 2
## How do you create and insert a new element into the DOM?

### Answer:
To create and insert a new element into the DOM I first create it with document.createElement(), then add some content, and finally insert it into the page using method like appendChild().


# Question: 3
## What is Event Bubbling and how does it work?

### Amswer:
Evenet bubbling means that when an event happens on an element, it doesn't just stay there. The event first happens on that element, then moves up to its parent, then to the parent's parent, and keep going until it reaches the top of the page. Like clicking a "button" inside a dive....the button will reacts first, then the div, then the body, and so on.


# Question: 4
## What is Event Delegation in JavaScript? Why is it useful?

### Answer:
Event delegation is when I put one eventListener on a parent element to handle events on its child elements. It's useful because I don't need to add separate listener to every child, and it also work for new elements addedd later.


# Question: 5
## What is the difference between preventDefault() and stopPropagation() methods?

### Answer:
preventDefault() stops tthe browser from doing its normal action, like opening a link or submitting a form. stopPropagation() stops the event from moving up to parent elements, so only the element I clicked reacts.
