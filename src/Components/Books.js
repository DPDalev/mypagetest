import React from 'react'
import jsbook from './../images/JavaScript-Programming-Basics-Book-Cover.png'

const Books = () => (
    <div>
        <section>
            <article>
                <h2>Programming basics with JavaScript</h2>
                <a href='https://nakov.com/blog/2018/12/19/the-free-book-programming-basics-javascript-published-officially/' target='blank'>JavaScript Book</a>
                <img src={jsbook} alt='jsbook'></img>
            </article>
            
            <article>
                <h2>Programming basics with Java</h2>
                <a href='https://nakov.com/blog/2019/01/14/free-book-programming-basics-with-java-nakov-softuni/' target='blank'>Java Book</a>
                
            </article>
        </section>
    </div>
)

export default Books