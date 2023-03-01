---
title: "Computing the Difference of Conjunctive Queries Efficiently."
collection: publications
permalink: /publication/SIGMOD2023
excerpt: 'Xiao Hu and **Qichen Wang**.'
date: 2023-06-01
venue: 'ACM SIGMOD International Conference on Management of Data (<b>SIGMOD</b>)'
paperurl: ''
pubtype: 'conference'
---

**Authors are ordered alphabetically as a convention of theory papers.**

## Abstract

We investigate how to efficiently compute the difference result of two (or multiple) conjunctive queries, which is the last operator in relational algebra to be unraveled. The standard approach in practical database systems is to materialize the results for every input query as a separate set, and then compute the difference of two (or multiple) sets. This approach is bottlenecked by the complexity of evaluating every input query individually, which could be very expensive, particularly when there are only a few results in the difference. In this paper, we introduce a new approach by exploiting the structural property of input queries and rewriting the original query by pushing the difference operator down as much as possible. We show that for a large class of difference queries, this approach can lead to a linear-time algorithm, in terms of the input size and (final) output size, i.e., the number of query results that survive from the difference operator. We complete this result by showing the hardness of computing the remaining difference queries in linear time. Although a linear-time algorithm is hard to achieve in general, we also provide some heuristics that can provably improve the standard approach. At last, we compare our approach with standard SQL engines over graph and benchmark datasets. The experiment results demonstrate order-of-magnitude speedups achieved by our approach over the vanilla SQL.

## Citation

Xiao Hu and **Qichen Wang**. "Computing the Difference of Conjunctive Queries Efficiently." ACM SIGMOD International Conference on Management of Data (**SIGMOD**), June 2023. 

## Supplemental Material

[PDF]()

[ArXiv Full Version](https://arxiv.org/pdf/2302.13140.pdf)

[Experiment Scripts]()


<!-- citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
This paper is about the number 2. The number 3 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper2.pdf)

Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2). -->
