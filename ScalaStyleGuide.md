---
layout: page
title: Scala Style Guide
---

## `styleCheck` sbt task

You can check styling issues in your assignments by running
`styleCheck` from SBT.

# Common Issues Reported by Style Checker

## Avoid using return

In Scala, you often don't need to use explicit `return`s because
control structures such as `if` are also expressions. Instead of

    def factorial(n: Int): Int = {
	  if (n <= 0) return 1
	  else return (n * factorial(n-1))
	}
	
prefer:

    def factorial(n: Int): Int = {
	  if (n <= 0) 1
	  else (n * factorial(n-1))
	}

## Avoid mutable local variables

Since this is a course on functional programming, we want you to get
used to writing code in a purely functional style, without using
side-effecting operations. You can often rewrite code that uses
mutable local variables to code with helper functions that take
accumulators. Instead of:

    def fib(n: Int): Int = {
	  var a = 0
	  var b = 1
	  var i = 0
	  while (i < n) {
	    var prev_a = a
		a = b
		b = prev_a + b
		i = i + 1
	  }
	  a
	}

prefer:

    def fib(n: Int): Int = {
	  def iter(i: Int, a: Int, b: Int): Int =
	    if (i == n) a else iter(i+1, b, a+b)
	  iter(0, 0, 1)
	}

## Other styling issues?

Please post to the forum using the `style` tag and we will augment
this style guide with suggestions.
