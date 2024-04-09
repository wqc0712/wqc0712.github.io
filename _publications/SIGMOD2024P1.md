---
title: "FedKNN: Secure Federated k-Nearest Neighbor Search."
collection: publications
permalink: /publication/SIGMOD2024P1
excerpt: 'Xinyi Zhang, **Qichen Wang**, Cheng Xu, Yun Peng, and Jianliang Xu.'
date: 2024-06-09
venue: 'ACM SIGMOD International Conference on Management of Data (<b>SIGMOD</b>)'
paperurl: 'https://www.comp.hkbu.edu.hk/~db/fedknn_cr_tech_report.pdf'
pubtype: 'conference'
---

## Abstract

Nearest neighbor search is a fundamental task in various domains, such as federated learning, data mining, information retrieval, and biomedicine. With the increasing need to utilize data from different organizations while respecting privacy regulations, private data federation has emerged as a promising solution. However, it is costly to directly apply existing approaches to federated k-nearest neighbor (kNN) search with difficult-to-compute distance functions, like graph or sequence similarity. To address this challenge, we propose FedKNN, a system that supports secure federated kNN search queries with a wide range of similarity measurements. Our system is equipped with a new Distribution-Aware kNN (DANN) algorithm to minimize unnecessary local computations while protecting data privacy. We further develop DANN*, a secure version of DANN that satisfies differential obliviousness. Extensive evaluations show that FedKNN outperforms state-of-the-art solutions, achieving up to 4.8× improvement on federated graph kNN search and up to 2.7× improvement on federated sequence kNN search. Additionally, our approach offers a trade-off between privacy and efficiency, providing strong privacy guarantees with minimal overhead.

## Citation

Xinyi Zhang, **Qichen Wang**, Cheng Xu, Yun Peng, and Jianliang Xu. "FedKNN: Secure Federated k-Nearest Neighbor Search." ACM SIGMOD International Conference on Management of Data (**SIGMOD**), June 2024. 

## Supplemental Material

[Technical Report](https://www.comp.hkbu.edu.hk/~db/fedknn_cr_tech_report.pdf)

[Experiment Scripts]()


<!-- citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
This paper is about the number 2. The number 3 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper2.pdf)

Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2). -->
