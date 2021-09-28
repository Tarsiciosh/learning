# Recommended React Toolchains (Official Site) 

## Create React App
- > npx create-react-app 00-create-react-app
- > cd 00-create-react-app
- > npm start or yarn start

## Next.js 
- > npx create-next-app 03-nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter" 
- > cd 03-nextjs-blog
- > npm run dev

## Adding Bootstrap 5 to Next.js
- > npm i @popperjs/core
- > npm install bootstrap@next

(_app.js)
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here

import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

  return( 
    <>
      <Head>
        meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      Component {...pageProps} />
    </>
  )
}

## Installing grey matter (parse metadata in markdown files)
- > npm install gray-matter

## Miscelaneous
> You have to be careful about the meaning of "this" in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

> in chrome to see the command windows:
> Cmd + shift + p 

what does it means polyfills?

## To clone a repository in github
- > cd github
- > mkdir react
- > (copy the project to nextjs-blog)

> git init
> git add .
> git commit -am "adding file"
> git branch -M main
> git remote add origin https://github.com/tarsiciosh/nextjs-blog.git
> git push -u origin master

(to change the branch)
> git branch ( to see the branches)
> git checkout -b main (create an switch to main)
> git push -f origin main (will override the remote branch)

## install eslint-plugin-react-hooks

## Formik tutorial
> cd 04-formik
> cd src
> rm -f *
> copy the files from the tutorial page: styles.css and index.js
> yarn add yup

## Boostrap with create-react-app
> create the app
> remove unnsesesary items
> npm i bootstrap@5.0.0-alpha3

(src.index)
import "bootstrap/dist/css/bootstrap.min.css";

## Learning Axios
> yarn add axios

## Challenge 

> create-react-app 06-challange
> (erase useless files)
> yarn add bootstrap
> yarn add axios
> yarn add formik
> yarn add yup
> yarn add react-router-dom

## from github page

### create a new repository on the command line
echo "# challange" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Tarsiciosh/challange.git
git push -u origin main

## push an existing repository from the command line
git remote add origin https://github.com/Tarsiciosh/challange.git
git branch -M main
git push -u origin main

## how to create a development brach
git branch development
git checkout development
git push -u origin development

### how to merge from develpment to main
(on branch development) git merge main
git checkout main
git merge development 


## 07 CONTEXT
instead of using context sometimes it is better to use "component composition"

## GIT class from CS50W

git clone <url>
touch hello.html (create the file)
code . //opens the file
git add hello.html (add the file) 
git commit -m "first commit" 
git status (shows the status)
git push
open hello.html (opens the file in a browser)
git commit -am "first commit" (add and commit shorthand)
git push 
(... did some changes in github site)
git pull

(merge conflict)
a=1
<<<< HEAD
b=2 (your changes)
===
b=0 (remote changes)
>>>> 5765c64657f234 (conflicting commit hash)
c=3

(... fix the merge coflict)
git commit -am "fix merge conflict"
git push

git log (log all commits)
git reset --hard <hash commit>
git reset --hard origin/master

git branch (shows in which branch you are)
git checkout -b style (creates and moves to style branch)
git commit -am "Move style properties"
git checkout master
git commit -am "remove exclamation" (same line)
git merge style 

(merge conflict)

(... fix merge conflict)

Github feactures 

- fork (own version of the respository)ç
- pull request (when you have something to add)
- github pages


## Jest

```
yarn add --dev jest
````

(sum.js)
```javascript
function sum(a, b) {
  return a + b
}
module.exports = sum
```

(sum.test.js)
```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

(package.json)
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
<br/> <br/>

## Refresh on CSS

### Element selector: 
```html
<p>Hello</p>
```
```css  
p {
  text-align: center;
  color: red
}
```

### Id selector:
```html
<p id="para1">Hello</p>
```
```css
#para1 { 
  text-align: center;
  color: red
}
```

### Class selector:
```html
<p class="center">
```
```css
.center {
  text-align: center;
  color: red 
}
```

### Elements with a particular class:
```css
p.center {
  text-align: center;
  color: red 
}
```

### Element referring to more than one class:
```html
<p class="center large">This paragraph refers to two classes.</p>
```

### Universal selector:
```css
* {
  text-align: center;
  color: blue;
}
```

### Grouping selectors:
```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

### Shadow:
(horizontal-shadow vertical-shadow blur xx color )
```css
div {
  box-shadow: 10px 10px 5px 0 grey;
}
```

### Overflow:
The CSS overflow property controls what happens to content that is too big to fit into an area.

- **visible** - Default. The overflow is not clipped. The content renders outside the element's box
- **hidden** - The overflow is clipped, and the rest of the content will be invisible
- **scroll** - The overflow is clipped, and a scrollbar is added to see the rest of the content
- **auto** - Similar to scroll, but it adds scrollbars only when necessary

### Boxsizing:
The CSS box-sizing property allows us to include the padding and border in an element's total width and height. Applying this to all elements is safe and wise

```css
* {
  box-sizing: border-box;
}
```

### Media Queries:
```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```
#### Media Types
 value | description
 --|--
 **all** |	Used for all media type devices
 **print** |	Used for printers
 **screen** |	Used for computer screens, tablets, smart-phones etc.
 **speech** |	Used for screenreaders that "reads" the page out loud

#### Example
```css
/* Set the background color of body to tan */
body {
  background-color: tan;
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
```

### Flexbox
```css
.flex-container {
  display:flex;
}
```
The flex container properties are:

- **flex-direction** Defines in which direction the container wants to stack the flex items. (e.g. column, column-reverse, row, row-reverse)
- **flex-wrap** Specifies whether the flex items should wrap or not. (e.g. wrap, nowrap, wrap-reverse) 
- **flex-flow** A shorthand property for setting both the flex-direction and flex-wrap properties. (e.g. row wrap)
- **justify-content** Is used to align the flex items. (e.g. center, flex-start, flex end)
- align-items
- align-content

<br/> </br>

# Markdown github guide

text **bold** and *italic* [link to google](http://google.com)

__bold too__ _italic too_ 

1. one 
2. two

* one
* two

- one
- two
  - sub 1
  - sub 2
  
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

![Github logo](/images/logo.png)
Format_ ![Alt Text](url)

# header XL
## header L
### header M
#### S
..

> this is a qoute 
> by tsh

This an example of a small peace of code, this variable: `let example = true` should be true

### Example with 4 times spaces:
    
    if (isAwesome){
     return true
    }

### Example with github code fencing:
```
if (condition){
  return true
}
```

## Example with syntax highlighting:
```javascript
if (condition){
  return true
}
```

## Task list example (github)

- [x] this is a complete item
- [ ] this is an incomplete item


## Table example:

First header | Second header
-------------|--------------
content cell 1 | content cell 2
content in the first column | content in the second column

## Strikethrough example:
~~this~~


## Emoji example:

I like to receive :hugs:


<br>

## 11-STYLES
```
npm create-react-app 11-styles
```
```
yarn add bootstrap
````
```    
yarn add node-sass
```

Delete all unnecessary stuff

```javascript
(src/index.js)
import 'bootstrap/dist/css/bootstrap.css'
```
Create a file src/custom.scss
```javascript
// Override default variables before the import
$body-bg: #000;

// Import Bootstrap and its default variables
@import '~bootstrap/scss/bootstrap.scss';
```
```javascript
(src/index.js)
import './custom.scss'
```

because of compatibilities issues:
```
yarn remove node-sass
```
```
yarn add node-sass@5
```


## 12-Redux Template

```python
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

 ## 13-Redux Walkthrough

```
yarn add @reduxjs/toolkit react-redux
```

- [x] create the store
- [x] provide redux store to react
- [x] create a redux state slice
- [x] add slice reducers to the store
- [x] use state and actions in react components


## Alkemy GIT course

> git config --global user.name "Tarsicio Spraggon"
> git config --global user.email "tarsiciosh@gmail.com"

> git init (already created folder) 

> git clone https://github.com/... (clones a project)

> git status:

> your branch is up to date with 'origin/develpment' 
(is up to date with the "internet")

> git add -A (add all files)

> git add . (all from there)

> git add -p (see all changes - **recommended way**)

> git commit -m 'description of the commit'

> git checkout --app/controller (example to remove file that was not commited - file with a commented part)

> git log

> git push origin master (push to the *internet* (origin) my *branch* (master))

### Example of git rm

> erase file from os

> git add deletedFile (add the changes )

> git status

```
changes to be commited:

  deleted: deletedFile
```
> git commit -m 'deletedFile deleted'

> git checkout 70298437509823740958720394875d (before the delete) 

> (the file is back)

> git checkout master (back to last commit)

> git rm someFile (automatically delete the file and add it)

> git reset HEAD someFile (go back to previous state)

> git checkout someFile (nedeed to restore the file)


### VS code features

> add some change

> click on the file (show changes)

> git diff fileName (behind the scenes)

> arrow to ?

### Branches

> git branch payments

> git status 

on branch master

> git checkout payments

> (create new files from ruby - rail g scaffold payments)

> git add -p

> (check change per change)

> git add -A

> git commit -m "payment scaffold files"

> git push origin payments

[new branch] payments -> payments

### Pull Request

when you do a commit bitbuckt gives you a link to do the poll request

> (bitbucket page)

> title: ...

> summmary: 
> - payment controller 
> - model 
> - migration ...

Evidence:

(imgage of the tested feature)

> reviewer: ... <br>
> [x] delete branch after merge

> git commit -m 'Pr Fixes' (minor fixes) 

> git push origin payments

> (mentor check and aproves)

> source: payments

> destination: master

> squash (delete all commits and create only one)

> close source branch

> PR fixes must be deleted only important commits must be present

> git status

Your branch is behind 'origin/master' by 1 commit

> git pull origin master

(conflict test)

> git checkout -b clients-payments (create and checkout all in one)

change code

> git add -p

> git commit -m 'payments added to client'

> git checkout master

change code

> git add -p

> git commit -m 'tiny client refactor'

> git push origin master

> git checkout client-payments

> git push origin clients-payments

(in bitbuket create pull request)

source: clients-payments
destination: master

title

description:
Summary 

- Paypal payment add client
- Payments service added
- Vat logic updated in client

Reviewers 

delete branch

> git checkout master

> git pull origin master (important)

> check who did that change

> git checkout clients-payments

> git merge master

> gits status

> ckeck errors

> cat app/..

> it is important to pull master regularly 

> git commit -m 'merge from master'

> git push origin client-payments

(back to pull request in bitbucket)

reviewer approves

squash

> merge

### diferents commit methods

merge vs rebase

it also another way


(something recomendable)
> git merge -abort


always make a pull before git branch

alway do git add -p 

alway commits in english

small commits. it is better to do more commits with small changes than one big commit

check conflicts with the autor 

never git push -f

its is better to do:

git push --force-with-lease

detects if there is a commit added and inform you