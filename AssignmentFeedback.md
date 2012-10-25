---
layout: page
title: Scala Style Guide
---

On this page we publish feedback notes which are specific to individual asignments. For feedback which applies to coding style in general, visit the [Scala Style Guide](?page=ScalaStyleGuide) wiki page.


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
