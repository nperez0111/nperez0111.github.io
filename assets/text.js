const npm = [{
    title: 'Why write these modules?',
    subtitle: 'false',
    text: 'I love the idea of <a href="https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328">small modules</a> that <a href="https://github.com/sindresorhus">Sindre Sorhus</a> describes because why write something that you will probably use again or copy and paste in when you can just add it as a module? Wasn\'t that the point of modules in the first place? ',
    link: 'false',
    tags: 'false'
  }, {
    tags: ['JS', 'NPM', 'Proxies'],
    link: 'https://github.com/nperez0111/proxify-objects',
    title: 'Proxify-Objects',
    subtitle: 'Uses Proxies to create computed values',
    text: 'This small utility library is useful for creating relationships between keys of a JavaScript object that once in place automatically update with every change in value to those values of the object.'
  }, {
    title: 'Lazy-Eval-Array',
    subtitle: 'Lazily evaluates values of an array via functions that execute on-read of the array.',
    text: 'This small utility library helps by not computing the value of something within an array right up until the value is being read by another part of the program. This is useful for performance purposes such as not performing an expensive computation unless absolutely neccessary.',
    link: 'https://github.com/nperez0111/lazy-eval-array',
    tags: ['JS', 'NPM', 'Proxies']
  }, {
    title: 'Object-Manip',
    subtitle: 'Transforms PoJos into other PoJos using PoJos.',
    text: 'This small utility library helps transform the format of Plain Ol\' JavaSctipt Objects into other JavaScript Objects. This is useful for tranforming an API result into a more desirable format.',
    link: 'https://github.com/nperez0111/object-manip',
    tags: ['JS', 'JSON', 'PoJo', 'NPM']
    //image: 'https://raw.githubusercontent.com/nperez0111/object-manip/master/carbon.png' 
  }, {
    title: 'Trans.Form',
    subtitle: 'A Wrapper around object-manip to be used on any object to allow transformations.',
    text: 'This small utility library does the same work as my <a href="https://github.com/nperez0111/object-manip">Object-Manip</a> library. But does so in a fashionable way where you can perform transformations to any object without having to pass it through a function.',
    link: 'https://github.com/nperez0111/trans.form',
    tags: ['JS', 'JSON', 'PoJo', 'NPM']
  }, {
    title: 'Object-Proxified',
    subtitle: 'Methods to put onto any object to make accessing its properties easily.',
    text: 'This small utility library puts the same methods ObjExtension does but does so in a less awkward way where you can directly use the method as if it were a key on the object itself.',
    link: 'https://github.com/nperez0111/object-proxified',
    tags: ['JS', 'JSON', 'PoJo', 'NPM']
  }, {
    title: 'React-Native-Sketch',
    subtitle: 'A react-native component for touch-based drawing with an ability to draw over the images.',
    text: 'I added onto this forked repository to fix some bugs I had while trying to use the project as well to add features such as an undo and redo functionality.',
    link: 'https://github.com/nperez0111/react-native-sketch',
    tags: ['JS', 'React', 'React-Native', 'Objective-C']
  }, {
    title: 'ObjExtender',
    subtitle: 'Allows you to put methods onto any object to make accessing its properties easily.',
    text: 'This small utility library allows you to extend the Object prototype safely to put methods that all objects will be guarenteed to have (since it is an extension of the Object Prototype which all Objects inherit from).',
    link: 'https://github.com/nperez0111/objExtender',
    tags: ['JS', 'JSON', 'PoJo', 'NPM']
  }, {
    title: 'ObjExtension',
    subtitle: 'The implementation of several methods the Object class that is missing for all objects.',
    text: 'This small utility library allows you to extend the Object prototype safely to put methods that all objects will be guarenteed to have but does not add any methods directly on the object like <a href="https://github.com/nperez0111/objExtender">ObjExtender</a> does..',
    link: 'https://github.com/nperez0111/objExtension',
    tags: ['JS', 'JSON', 'PoJo', 'NPM']
  }, {
    title: 'How-Wide-Is-It',
    subtitle: 'Tells you how wide a monitor is when given the diagonal measurement and aspect ratio.',
    text: 'Tells you how wide a monitor is when given the dimensions and aspect ratio. Or what the size of the monitor should be to fill up a certain width or height.',
    link: 'https://github.com/nperez0111/howWideIsIt',
    tags: ['JS', 'Math', 'Utility', 'NPM']
  }, {
    title: 'Is-In-Correct-Format',
    subtitle: 'Allows you to check whether a given object is in the correct specified format.',
    text: 'This small utility library allows you check if an object is in the same format as another object by using functions to check the values of that object.',
    link: 'https://github.com/nperez0111/is-in-correct-format',
    tags: ['JS', 'Validation', 'NPM']
  }, {
    title: 'NOAA-Weather',
    subtitle: 'A Small NPM Module for displaying the JSON Marine Forecast straight from NOAA.',
    text: 'This small utility library allows you to receive the current weather forecast from NOAA specified either by location or latitude and longitude.',
    link: 'https://github.com/nperez0111/noaa-weather',
    tags: ['JS', 'Scraper', 'JSON']
  }, {
    title: 'isCyclical',
    subtitle: 'Returns true if an array will continue to be cyclical if the value supplied is pushed onto it.',
    text: 'I made a game playing AI, in order for the AI to not fall into a loop of making the same moves I made this library so I know the next move will be different than the ones prior(No matter how long of a cycle of moves).',
    link: 'https://github.com/nperez0111/isCyclical',
    tags: ['JS', 'NPM']
  }],
  script = [{
    title: 'Why write these scripts?',
    subtitle: 'false',
    text: 'Sometimes when you are a programmer you see something that can be useful to other people and decide to make it because you know that even if nobody uses it you probably will in the future.',
    link: 'false',
    tags: 'false'
  }, {
    title: 'Pianobar-Installer',
    subtitle: 'These scripts help install <a href="https://github.com/PromyLOPh/pianobar">Pianobar</a> (A Command Line Pandora Player) onto Windows and Mac OS X. For Mac I\'ve written a bash script that can be copied and pasted into a terminal emulator of your choice to install pianobar and fix some settings.',
    text: 'I wrote this script as a simple way to setup my CLI Pandora player application. I wrote two versions of it a simple install that would just install the CLI and then I made an Advanced install that would show notifications on change of song.',
    link: 'https://github.com/nperez0111/pianobar-installer',
    tags: ['Bash Scripting', 'Installer', 'Pianobar', 'Pandora radio', 'Tutorial']
  }, {
    title: 'Pianobar-Installer-JS',
    subtitle: 'This script does the same thing as my <a href="https://github.com/PromyLOPh/pianobar">other installer,</a> but does so in JavaScript allowing to handle errors more efficiently.',
    text: 'I wrote this script with the same purpose as the other script but I just wanted the script to be more modular so that I can write other installers in the future.',
    link: 'https://github.com/nperez0111/pianobar-installer-js',
    tags: ['JS', 'Installer', 'Pianobar', 'Pandora radio']
  }, {
    title: 'Pianobar-Notifier',
    subtitle: 'These scripts give notifications of the current state of pianobar, the console player for pandora. Also allows you to interact with pianobar via the notification bubbles allowing you to choose stations like dislike and skip songs.',
    text: 'I wrote this script as a way to interact with Pianobar purely through JavaScript, some can use this to make a GUI interface for Pianobar while I chose to leave it as a way to send notifications as that is how I like my setup.',
    link: 'https://github.com/nperez0111/pianobar-notifier',
    tags: ['JS', 'CLI', 'Notifications', 'Mac OS X']
  }, {
    title: 'Search-Engine',
    subtitle: 'This is a search engine that I wrote in Java for CS212 at University of San Francisco.',
    text: 'I wrote this search engine for a project at University of San Francisco and show cases my ability to use complex Java code such as multithreading, an InvertedIndex data structure, RegEx and a web crawler.',
    link: 'https://github.com/nperez0111/search-engine',
    tags: ['Java', 'Multi-Threading', 'Inverted Index', 'Scraper']
  }, {
    title: 'Miami-Dade-Property-Scraper',
    subtitle: 'Scrapes a Miami Dade website and outputs an excel file',
    text: 'This scrapes a Miami-Dade real estate website and cross references that data to get as much information on who has recently had a government filing against them.',
    link: 'https://github.com/nperez0111/miami-dade-property-scraper',
    tags: ['JS', 'Excel', 'Scraper', 'CLI']
  }, {
    title: 'PDF2PNG',
    subtitle: 'Turns a PDF file into separated PNGS',
    text: 'A simple batch / bash script to convert pdfs to multiple PNGs',
    link: 'https://github.com/nperez0111/pdf2png',
    tags: ['Bash Script', 'Batch script', 'Convert', 'PDF', 'PNG', 'CLI']
  }, {
    title: 'toSVG',
    subtitle: 'Converts Any Image File supported by ImageMagick to SVG',
    text: 'A simple batch / bash script to convert simple images to SVG',
    link: 'https://github.com/nperez0111/toSVG',
    tags: ['Bash', 'Batch file', 'Convert', 'SVG', 'Potrace', 'CLI']
  }, {
    title: 'USF Job Finder',
    subtitle: 'Get all of the jobs at USF as a JSON format',
    text: 'This scrapes the University of San Francisco job bulletin and outputs it as JSON into your terminal.',
    link: 'https://github.com/nperez0111/usfjobfinder',
    tags: ['JS']
  }],
  pages = [{
    link: 'http://nickthesick.com',
    html: '<div class="jumbotron jumbotron-fluid mb-0 nick">\n  <div class="container">\n  <h2 class="display-3">Welcome to the Nick the Sick Portfolio Website!</h2>\n  <p class="lead">To see some of my other work, click on the arrows to the left and right of this.</p>\n  </div>\n  </div>\n  <div class="container-fluid">\n  <div class="row">\n\n  </div>\n  </div>',
    projectURL: 'http://nickthesick.com',
    tags: ['Website', 'Awesome', 'Cool'],
    title: 'Nick the Sick Portfolio Website',
    subtitle: 'A great website for a great guy.',
    text: 'Hi!<br>I\'m Nicholas Perez and am a software developer who is passionate about technology and making new things. I specialize in front end web apps and websites, my genuine passion is that I want to make software to help make people’s lives easier. I have a dream that one day someone will show me either an app or a website telling me how useful it is to them and that I should try it and to be able to say to them “I made that”.<br>I have several years experience in making websites and web apps and it is where I am most comfortable (although I am capable in other fields such as scripts). ',
    faIcon: 'smile-o'
  }, {
    link: 'http://halmiles.com/',
    html: '<picture> <source srcset="http://nickthesick.com/images/halBig.png" media="(max-width: 1000px)"> <source srcset="http://nickthesick.com/images/halMed.png" media="(max-width: 800px)"> <img srcset="http://nickthesick.com/images/halSmall.png" alt="Hal Miles\' Portfolio site layout"> </picture>',
    projectURL: 'http://halmiles.com/',
    tags: ['Flash to HTML', 'Website'],
    title: 'Hal Miles',
    subtitle: 'Hal Miles Portfolio Website',
    text: 'The Hal Miles portfolio site was a "revamp" of his existing site that implemented flash, therefore it needed to be redone in order to be compatible with mobile devices. Mr. Miles wanted no changes to the design and everything to work exactly the same as the original site, so I recreated the site using modern HTML5 and CSS3. From this site I learned that: Some people don\'t want or need new and "pretty" designs, some of the HTML5 video API and creating the best out of things by attempting to implement very semantic HTML.',
    faIcon: 'video-camera'
  }, {
    link: 'http://ImagimationStudios.com',
    html: '<picture> <source srcset="http://nickthesick.com/images/ImagBig.png" media="(min-width: 1000px)"> <source srcset="http://nickthesick.com/images/ImagMed.png" media="(min-width: 800px)"> <img srcset="http://nickthesick.com/images/ImagSmall.png" alt="Imagimation Studios Site layout"> </picture>',
    projectURL: 'https://github.com/nperez0111/imagimationstudios',
    tags: ['Design', 'Website'],
    title: 'Imagimation Studios',
    subtitle: 'false',
    text: 'Another of Hal Miles\' sites, this site was completely redesigned to be a much more modern site and was designed by myself (Disclaimer: I am not a designer). His previous site was completely rendered as a flash object and was very outdated so, I was tasked in making this available to as wide of an audience as possible. Therefore, it is a responsively designed site which has been tested on various displays to always look optimal.',
    faIcon: 'film'
  }, {
    link: 'http://BlueMessProductions.com',
    html: '<picture> <source srcset="http://nickthesick.com/images/large.jpg" media="(min-width: 1000px)"> <source srcset="http://nickthesick.com/images/medium.jpg" media="(min-width: 800px)"> <img srcset="http://nickthesick.com/images/small.jpg" alt="Image of the design mockup of the Blue Mess Productions website."> </picture>',
    projectURL: 'https://github.com/nperez0111/BlueMessProductions',
    tags: ['PSD to HTML + CSS', 'Website'],
    title: 'Blue Mess Productions',
    subtitle: 'false',
    text: 'I was tasked in creating the BlueMess Productions website based upon a designer\'s PSD. I successfully created the site which taught me: how to stay within guidelines of a format, javascript for the album music player and that just because you made a site for someone it doesn\'t mean they will pay for the hosting after a year.',
    faIcon: 'headphones'
  }, {
    link: 'http://adasibuilt.com',
    projectURL: 'https://github.com/nperez0111/adasi',
    tags: ['HTML + CSS', 'Website'],
    title: 'Adasi Built',
    subtitle: 'A simple website for Adasi Developers',
    text: 'This is a simple website used to get in contact with Adasi Developers and to showcase their great work.<p><div class="alert alert-primary" role="alert">This is actually a live demo!</div>',
    faIcon: 'cogs',
    liveDemo: { url: 'http://adasibuilt.com' }
  }],
  apps = [{
    link: 'http://sas.nickthesick.com',
    html: '<picture> <source srcset="http://nickthesick.com/images/sasBig.jpg" media="(min-width: 1000px)"> <source srcset="http://nickthesick.com/images/sasMed.jpg" media="(min-width: 800px)"> <img srcset="http://nickthesick.com/images/sasSmall.jpg" alt="Image of the School for advanced Studies Web App to choose courses within Miami Dade College just a little simpler."> </picture>',
    projectURL: 'https://github.com/nperez0111/SAS',
    tags: ['JS', 'PHP', 'Ractive.js', 'Scraper', 'Web App'],
    title: 'SAS Web-App',
    subtitle: 'SAS Dual Enrollment Course Picker Web App',
    text: 'I went to a high school that you would take college courses at the same time as your high school courses. So every semester we would pick our college courses as a college student would but since we were high school students we were restricted in which courses we could take and did not really have much knowledge of courses that would be useful to our future. \nI was very frustrated with the process of picking courses as it required cross examining multiple documents in order to find the courses that we could take versus what it is that we needed and would be helpful. So I set out to make it easier for the students in my school by compiling everything into a website that would help you pick courses and give current info such as available times for the classes. The website basically gave you everything you needed to pick courses and would even help you pick classes as it had a course picker built in that given your prior classes would suggest classes you should take given what is necessary to graduate with an A.A.\nSo out of my frustration, I made this web app to scrape my college\'s website in order to get course times and course descriptions and it was a success, students are still using my website to pick classes to this day even after I graduated.',
    faIcon: 'graduation-cap'
  }, {
    link: 'http://onswee.nickthesick.com',
    html: '<picture> <source srcset="http://nickthesick.com/images/onsweeBig.png" media="(min-width: 1000px)"> <source srcset="http://nickthesick.com/images/onsweeMed.png" media="(min-width: 800px)"> <img srcset="http://nickthesick.com/images/onsweeSmall.png" alt="Image of a Tic Tac Toe like game where you are able to move the pieces implemented with AI or multiplayer support."> </picture>',
    projectURL: 'http://github.com/nperez0111/onswee-v2',
    tags: ['JS', 'Ractive.js', 'Web App', 'AI'],
    title: 'Onswee V2 ',
    subtitle: 'A Tic-Tac-Toe like game that requires strategy.',
    text: 'This is a game I wrote using HTML5, JavaScript and CSS that is similar to Tic Tac Toe but you are able to move your pieces. I had to design the entire SPA Web-App and all of the game logic implemented into an AI to play against. This taught me several concepts in JavaScript such as objects and classing within JavaScript, array manipulation and AI Logic. It also is a pretty fun game to play!',
    faIcon: 'times-circle'
  }, {
    link: 'http://weather.nickthesick.com',
    html: '<picture> <source srcset="http://nickthesick.com/images/NOAABig.png" media="(min-width: 1000px)"> <source srcset="http://nickthesick.com/images/NOAAMed.png" media="(min-width: 800px)"> <img srcset="http://nickthesick.com/images/NOAASmall.png" alt="Image of a Tic Tac Toe like game where you are able to move the pieces implemented with AI or multiplayer support."> </picture>',
    projectURL: 'https://github.com/nperez0111/NOAA-Weather-Parser',
    tags: ['JS', 'PHP', 'Scraper', 'Web App'],
    title: 'NOAA Ocean Forecast Parser',
    subtitle: 'Shows the Ocean Forecast for South Florida Locations in a more user-friendly interface',
    text: 'This is a project I made to make it easier to read the oceanagraphic test forecast provided by NOAA. So this project uses PHP to parse the text file into HTML which is then loaded into the shell to populate the forecast of each specified location in South Florida. This can easily be expanded to include other locations. For reference to the source material, <a href="http://weather.noaa.gov/cgi-bin/fmtbltn.pl?file=forecasts/marine/coastal/am/amz670.txt" target="_blank">see this.</a> </p> <p> This taught me parsing of a pretty difficult source format into HTML, with PHP. I feel that this is also much easier to read than the source format, making it useful as you can see the breakdown by location rather than having to skim through all of the locations at once. Also the dark mode is pretty rad at night.',
    faIcon: 'tint'
  }, {
    link: 'http://howwide.nickthesick.com',
    projectURL: 'https://github.com/nperez0111/howWideIsIt',
    tags: ['JS', 'Ractive.js', 'Web App'],
    title: 'How Wide Is It',
    subtitle: 'Tells you how wide a monitor is when given the diagonal measurement and aspect ratio.',
    text: 'The purpose of this Web Application is to help with the odd scenario of buying a TV that you need to fit into a certain amount of space, I\'ll explain. So a TV is typically measured diagonally (for instance a 40" TV) but that diagonal length doesn\'t tell you how it will fit into a tv cabinet (which is only of a certain length).</p>\n<p>So, the purpose of this web app is that you give it the diagonal length of your monitor (and aspect ratio if specified) and it will tell you the length and width of that TV so that you can see whether that TV will fit the cabinet properly.</p><p><div class="alert alert-primary" role="alert">This is actually a live demo!</div>',
    faIcon: 'expand',
    liveDemo: { url: 'http://howwide.nickthesick.com/' }
  }, {
    link: 'http://nperez0111.github.io/ImageInspiration/index.html#!Main',
    projectURL: 'http://github.com/nperez0111/ImageInspiration',
    tags: ['JS', 'Ractive.js', 'Web App', 'Google Image API'],
    title: 'Image Inspiration',
    subtitle: 'A small simple image search engine UI',
    text: 'This is a simple search engine UI that I created. It uses Google Images API to retrieve results and display them in a nice masonry layout.The UI is completely decoupled from the back-end and is capable of having adaptors written to use other back-ends such as the Yahoo Image Search API. </p><p><div class="alert alert-primary" role="alert">This is actually a live demo!</div>',
    faIcon: 'picture-o',
    liveDemo: { url: 'http://nperez0111.github.io/ImageInspiration/index.html#!Main' }
  }, {
    link: 'https://abes-template-generator-afoczwijxm.now.sh/',
    html: '<picture> <source srcset="https://cdn.rawgit.com/nperez0111/abes-template-generator/ddf62512/view.png" media="(min-width: 1000px)"> <source srcset="https://cdn.rawgit.com/nperez0111/abes-template-generator/ddf62512/view.png" media="(min-width: 800px)"> <img srcset="https://cdn.rawgit.com/nperez0111/abes-template-generator/ddf62512/view.png" alt="Image of the template generator"> </picture>',
    projectURL: 'https://github.com/nperez0111/abes-template-generator',
    tags: ['JS', 'Ractive.js', 'Web App', '.DOCX'],
    title: 'Template Generator',
    subtitle: 'Created to prefill a form to be imported into QuickBooks',
    text: 'This is a simple tool that prefills a Microsoft Word document with data to be imported in QuickBooks while maintaining its style because QuickBooks is very picky about the format of the file it imports.',
    faIcon: 'file-word-o'
  }]

export { npm, script, apps, pages }
