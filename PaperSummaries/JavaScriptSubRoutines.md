Unlike other languages that us a compiler to turn functions and classes into a set of static routines, function objects do not exist until the JS parser has reached that line in the file.

This is contradictory to both compiled languages (Java) where functions act as either class or instance methods and are referenced with static locations. 
Or even by langauges where functions are ever-present (PHP), where you can call them even before the runtime parser has reached their definition.

Javascript treats everything as objects. Functions are no different. 
By functions becoming objects, instead of some functionality hidden behind a compiler and a varialbe name, they become a 'first-class' citizen of the language.

