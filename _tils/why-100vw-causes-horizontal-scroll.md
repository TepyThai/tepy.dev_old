---
title: 'Why 100vw causes horizontal scrollbar'
excerpt: 'Do you ever wonder why sometimes your site just has a horizontal scrollbar appears out of nowhere?'
# coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-06-04T03:55:07.322Z'
isPublished: true
author:
  name: Tepy Thai
  picture: '/images/blog/author/tepy.png'
ogImage:
  url: '/images/tils/why-100vw-causes-horizontal-scroll/cover.png'
---

Do you ever wonder why sometimes your site just has a horizontal scrollbar appears out of nowhere? Today I just ran into it again (as always 😆) and I somehow figured out how to remove it. So here is the step I took to debug and fix it.

- Try the global border or outline color trick to find which element is causing it

```css
* {
  border: 1px solid red;
}
```

- Find elements with width bigger than the document's width (code from [csstrick](https://css-tricks.com/findingfixing-unintended-body-overflow/))

```js
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll('*'), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
```

- Most of the times, I always find the `100vw` value on the `width` that cause the overflow. So, if that is the case, you can try replacing it with `width: 100%` instead and see if it works.

So, back to the title, why would `100vw` be the cause? Well, the answer is:

> When you set an element's width to `100vw`, the element's width now will be the whole `view width` of the browser and the important part is **`100vw` does not include the `vertical scrollbar`'s `width` into its calculation at all**. Therefore, when there is a `vertical scrollbar`, the `total width` will be the sum of `element's width` and `vertical scrollbar's width`, which causes the **`horizontal scrollbar`**.
