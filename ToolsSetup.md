**Note**: The following sections contain information about all the tools you will need to complete the course.

We will use the [coursier](https://get-coursier.io/) tool to prepare your environment.

# Environment setup with coursier

## Installing coursier

Follow the [coursier native launcher installation guide](https://get-coursier.io/docs/cli-installation.html#native-launcher) specific to your platform:

 - [Windows](https://get-coursier.io/docs/cli-installation.html#windows)
 - [macOS](https://get-coursier.io/docs/cli-installation.html#linux-macos)
 - [macOS with brew](https://get-coursier.io/docs/cli-installation.html#macos-brew-based-installation)
 - [Unix, Linux and macOS](https://get-coursier.io/docs/cli-installation.html#linux-macos)


## Setup with coursier

The following command downloads and installs the [Scala Build Tool (sbt)](https://get-coursier.io/docs/cli-installation.html#linux-macos) as well as [Adopt OpenJDK 11](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot), the Java Development Kit version 11, which is required for the assignments:

```
cs setup --jvm adopt:11
```

In case you did not add `cs` to your `PATH`, you need to go to the directory that contains `cs` from a terminal:

 - Windows:
    - Open the Command prompt and go to the directory which contains `cs` using the
 `dir` command: `dir PATH\TO\cs`.
    - Run `.\cs setup --jvm adopt:11`
 - macOS and Linux:
   - Open the Terminal and go to the directory which contains `cs` using the 
   `cs` command: `cd path/to/cs`
    - Run `./cs setup --jvm adopt:11`

## Editor or IDE

You are free to use your preferred code editor to work with Scala. If you like working with an IDE, there are two options: Metals or IntelliJ.

The recommended editor for the course is [Visual Studio Code](https://code.visualstudio.com/) with the [Metals extension](https://marketplace.visualstudio.com/items?itemName=scalameta.metals).

### Metals

[Metals](https://scalameta.org/metals/) is a technology that brings IDE features to text editors (such as Visual Studio Code, Vim, Emacs, etc.). In case you are already familiar with one of the [supported code editors](https://scalameta.org/metals/docs/editors/overview.html#editor-support), we recommend using Metals.

Go to the [documentation of Metals](https://scalameta.org/metals/docs/editors/overview.html), and click on the code editor you want to use to see its specific installation instructions.

### IntelliJ

[IntelliJ](https://www.jetbrains.com/idea/) is an IDE developed by Jetbrains. The community version and the Scala plugin are open-source and free to use.

Follow the installation instructions [here](https://www.jetbrains.com/help/idea/installation-guide.html), and install the [Scala plugin](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html).

## All done!

You can now download the handouts and use `sbt` to execute code or run tests.

# Environment setup without coursier

If you encounter problems using coursier, you can install all the required components manually.
In order to work on the programming assignments, you need to have the following tools installed on your machine:

*   A Java Development Kit (JDK), version 11. We recommend using the [Adopt OpenJDK distribution](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot). Check you have the right version by typing in the console:

    `java -version`

*   Scala Build Tool (sbt), a build tool for Scala, version 1.x, or newer.
*   IntelliJ IDEA, Visual Studio Code with the Metals extension, or another IDE of your choice.

## Java Development Kit

### Linux

*   **Ubuntu, Debian:** To install the JDK using apt-get, execute the following command in a terminal `sudo apt-get install openjdk-11-jdk`
*   **Fedora, Oracle, Red Had:** To install the JDK using yum, execute the following command in a terminal `su -c "yum install java-11-openjdk-devel"`
*   **Manual Installation:** To install the JDK manually on a Linux system, follow these steps:

1.  Download the .tar.gz archive from [the Adopt OpenJDK website](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot)

2\. Unpack the downloaded archive to a directory of your choice

3\. Add the _bin/_ directory of the extracted JDK to the PATH environment variable. Open the file _~/.bashrc_ in an editor (create it if it doesn't exist) and add the following line:

    export PATH="/PATH/TO/YOUR/jdk11-VERSION/bin:$PATH"

If you are using another shell, add that line in the corresponding configuration file (e.g. _~/.zshrc_ for zsh).

**Verify your setup:** Open a new terminal (to apply the changed _~/.bashrc_ in case you did the manual installation) and type java -version. If you have problems installing the JDK, ask for help on the forums.

### Mac OS X

Mac OS X either comes with a pre-installed JDK, or installs it automatically.

To verify your JDK installation, open the Terminal application in `/Applications/Utilities/` and type `java -version`. If the JDK is not yet installed, the system will ask you if you would like to download and install it. If the JDK is not installed or if its version is older than 11, make sure you install OpenJDK 11.

<!-- 
Should we insist on Adopt OpneJDK too here?
-->

### Windows

*   Download the JDK installer for Windows from [the Adopt OpenJDK website](https://adoptopenjdk.net/index.html?variant=openjdk11&jvmVariant=hotspot)
*   Run the installer.
*   Add the _bin_ directory of the installed JDK to the PATH environment variable, as described [here](http://www.java.com/en/download/help/path.xml).

To verify the JDK installation, open the Command Prompt and type _\`java -version\`_. If you run into any problem, go to the [Adopt OpenJDK documentation](https://adoptopenjdk.net/installation.html?variant=openjdk11&jvmVariant=hotspot#windows-msi).

## Installing sbt

[Follow the instructions for your platform](http://www.scala-sbt.org/release/docs/Setup.html "Link: http://www.scala-sbt.org/download.html") to get it running.

This course uses sbt version **>1.5**. If you have previously installed sbt 0.12.x, you need to uninstall it and install a newer version. sbt 1.x and newer versions can be used for projects and other courses requiring sbt 0.12.x, but not the other way around. If in doubt, you can check your currently installed sbt like this: in an arbitrary directory that is not a programming assignment or otherwise an sbt project, run:

`sbt about`

You should see something like this:

`[info] This is sbt 1.5.1`

If the sbt command is not found, you need to install sbt. In this case, [go to the official instructions for your platform](http://www.scala-sbt.org/release/docs/Setup.html "Link: http://www.scala-sbt.org/download.html").

## Editor or IDE

You can follow the same steps as described in the homonymous section above.

## All done!

You can now download the handouts and use `sbt` to execute code or run tests.
