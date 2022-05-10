---
title: "Cquirrel: Continuous Query Processing over Acyclic Relational Schemas."
collection: publications
permalink: /publication/VLDB21
excerpt: '**Qichen Wang**, Chaoqi Zhang, Danish Alsayed, Ke Yi, Bin Wu, Feifei Li, and Chaoqun Zhan.'
date: 2021-08-01
venue: 'International Conference on Very Large Data Bases (<b>VLDB</b>)'
paperurl: 'https://www.cse.ust.hk/~yike/Cquirrel.pdf'
pubtype: 'demo'
---

## Abstract

We will demonstrate Cquirrel, a continuous query processing engine built on top of Flink.  Cquirrel assumes a relational schema where the foreign-key constraints form a directed acyclic graph, and supports any selection-projection-join-aggregation query where all join conditions are between a primary key and a foreign key.  It allows arbitrary updates to any of the relations, and outputs the deltas in the query answers in real-time.  It provides much better support for multi-way joins than the native join operator in Flink.  Meanwhile, it offers better performance, scalability, and fault tolerance than other continuous query processing engines.

## Citation

**Qichen Wang**, Chaoqi Zhang, Danish Alsayed, Ke Yi, Bin Wu, Feifei Li, and Chaoqun Zhan. "Cquirrel: Continuous Query Processing over Acyclic Relational Schemas." International Conference on Very Large Data Bases (**VLDB**), August 2021. System demonstration. 

## Supplemental Material
[PDF](https://www.cse.ust.hk/~yike/Cquirrel.pdf)

[Github Repo](https://github.com/hkustDB/Cquirrel-release)

<!-- citation: 'Your Name, You. (2015). &quot;Paper Title Number 3.&quot; <i>Journal 1</i>. 1(3).'
This paper is about the number 3. The number 4 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper3.pdf)

Recommended citation: Your Name, You. (2015). "Paper Title Number 3." <i>Journal 1</i>. 1(3). -->
