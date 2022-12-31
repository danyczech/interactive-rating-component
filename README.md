# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/screenshot_rating.jpg)
![](./design/screenshot_thank.jpg)

### Links

- Solution URL: [https://danyczech.github.io/interactive-rating-component/](https://danyczech.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Sass
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

The JavaScript part was quite short at the end. One simple if statement gives only one rating at the end.

```js
rating_points.forEach((point) => {
  point.addEventListener("click", (e) => {
    //every time a point is clicked, this checks if something else was selected before and if yes, then it removes it from checked
    const active = document.querySelector(".checked");
    if (active) active.classList.remove("checked");
    //puts the checked class on the clicked number & stores the value in rate
    e.target.classList.add("checked");
    rate = e.target.textContent;
  });
});
```

To center everything it seems to be good to use flex display + align-items & justify-content with the value center.

```css
span {
  background-color: $neutral-dark-secondary;
  color: $neutral-light;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Continued development

It will be interesting to try this in React. I have to learn it soon :-)

### Useful resources

- [innerText vs. textContent](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/) - What is the difference between innerText and textContent in JavaScript.

## Author

- LinkedIn - [Danyczech](https://www.linkedin.com/in/danyczech/)
- Frontend Mentor - [@danyczech](https://www.frontendmentor.io/profile/danyczech)
