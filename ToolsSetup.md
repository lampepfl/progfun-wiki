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
 - Sbt, a build tool for scala, version 0.12.0
 - Eclipse (version 3.7.2 / Indigo) and the Scala IDE (Milestone for Scala 2.9.x)

Please follow the instructions on this page carefully.

## Installing the JDK

### Linux
**Ubuntu, Debian**: To install the JDK using apt-get, execute the following command in a terminal  
`sudo apt-get install openjdk-7-jdk`

**Fedora, Oracle, Red Had**: To install the JDK using yum, execute the following command in a terminal  
`su -c "yum install java-1.7.0-openjdk-devel"`

**Manual Installation**: To install the JDK manually on a Linux system, follow these steps:

 - Download the `.tar.gz` archive from [http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1637583.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1637583.html)
 - Unpack the downloaded archive (instructions here [http://docs.oracle.com/javase/7/docs/webnotes/install/linux/linux-jdk.html](http://docs.oracle.com/javase/7/docs/webnotes/install/linux/linux-jdk.html))
 - Add the `bin/` directory of the extracted JDK to the `PATH` environment variable. Open the file `~/.bashrc` in an editor and add the following line  
```export PATH=/PATH/TO/jdk1.7.0-VERSION/bin:$PATH```

**Verify your setup**: open a terminal and type `java -version`. If you have problems installing the JDK, ask for help on the forums.


### Mac OS X
Mac OS X either comes with a pre-installed JDK, or installs it automatically.

To verify your JDK installation, open the `Terminal` application from `/Applications/Utilities/` and type `java -version`. If the JDK is not yet installed, the system will ask you if you would like to download and install it.

### Windows

 - Download the JDK installer for Windows from [http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1637583.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1637583.html)
 - Run the installer
 - Add the `bin\` directory of the installed JDK to the `PATH` environment variable, as described here: [http://docs.oracle.com/javase/7/docs/webnotes/install/windows/jdk-installation-windows.html#path](http://docs.oracle.com/javase/7/docs/webnotes/install/windows/jdk-installation-windows.html#path)

To verify the JDK installation, open the Command Prompt and type `java -version`. If you have problems installing the JDK, ask for help on the forums.


## Installing sbt

### Linux

 - Download sbt from here: [http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz](http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz)
 - Unpack the archive
 - Add the `bin/` directory to the `PATH` environment variable. Open the file `~/.bashrc` in an editor and add the following line  
```export PATH=/PATH/TO/YOUR/sbt/bin:$PATH```

Verify that sbt is installed correctly: open a terminal and type `sbt -h`, you should see a help message from sbt. If you have problems installing sbt, ask for help on the forums.

### Mac OS X

 - Download sbt from here: [http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz](http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.tgz)
 - Unpack the archive
 - Add the `bin/` directory to the `PATH` environment variable. Open the file `~/.bash_profile` in an editor and add the following line  
```export PATH=/PATH/TO/YOUR/sbt/bin:$PATH```

Verify that sbt is installed correctly: open the `Terminal` application from `/Applications/Utilities/` and type `sbt -h`, you should see a help message from sbt. If you have problems installing sbt, ask for help on the forums.

### Windows

 - Download the sbt installer from here: [http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.msi](http://scalasbt.artifactoryonline.com/scalasbt/sbt-native-packages/org/scala-sbt/sbt/0.12.0/sbt.msi)
 - Run the installer

Verify that sbt is installed correctly: open the Command Prompt and type `sbt sbt-version`, you should see the version number of sbt. If you have problems installing sbt, ask for help on the forums.


## Installing Eclipse and the Scala IDE (Linux / Mac OS X / Windows)

<p>&nbsp;</p>
<p class="bigwarn">Important note:</p>
<p class="bigwarn">The Scala IDE requires Eclipse Indigo, version 3.7.2. Eclipse Juno, version 4.2, is not supported.</p>
<p>&nbsp;</p>

In the follwing steps we will install the latest Scala IDE Milestone for Scala 2.9.x.

 - Download Eclipse Indigo (3.7.2) for your operating system from [http://www.eclipse.org/downloads/packages/eclipse-classic-372/indigosr2](http://www.eclipse.org/downloads/packages/eclipse-classic-372/indigosr2)
 - Start Eclipse and chose from the menu "Help" - "Install New Software..."
 - Copy the following URL into the "Work with:" textfield: `http://download.scala-ide.org/releases-29/milestone/site`
 - Press "Enter"
 - Select "Scala IDE for Eclipse" from the available items. The other two are optional.
 - Continue using "Next >" and install the Scala IDE. You will have to re-start Eclipse afterwards.

### Verify the Scala IDE Installation
To make sure you installed the Scala IDE correctly, create a small "Hello World" project in Eclipse:

 - Go to "File" - "New" - "Other..." and select "Scala Project" from the folder "Scala Wizards"
 - Chose a project name and select "Finish"
 - If you are asked to switch to the Scala perspective choose "Yes"
 - Select "File" - "New" - "Scala Object" to create a new object
 - Enter `Hello` as the name for the object and put `greeter` as the package name above
 - Change the source code to the one given below \[1\]
 - Save the file and select "Run" - "Run" from the menu. Chose to run as "Scala Application"

You should see a the hello world output in the Eclipse console.

\[1\] Source code

    package greeter
    object Hello extends App {
      println("Hello, World!")
    }
