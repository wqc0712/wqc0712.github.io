---
title: "Maintaining Acyclic Foreign-Key Joins Under Updates."
collection: publications
permalink: /publication/SIGMOD2020
excerpt: '**Qichen Wang** and Ke Yi.'
date: 2020-06-01
venue: 'ACM SIGMOD International Conference on Management of Data (<b>SIGMOD</b>)'
paperurl: 'https://www.cse.ust.hk/~yike/sigmod20.pdf'
pubtype: 'conference'
---

## Abstract

A large number of analytical queries (e.g., all the 22 queries in the TPC-H benchmark) are based on acyclic foreign-key joins.  In this paper, we study the problem of incrementally maintaining the query results of these joins under updates, i.e., insertion and deletion of tuples to any of the relations.  Prior work has shown that this problem is inherently hard, requiring at least $\Omega(\|db\|^{0.5-\epsilon})$ time per update, where $\|db\|$ is the size of the database, and $\epsilon > 0$ can be any small constant.  However, this negative result holds only on adversarially constructed update sequences; on the other hand, most real-world update sequences are ``nice'', nowhere near these worst-case scenarios. 

We introduce a measure $\lambda$, which we call the {\em enclosureness} of the update sequence, to more precisely characterize its intrinsic difficulty.  We present an algorithm to maintain the query results of any acyclic foreign-key join in $O(\lambda)$ time amortized, on any update sequence whose enclosureness is $\lambda$.  This is complemented with a lower bound of $\Omega(\lambda^{1-\epsilon})$, showing that our algorithm is essentially optimal with respect to $\lambda$.  Next, using this algorithm as the core component, we show how all the 22 queries in the TPC-H benchmark can be supported in $\tilde{O}(\lambda)$ time.  Finally, based on the algorithms developed, we built a continuous query processing system on top of Flink, and experimental results show that our system outperforms previous ones significantly.


## Citation
**Qichen Wang** and Ke Yi. "Maintaining Acyclic Foreign-Key Joins Under Updates." ACM SIGMOD International Conference on Management of Data (**SIGMOD**), June 2020. 

## Supplemental Material
[PDF](https://www.cse.ust.hk/~yike/sigmod20.pdf) 

[ACM Page with Presentation Video](https://dl.acm.org/doi/10.1145/3318464.3380586)


<!-- citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
This paper is about the number 2. The number 3 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper2.pdf)

Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2). -->
