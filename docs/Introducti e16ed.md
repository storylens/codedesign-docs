---
sidebar_position: 2
---
# Introduction to builder

Welcome to Codedesign. In this video tutorial, we'll help you get started with the tool.

Create a blank project if you haven't already. We're going to call it tutorial. Let's open up the page. Alright. 

The central white space is called the canvas. That's where you drop the elements.

At the top, you have options to change responsive layouts like tablet or mobile. You can also change the zoom size of the canvas, perform undo/redo and there's the preview button. We also have features like export and deploy, but we'll be talking about it in a later video. 

On the right, we have a menu and the editor panel.

The menu comprises  options such as Templates, Blocks, Elements, Photos, and Text. 

If you want prebuilt designs, you should try templates. We have landing pages, CTAs, testimonials, and other components - almost everything to get you started. 

Blocks, you can think of them as generic containers or boxes where you put all your elements into. 

Elements are basically HTML elements - like buttons, input fields, embeddable elements like video, audio and icons etc. 

For Photos, you can upload your own images. Or, can also directly drag images from Pixabay, which has like millions of images and vectors into the Canvas.

For text, we have some default placeholder text elements. This includes Span, paragraph, and different headings. 

Saved components tabs are reserved for components you save and you can reuse them later. 

DB & Workflow - is a premium feature that lets you send data from forms to third-party services like Email, google sheets etc. 

Let's get our hands dirty and create a simple header component. 

We'll start with a block.  You can click on Blocks, and you will see Block items on the right panel.  You can drop any of them into the canvas. I am going to drop the Div block. 

 Let's give it a shot. Good job!

Click on the dropped item to select it. Selected elements will have a label on top of it, a few basic buttons and a blue outline.

You can move the element by pressing on the label and then dragging your mouse pointer. 

Apart from the label, there's the option to lock the element, duplicate the element. You can delete the element by pressing the delete button.

You can also resize the element by clicking on the round resize icons at the bottom, bottom right, and right edges of the object. Here:

Next, drop one more block. Let's drop a Container this time. Containers helps you create responsive layouts on bigger screens. 

Cool. Now, we're going to drag the Div we created earlier inside the container. FYI, blocks can accommodate other blocks and elements. You can drop any number of elements into blocks. Cool, right?

Now that we're fairly confident with dropping, we can try to do with our builder.

When there are too many elements, it might get hard to find an element's immediate parents. That's why we have breadcrumbs that you can use to navigate to other elements.

So, for instance, if you click the container her, it will select the parent Container. Using the bread crumbs, you can choose its immediate parent or any parent up until the body.

We're now familiar with dropping blocks and elements.

Let's continue with the header we wanted. 

There are a few ways that you can create a header, but we will be focusing on a couple of them.

First we will be creating a free style header - just dragging and dropping elements into the canvas - but this usually isn't responsive, so we will use a feature called flexbox.

Before we get started, I'm going to lock the Container and resize it - so that it looks like a header. I am going to drag it to the top. We now have a div inside a container.

So a header is usually a logo followed by navigation links. Lets upload the image for the logo.

First upload an image, I already have the asset on my computer. So I have uploaded a simple logo and I'm going to drop it inside the div. The image looks a bit big, so we will resize it a notch. Adjust it so that it looks okay. 

Next, I am going to add a text element. "Span" will do. We're going to make a few changes to the text and we'll be doing it inside the editor panel. For instance, I'm going to change the width of the text to auto, and I'm going to put it inside the div. I'd like the height of this to be 100%. If you scroll down to typography, you can change the alignment

We can also edit the text here. I'm going to type home. I think a font size of 20 will look good and a bit of padding. 

Now this looks okay, I'm going to duplicate it. Let's move it to the extreme right. Let's just duplicate a few more.

We're going to edit the text .

Let's just fill up the text for the rest of the elements.

If you want to resize it, you can lock the container and resize it. 

Perfect. 

Manually placing the elements could end up being messy at times. So, that's where flexbox comes in. I am not going to dive into the details of Flexbox, but I can show you how it works. 

Go the Div and in the editor panel, you will see a section named Flexbox Settings. Inside it, there's the option to enable flexbox. 

Enable it. 

Now I'd encourage you to experiment because that's the best way to learn Flexbox and with flexbox - you can create responsive UIs in a flash.

You can arrange the elements in rows, columns and then adjust the spacing of the elements.

For the header, I'm going to go with the row structure, and I'd like to have it  aligned to the right. and this looks good, except for the fact that I want the logo on the left. 

So, I am going to drag the logo out of the Flex. Resize the div just to fit the navbar links. Alright. Let's drag it to the right. Let's resize it a bit so that it doesn't break on smaller screens. 

Next,  drop the image back into the container. Looks neat I'd say. If you'd prefer to fine tune, you can make it even consistent by adding flexbox to the container. And voila, we have a header.

[Final-Introduction to CodeDesign.mov](Introducti%20e16ed/Final-Introduction_to_CodeDesign.mov)
