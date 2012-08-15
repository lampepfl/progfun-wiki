---
title: Scala Tutorial
---

This page gives a very brief tutorial on the Scala programming language.

## Classes, traits, objects, packages

### _Hello, World!_ in Scala

Here are two ways to define a program which outputs "Hello, World!" in
Scala:

```
object HelloWorld extends App {
  println("Hello, World!")
}
```

or

```
object HelloWorld {
  def main(args: Array[String]) {
    println("Hello, World!")
  }
}
```

In Scala, the `main` or entry point method is defined in an `object`,
not a `class` because `class`es needs to be instantiated and can have
many instances at runtime.

### Classes

In Scala, classes are templates defining fields and methods. Classes
can be instantiated into many objects at runtime.

If your runtime objects are immutable, consider using a `case` class,
which defines convenience methods for equality and pattern-matching.

### Traits

Traits are like interfaces in Java, but they can also contain concrete
members.

### Objects

Objects are like Java classes in which everything is
static. Otherwise, Scala doesn't allow static methods or fields in
regular classes.

### Packages

Adding a statement such as `package foo.bar` at the top of a file
makes the code in a file part of the package `foo.bar`. You can then
do `import foo.bar._` to have everything from package `foo.bar` which
can be scattered across many files available. If you define an `object
baz` in package `foo.bar`, you can import that specific object with
`import foo.bar.baz`. Similarly, you can import everything in `object
baz` with `import foo.bar.baz._`.

## Source files, classfiles and the JVM

Scala sources are stored as `.scala` files.

 - packages should be reflected in directory structure, otherwise problems in eclipse
 - multiple classes in one file possible
 - usually one source file per class, or per class hierarchy

The scala compiler compiles `.scala` source files to `.class` files,
like the Java compiler. ... classfiles are bytecode for the JVM, etc.

This is all automated if you are using sbt or eclipse, so you don't
have to call the scala compiler or the JVM runner manually.


## The Scala interpreter

See [Sbt Tutorial](view?page=SbtTutorial) for how to run the
interpreter from sbt. The interpreter can also be executed in eclipse
(todo: put that in the eclipse tutorial)

Worksheets?

## Links with more tutorials and documentation

 - [Scala API](http://www.scala-lang.org/api/current/index.html#package)
 - _Programming in Scala_ book ([free online first edition](http://www.artima.com/pins1ed/))
 - [A Tour of Scala](http://docs.scala-lang.org/tutorials/tour/tour-of-scala.html)

