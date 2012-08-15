---
title: Scala Tutorial
---

This page gives a very brief tutorial on the Scala programming language.

## Classes, traits, objects and packages

...

## Source files, classfiles and the JVM

Scala sources are stored as `.scala` files.

 - packages should be reflected in directory structure, otherwise problems in eclipse
 - multiple classes in one file possible
 - usually one source file per class, or per class hierarchy

The scala compiler compiles `.scala` source files to `.class` files, like the Java compiler. ... classfiles are bytecode for the JVM, etc.

This is all automated if you are using sbt or eclipse, so you don't have to call the scala compiler or the JVM runner manually.


## Main method, executable objects

 - object with `def main(args: Array[String]) { ... }`
 - object extends App



## The Scala interpreter

See [Sbt Tutorial](view?page=SbtTutorial) for how to run the interpreter from sbt. The interpreter can also be executed in eclipse (todo: put that in the eclipse tutorial)

Worksheets?

## Links with more tutorials and documentation

 - Scala API
 - Book: Programming in Scala
 - Other resources?

