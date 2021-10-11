
/**
 * Almost anyone can solve this problem in their mind for short sentences. Let’s see how our brain works, no algorithms involved. You start skimming through the words and get a feel of which characters are candidates for repetition. How do you know that? because your short memory helps you with retention until something becomes more and more familiar. But, still though, you can’t easily tell if a character has been repeated 5 or 6 times, until you count them. You need to keep a record of what characters are repeated and how many times.

 Following the rationale above, we can outline a rough working algorithm:

 For every character, visit the rest of the string and count how the number of times it’s repeated.
 Keep track of the characters and the number of visits
 Finish the algorithm by finding the max of the counts
 For the last exercise, you already know you can use maps to store key-value pairs. We can then leverage this data structure to keep out character count. Let’s see how this looks like in pseudo-code:
 */
