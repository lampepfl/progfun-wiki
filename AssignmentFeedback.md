---
layout: page
title: Scala Style Guide
---

On this page we will periodically publish feedback specific to individual assignments. For feedback which applies to coding style in general, visit the [Scala Style Guide](?page=ScalaStyleGuide) wiki page.

<!--

to unpack multiple submissions into a subfolder each, you can place all the "output" files in
a folder and use these commands

  i=0;for f in *; do ((i += 1)) && mkdir s$i && unzip "$f" -d s$i; done

open all files in sublime
  
  find . -name Huffman.scala | xargs sb


some regular expressions to detect common issues. example usage (should also work in sublime,
open all files and use cmd-shift-f)

  find . -name Huffman.scala | xargs grep ";"
  find . -name Huffman.scala | xargs grep -l ";" | wc -l


#1 "InstanceOf"
#3 ".{123,}"  |  (".\{123,\}" for grep)
#5 "temp", "tmp", "iter", "loop", "test", "help"
#8 ";"
#9 "print"
#10 "return"
#11 "var"

#4.2: ":::"
#4.3: "tail.head"
#4.5: "case.*[^:]:[^:].*=>"

-->


### Week 4: Types and Pattern Matching (Huffman Coding)

The following table indicates how often each of the issues occurred during this assignment (the [Scala Style Guide](?page=ScalaStyleGuide) describes the first 12 issues).

<!--
    #issue    lukas  heather
    #1         2/23    1/40
    #2         3/23    7/40
    #3        12/23   21/40
    #4         9/23   17/40
    #5         7/23    9/40
    #6         0/23    1/40
    #7         0/23    0/40
    #8         7/23    7/40
    #9         1/23    3/40
    #10        0/23    0/40
    #11        2/23    0/40
    #12        1/23    2/40

    #4.1      11/23   15/40
    #4.2      23/23   40/40
    #4.3      10/23   24/40
    #4.4       5/23    6/40
    #4.5       5/23    6/40
-->

<table>
  <tr><td>#1 (casts)</td>         <td>6%</td></tr>
  <tr><td>#2 (indent)</td>        <td>15%</td></tr>
  <tr><td>#3 (line length)</td>   <td>52%</td></tr>
  <tr><td>#4 (use locals)</td>    <td>40%</td></tr>
  <tr><td>#5 (good names)</td>    <td>26%</td></tr>
  <tr><td>#6 (common subexpr)</td><td>2%</td></tr>
  <tr><td>#7 (copy-paste)</td>    <td>0%</td></tr>
  <tr><td>#8 (semicolons)</td>    <td>23%</td></tr>
  <tr><td>#9 (print stmts)</td>   <td>6%</td></tr>
  <tr><td>#10 (return)</td>       <td>0%</td></tr>
  <tr><td>#11 (vars)</td>         <td>4%</td></tr>
  <tr><td>#12 (redundant if)</td> <td>5%</td></tr>
  <tr><td></td><td></td></tr>
  <tr><td>#4.1 (weight / chars)</td><td>43%</td></tr>
  <tr><td>#4.2 (::: vs ++)</td>     <td>100%</td></tr>
  <tr><td>#4.3 (list matching)</td> <td>51%</td></tr>
  <tr><td>#4.4 (sort too often)</td><td>18%</td></tr>
  <tr><td>#4.5 (type patterns)</td> <td>18%</td></tr>
</table>


### #4.1 Unnecessary recursive Computation for "weight" and / or "chars"

Every code tree (leaf or fork) contains the full weight and list of characters. Therefore, implementing `def weight` and `def chars` does not require a recursive computation.


### #4.2 List Concatenation with :::

Lists can be concatenated with either `:::`, as most solutions do, or using the `++` operator. The latter has the advantage of being applicable to other sequence types (and also exists for other collection types), while `:::` only exists for lists.


### #4.3 Using "isEmpty", "head" and "tail" instead of Pattern Matching

Some submissions make extensive use of `isEmpty`, `head` and `tail` instead of using pattern matches on lists. The corresponding code is longer and less elegant, for example

    def count(ch: Char, counter: Int, list: List[Char]): Int = {
      if (list.isEmpty || !list.contains(ch)) counter
      else if (list.head.equals(ch)) count(ch, counter + 1, list.tail)
      else count(ch, counter, list.tail)
    }

is more clearly written as follows:

    def count(ch: Char, counter: Int, list: List[Char]): Int = list match {
      case Nil => counter
      case x :: xs =>
        val newCounter = if (x == ch) counter + 1 else counter
        count(ch, newCounter, xs)
    }

Note that the call to `list.contains(ch)` was removed: it was counter-productive: the entire list is traversed at every iteration, therefore the first implementation has complexity `O(n^2)`. The second implementation has complexity `O(n)`.

Note that the `counter` parameter is not required, the method can be written as follows (although it won't be tail-recursive anymore):

    def count(ch: Char, list: List[Char]): Int = list match {
      case Nil => 0
      case x :: xs =>
        val increment = if (x == ch) 1 else 0
        increment + count(ch, xs)
    }

### #4.4 Calling "sort" in a recursive Function

To sort the list of frequencies, some solutions of `makeOrderedLeafList` call `sort` in every iteration - this is unnecessary, calling it once on the entire list would be enough. To avoid the problem, a helper method might be required. Example:

    def makeOrderedLeafList(freqs: List[(Char, Int)]): List[Leaf] =
      freqs.sortWith((a,b) => a._2 <= b._2) match {
        [...] makeOrderedLeafList(someTail) [...]
      }


### #4.5 Avoid Type Patterns

There is one form of pattern matching - type patterns - which should be avoided in general. A type pattern has the following form:

    expr match {
      case x: T => ...
    }

A type pattern is equivalent to a type test and a cast:

    if (expr.isInstanceOf[T]) {
      val x = expr.asInstanceOf[T]
      ...
    }

In all cases where we found type patterns in the submissions, they should have been replaced by ordinary pattern matches. In an ordinary pattern, you can at the same time match on the type of a value and define value bindings for its fields. For example, the following implementation

    def weight(tree: CodeTree): Int = tree match {
      case x: Fork => x.weight
      case x: Leaf => x.weight
    }

is better written as follows:

    def weight(tree: CodeTree): Int = tree match {
      case Fork(_, _, _, w) => w
      case Leaf(_, w)       => w
    }


### Week 3: Object-Oriented Sets (TweetSet)

The following table indicates how often each of the issues occurred during this assignment (the [Scala Style Guide](?page=ScalaStyleGuide) describes the first 12 issues).

<table>
  <tr><td>#1 (casts)</td><td>1 %</td></tr>
  <tr><td>#2 (indent)</td><td>12 %</td></tr>
  <tr><td>#3 (line length)</td><td>37 %</td></tr>
  <tr><td>#4 (use locals)</td><td>0 %</td></tr>
  <tr><td>#5 (good names)</td><td>13 %</td></tr>
  <tr><td>#6 (common subexpr)</td><td>59 %</td></tr>
  <tr><td>#7 (copy-paste)</td><td>54 %</td></tr>
  <tr><td>#8 (semicolons)</td><td>20 %</td></tr>
  <tr><td>#9 (print stmts)</td><td>1 %</td></tr>
  <tr><td>#10 (return)</td><td>0 %</td></tr>
  <tr><td>#11 (vars)</td><td>4 %</td></tr>
  <tr><td>#12 (redundant if)</td><td>0 %</td></tr>
  <tr><td></td><td></td></tr>
  <tr><td>#3.1 (union)</td><td>52 %</td></tr>
</table>


### #3.1 Union should be implemented using dynamic method invocation

Instead of implementing `union` in the base class `TweetSet` and testing for `isEmpty`, a more elegant solution is to keep `union` abstract in the base class and provide an implementation in each subclass:

    abstract class TweetSet {
      def union(that: TweetSet): TweetSet
    }
    class Empty extends TweetSet {
      def union(that: TweetSet): TweetSet = ???
    }
    class NonEmpty extends TweetSet {
      def union(that: TweetSet): TweetSet = ???
    }
