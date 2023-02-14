const questions = [
    /*esto es HTML*/
    {
    question: "What does HTML stand for?",
    options: [
        { answer: "HyperText Markup Language", isCorrect: true },
        { answer: "HyperTextual Making Lists", isCorrect: false },
        { answer: "HyperText Markup Links", isCorrect: false },
        { answer: "HyperText Marks Language", isCorrect: false },
    ],
},
{
    question: "How can you start an HTML file?",
    options: [
        { answer: "<html>", isCorrect: false },
        { answer: "<!DOCTYPE html>", isCorrect: true },
        { answer: "<head>", isCorrect: false },
        { answer: "<body>", isCorrect: false },
    ],
},
{
    question: "The <head> and <body> tags are essential in this files. The <head> tag is a container for metadata (data about data) and the <body> contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. Based on this, what are HTML tags?",
    options: [
        { answer: "Instructions that tell a web browser how to format text.", isCorrect: true },
        { answer: "Structural elements used to identify the footer of a page", isCorrect: false },
        { answer: "Ways to give structure to the webpage", isCorrect: false },
        { answer: "Ways to style a webpage", isCorrect: false },
    ],
},
{
    question: "What are Attributes in HTML?",
    options: [
        { answer: "Properties that style a webpage", isCorrect: false },
        { answer: "Ways to import links", isCorrect: false },
        { answer: "Properties you can add to an HTML tag", isCorrect: true },
        { answer: "Properties that change the main structure of the page", isCorrect: false },
    ],
},
{
    question: "Which tag declares a paragraph?",
    options: [
        { answer: "<ul>", isCorrect: false },
        { answer: "<a>", isCorrect: false },
        { answer: "<p>", isCorrect: true },
        { answer: "<li>", isCorrect: false },
    ],
},
{
    question: "Which tag declares the size of a heading?",
    options: [
        { answer: "<h>", isCorrect: true },
        { answer: "<hs>", isCorrect: false },
        { answer: "<s>", isCorrect: false },
        { answer: "<hr>", isCorrect: false },
    ],
},
{
    question: "Which tag lets you insert an image?",
    options: [
        { answer: "<video>", isCorrect: false },
        { answer: "<audio>", isCorrect: false },
        { answer: "<img>", isCorrect: true },
        { answer: "<im>", isCorrect: false },
    ],
},
{
    question: "Which tag lets you define a hyperlink?",
    options: [
        { answer: "<a>", isCorrect: true },
        { answer: "<link>", isCorrect: false },
        { answer: "<li>", isCorrect: false },
        { answer: "<l>", isCorrect: false },
    ],
},
{
    question: " How do you add a line break in the HTML file?",
    options: [
        { answer: "<lb>", isCorrect: false },
        { answer: "<break>", isCorrect: false },
        { answer: "<b>", isCorrect: false },
        { answer: "<br>", isCorrect: true },
    ],
},
{
    question: "Which tag defines a thematic break in an HTML page?",
    options: [
        { answer: "<tb>", isCorrect: false },
        { answer: "<br>", isCorrect: false },
        { answer: "<hr>", isCorrect: true },
        { answer: "<theme>", isCorrect: false },
    ],
},
/*esto es Python*/
{
    question: "Which function prints the string 'Hello World'?",
    options: [
        { Answer: "show()", isCorrect: false },
        { Answer: "printf()", isCorrect: false },
        { Answer: "print()", isCorrect: true },
        { Answer: "console.log()", isCorrect: false },
    ],
},
{
    question: "Which function adds two numbers?",
    options: [
        { Answer: "add()", isCorrect: false },
        { Answer: "sum()", isCorrect: true },
        { Answer: "adds()", isCorrect: false },
        { Answer: "count()", isCorrect: false },
    ],
},
{
    question: "Which function allows user input?",
    options: [
        { Answer: "add()", isCorrect: false },
        { Answer: "type()", isCorrect: false },
        { Answer: "put()", isCorrect: false },
        { Answer: "input()", isCorrect: true },
    ],
},
{
    question: "Which function shows the parameters type of data?",
    options: [
        { Answer: "data()", isCorrect: false },
        { Answer: "type()", isCorrect: true },
        { Answer: "typeof()", isCorrect: false },
        { Answer: "types()", isCorrect: false },
    ],
},
{
    question: "Which function Returns the boolean value of the specified object?",
    options: [
        { Answer: "boo()", isCorrect: false },
        { Answer: "boolean()", isCorrect: false },
        { Answer: "bool()", isCorrect: true },
        { Answer: "bln()", isCorrect: false },
    ],
},
{
    question: "Which function returns a dictionary?",
    options: [
        { Answer: "dict()", isCorrect: true },
        { Answer: "dictionary()", isCorrect: false },
        { Answer: "todic()", isCorrect: false },
        { Answer: "dic()", isCorrect: false },
    ],
},
{
    question: "Which function formats a specified value?",
    options: [
        { Answer: "form()", isCorrect: false },
        { Answer: "type()", isCorrect: false },
        { Answer: "format()", isCorrect: true },
        { Answer: "formatof()", isCorrect: false },
    ],
},
{
    question: "Which function returns the id of an object?",
    options: [
        { Answer: "id_()", isCorrect: false },
        { Answer: "ids()", isCorrect: false },
        { Answer: "toid()", isCorrect: false },
        { Answer: "id()", isCorrect: true },
    ],
},
{
    question: "Which function returns an integer number?",
    options: [
        { Answer: "int()", isCorrect: true },
        { Answer: "intr()", isCorrect: false },
        { Answer: "get_int()", isCorrect: false },
        { Answer: "integer()", isCorrect: false },
    ],
},
{
    question: "Which function returns the length of an object?",
    options: [
        { Answer: "length()", isCorrect: false },
        { Answer: "len()", isCorrect: true },
        { Answer: "show_len()", isCorrect: false },
        { Answer: "strlen()", isCorrect: false },
    ],
},
/*esto es CSS*/
{
    question: "How can you select a css class?",
    options: [
        { Answer: ".class", isCorrect: true },
        { Answer: "/class", isCorrect: false },
        { Answer: "class:", isCorrect: false },
        { Answer: "class.", isCorrect: false },
    ],
},
{
    question: "Which element defines the text font size?",
    options: [
        { Answer: "width:", isCorrect: false },
        { Answer: "font-size:", isCorrect: true },
        { Answer: "length:", isCorrect: false },
        { Answer: "size:", isCorrect: false },
    ],
},
{
    question: "Which element defines the text font type?",
    options: [
        { Answer: "type:", isCorrect: false },
        { Answer: "font-type:", isCorrect: false },
        { Answer: "font:", isCorrect: false },
        { Answer: "font-family:", isCorrect: true },
    ],
},
{
    question: "Which element defines an element text color?",
    options: [
        { Answer: ".color", isCorrect: false },
        { Answer: "text:", isCorrect: false },
        { Answer: "color:", isCorrect: true },
        { Answer: "text-color:", isCorrect: false },
    ],
},
{
    question: "Which element specifies how an element is displayed on screen?",
    options: [
        { Answer: "display:", isCorrect: true },
        { Answer: "show:", isCorrect: false },
        { Answer: ".display", isCorrect: false },
        { Answer: "display-element:", isCorrect: false },
    ],
},
{
    question: "Which element sets the extra spacing between letters?",
    options: [
        { Answer: "space:", isCorrect: false },
        { Answer: "letter-spacing:", isCorrect: true },
        { Answer: "letter-break", isCorrect: false },
        { Answer: "spacing:", isCorrect: false },
    ],
},
{
    question: "Which element sets the padding on all four sides of the element?",
    options: [
        { Answer: "padding-all:", isCorrect: false },
        { Answer: "padding:", isCorrect: true },
        { Answer: "padding-top:", isCorrect: false },
        { Answer: "padding-bottom:", isCorrect: false },
    ],
},
{
    question: "Which element sets the horizontal alignment of inline content?",
    options: [
        { Answer: "text-alignment:", isCorrect: false },
        { Answer: "align:", isCorrect: false },
        { Answer: "text-align:", isCorrect: true },
        { Answer: "alignment:", isCorrect: false },
    ],
},
{
    question: "Which element defines the transition between two states of an element?",
    options: [
        { Answer: "transition-delay:", isCorrect: false },
        { Answer: "transition:", isCorrect: true },
        { Answer: "transition-property:", isCorrect: false },
        { Answer: "transition-both:", isCorrect: false },
    ],
},
{
    question: "Which element specifies the width of an element?",
    options: [
        { Answer: "width:", isCorrect: true },
        { Answer: "height:", isCorrect: false },
        { Answer: "width-size:", isCorrect: false },
        { Answer: "size:", isCorrect: false },
    ],
},
]
export default questions;