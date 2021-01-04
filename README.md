# Air Person Finder [See Live](https://unachoza.github.io/Air-Person-Finder)

## How to Run App

1. Clone this repo
2. Run npm install
3. Run npm start

## Build Criteria

- [ ] Polish

  ⋅⋅\* With User Experience in mind, I added a loading spinner to signal to the user something is happening. As research results return, I added a crescendo effect for each card.

  ⋅⋅\*General annimations: When hovering over cards, they grow in size and highlight. Input onfocus, the border changes color to highlight this element is active.

- [ ] Responsiveness

  ⋅ Media Queries were added to cater to iphone 5 / 320px reducing text size, and card size. I think it's important that more cards will be displayed on the screen before the user needs to scroll, to give the user indication there is more than two cards (what was visible before media queries)

- [ ] SEO friendliness

  ⋅ I used some semantic markup with main and header. I need to look into this furthur.

  ⋅ Used [Meta tag generator](https://www.seoptimer.com/meta-tag-generator) to cover all my bases there.

  ⋅ Added canonical tag to make sure the page is indexed just once.

  ⋅ Included open graph meta tags so the site is friendlier to share / SEO likes this.

  ⋅ The index.html page is the what google uses to index pages. My understanding is sever side rendering would help here. When using client side rendering, the robots often index and empty root div. To address this I would look into Next.js

- [ ] Accessibility

  ⋅ To address accessibility I included semantic tags help with screen readers, alt tags for images, and labels for inputs.

  ⋅ The site can be tabbed through if user doesn't have a mouse.

  ⋅ Contrast meets accessibility requirements.

  \*This is very superficial knowledge of accessability plus I ran used lighthouse and it passed. I will continue to work on this

## Design Patterns

## Technical Decisions

## Scaling

## Process

## Demo

![Air Person Finder Demo](https://res.cloudinary.com/dh41vh9dx/image/upload/v1609780351/AirDemo.gif)

## Online Tools

## Summary

## Future iterations / What I would do better

-Implement sass, I have two annimations that are repetitive. With sass, I can convert them into loops and itterate through
-More Test / Integration tests. I'm still learning tests, currently I've tested a few pure functions. I wrote descriptions for some other tests that I will continue to research

- [ ] Polish

  Time permitting, try to find ways to enhance the experience of the site with loading states, animations, and design enhancements.

- [ ] Responsiveness

  We are purposefully not providing a mobile design because we'd like to see what you can come up with when designs haven't been given. Use your best judgment on how you think the page would respond at smaller sizes. The page should be able to be resized down to `320px` wide without compromising the UX.

- [ ] SEO friendliness

  Use best practice semantic markup and structured data.

- [ ] Accessibility

  Think about screen readers and users with any disabilities. Follow the best practices as set forth and discussed by [The A11Y Project](https://a11yproject.com/).

- [ ] Performance

  The faster your page loads and performs while using it, the better.

- [ ] Testing

  Tests proving your application works make us happy. Integration tests in particular!

- [ ] Code Structure

  We will be looking at how you structured your React components. We strongly encourage using TypeScript as it helps a new developer (like the person who will be reviewing your code) understand how your components work
