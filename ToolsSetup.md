---
layout: page
title: Tools Setup
---

<style type="text/css">
.bigwarn {
  color: #D00000;
  font-weight: bold;
  font-size: 1.3em;
  font-height: 100%;
}
</style>


In order to work on the programming assignments, you need to have the following tools installed on your machine:

 - JDK, the Java Development Kit, version 1.6 or 1.7
 - Sbt, a build tool for Scala, version 0.12.0
 - The Scala IDE for Eclipse and the Scala Worksheet

Please follow the instructions on this page carefully.

## Installing the JDK

### Linux
* **Ubuntu, Debian**: To install the JDK using apt-get, execute the following command in a terminal  
`sudo apt-get install openjdk-7-jdk`

* **Fedora, Oracle, Red Had**: To install the JDK using yum, execute the following command in a terminal  
`su -c "yum install java-1.7.0-openjdk-devel"`

* **Manual Installation**: To install the JDK manually on a Linux system, follow these steps:

  1. Download the `.tar.gz` archive from [http://www.oracle.com/technetwork/java/javase/downloads/jdk7u7-downloads-1836413.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7u7-downloads-1836413.html)
  1. Unpack the downloaded archive to a directory of your choice
  1. Add the `bin/` directory of the extracted JDK to the `PATH` environment variable. Open the file `~/.bashrc` in an editor (create it if it doesn't exist) and add the following line  
  ```export PATH=/PATH/TO/YOUR/jdk1.7.0-VERSION/bin:$PATH```

**Verify your setup**: Open a new terminal (to apply the changed `.bashrc` in case you did the manual installation) and type `java -version`. If you have problems installing the JDK, ask for help on the forums.


### Mac OS X
Mac OS X either comes with a pre-installed JDK, or installs it automatically.

To verify your JDK installation, open the `Terminal` application in `/Applications/Utilities/` and type `java -version`. If the JDK is not yet installed, the system will ask you if you would like to download and install it.

### Windows

 - Download the JDK installer for Windows from [http://www.oracle.com/technetwork/java/javase/downloads/jdk7u7-downloads-1836413.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7u7-downloads-1836413.html)
 - Run the installer
 - Add the `bin\` directory of the installed JDK to the `PATH` environment variable, as described here: [http://www.java.com/en/download/help/path.xml](http://www.java.com/en/download/help/path.xml)

To verify the JDK installation, open the Command Prompt and type `java -version`. If you have problems installing the JDK, ask for help on the forums.


## Installing sbt

### Linux

 - Download sbt from here: [http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz](http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz)
 - Unpack the archive to a directory of your choice
 - Add the `bin/` directory to the `PATH` environment variable. Open the file `~/.bashrc` in an editor (create it if it doesn't exist) and add the following line  
```export PATH=/PATH/TO/YOUR/sbt/bin:$PATH```

Verify that sbt is installed correctly: Open a new terminal (to apply the changed `.bashrc`) and type `sbt -h`, you should see a help message from sbt. If you have problems installing sbt, ask for help on the forums.

### Mac OS X

If you use the [homebrew](http://mxcl.github.com/homebrew/) package manager, simply type `brew update` and then `brew install sbt` in a Terminal prompt.

Otherwise, install sbt by following these steps:

 - Download sbt from here: [http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz](http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz)
 - Unpack the archive to a directory of your choice
 - Add the `bin/` directory to the `PATH` environment variable. Open the file `~/.bash_profile` in an editor (create it if it doesn't exist) and add the following line  
```export PATH=/PATH/TO/YOUR/sbt/bin:$PATH```

Verify that sbt is installed correctly: Open a new terminal (to apply the changed `.bash_profile`) using the `Terminal` application in `/Applications/Utilities/` and type `sbt -h`, you should see a help message from sbt. If you have problems installing sbt, ask for help on the forums.

### Windows

 - Download the sbt installer from here: [http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.msi](http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.msi)
 - Run the installer

Verify that sbt is installed correctly: open the Command Prompt and type `sbt sbt-version`, you should see the version number of sbt (the first time you run it, sbt will download libraries from the internet). If you have problems installing sbt, ask for help on the forums.


## Installing the Scala IDE for Eclipse with the Scala Worksheet (Linux / Mac OS X / Windows)

You can download the Scala IDE for eclipse with the Scala Worksheet pre-installed from the following URL:

[http://typesafe.com/stack/scala_ide_download](http://typesafe.com/stack/scala_ide_download)

After downloading the archive for your operating system, simply unpack it start eclipse. Eclipse requires you to select a workspace on startup. We recommmend you create one workspace directory for this class and use it for all assignments.



### Testing the Scala IDE Installation

To familiarize yourself with the Scala IDE, create a small "Hello World" project in eclipse:

1. Go to "File" - "New" - "Other..." and select "Scala Project" from the folder "Scala Wizards"
1. Chose a project name and select "Finish"  
  <img src="https://raw.github.com/lrytz/progfun-wiki/gh-pages/images/eclipse-new-project.png"/>
1. Select "File" - "New" - "Scala Object" to create a new object
1. Enter `Hello` as the name for the object and put `greeter` as the package name above  
  <img src="https://raw.github.com/lrytz/progfun-wiki/gh-pages/images/eclipse-new-object.png"/>
1. Change the source code to the one given below \[1\]
1. Save the file and select "Run" - "Run" from the menu. Chose to run as "Scala Application"  
  <img src="https://raw.github.com/lrytz/progfun-wiki/gh-pages/images/eclipse-run-as.png"/>


You should see a the hello world output in the Eclipse console.

\[1\] Source code

    package greeter
    object Hello extends App {
      println("Hello, World!")
    }

