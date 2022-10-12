import React from "react";
import Sidebar from "./Sidebar";
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>Introduction to CSS</u></h1>

      <tr><h2 align="left">What is CSS?</h2>
          <p>CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, 
            layout, and fonts, thus making our web pages presentable to the users.</p>
          <p>CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. 
             Now let’s try to break the acronym:</p>
          <li> Cascading: Falling of Styles</li>
          <li>Style: Adding designs/Styling our HTML tags</li>
          <li> Sheets: Writing our style in different documents</li>
      </tr>

      <tr><h2 align="left">CSS History</h2>
          <li>1994: First Proposed by Hakon Wium Lie on 10th October</li>
          <li>1996: CSS was published on 17th November with influencer Bert Bos</li>
          <li>Later he became co-author of CSS</li>
          <li>1996: CSS became official with CSS was published in December</li>
          <li>1997: Created CSS level 2 on 4th November </li>
          <li>1998: Published on 12th May</li>
      </tr>

      <tr><h2 align="left"> CSS Editors</h2>
          <p>Some of the popular editors that are best suited to wire CSS code are as following:</p>
          <ol>
            <li>Atom</li><li>Visual Studio Code</li>
            <li>Brackets</li><li>Espresso(For Mac OS  User)</li>
            <li>Notepad++(Great for HTML & CSS)</li><li>Komodo Edit (Simple)</li>
            <li>Sublime Text (Best Editor)</li>
          </ol>
      </tr>

      <tr><h2 align="left"> CSS Syntax</h2>
          <img src={image1} alt="image1" align="left"/></tr><br/>
          <tr><li>Selector: selects the element you want to target</li>
          <li>Always remains the same whether we apply internal or external styling </li>
          <li>There are few basic selectors like tags, id’s, and classes</li>
          <li>All forms this key-value pair</li>
          <li>Keys: properties(attributes) like color, font-size, background, width, height,etc</li>
          <li>Value: values associated with these properties</li>
          </tr>
          
      <tr><h2 align="left">CSS Comment</h2>
          <li>Comments don’t render on the browser</li>
          <li>Helps to understand our code better and makes it readable.</li>
          <li>Helps to debug our code</li>
          <li>Two ways to  comment:1.Single line</li><br/>
          <img src={image2} alt="image2" align="left"/></tr>
          <tr><br/>
          <li>Here is how to comment out multiple lines:</li><br/>
          <img src={image3} alt="image3" align="left"/>

      </tr>

      <tr><h2 align="left"> CSS How-To </h2>
      <p>There are 3 ways to write CSS in our HTML file</p>
      <li>Inline CSS</li><li>Internal CSS</li><li>External CSS</li>
      </tr>

      <tr><h3 align="left">  Inline CSS</h3>
      <p>Before CSS this was the only way to apply style.Not an efficient way to write as it has a lot of redundancy.
         Self-contained,Uniquely applied on each element.The idea of separation of concerns was lost.</p>
         <li>Example:</li><br/>
         <img src={image4} alt="image4" align="left"/></tr>
        <tr><h3 align="left"> Internal CSS</h3>
         <p>With the help of style tag, we can apply styles within the HTML file.Redundancy is removed.
          But the idea of separation of concerns still lost.Uniquely applied on a single document</p>
          <img src={image5} alt="image5" align="left"/></tr>

        <tr><h3 align="left">  External CSS</h3>
        <p>With the help of <b>link</b> tag in the head tag, we can apply styles.Reference is added File saved with .css extension
            Redundancy is removed.The idea of separation of concerns is maintained.Uniquely applied to each document</p>
            <img src={image6} alt="image6" align="left"/></tr>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;