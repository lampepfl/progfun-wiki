---
layout: page
title: Scala Style Guide
---

On this page we publish feedback notes which are specific to individual asignments. For feedback which applies to coding style in general, visit the [Scala Style Guide](?page=ScalaStyleGuide) wiki page.


### Week 4: Types and Pattern Matching (Huffman Coding)

The following table indicates how often each of the issues occured during this assignment (the [Scala Style Guide](?page=ScalaStyleGuide) describes the first 12 issues).

    #issue    lukas
    #1         2/23
    #2         3/23
    #3        12/23
    #4         9/23
    #5         7/23
    #6         0/23
    #7         0/23
    #8         7/23
    #9         1/23
    #10        0/23
    #11        2/23
    #12        1/23

    #4.1      11/23
    #4.2      23/23
    #4.3      10/23
    #4.4       5/23


<table>
  <tr><td>#1 (casts)</td>         <td>x %</td></tr>
  <tr><td>#2 (indent)</td>        <td>x %</td></tr>
  <tr><td>#3 (line length)</td>   <td>x %</td></tr>
  <tr><td>#4 (use locals)</td>    <td>x %</td></tr>
  <tr><td>#5 (good names)</td>    <td>x %</td></tr>
  <tr><td>#6 (common subexpr)</td><td>x %</td></tr>
  <tr><td>#7 (copy-paste)</td>    <td>x %</td></tr>
  <tr><td>#8 (semicolons)</td>    <td>x %</td></tr>
  <tr><td>#9 (print stmts)</td>   <td>x %</td></tr>
  <tr><td>#10 (return)</td>       <td>x %</td></tr>
  <tr><td>#11 (vars)</td>         <td>x %</td></tr>
  <tr><td>#12 (redundant if)</td> <td>x %</td></tr>
  <tr><td></td><td></td></tr>
  <tr><td>#4.1 (weight / chars)</td><td>x %</td></tr>
  <tr><td>#4.2 (::: vs ++)</td>     <td>x %</td></tr>
  <tr><td>#4.3 (list matching)</td> <td>x %</td></tr>
  <tr><td>#4.4 (sort too often)</td><td>x %</td></tr>
</table>


### #4.1 Unnecessary recursive Computation for "weigth" and / or "chars"

Every code tree (leaf or fork) contains the the full weight and list of characters. Therefore, implementing `def weight` and `def chars` does not require a recursive computation.


### #4.2 List Concatenation with :::

Lists can be concatenated with either `:::`, as most solutions do, or using the `++` operator. The latter has the advantage of being applicable to other sequence types (and also exists for other collection types), while `:::` only exists for lists.


### #4.3 Using "isEmtpy", "head" and "tail" instead of Pattern Matching

Some submissions make extensive use of `isEmpty`, `head` and `tail` instead of using pattern matches on lists. The corresponding code is longer and less elegant, for example

    def count(ch: Char, counter: Int, list: List[Char]): Int = {
      if (list.isEmpty || !list.contains(ch)) counter
      else if (list.head.equals(ch)) count(ch, counter + 1, list.tail)
      else count(ch, counter, list.tail)
    }

is more easily written as follows:

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

### 4.4 Calling "sort" in a recursive Function

To sort the the list of frequencies, some solutions of `makeOrderedLeafList` call `sort` in every iteration - this is unnecessary, calling it one on the entire list would be enough. To avoid the problem, a helper method might be required. Example:

    def makeOrderedLeafList(freqs: List[(Char, Int)]): List[Leaf] =
      freqs.sortWith((a,b) => a._2 <= b._2) match {
        [...] makeOrderedLeafList(someTail) [...]
      }



### Week 3: Object-Oriented Sets (TweetSet)

The following table indicates how often each of the issues occured during this assignment (the [Scala Style Guide](?page=ScalaStyleGuide) describes the first 12 issues).

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
