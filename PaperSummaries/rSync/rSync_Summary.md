rSync Summary

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?

Problem: Alpha has file A and Beta has file B. Link between two is slow. Best way to transfer A to B, is to just transfer differences. However, usual reads require the computer to have access to both files simulanteously.

rSync addresses this problem.

1.) Beta splites the file B into a series of non-overlapping fixed blocks of size S bytes. The last block may be shorter than S bytes.

2.) For each of these blocks, beta calculates two checksums: a weak 'rolling' 32-bit checksum and a strong 128-bit MD4 checksum.

3.) Beta sends these checksums to alpha.

4.) Alpha searches through A to find all blocks of length S bytes (at any offset, not just multiples of S) that have the same weak and strong checksum as one of the blocks of B. This can be done ina  single pass very quickly using a special property of the rolling checksum described below.

5.) Alpha sends Beta a sequence of instructions for constructing a copy of Alpha. Each instruction is either a reference to a block fo Beta or literal data. Literal data is sent only for those sections of A which did not match any of the blocks of B.

The end result is that Beta gets a copy of A, but only the pieces of Alpha that ae not found in Beta are sent over. (There is also a small amoung of data for checksums and block indexes). The algorithm also only requires one round trip whcih minimises the impact of the link latency.

The most important details of the algorithm are the rolling checksum and associated multi-alternate search mechanism whcih allows the all off-sets checksum search to proceed very quickly.

