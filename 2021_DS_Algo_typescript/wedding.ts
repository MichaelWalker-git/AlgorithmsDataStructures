/**
 * This might seem like an easy problem at first.
 * Verifying if two lists are equal is something you might have done a few hundreds times before. But, are you doing it optimally?

 Let’s see how your brain does this naturally.
 Take the first element from list 1 and find it in list 2.
 Now take the second element from list 1 and find it in list 2. Every time you find a matching pair, put a stroke over them.
 If you find an item that exists in list 1 but not in list 2, then you know they are not identical.
 If all the items in list 1 exist in list 2, but there are unstroked items in list 2, then both lists are not identical.
 If all items in list 1 are found in list 2 and there’s no item unmarked, then you can say both lists are identical.

 We got it! We have a working algorithm, that’s the first step. Do a first introspection to recognize how your brain works. Now, is that the best we could do? Let’s get more technical and analyze the time complexity. For every item in list 1 we’re looping in list 2 to find a matching pair. Be careful, this doesn’t mean our algorithm is O(n^2). Indeed we have nested loops but, what does ‘n’ represent? both lists can grow indistinguishable. If n and m are the sizes of list 1 and 2, correspondingly, then our algorithm is O(n*m) in time.


 */
