import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section className='blogs'>
            <div>
            <h1>Context API - </h1>
            <p>
                01. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. <br />
                02. React Context API is a way for a React app to effectively produce global variables that can be passed around. <br />
                03. React Context API is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. <br />
                04. Context API is a new feature added in React that allows one to share state across the entire app lightly and with ease.
            </p>
            </div>
            <div>
            <h1>Semantic Tag - </h1>
            <p>
                Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a [p - tag] indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as [b-tag] and [i-tag] are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.

                Examples of semantic HTML tags include: <br />
                01. Header tags [h1 through h6] <br />
                02. [blockquote] <br />
                03. [code] <br />
                04. [em]
            </p>
            </div>
            <div>
            <h1> Difference Inline, Inline-Block and Block Elements -</h1>
            <p>
               <h3> Inline :</h3> Displays an element as an inline element. Any height and width properties will have no effect. The display property specifics the display behavior of an element. It is a must know for controlling the layout of an element. There is a bunch of property values. But let us start off with the essential inline.This one displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects. <br />

                <h3>Inline-Block :</h3> Displays an element as an inline-level block container. You CAN set height and width values. It is essentially the same thing as inline, except that you can set height and width values. <br />

                <h3>Block :</h3> So far, we talked about inline. Now let's switched to the opposite of it, block. Remember inline elements appears on the same line. Well, block starts on a NEW line and takes up the full width available. So that means block elements will occupy the entire width of its parent element.
            </p>
            </div>
        </section>
    );
};

export default Blog;