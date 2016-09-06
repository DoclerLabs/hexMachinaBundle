---
layout: post
title:  "Features of the framework"
img: /img/blog/features-of-the-framework.jpg
category: Design
tags: [feature]
---
Including but not limited to, here are the main cornerstone features of the framework. If you are interested in more details check the documentations.

<h3>hexMVC</h3>

MVC implementation for writing individual modules with the classical Model-View-Controller structural pattern. Lightweight experimental MVP is provided as well.

<h3>hexIoC</h3>

Inverion of Control system to make multi-modular applications. With this layer you can have an extremely powerful DSL layer (Domain Specific Language), where you can connect togethet any modules, componends of your system and make them working togethet.

<h3>hexService</h3>

Service layer extension for hexMVC to separate service communications. It has all typical predefined service behaviors like: configuration, success, fail, cancel, timeout, etc.

<h3>hexInject</h3>

Powerful and easy-to-use Dependency Injection system based on @annotations. It supports property, method and constructor injections predefined in injector mappings.

<h3>hexUnit</h3>

Extendable UnitTest runner with the basic assertions. It works well together with any mocking and assertion system. FlexUnit and JUnit like syntax.

<h3>hexAnnotation</h3>

Abstract @annotation based dependency provider, where you can define your own classes that will provide dependencies on construction.

<h3>hexState</h3>

StateMachina system based on Martin Dowler’s implementation.

<h3>hexCore</h3>

Common core libraries that everyone needs in everyday developments like: exceptions, dispatcher, logging system, utils, etc.
