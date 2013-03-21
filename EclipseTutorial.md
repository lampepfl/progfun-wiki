---
layout: page
title: Eclipse Tutorial
---

We recommend using the Scala IDE for Eclipse to work on the programming assignments for this course. You are of course free to use any text editor or IDE - however we are not able to provide tutorials or support for other tools.

The [Tools Setup](?page=ToolsSetup) page explains how to install the Scala IDE for eclipse.

## Opening the Project in Eclipse

The handout archives for the programming assignments already contain all the necessary project definition files for Eclipse. Follow these steps to work on the project using the Scala IDE:

1. Start up Eclipse
1. Select "File" - "Import" from the menu
1. In the folder "General", select the item "Existing Projects into Workspace" and click "Next >"
1. In the textfield "Select root directory:" select the directory where you unpacked the downloaded handout archive
1. Click "Finish".


## Working with Eclipse

To learn how to use the Scala IDE, we recommend you to watch the official tutorial video which is available here: [http://scala-ide.org/docs/current-user-doc/gettingstarted/index.html](http://scala-ide.org/docs/current-user-doc/gettingstarted/index.html).

This website also contains a lot more useful information and handy tricks that make working with eclipse more efficient.


## Running Tests inside Eclipse

You can easily execute the test suites directly inside eclipse. Simply navigate to source file of the test suite in `src/test/scala`, right-click on it and select "Run As" - "JUnit Test".

The JUnit window will display the result of each individual test.
