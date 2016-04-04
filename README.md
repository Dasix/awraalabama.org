# Welcome!
You have found the source for the website of the Alabama Section of the 
American Water Resources Association.  

## http://awraalabama.org

## Developing
This project is setup to be used with Vagrant ( [Site][1] | [Docs][2] ).  
In order to use Vagrant, you'll need VirtualBox ( [Site][3] | [Docs][4] ).

### Steps First
Fork or clone the source to your local machine or [download the zip file][99].

Once you have VirtualBox and Vagrant installed on your machine, simply open 
a terminal (as admin) and...

```  bash
cd /your/local/project/rootLocation
vagrant up  
```

The vagrant script will fire up a new Linux virtual machine and provision 
the box with everything you need in order to work on this project.

### Steps Next
In the same terminal, run the following:

```bash
vagrant ssh
sudo su
cd /project "<--literally use /project.  That is the shared directory setup 
by the vagrant file."
```
Note: You don't have to use `vagrant ssh`.  You can use whatever you'd like 
to ssh into the machine.

### Steps Final
Congratulations!  You are now running a virtual machine and ready to help 
build the project.  This project is driven by [Grits][5], an opinionated 
dust-js renderer with markdown extras and white-matter support.  It is a 
super-nifty tool that you can learn in 2 min and love from that moment on.

Now, simply...

``` bash
npm run-script live
```
...and navigate to [http://localhost:3955](http://localhost:3955) .  Now, 
any changes you save will auto-update in real-time and be rendered to your 
browser.

Warning: There is a slight chance of port conflicts when doing this.  If 
that happens, you will need to modify the appropriate sections of the project 
to specify your desired ports.  They are located at:

1. The `Port Forwarding` Section of the Vagrantfile
2. scripts/grits-render-live.sh _(The 4 numbers after the -P)_

## Project Structure Notes

```
root/
|----conf/
|    |----grits.conf.json
|----env/
|    |----vagrant/
|    |    |----always.sh   
|    |    |----...
|    |----README.md
|----|scripts/
|    |----grits-render-once.sh
|    |----...
|----src/
|    |----content/
|    |    |----favicons/
|    |    |    |----*.faviconStuff
|    |    |----fonts/
|    |    |    |----*.fontFiles
|    |    |----img/
|    |    |    |----*.imageFiles
|    |    |----js/
|    |    |    |----*.javaScripts
|    |    |----minutes/
|    |    |    |----*.AwraMeetingMinuteFiles
|    |    |----pages/
|    |    |    |----*.AwraWebPages(content)
|    |    |----pdf/
|    |    |    |----*.pdf(not meeting minutes)
|    |    |----index.html
|    |----layouts/
|    |    |----main.html.dust
|    |----partials/
|    |    |----navigation.html.dust
|    |----scss/
|    |    |----*.scssFiles
|----.editorconfig
|----.eslintrc
|----.gitattributes
|----.gitignore
|----.npmrc
|----LICENSE.md
|----package.json
|----README.md
|----Vagrantfile
```

### conf - Configuration Files
Find the `grits.conf.json` file in this directory.  You probably won't 
have to change anything here, but if you do, it will affect grits configuration.

### env - Project Environment Files
Find project environment settings located here.  Make changes to how vagrant 
behaves, auto-install some new things, whatever you feel. 
 
Learn more about the project environment [here][7].

### scripts - Project Automation
Find useful scripts here.  They keep you from typing things into the command 
line.  In fact, `npm run-script live` should be the only one you need.

### src - Project Source Files
Welcome to where the work happens.  These are the files that make up the 
website.  You'll make most of your changes / additions here.
  
#### Important Concepts

**Layouts**
This project currently uses one layout: `main`.  This allows you to only need
to focus on content.  `Grits` uses white-matter and `dust-js` to build these
pages for you.

**Partials**
This project currently has only one partial: `navigation`.  This was done
in order to separate that content into its own location in the project.  It
is included in the `main` layout and rendered with `Grits`.

**Content/Pages**
In order to insert your content into the main page layout, you'll need to 
include some simple `white-matter`.  This tells `Grits` how to render your 
new content.  

Your pages (that use the main layout) will look similar to this:

```html
---
layout: main
title: optional, but recommended
---
<div class="myPage">
    <p>My Page</p>
</div>
```

Note: The `---` are important.  They let `Grits` know where the white matter
starts and stops.

**SCSS**
[Sass | Scss][6] is the css preprocessor of choice in this project.  Luckily, 
 `Grits` does all the heavy lifting for us.  Simply make a change in `_custom.scss` 
 and see the change take place in real time.  
 
 Need to add a new style-sheet?  No problem. Just add the file to the `scss` 
 folder pre-pended with an underscore (_example.scss) and `@import` 
 the file into `main.scss`.  `Grits` will put it all together into one, already
 linked css file.
 
### Other Project Files
You will probably never have to modify these.

**.editorconfig**

Configuration for text editors.

**.eslintrc**

Linter configuration.

**.gitattributes**

Settings for git processes.

**.gitignore**

Makes sure that you don't push unnecessary files to our repository.

**.npmrc**

NPM Publishing Settings

**LICENSE.md**

The License

**package.json**

`npm install` instructions.

**README.md**

This file!

**Vagrantfile**

Builds your dev-comp.

## Project Deployment Notes

Project Deployment is not yet configured for this project.  But, once it
is, it will be written about here.

<!-- Links -->
[1]: https://www.vagrantup.com/ "Vagrant"
[2]: https://www.vagrantup.com/docs/ "Vagrant Docs"
[3]: https://www.virtualbox.org/wiki/Downloads "VirtualBox"
[4]: https://www.virtualbox.org/wiki/Documentation "VirtualBox Docs"
[5]: https://github.com/Dasix/grits "Grits GitHub"
[6]: http://sass-lang.com/guide "Sass Guide"
[7]: https://github.com/Dasix/awraalabama.org/tree/master/env "ENV Docs"
[99]: https://github.com/Dasix/awraalabama.org/archive/master.zip "Source Zip File"
