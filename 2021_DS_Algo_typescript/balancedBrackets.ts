/**
 * Let’s first draw two basic problems to get us warmed up.

 Balanced: (4+[1-(-2)])
 Unbalanced: [{(5+2)]
 We’ll put names to the brackets just for convenience. () is type P, [] is type Q, and {} is type R.

 Right. Let’s now try to solve the problem in our brains. Our eyes ignore all the opening brackets and focus only on the closing ones. I get to the first closing bracket of type P and think “ok, this one should close the last open bracket I saw”. I keep moving and see another closing bracket, this time of type Q. “right, this one should close the last open bracket I saw, and that last bracket should be of type Q”. I also tend to skip those inner brackets that have already been closed, because they are already resolved anyways.

 Let’s try to implement this same algorithm in pseudocode. Notice we’re somehow keeping a list in our memory. This means we need to add the brackets to a list. Also, notice we tend to skip the inner brackets that have been resolved. How do we translate this to code? well, “skipping it” means ignoring it, so we don’t really need the open brackets that have been resolved; we’ll remove resolved brackets.
 */
