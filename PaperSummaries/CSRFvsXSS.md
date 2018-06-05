CSRF is a specific action such as an attempt to change the password through a url action. Cross origin request forgery is an oversight in the design of a web application.
It then attacks the user than actually attacking the server itself.

Successful exploition of a CSRF vulnerability causes the web app to process an attacker-specific request within the context of the victim's authenticated session.

Example: Web-based payment system allows users to transfer money between acccounts via specified arguments to a PHP script.
Normally transfers happen when the user clicks a series of links instructing the site to transfer money but it is also possible to craft a URL which will perform the transfer.
Specifically, browsing to http://vulnerable-site/transfer.php?acct_to=123456&amount=1337 while authenticated to the vulnerable-site will transfer $1337 from the user’s account to account number ‘123456’.

Michael, remember when you were on MyCoke and some person IMed you and told you to click on that link and you lost all of your furniture? That was an example of an authorized transfer but it took advantage of the fact that you were authenticated.

Prevention: How to verify that the request stems from itself and not a forged website? A secure identifier which can be verified by the server but not forged by the attacker. This identifier is refered to as the CSRF token. 

XSS is to perform a script or a vector fir attacking the users of a vulneratble web site. XSS is when an attacker can cause a web site to render with unintended script content. This script content is considered the payload of an XSS attack and can range from a simple pop-up window all the way to browser exploitation for remote code execution.

Prevention: Escaping
