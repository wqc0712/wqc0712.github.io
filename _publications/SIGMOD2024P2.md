---
title: "Relational Algorithms for Top-k Query Evaluation."
collection: publications
permalink: /publication/SIGMOD2024P2
excerpt: '**Qichen Wang**, Qiyao Luo and Yilei Wang.'
date: 2024-06-09
venue: 'ACM SIGMOD International Conference on Management of Data (<b>SIGMOD</b>)'
paperurl: '/files/V2MOD168.pdf'
pubtype: 'conference'
---

**All authors contributed equally to this work.**

## Abstract

The evaluation of top-k conjunctive queries, a staple in business analysis, often requires evaluating the conjunctive query prior to filtering the top-k results, leading to a significant computational overhead within  Database Management Systems (DBMSs). While efficient algorithms have been proposed, their integration into DBMSs remains arduous. We introduce relational algorithms, a paradigm where each algorithmic step is expressed by a relational operator. This allows the algorithm to be represented as a set of SQL queries, enabling easy deployment across different systems that support SQL.  We introduce two novel relational algorithms, level-k and product-k, specifically designed for evaluating top-k conjunctive queries and demonstrate that level-k achieves optimal running time for top-k free-connex queries. Furthermore, these algorithms enable easy translation into an oblivious algorithm for secure query evaluations.  The presented algorithms are not only theoretically optimal but also exhibit eminent efficiency in practice. The experiment results show significant improvements, with our rewritten SQL outperforming the baseline by up to 6 orders of magnitude. Moreover, our secure implementations not only achieve substantial speedup compared to the baseline with secure guarantees but even surpass those baselines that have no secure guarantees.  

## Citation

**Qichen Wang**, Qiyao Luo and Yilei Wang. "Relational Algorithms for Top-k Query Evaluation." ACM SIGMOD International Conference on Management of Data (**SIGMOD**), June 2024. 

## Supplemental Material

[PDF](/files/V2MOD168.pdf)

[Experiment Scripts](https://github.com/lambdaSQL/TopK-CQ)


<!-- citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
This paper is about the number 2. The number 3 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper2.pdf)

Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2). -->
