# Air Person Finder [See Live](https://unachoza.github.io/Air-Person-Finder)

## How to Run App

1. Clone this repo
2. Run npm install
3. Run npm start

## Demo

![Air Person Finder Demo](https://res.cloudinary.com/dh41vh9dx/image/upload/v1609780351/AirDemo.gif)

## Summary

## Build Criteria

- [ ] Polish

  ⋅ With User Experience in mind, I added a loading spinner to signal to the user something is happening. As research results return, I added a crescendo effect for each card.

  ⋅General annimations: When hovering over cards, they grow in size and highlight. Input onfocus, the border changes color to highlight this element is active.

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

  \*This is very superficial knowledge of accessability plus I ran used lighthouse and it passed. I will continue to work on this\*

- [ ] Performance

  ⋅ \*Currently i'm not using the mockdata fetch, it was blocked, The data I am using doesn't have 3K results. If it did, I would address performance issue using memoization. Perhaps doing a mini fetch of 10 items, display those (what would be visible on initial render), then fetch the rest (code splitting)\*

  ⋅ Using Next.js would provide a CDN

- [ ] Testing
      ⋅ I have incorporated a few unit tests. Currently my code coverage is 62.5%. I will work on this

- [ ] Code Structure
      ⋅ I'm using Directory structure for my Architecture Pattern

  ⋅ Written in Typescript :)

## Technical Decisions

- I chose to react hooks over class components because it scales better, is cleaner to read, useEffect can handle most of component lifecycle methods which keeps logic organized.

## Future iterations / What I would do better

- Implement sass, I have two annimations that are repetitive. With sass, I can convert them into loops and itterate through

- More Test / Integration tests. I'm still learning tests, currently I've tested a few pure functions. I wrote descriptions for some other tests that I will continue to research

- To handle future scaling, I would implement Redux to maintain unidirectional data flow, organization, single source of truth/state. I would deploy with Next.js. I would spend more time with my memoization, because currently, I think it needs to be set to local storage, but i'm not sure. I would look into image optimization as well.
