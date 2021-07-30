# Recommended React Toolchains  
## Create React App
- > npx create-react-app 00-create-react-app
- > cd 00-create-react-app
- > npm start or yarn start


## Next.js 
- > npx create-next-app 03-nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter" 
- > cd 03-nextjs-blog
- > npm run dev

> You have to be careful about the meaning of "this" in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.



