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

## Challange 

> create-react-app 06-challange
> erase useless files
> yarn add bootstrap
> yarn add axios
> yarn add formik
> yarn add yup




