# Articles

## Web Server
- Web server is a computer where the web content is stored. Basically web server is used to host the web sites

- Working of web server
    - When client sends request for a web page, the web server search for the requested page if requested page is found then it will send it to client with an HTTP response.

    - If the requested web page is not found, web server will the send an HTTP response:Error 404 Not found.

    - If client has requested for some other resources then the web server will contact to the application server and data store to construct the HTTP response.

## HTML Element
- An HTML file is made of elements. These elements are responsible for creating web pages and define content in that webpage. An element in HTML usually consist of a start tag, close tag and content inserted between them. 
```HTML
<tag name> content...... </tag name>
```
- Technically, an element is a collection of start tag, attributes, end tag, content between them.

- There are two types of HTML Elements
    - Block Level Element - These elemnts are used within body of the page. It occupies a block of space and starts in a new line. It usually has an empty line above and below the block. They can contain inline elements and other block level elements. Other examples:
    ```html
    <p></p>
    <h1></h1>
    <div></div>
    ```

    - Inline Level Element - As the name suggests are 'in-the-line'. They can start anywhere in a line. They can only contain data (like text) or other in-line elements. Other examples:
    ```html
    <em></em>
    <span></span>
    <b></b>
    ```

## Input Element
- The input tag specifies an input field where the user can enter data.

- The input element is the most important form element.

- The input element can be displayed in several ways, depending on the type attribute.

- The different input types are as follows:
```html
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
```
<input type="button"> <br/>
<input type="checkbox"> <br/>
<input type="color"> <br/>
<input type="date"> <br/>
<input type="datetime-local"> <br/>
<input type="email"> <br/>
<input type="file"> <br/>
<input type="hidden"> <br/>
<input type="image"> <br/>
<input type="month"> <br/>
<input type="number"> <br/>
<input type="password"> <br/>
<input type="radio"> <br/>
<input type="range"> <br/>
<input type="reset"> <br/>
<input type="search"> <br/>
<input type="submit"> <br/>
<input type="tel"> <br/>
<input type="text"> <br/>
<input type="time"> <br/>
<input type="url"> <br/>
<input type="week"> <br/>

## Audio Tag
- The audio tag is used to embed sound content in a document, such as music or other audio streams.

- The audio tag contains one or more source tags with different audio sources. The browser will choose the first source it supports.

- The text between the audio and audio tags will only be displayed in browsers that do not support the audio element.

- There are three supported audio formats in HTML: MP3, WAV, and OGG.

```html
<audio controls>
  <source src="random.ogg" type="audio/ogg">
  <source src="random.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

## Video Tag
- The video tag is used to embed video content in a document, such as a movie clip or other video streams.

- The video tag contains one or more source tags with different video sources. The browser will choose the first source it supports.

- The text between the video and video tags will only be displayed in browsers that do not support the video element.

- There are three supported video formats in HTML: MP4, WebM, and OGG.

```html
<video width="320" height="240" controls>
  <source src="random.mp4" type="video/mp4">
  <source src="random.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## Flexbox
- The flexbox or flexible box model in CSS is a one-dimensional layout model that has flexible and efficient layouts with distributed spaces among items to control their alignment structure ie., it is a layout model that provides an easy and clean way to arrange items within a container. Flexbox can be useful for creating small-scales layouts & is responsive and mobile-friendly.

- Take a look at all the flexbox properties: 

![](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png)

## Positioning
- The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

- There are five different position values:
    - static
    - relative
    - fixed
    - absolute
    - sticky

1. static - The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.

2. relative - The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.

3. fixed - The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial containing block established by the viewport, except when one of its ancestors has a transform, perspective, or filter property set to something other than none , or the will-change property is set to transform, in which case that ancestor behaves as the containing block. Its final position is determined by the values of top, right, bottom, and left.

4. absolute - The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.

5. sticky - The element is positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing block (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.


## CSS Box Model
- The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. It is used to create the design and layout of web pages. It can be used as a toolkit for customizing the layout of different elements. The web browser renders every element as a rectangular box according to the CSS box model. Box-Model has multiple properties in CSS. Some of them are given below: 
    - content: This property is used to displays the text, images, etc, that can be sized using the width & height property.
    - padding: This property is used to create space around the element, inside any defined border.
    - border: This property is used to cover the content & any padding, & also allows to set the style, color, and width of the border.
    - margin: This property is used to create space around the element ie., around the border area.

![](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/boxmodel-(3).png)

- Content Area: This area consists of content like text, images, or other media content. It is bounded by the content edge and its dimensions are given by content-box width and height.
- Padding Area: It includes the element’s padding. This area is actually the space around the content area and within the border-box. Its dimensions are given by the width of the padding-box and the height of the padding-box.
- Border Area: It is the area between the box’s padding and margin. Its dimensions are given by the width and height of the border.
- Margin Area: This area consists of space between border and margin. The dimensions of the Margin area are the margin-box width and the margin-box height. It is useful to separate the element from its neighbors.

## Media Query
CSS Media queries are a way to target browser by certain characteristics, features, and user preferences, then apply styles or run other code based on those things. Perhaps the most common media queries in the world are those that target particular viewport ranges and apply custom styles, which birthed the whole idea of responsive design.

```css
/* When the browser is at least 600px and above */
@media screen and (min-width: 600px) {
  .element {
    /* Apply some styles */
  }
}
```

## CSS Grid
- CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

- Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

- Take a look at grid properties:
![](https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png)