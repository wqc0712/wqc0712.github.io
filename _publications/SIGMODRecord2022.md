---
title: "Conjunctive Queries with Comparisons. \[extended abstract\]"
collection: publications
permalink: /publication/SIGMODRecord2022
excerpt: '**Qichen Wang** and Ke Yi.'
date: 2023-03-31
venue: 'SIGMOD Record'
paperurl: 'https://sigmodrecord.org/publications/sigmodRecord/2303/pdfs/14_cqc-wang.pdf'
pubtype: 'journal'
---

**special issue on the 2022 ACM SIGMOD Research Highlight Award**

## Abstract

Conjunctive queries with predicates in the form of comparisons that span multiple relations have regained interest recently, due to their relevance in OLAP queries, spatiotemporal databases, and machine learning over relational data.  The standard technique, predicate pushdown, has limited efficacy on such comparisons.  A technique by Willard can be used to process short comparisons that are adjacent in the join tree in time linear in the input size plus output size.  In this paper, we describe a new algorithm for evaluating conjunctive queries with both short and long comparisons, and identify an acyclic condition under which linear time can be achieved.  We have also implemented the new algorithm on top of Spark, and our experimental results demonstrate order-of-magnitude speedups over SparkSQL on a variety of graph pattern and analytical queries.

## Citation

**Qichen Wang** and Ke Yi. "Conjunctive Queries with Comparisons. \[Extended Abstract\]" SIGMOD Record, March 2023. 

## Supplemental Material

[PDF](https://sigmodrecord.org/publications/sigmodRecord/2303/pdfs/14_cqc-wang.pdf)

[A review by Prof. Stijn Vansummeren](https://sigmodrecord.org/publications/sigmodRecord/2303/pdfs/13_tp-cqc-vansummeren.pdf)

[Conference Paper](https://www.cse.ust.hk/~yike/CQC.pdf)

[Experiment Scripts](https://github.com/hkustDB/SparkCQC)

The experiment scripts have obtained the ACM Reprodicibility certification! You can reproduce the experiment results and all figures by using our [experiment scripts](https://github.com/hkustDB/SparkCQC)!  Thanks to Binyang Dai for his work to pass the test.

Our [**demo**](/publication/SIGMOD23Demo) system for CQC is accepted by SIGMOD 2023.  Thanks to Binyang for his hard work. 

<!-- citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
This paper is about the number 2. The number 3 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper2.pdf)

Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2). -->
