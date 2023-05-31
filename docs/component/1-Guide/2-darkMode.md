---
title: Dark mode
lang: en-US
path: /component/darkMode
---

# Dark mode 

The dark mode is a system that allows you to change the color of the interface to a darker color. This is a feature that is becoming more and more popular in applications and websites. It is a feature that is very useful for users who spend a lot of time in front of the screen, as it reduces the strain on the eyes.

## Usage
Can be used the `bailu-theme` attribute to set the theme of the component. The default is `light`, and the `dark` theme can be set.

```ts
// switch to dark mode
document.documentElement.setAttribute('bailu-theme', 'dark')

// switch to light mode
document.documentElement.removeAttribute('bailu-theme')
```


