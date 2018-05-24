Unlike other languages that us a compiler to turn functions and classes into a set of static routines, function objects do not exist until the JS parser has reached that line in the file.

This is contradictory to both compiled languages (Java) where functions act as either class or instance methods and are referenced with static locations. 
Or even by langauges where functions are ever-present (PHP), where you can call them even before the runtime parser has reached their definition.

Javascript treats everything as objects. Functions are no different. 
By functions becoming objects, instead of some functionality hidden behind a compiler and a varialbe name, they become a 'first-class' citizen of the language.


These function objects can be thought of as subroutine objects.

Subroutines are defined as a sequence of program instructions that perform a specific task, packaged as a unit. Often coded so that it can be started / called multiple times and from several places during execution of a pgam. 

When the browser or any other JS runtime encounters these such object function blocks, it says, 'I am not supposed to run thsi right now, I'll have to save this code in memory somewhere. It will then be stored until it is needed.'
This store, defer, until needed process, the compiler cuts all the code within the function, creates an object, and pastes the contents into this new object.

Before the code in the subroutine object gets executed, any expressions in the passed arguements must be resolved. 

In the second argument, we must see Item 2's subroutine object being creaed. Once this subroutine object is created, it's passed as part of the execution of the original subroutine.

Each time a subroutine is called, it gets a new set of local variables, what we call a new execution scope. 

Subroutine objects in JS are closures. Basically a fancy wa of saying that a function remembers what variables were aound it when it was declared. (Lexical scoped name binding. 

##Why??
We are able to create a function, we're able to define a template, and we're able to define the variables by leaving them out of our template, by defining them in the execution scope the subroutine objects get created in.
