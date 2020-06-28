# Chrome - Slow Javascript in Extensions demo

This repo demonstrate an issue that seems to be present in Chrome that impacts the performance of web extensions. This demo is simply chosen because I ran into this issue while developing an extension, and this repo is the very simplified version of that extension. It is a simple web application with Vue, Vue Router and TailwindCSS.

To reproduce:
- Clone the project.
- Install the dependencies: `npm install`
- Run the extension in development mode: `npm run serve`
- Load the unpacked extension.
- Click on the extension, you'll see the login page.
- Type something into the password box, the button color should change as soon as there is a character in the box.

The problem is, the input itself takes a very long time in Chrome, and it is almost instant in Firefox. 

Further observations:
- The problem goes away if I remove the TailwindCSS import in `App.vue` file.
- The problem goes away if I remove the background script from the `manifest.json` file.
- The problem goes away if I run performance profiling in Chrome `Performance` tab on the inspect window.

For the first two, Webpack seems to be including a lot of extra code into the bundle, and removing any of these seems to be reduce the bundle size significantly. For the third one, I imagine Chrome is prioritizing the extension execution, therefore it is fast back again. I believe this problem has something to do with the way Chrome runs Javascript in extensions.

None of the issues above happen in Firefox.