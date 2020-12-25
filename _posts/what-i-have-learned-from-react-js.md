---
title: 'What I have learned from React.js'
excerpt: ''
# coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-05-25T03:55:07.322Z'
isPublished: false
author:
  name: Tepy Thai
  picture: '/images/blog/author/tepy.png'
ogImage:
  url: '/images/blog/my-programming-journey/cover.jpg'
---

The following aspects are a few of those aspects where I feel I have come to give more concern with as I grow as a developer.

- **State Management**:<br/>
  I think the most important thing that I've learned with building web site or app is that, State Management is a significant part that every developer (at least frontend dev) should pay attention to. When I was developing native app, I didn't really care much about state management of the app at all since the interaction of the app is quite limited comparing to the web.Thus, most of the apps don't really have complex state management at all (maybe I could be wrong here since I didn't get the chance to make a complicated enough native app yet I think 🤔).

  In order to solve and maintain the complexity of state management in a big project, many libraries have been created, of course, with different techniques of managing the state. I'll give my opinions on some of the famous libraries below:

  1. Redux: <br/>

     > Immutablitiy

     As stated in [redux website](https://redux.js.org/), Redux is a predictable state container for JavaScript, which means it is not just a state management library for React, but a general one. As for React Redux, it focuses on being a **global** store for React and managing the state in **immutable** way. With the immutability, Redux enables the **Time-Travel Debugging** feature which as its name suggests, it allows us to undo/redo the state as we wish during debugging. Also, since Redux's principle of changing the state is by accepting **action** command and its original **state**, every state manipulating is **predictable** and clear.

     However, there are a few problems with Redux that make people avoid using it. First of all, it is said to be cumbersome to set up (there is a new **easier** way to set up with [Redux Toolkit](https://redux-toolkit.js.org/) though). Secondly, it needs a lot of work just to do some trivial stuffs, especially async works. Thridly, with the new **React Hook**, internal state management hooks (**useState, useReducer, useContext** etc) are already enough many small to medium projects.

     Despite all the negative points, I still think Redux is a valid choice for big projects, especially with the new toolkit project.

  2. Mobx: <br/>

  > Mutability? Reactive?

  As I haven't used Mobx in any project at all (only learned a bit about it), I'll only give what I know about Mobx here.

  Mobx uses the concept of **reactivity programming** (kind of) in order to keep the state syncronize with the UI of the app. There are a few main concepts in Mobx which include `Observable state`, `Computed values`, `Reaction` and `Actions`. To learn more about Mobx, I suggest you check out the official document [here](https://mobx.js.org/README.html).

  Even though I haven't used it yet, there are a lot of people (mostly famous developers from twitter) praising it for its simpicity comparing to Redux, especially for small to medium projects. There are also many big projects that use it as well. Therefore, I suggest you give it a try and see whether it fits your need or not.

  3. Local State Management:

  > useState, useReducer, useContext etc...

  
* Performance:
* Code Bundling:
*
