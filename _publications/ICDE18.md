---
title: "Efficient Computation of a Near-Maximum Independent Set over Evolving Graphs."
collection: publications
permalink: /publication/ICDE18
excerpt: 'Weiguo Zheng, **Qichen Wang**, Jeffrey Xu Yu, Hong Cheng, and Lei Zou.'
date: 2018-04-01
venue: 'IEEE International Conference on Data Engineering (<b>ICDE</b>).'
pubtype: 'conference'
---
<!-- paperurl: 'http://academicpages.github.io/files/paper1.pdf' -->
<!-- citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).' -->

## Abstract

Most existing algorithms computing the maximum independent set (MIS) or independent set (IS) are designed for handling static graphs, which may not be practicable as many networks are dynamically evolving over time. In this paper, we study the MIS/IS problem in evolving graphs by considering graph update operations: vertex/edge addition and vertex/edge deletion. Instead of computing the MIS/IS of the updated graph from scratch, we propose a baseline algorithm that finds the MIS/IS at time t i+1 based on the MIS/IS at time ti. Due to the hardness of computing an exact MIS, we develop an efficient constant-time algorithm LSTwo to return a high-quality (large-size) independent set. Then we design a lazy search algorithm which produces higher-quality independent sets. To improve the time efficiency further, we devise the conditional besieging and k-petal based methods to reduce the search space. Extensive experimental studies over large-scale graphs confirm the effectiveness and efficiency of our proposed algorithms.

## Citation
Weiguo Zheng, **Qichen Wang**, Jeffrey Xu Yu, Hong Cheng, and Lei Zou. "Efficient Computation of a Near-Maximum Independent Set over Evolving Graphs." IEEE International Conference on Data Engineering (**ICDE**), April 2018.



<!-- [Download paper here](http://academicpages.github.io/files/paper1.pdf)

Recommended citation: Your Name, You. (2009). "Paper Title Number 1." <i>Journal 1</i>. 1(1). -->
