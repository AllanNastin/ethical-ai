var nodes = [
    {
        "id": 1,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI system",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 2,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 3,
        "label": "international organisations",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: international organisations, Relation: works_with, Tail: artificial intelligence",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.1799388767154884,
        "eigenvector_centrality": 0.009167505430520969
    },
    {
        "id": 4,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: international organisations, Relation: works_with, Tail: artificial intelligence",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 5,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: consider, Tail: legal certainty",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 6,
        "label": "legal certainty",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: consider, Tail: legal certainty",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 7,
        "label": "artificial intelligence systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: artificial intelligence systems, Relation: based_on, Tail:  key characteristics",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 8,
        "label": " key characteristics",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence systems, Relation: based_on, Tail:  key characteristics",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 9,
        "label": "traditional software systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: traditional software systems, Relation: utlises, Tail: programming approaches",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 10,
        "label": "programming approaches",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: traditional software systems, Relation: utlises, Tail: programming approaches",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 11,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_be, Tail: infer",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 12,
        "label": "infer",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: should_be, Tail: infer",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 13,
        "label": "inference",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: inference, Relation: utlises, Tail: algorithms",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0007327695968669599,
        "closeness_centrality": 0.22605766444508837,
        "eigenvector_centrality": 0.03231240121747783
    },
    {
        "id": 14,
        "label": "algorithms",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: inference, Relation: utlises, Tail: algorithms",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007721234392398544,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.051228647319709275
    },
    {
        "id": 15,
        "label": "algorithms",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: algorithms, Relation: is_affected_by, Tail: virtual environments",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007721234392398544,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.051228647319709275
    },
    {
        "id": 16,
        "label": "virtual environments",
        "group": "SPA",
        "color": "#800080",
        "details": "Head: algorithms, Relation: is_affected_by, Tail: virtual environments",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.180542698449433,
        "eigenvector_centrality": 0.00470006460892367
    },
    {
        "id": 17,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail:  inputs/data",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 18,
        "label": " inputs/data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI systems, Relation: utlises, Tail:  inputs/data",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 19,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: algorithms",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 20,
        "label": "algorithms",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI systems, Relation: contains, Tail: algorithms",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007721234392398544,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.051228647319709275
    },
    {
        "id": 21,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: should_be, Tail: inference",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 22,
        "label": "inference",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: should_be, Tail: inference",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0007327695968669599,
        "closeness_centrality": 0.22605766444508837,
        "eigenvector_centrality": 0.03231240121747783
    },
    {
        "id": 23,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: data processing",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 24,
        "label": "data processing",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: AI system, Relation: can_be, Tail: data processing",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 25,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: enable learning",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 26,
        "label": "enable learning",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: AI system, Relation: can_be, Tail: enable learning",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 27,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: reasoning",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 28,
        "label": "reasoning",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: AI system, Relation: can_be, Tail: reasoning",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 29,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: modelling",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 30,
        "label": "modelling",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: AI system, Relation: can_be, Tail: modelling",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 31,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 32,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 33,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail: predictions",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 34,
        "label": "predictions",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: utlises, Tail: predictions",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0013832013924249614,
        "closeness_centrality": 0.2580418423881584,
        "eigenvector_centrality": 0.07519121166210384
    },
    {
        "id": 35,
        "label": "2019 Ethics Guidelines",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: 2019 Ethics Guidelines, Relation: based_on, Tail: AI",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.19180650316552952,
        "eigenvector_centrality": 0.010279154555760395
    },
    {
        "id": 36,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: 2019 Ethics Guidelines, Relation: based_on, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 37,
        "label": "High-Level Expert Group",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: High-Level Expert Group, Relation: governs_or_guides, Tail: AI",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.19180650316552952,
        "eigenvector_centrality": 0.010279154555760395
    },
    {
        "id": 38,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: High-Level Expert Group, Relation: governs_or_guides, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 39,
        "label": "the Commission",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: the Commission, Relation: governs_or_guides, Tail: AI",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.002113139920778309,
        "closeness_centrality": 0.22701149425287354,
        "eigenvector_centrality": 0.04936673572608159
    },
    {
        "id": 40,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: the Commission, Relation: governs_or_guides, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 41,
        "label": "HLEG",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: HLEG, Relation: interact_with, Tail: Guidelines",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.003132752578565386,
        "closeness_centrality": 0.19564263322884012,
        "eigenvector_centrality": 0.01111916267469397
    },
    {
        "id": 42,
        "label": "Guidelines",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: HLEG, Relation: interact_with, Tail: Guidelines",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00022028578063060814,
        "closeness_centrality": 0.17134307050296507,
        "eigenvector_centrality": 0.004044660741287578
    },
    {
        "id": 43,
        "label": "ethical principles",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: ethical principles, Relation: governs_or_guides, Tail: HLEG",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002786485545106234,
        "closeness_centrality": 0.17327447387417402,
        "eigenvector_centrality": 0.00511131693320042
    },
    {
        "id": 44,
        "label": "HLEG",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: ethical principles, Relation: governs_or_guides, Tail: HLEG",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.003132752578565386,
        "closeness_centrality": 0.19564263322884012,
        "eigenvector_centrality": 0.01111916267469397
    },
    {
        "id": 45,
        "label": "HLEG",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: HLEG, Relation: regulates, Tail: AI",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.003132752578565386,
        "closeness_centrality": 0.19564263322884012,
        "eigenvector_centrality": 0.01111916267469397
    },
    {
        "id": 46,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: HLEG, Relation: regulates, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 47,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI, Relation: should_be, Tail: trustworthy",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 48,
        "label": "trustworthy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI, Relation: should_be, Tail: trustworthy",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.01735333631885356,
        "closeness_centrality": 0.19388008698353523,
        "eigenvector_centrality": 0.010367914710043712
    },
    {
        "id": 49,
        "label": "Artificial Intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: Artificial Intelligence, Relation: should_be, Tail: coherent",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.011680847887744438,
        "closeness_centrality": 0.15198227157607636,
        "eigenvector_centrality": 0.0009674901993027658
    },
    {
        "id": 50,
        "label": "coherent",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Artificial Intelligence, Relation: should_be, Tail: coherent",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.12439705002989833,
        "eigenvector_centrality": 8.876015428331636e-05
    },
    {
        "id": 51,
        "label": "Artificial Intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: Artificial Intelligence, Relation: should_be, Tail: human-centric",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.011680847887744438,
        "closeness_centrality": 0.15198227157607636,
        "eigenvector_centrality": 0.0009674901993027658
    },
    {
        "id": 52,
        "label": "human-centric",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Artificial Intelligence, Relation: should_be, Tail: human-centric",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.12439705002989833,
        "eigenvector_centrality": 8.876015428331636e-05
    },
    {
        "id": 53,
        "label": "Artificial Intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: Artificial Intelligence, Relation: should_be, Tail: trustworthy",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.011680847887744438,
        "closeness_centrality": 0.15198227157607636,
        "eigenvector_centrality": 0.0009674901993027658
    },
    {
        "id": 54,
        "label": "trustworthy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Artificial Intelligence, Relation: should_be, Tail: trustworthy",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.01735333631885356,
        "closeness_centrality": 0.19388008698353523,
        "eigenvector_centrality": 0.010367914710043712
    },
    {
        "id": 55,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: are_central_to, Tail: legally binding requirements",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 56,
        "label": "legally binding requirements",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: Regulation, Relation: are_central_to, Tail: legally binding requirements",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.004250204958333035,
        "closeness_centrality": 0.21434949855749416,
        "eigenvector_centrality": 0.032967492633463456
    },
    {
        "id": 57,
        "label": "legally binding requirements",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: legally binding requirements, Relation: involved_in, Tail: Union law",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.004250204958333035,
        "closeness_centrality": 0.21434949855749416,
        "eigenvector_centrality": 0.032967492633463456
    },
    {
        "id": 58,
        "label": "Union law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: legally binding requirements, Relation: involved_in, Tail: Union law",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.005279290627987316,
        "closeness_centrality": 0.24908205619412516,
        "eigenvector_centrality": 0.08397999130477181
    },
    {
        "id": 59,
        "label": "legally binding requirements",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: legally binding requirements, Relation: relate_to, Tail: Guidelines",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.004250204958333035,
        "closeness_centrality": 0.21434949855749416,
        "eigenvector_centrality": 0.032967492633463456
    },
    {
        "id": 60,
        "label": "Guidelines",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: legally binding requirements, Relation: relate_to, Tail: Guidelines",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00022028578063060814,
        "closeness_centrality": 0.17134307050296507,
        "eigenvector_centrality": 0.004044660741287578
    },
    {
        "id": 61,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: require, Tail: human agency",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 62,
        "label": "human agency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: require, Tail: human agency",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 63,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_be, Tail: oversight",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 64,
        "label": "oversight",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: should_be, Tail: oversight",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0011521628835286272,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.06225032214655916
    },
    {
        "id": 65,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: must_be, Tail: respects human dignity and personal autonomy",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 66,
        "label": "respects human dignity and personal autonomy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: must_be, Tail: respects human dignity and personal autonomy",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 67,
        "label": "Guidelines of HLEG",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Guidelines of HLEG, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 68,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Guidelines of HLEG, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 69,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_be, Tail: safety",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 70,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: should_be, Tail: safety",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    },
    {
        "id": 71,
        "label": "data governance",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: data governance, Relation: require, Tail: AI systems",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2418055017435103,
        "eigenvector_centrality": 0.06115979748536545
    },
    {
        "id": 72,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: data governance, Relation: require, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 73,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: require, Tail: Privacy",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 74,
        "label": "Privacy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: require, Tail: Privacy",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 75,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: require, Tail: compliance",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 76,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: require, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 77,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: require, Tail: Transparency",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 78,
        "label": "Transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: require, Tail: Transparency",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0027855162203572407,
        "closeness_centrality": 0.2380607262740311,
        "eigenvector_centrality": 0.04334858437959842
    },
    {
        "id": 79,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_be, Tail: traceability",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 80,
        "label": "traceability",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: should_be, Tail: traceability",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 81,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: interact_with, Tail: persons",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 82,
        "label": "persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: AI system, Relation: interact_with, Tail: persons",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.004249910672500924,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.10788236881773494
    },
    {
        "id": 83,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: require, Tail: fairness",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 84,
        "label": "fairness",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: require, Tail: fairness",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 85,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: Diversity",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 86,
        "label": "Diversity",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: consider, Tail: Diversity",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 87,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: non-discrimination",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 88,
        "label": "non-discrimination",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: consider, Tail: non-discrimination",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.022988505747126436,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05510609821155349
    },
    {
        "id": 89,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: require, Tail: monitoring",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 90,
        "label": "monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: require, Tail: monitoring",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.24235010872941903,
        "eigenvector_centrality": 0.06516251862828426
    },
    {
        "id": 91,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: Social and environmental well-being",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 92,
        "label": "Social and environmental well-being",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: Social and environmental well-being",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 93,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: require, Tail: drafting",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 94,
        "label": "drafting",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Regulation, Relation: require, Tail: drafting",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21057426277076724,
        "eigenvector_centrality": 0.024891675588319895
    },
    {
        "id": 95,
        "label": "stakeholders",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: stakeholders, Relation: are_central_to, Tail: ethical principles",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0019474299646713427,
        "closeness_centrality": 0.2061368740916898,
        "eigenvector_centrality": 0.017935715050505036
    },
    {
        "id": 96,
        "label": "ethical principles",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: stakeholders, Relation: are_central_to, Tail: ethical principles",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002786485545106234,
        "closeness_centrality": 0.17327447387417402,
        "eigenvector_centrality": 0.00511131693320042
    },
    {
        "id": 97,
        "label": "stakeholders",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: stakeholders, Relation: perform_in, Tail: development",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0019474299646713427,
        "closeness_centrality": 0.2061368740916898,
        "eigenvector_centrality": 0.017935715050505036
    },
    {
        "id": 98,
        "label": "development",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: stakeholders, Relation: perform_in, Tail: development",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.0033258265862945624,
        "closeness_centrality": 0.20653253027996557,
        "eigenvector_centrality": 0.026658545357186324
    },
    {
        "id": 99,
        "label": "development",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: development, Relation: consider, Tail: ethical principles",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.0033258265862945624,
        "closeness_centrality": 0.20653253027996557,
        "eigenvector_centrality": 0.026658545357186324
    },
    {
        "id": 100,
        "label": "ethical principles",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: development, Relation: consider, Tail: ethical principles",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002786485545106234,
        "closeness_centrality": 0.17327447387417402,
        "eigenvector_centrality": 0.00511131693320042
    },
    {
        "id": 101,
        "label": "Biometric categorisation systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Biometric categorisation systems, Relation: utlises, Tail: biometric data",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.18237872589129164,
        "eigenvector_centrality": 0.005143477728017019
    },
    {
        "id": 102,
        "label": "biometric data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: Biometric categorisation systems, Relation: utlises, Tail: biometric data",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.02311912225705329,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05606200876604513
    },
    {
        "id": 103,
        "label": "labelling, filtering or categorisation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: labelling, filtering or categorisation, Relation: perform_in, Tail: biometric datasets",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0029108822212270485,
        "closeness_centrality": 0.182999061693643,
        "eigenvector_centrality": 0.005231545649507518
    },
    {
        "id": 104,
        "label": "biometric datasets",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: labelling, filtering or categorisation, Relation: perform_in, Tail: biometric datasets",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 1.8659501418122106e-05,
        "closeness_centrality": 0.14482294518958555,
        "eigenvector_centrality": 0.0009598796751043775
    },
    {
        "id": 105,
        "label": " national law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head:  national law, Relation: governs_or_guides, Tail: biometric datasets",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0029108822212270485,
        "closeness_centrality": 0.182999061693643,
        "eigenvector_centrality": 0.005231545649507518
    },
    {
        "id": 106,
        "label": "biometric datasets",
        "group": "DAT",
        "color": "#000000",
        "details": "Head:  national law, Relation: governs_or_guides, Tail: biometric datasets",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 1.8659501418122106e-05,
        "closeness_centrality": 0.14482294518958555,
        "eigenvector_centrality": 0.0009598796751043775
    },
    {
        "id": 107,
        "label": "biometric data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: biometric data, Relation: based_on, Tail:  national law",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.02311912225705329,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05606200876604513
    },
    {
        "id": 108,
        "label": " national law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: biometric data, Relation: based_on, Tail:  national law",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0029108822212270485,
        "closeness_centrality": 0.182999061693643,
        "eigenvector_centrality": 0.005231545649507518
    },
    {
        "id": 109,
        "label": "labelling, filtering or categorisation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: labelling, filtering or categorisation, Relation: utlises, Tail: biometric data",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0029108822212270485,
        "closeness_centrality": 0.182999061693643,
        "eigenvector_centrality": 0.005231545649507518
    },
    {
        "id": 110,
        "label": "biometric data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: labelling, filtering or categorisation, Relation: utlises, Tail: biometric data",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.02311912225705329,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05606200876604513
    },
    {
        "id": 111,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail: natural persons",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 112,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: AI systems, Relation: utlises, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 113,
        "label": "violate",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: violate, Relation: should_not_be, Tail: right to dignity",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.01746529332736229,
        "closeness_centrality": 0.18425247992442137,
        "eigenvector_centrality": 0.005186744577920142
    },
    {
        "id": 114,
        "label": "right to dignity",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: violate, Relation: should_not_be, Tail: right to dignity",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.14521383033179766,
        "eigenvector_centrality": 0.00047582998514410446
    },
    {
        "id": 115,
        "label": "violate",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: violate, Relation: should_not_be, Tail: non-discrimination",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.01746529332736229,
        "closeness_centrality": 0.18425247992442137,
        "eigenvector_centrality": 0.005186744577920142
    },
    {
        "id": 116,
        "label": "non-discrimination",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: violate, Relation: should_not_be, Tail: non-discrimination",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.022988505747126436,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05510609821155349
    },
    {
        "id": 117,
        "label": "violate",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: violate, Relation: should_not_be, Tail: equality",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.01746529332736229,
        "closeness_centrality": 0.18425247992442137,
        "eigenvector_centrality": 0.005186744577920142
    },
    {
        "id": 118,
        "label": "equality",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: violate, Relation: should_not_be, Tail: equality",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.14521383033179766,
        "eigenvector_centrality": 0.00047582998514410446
    },
    {
        "id": 119,
        "label": "violate",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: violate, Relation: should_not_be, Tail: justice",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.01746529332736229,
        "closeness_centrality": 0.18425247992442137,
        "eigenvector_centrality": 0.005186744577920142
    },
    {
        "id": 120,
        "label": "justice",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: violate, Relation: should_not_be, Tail: justice",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.14521383033179766,
        "eigenvector_centrality": 0.00047582998514410446
    },
    {
        "id": 121,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail: data points",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 122,
        "label": "data points",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI systems, Relation: utlises, Tail: data points",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 123,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: involved_in, Tail: evaluate",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 124,
        "label": "evaluate",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: involved_in, Tail: evaluate",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 125,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: interact_with, Tail: natural persons",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 126,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: AI systems, Relation: interact_with, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 127,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: social behaviour",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 128,
        "label": "social behaviour",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: consider, Tail: social behaviour",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 129,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 130,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: natural persons, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 131,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: require, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 132,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: natural persons, Relation: require, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 133,
        "label": "Union law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Union law, Relation: must_be, Tail: compliance",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.005279290627987316,
        "closeness_centrality": 0.24908205619412516,
        "eigenvector_centrality": 0.08397999130477181
    },
    {
        "id": 134,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Union law, Relation: must_be, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 135,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: compliance, Relation: utlises, Tail: evaluation",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 136,
        "label": "evaluation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: compliance, Relation: utlises, Tail: evaluation",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2022621208192896,
        "eigenvector_centrality": 0.01577035021332293
    },
    {
        "id": 137,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: regulates, Tail: law enforcement",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 138,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: systems, Relation: regulates, Tail: law enforcement",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 139,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 140,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: systems, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 141,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: must_be, Tail: safety",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 142,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: natural persons, Relation: must_be, Tail: safety",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    },
    {
        "id": 143,
        "label": "placing on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: placing on the market, Relation: involved_in, Tail: AI systems",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002782487080516637,
        "closeness_centrality": 0.24736424891002776,
        "eigenvector_centrality": 0.06754341142461688
    },
    {
        "id": 144,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: placing on the market, Relation: involved_in, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 145,
        "label": "putting into service",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: putting into service, Relation: involved_in, Tail: AI systems",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2456699732325618,
        "eigenvector_centrality": 0.05529187705808153
    },
    {
        "id": 146,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: putting into service, Relation: involved_in, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 147,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail:  facial recognition databases",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 148,
        "label": " facial recognition databases",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI systems, Relation: utlises, Tail:  facial recognition databases",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.001322847582084035,
        "closeness_centrality": 0.23701200060762567,
        "eigenvector_centrality": 0.04384368103167988
    },
    {
        "id": 149,
        "label": "privacy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: privacy, Relation: has_implications_for, Tail:  facial recognition databases",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0009062297855401305,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.03894291118635354
    },
    {
        "id": 150,
        "label": " facial recognition databases",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: privacy, Relation: has_implications_for, Tail:  facial recognition databases",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.001322847582084035,
        "closeness_centrality": 0.23701200060762567,
        "eigenvector_centrality": 0.04384368103167988
    },
    {
        "id": 151,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 152,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: rights, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 153,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: interact_with, Tail: natural persons",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 154,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: AI systems, Relation: interact_with, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 155,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail: biometric data",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 156,
        "label": "biometric data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI systems, Relation: utlises, Tail: biometric data",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.02311912225705329,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05606200876604513
    },
    {
        "id": 157,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: rights",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 158,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: consider, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 159,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: has_implications_for, Tail: biometric data",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 160,
        "label": "biometric data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: rights, Relation: has_implications_for, Tail: biometric data",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.02311912225705329,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05606200876604513
    },
    {
        "id": 161,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: utlises, Tail: systems",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 162,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: natural persons, Relation: utlises, Tail: systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 163,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: putting into service",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 164,
        "label": "putting into service",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: consider, Tail: putting into service",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2456699732325618,
        "eigenvector_centrality": 0.05529187705808153
    },
    {
        "id": 165,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: placing on the market",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 166,
        "label": "placing on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: consider, Tail: placing on the market",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002782487080516637,
        "closeness_centrality": 0.24736424891002776,
        "eigenvector_centrality": 0.06754341142461688
    },
    {
        "id": 167,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: placed on the market",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 168,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: consider, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 169,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: safety, Relation: has_implications_for, Tail: systems",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    },
    {
        "id": 170,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: safety, Relation: has_implications_for, Tail: systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 171,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: must_be, Tail: safety",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 172,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: must_be, Tail: safety",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    },
    {
        "id": 173,
        "label": "persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: persons, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.004249910672500924,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.10788236881773494
    },
    {
        "id": 174,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: persons, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 175,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: contains, Tail: safety components",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 176,
        "label": "safety components",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: systems, Relation: contains, Tail: safety components",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.17785693929894555,
        "eigenvector_centrality": 0.010969912998676527
    },
    {
        "id": 177,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: health",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 178,
        "label": "health",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: consider, Tail: health",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0005360445603392308,
        "closeness_centrality": 0.23341311990425612,
        "eigenvector_centrality": 0.049438348470485345
    },
    {
        "id": 179,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_be, Tail: safety",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 180,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: should_be, Tail: safety",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    },
    {
        "id": 181,
        "label": "Union harmonisation legislation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Union harmonisation legislation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.006746333475825872,
        "closeness_centrality": 0.2580418423881584,
        "eigenvector_centrality": 0.06845938437971046
    },
    {
        "id": 182,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union harmonisation legislation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 183,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: consider, Tail: safety risks",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 184,
        "label": "safety risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: consider, Tail: safety risks",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 185,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: are_central_to, Tail: components",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 186,
        "label": "components",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI systems, Relation: are_central_to, Tail: components",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00266869146179491,
        "closeness_centrality": 0.23965133246294448,
        "eigenvector_centrality": 0.04622115694875959
    },
    {
        "id": 187,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 188,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 189,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: has_implications_for, Tail: AI system",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 190,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: has_implications_for, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 191,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 192,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 193,
        "label": " right",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  right, Relation: are_central_to, Tail:  Charte",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 194,
        "label": " Charte",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head:  right, Relation: are_central_to, Tail:  Charte",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 195,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: require, Tail: high quality data",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 196,
        "label": "high quality data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI system, Relation: require, Tail: high quality data",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0008872500305355308,
        "closeness_centrality": 0.256810139083203,
        "eigenvector_centrality": 0.06788317964851853
    },
    {
        "id": 197,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: must_be, Tail: transparent",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 198,
        "label": "transparent",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: must_be, Tail: transparent",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 199,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: is_affected_by, Tail: AI systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 200,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: rights, Relation: is_affected_by, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 201,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: works_with, Tail: law enforcement",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 202,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: AI systems, Relation: works_with, Tail: law enforcement",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 203,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: must_be, Tail: transparency",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 204,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: must_be, Tail: transparency",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 205,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: transparency, Relation: certifies_or_validates, Tail: accountability",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 206,
        "label": "accountability",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: transparency, Relation: certifies_or_validates, Tail: accountability",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.19493378310844575,
        "eigenvector_centrality": 0.0128626548958233
    },
    {
        "id": 207,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 208,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 209,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: relate_to, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 210,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: relate_to, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 211,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: relate_to, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 212,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: relate_to, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 213,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 214,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 215,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 216,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 217,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 218,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 219,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 220,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 221,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 222,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 223,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 224,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 225,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: governs_or_guides, Tail: person",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 226,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: law enforcement, Relation: governs_or_guides, Tail: person",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 227,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: governs_or_guides, Tail: person",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 228,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: Union, Relation: governs_or_guides, Tail: person",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 229,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: governs_or_guides, Tail: person",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 230,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: law enforcement, Relation: governs_or_guides, Tail: person",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 231,
        "label": " evaluatio",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head:  evaluatio, Relation: has_implications_for, Tail: person",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.16605470412941678,
        "eigenvector_centrality": 0.00485153653680913
    },
    {
        "id": 232,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  evaluatio, Relation: has_implications_for, Tail: person",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 233,
        "label": " regulatio",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head:  regulatio, Relation: regulates, Tail:  perso",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00011195700850873263,
        "closeness_centrality": 0.011494252873563218,
        "eigenvector_centrality": 2.1800549396966873e-13
    },
    {
        "id": 234,
        "label": " perso",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  regulatio, Relation: regulates, Tail:  perso",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.007662835249042145,
        "eigenvector_centrality": 1.179852809868144e-13
    },
    {
        "id": 235,
        "label": " profilin",
        "group": "ALG",
        "color": "#808000",
        "details": "Head:  profilin, Relation: certifies_or_validates, Tail:  natural person",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.5415028461473921e-13
    },
    {
        "id": 236,
        "label": " natural person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  profilin, Relation: certifies_or_validates, Tail:  natural person",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00018659501418122107,
        "closeness_centrality": 0.013793103448275862,
        "eigenvector_centrality": 2.848341436171303e-13
    },
    {
        "id": 237,
        "label": " regulatio",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head:  regulatio, Relation: regulates, Tail:  natural person",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00011195700850873263,
        "closeness_centrality": 0.011494252873563218,
        "eigenvector_centrality": 2.1800549396966873e-13
    },
    {
        "id": 238,
        "label": " natural person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  regulatio, Relation: regulates, Tail:  natural person",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00018659501418122107,
        "closeness_centrality": 0.013793103448275862,
        "eigenvector_centrality": 2.848341436171303e-13
    },
    {
        "id": 239,
        "label": " natural person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  natural person, Relation: contains, Tail:  characteristic",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00018659501418122107,
        "closeness_centrality": 0.013793103448275862,
        "eigenvector_centrality": 2.848341436171303e-13
    },
    {
        "id": 240,
        "label": " characteristic",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  natural person, Relation: contains, Tail:  characteristic",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.5415028461473921e-13
    },
    {
        "id": 241,
        "label": " natural person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  natural person, Relation: contains, Tail:  characteristic",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00018659501418122107,
        "closeness_centrality": 0.013793103448275862,
        "eigenvector_centrality": 2.848341436171303e-13
    },
    {
        "id": 242,
        "label": " characteristic",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  natural person, Relation: contains, Tail:  characteristic",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.5415028461473921e-13
    },
    {
        "id": 243,
        "label": " characteristic",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  characteristic, Relation: applies_to, Tail:  natural person",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.5415028461473921e-13
    },
    {
        "id": 244,
        "label": " natural person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  characteristic, Relation: applies_to, Tail:  natural person",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00018659501418122107,
        "closeness_centrality": 0.013793103448275862,
        "eigenvector_centrality": 2.848341436171303e-13
    },
    {
        "id": 245,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 246,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: utlises, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 247,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 248,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 249,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_not_be, Tail: high-risk AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 250,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_not_be, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 251,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 252,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: law enforcement, Relation: utlises, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 253,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI, Relation: has_implications_for, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 254,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI, Relation: has_implications_for, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 255,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_be, Tail: non-discriminatory",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 256,
        "label": "non-discriminatory",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: should_be, Tail: non-discriminatory",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.23701200060762567,
        "eigenvector_centrality": 0.053133497935787664
    },
    {
        "id": 257,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: transparency, Relation: should_be, Tail: non-discriminatory",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 258,
        "label": "non-discriminatory",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: transparency, Relation: should_be, Tail: non-discriminatory",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.23701200060762567,
        "eigenvector_centrality": 0.053133497935787664
    },
    {
        "id": 259,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: contains, Tail: non-discrimination",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 260,
        "label": "non-discrimination",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: contains, Tail: non-discrimination",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.022988505747126436,
        "closeness_centrality": 0.2485068089511826,
        "eigenvector_centrality": 0.05510609821155349
    },
    {
        "id": 261,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: contains, Tail: personal data",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 262,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: rights, Relation: contains, Tail: personal data",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 263,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: contains, Tail: international",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 264,
        "label": "international",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: rights, Relation: contains, Tail: international",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.204569293300118,
        "eigenvector_centrality": 0.014359425186445021
    },
    {
        "id": 265,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: applies_to, Tail: persons",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 266,
        "label": "persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: rights, Relation: applies_to, Tail: persons",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.004249910672500924,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.10788236881773494
    },
    {
        "id": 267,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: high-risk, Relation: applies_to, Tail: AI systems",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 268,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk, Relation: applies_to, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 269,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 270,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 271,
        "label": "assessment",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: assessment, Relation: applies_to, Tail: natural persons",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21434949855749416,
        "eigenvector_centrality": 0.030115985129933964
    },
    {
        "id": 272,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: assessment, Relation: applies_to, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 273,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: can_be, Tail: risks",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 274,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: natural persons, Relation: can_be, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 275,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 276,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 277,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 278,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 279,
        "label": "democratic processes",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: democratic processes, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0001580726334420916,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.07005140991239056
    },
    {
        "id": 280,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: democratic processes, Relation: utlises, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 281,
        "label": "democratic processes",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: democratic processes, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0001580726334420916,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.07005140991239056
    },
    {
        "id": 282,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: democratic processes, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 283,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: contains, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 284,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: contains, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 285,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 286,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 287,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: transparency, Relation: are_central_to, Tail: Regulation",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 288,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: transparency, Relation: are_central_to, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 289,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: certifies_or_validates, Tail: risks",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 290,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Regulation, Relation: certifies_or_validates, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 291,
        "label": "Charter",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Charter, Relation: contains, Tail: AI systems",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 292,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Charter, Relation: contains, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 293,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: has_implications_for, Tail: natural persons",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 294,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: AI systems, Relation: has_implications_for, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 295,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: has_implications_for, Tail: natural persons",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 296,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: high-risk AI systems, Relation: has_implications_for, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 297,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risk management system, Relation: contains, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 298,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risk management system, Relation: contains, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 299,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risk management system, Relation: governs_or_guides, Tail: AI system",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 300,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risk management system, Relation: governs_or_guides, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 301,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: contains, Tail: risks",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 302,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: contains, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 303,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: based_on, Tail: systems",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 304,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: artificial intelligence, Relation: based_on, Tail: systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 305,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: health",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 306,
        "label": "health",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: health",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0005360445603392308,
        "closeness_centrality": 0.23341311990425612,
        "eigenvector_centrality": 0.049438348470485345
    },
    {
        "id": 307,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: safety",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 308,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: safety",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    },
    {
        "id": 309,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: rights",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 310,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 311,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: documentation, Relation: governs_or_guides, Tail: risk management system",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 312,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: documentation, Relation: governs_or_guides, Tail: risk management system",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 313,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: contains, Tail: documentation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 314,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Regulation, Relation: contains, Tail: documentation",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 315,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: risk management system",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 316,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: risk management system",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 317,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: relate_to, Tail: reasonably foreseeable misuse",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 318,
        "label": "reasonably foreseeable misuse",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: risks, Relation: relate_to, Tail: reasonably foreseeable misuse",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20692970822281165,
        "eigenvector_centrality": 0.020788227445962242
    },
    {
        "id": 319,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: health",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 320,
        "label": "health",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: health",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0005360445603392308,
        "closeness_centrality": 0.23341311990425612,
        "eigenvector_centrality": 0.049438348470485345
    },
    {
        "id": 321,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: rights",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 322,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: has_implications_for, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 323,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: involved_in, Tail: AI system",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 324,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: involved_in, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 325,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: utlises, Tail: artificial intelligence",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 326,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: provider, Relation: utlises, Tail: artificial intelligence",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 327,
        "label": "state of the art",
        "group": "STA",
        "color": "#C0C0C0",
        "details": "Head: state of the art, Relation: contains, Tail: AI",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.19180650316552952,
        "eigenvector_centrality": 0.010279154555760395
    },
    {
        "id": 328,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: state of the art, Relation: contains, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 329,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risk management system, Relation: relate_to, Tail: AI",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 330,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: risk management system, Relation: relate_to, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 331,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: interact_with, Tail: stakeholders",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 332,
        "label": "stakeholders",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: provider, Relation: interact_with, Tail: stakeholders",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0019474299646713427,
        "closeness_centrality": 0.2061368740916898,
        "eigenvector_centrality": 0.017935715050505036
    },
    {
        "id": 333,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: interact_with, Tail: high-risk AI systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 334,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: provider, Relation: interact_with, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 335,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: characteristics",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 336,
        "label": "characteristics",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: characteristics",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.003662406592637908,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.09347862822203773
    },
    {
        "id": 337,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 338,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: provider, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 339,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: certifies_or_validates, Tail: system",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 340,
        "label": "system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: provider, Relation: certifies_or_validates, Tail: system",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00596304352461988,
        "closeness_centrality": 0.21477734186798816,
        "eigenvector_centrality": 0.036214806761149805
    },
    {
        "id": 341,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: interact_with, Tail: instructions for use",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 342,
        "label": "instructions for use",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: provider, Relation: interact_with, Tail: instructions for use",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0061948736937541245,
        "closeness_centrality": 0.2061368740916898,
        "eigenvector_centrality": 0.018252405989284123
    },
    {
        "id": 343,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 344,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: provider, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 345,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: risks",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 346,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 347,
        "label": "deployer",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: deployer, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.21392335641324467,
        "eigenvector_centrality": 0.02784671713851317
    },
    {
        "id": 348,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: deployer, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 349,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: high-risk",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 350,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 351,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: consider, Tail: high-risk",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 352,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: training, Relation: consider, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 353,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: require, Tail: Regulation",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 354,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: training, Relation: require, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 355,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 356,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: provider, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 357,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: interact_with, Tail: Regulation",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 358,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: provider, Relation: interact_with, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 359,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: involved_in, Tail: training",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 360,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: involved_in, Tail: training",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 361,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: high-risk",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 362,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 363,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: training",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 364,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: providers, Relation: interact_with, Tail: training",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 365,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail: high quality data",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 366,
        "label": "high quality data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI systems, Relation: utlises, Tail: high quality data",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0008872500305355308,
        "closeness_centrality": 0.256810139083203,
        "eigenvector_centrality": 0.06788317964851853
    },
    {
        "id": 367,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: involved_in, Tail: training",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 368,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: models, Relation: involved_in, Tail: training",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 369,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: require, Tail: Union law",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 370,
        "label": "Union law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: training, Relation: require, Tail: Union law",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.005279290627987316,
        "closeness_centrality": 0.24908205619412516,
        "eigenvector_centrality": 0.08397999130477181
    },
    {
        "id": 371,
        "label": "High quality data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: High quality data, Relation: has_implications_for, Tail: high-risk",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.18844737001026632,
        "eigenvector_centrality": 0.008992339426463944
    },
    {
        "id": 372,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: High quality data, Relation: has_implications_for, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 373,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: consider, Tail: high-risk",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 374,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: training, Relation: consider, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 375,
        "label": " AI syste",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head:  AI syste, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.011643528884908194,
        "closeness_centrality": 0.20379440961337514,
        "eigenvector_centrality": 0.015905361640721503
    },
    {
        "id": 376,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  AI syste, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 377,
        "label": " personal dat",
        "group": "DAT",
        "color": "#000000",
        "details": "Head:  personal dat, Relation: has_implications_for, Tail:  transparenc",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.15754531226334123,
        "eigenvector_centrality": 0.0014715587760222243
    },
    {
        "id": 378,
        "label": " transparenc",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  personal dat, Relation: has_implications_for, Tail:  transparenc",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.12809934318555008,
        "eigenvector_centrality": 0.00013501142739857181
    },
    {
        "id": 379,
        "label": " person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head:  person, Relation: are_central_to, Tail: compliance",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2022621208192896,
        "eigenvector_centrality": 0.01577035021332293
    },
    {
        "id": 380,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head:  person, Relation: are_central_to, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 381,
        "label": " dataset",
        "group": "DAT",
        "color": "#000000",
        "details": "Head:  dataset, Relation: require, Tail:  Union la",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 382,
        "label": " Union la",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head:  dataset, Relation: require, Tail:  Union la",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 383,
        "label": " AI syste",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head:  AI syste, Relation: utlises, Tail:  personal dat",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.011643528884908194,
        "closeness_centrality": 0.20379440961337514,
        "eigenvector_centrality": 0.015905361640721503
    },
    {
        "id": 384,
        "label": " personal dat",
        "group": "DAT",
        "color": "#000000",
        "details": "Head:  AI syste, Relation: utlises, Tail:  personal dat",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.15754531226334123,
        "eigenvector_centrality": 0.0014715587760222243
    },
    {
        "id": 385,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: utlises, Tail: datasets",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 386,
        "label": "datasets",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: systems, Relation: utlises, Tail: datasets",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.002574556494907602,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.07885309264719506
    },
    {
        "id": 387,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: utlises, Tail: datasets",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 388,
        "label": "datasets",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI systems, Relation: utlises, Tail: datasets",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.002574556494907602,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.07885309264719506
    },
    {
        "id": 389,
        "label": "development",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: development, Relation: consider, Tail: privacy-preserving",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.0033258265862945624,
        "closeness_centrality": 0.20653253027996557,
        "eigenvector_centrality": 0.026658545357186324
    },
    {
        "id": 390,
        "label": "privacy-preserving",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: development, Relation: consider, Tail: privacy-preserving",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0014703687117480209,
        "closeness_centrality": 0.2294316594368061,
        "eigenvector_centrality": 0.04271658908004133
    },
    {
        "id": 391,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: privacy-preserving",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 392,
        "label": "privacy-preserving",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: privacy-preserving",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0014703687117480209,
        "closeness_centrality": 0.2294316594368061,
        "eigenvector_centrality": 0.04271658908004133
    },
    {
        "id": 393,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: characteristics",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 394,
        "label": "characteristics",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: characteristics",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.003662406592637908,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.09347862822203773
    },
    {
        "id": 395,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: utlises, Tail: datasets",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 396,
        "label": "datasets",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI system, Relation: utlises, Tail: datasets",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.002574556494907602,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.07885309264719506
    },
    {
        "id": 397,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: require, Tail: Regulation",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 398,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: training, Relation: require, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 399,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: testing, Relation: consider, Tail: compliance",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 400,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: testing, Relation: consider, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 401,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: privacy",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 402,
        "label": "privacy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: privacy",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0009062297855401305,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.03894291118635354
    },
    {
        "id": 403,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: utlises, Tail: personal data",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 404,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI system, Relation: utlises, Tail: personal data",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 405,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: personal data, Relation: has_implications_for, Tail: privacy",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 406,
        "label": "privacy",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: personal data, Relation: has_implications_for, Tail: privacy",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0009062297855401305,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.03894291118635354
    },
    {
        "id": 407,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: require, Tail: Regulation",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 408,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: training, Relation: require, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 409,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 410,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 411,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 412,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 413,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: based_on, Tail: algorithms",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 414,
        "label": "algorithms",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI systems, Relation: based_on, Tail: algorithms",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007721234392398544,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.051228647319709275
    },
    {
        "id": 415,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: governs_or_guides, Tail: data governance",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 416,
        "label": "data governance",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: providers, Relation: governs_or_guides, Tail: data governance",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2418055017435103,
        "eigenvector_centrality": 0.06115979748536545
    },
    {
        "id": 417,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: involved_in, Tail: training",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 418,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: involved_in, Tail: training",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 419,
        "label": "monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: monitoring, Relation: require, Tail: Regulation",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.24235010872941903,
        "eigenvector_centrality": 0.06516251862828426
    },
    {
        "id": 420,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: monitoring, Relation: require, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 421,
        "label": "post market monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: post market monitoring, Relation: consider, Tail: compliance",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2118178115666576,
        "eigenvector_centrality": 0.02674026321199946
    },
    {
        "id": 422,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: post market monitoring, Relation: consider, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 423,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 424,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: systems, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 425,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: involved_in, Tail: post market monitoring",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 426,
        "label": "post market monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: systems, Relation: involved_in, Tail: post market monitoring",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2118178115666576,
        "eigenvector_centrality": 0.02674026321199946
    },
    {
        "id": 427,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 428,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 429,
        "label": "post market monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: post market monitoring, Relation: consider, Tail: compliance",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2118178115666576,
        "eigenvector_centrality": 0.02674026321199946
    },
    {
        "id": 430,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: post market monitoring, Relation: consider, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 431,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: involved_in, Tail: documentation",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 432,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: involved_in, Tail: documentation",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 433,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: training, Relation: consider, Tail: characteristics",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 434,
        "label": "characteristics",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: training, Relation: consider, Tail: characteristics",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.003662406592637908,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.09347862822203773
    },
    {
        "id": 435,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risk management system, Relation: based_on, Tail: algorithms",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 436,
        "label": "algorithms",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: risk management system, Relation: based_on, Tail: algorithms",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007721234392398544,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.051228647319709275
    },
    {
        "id": 437,
        "label": "risk management system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risk management system, Relation: involved_in, Tail: documentation",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.003956197595722371,
        "closeness_centrality": 0.24344671555624903,
        "eigenvector_centrality": 0.08242588469681729
    },
    {
        "id": 438,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: risk management system, Relation: involved_in, Tail: documentation",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 439,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: involved_in, Tail: documentation",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 440,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: involved_in, Tail: documentation",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 441,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: involved_in, Tail: automatic recording",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 442,
        "label": "automatic recording",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: involved_in, Tail: automatic recording",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 443,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: involved_in, Tail: put it into service",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 444,
        "label": "put it into service",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: high-risk AI systems, Relation: involved_in, Tail: put it into service",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2030253741054001,
        "eigenvector_centrality": 0.020625017100932442
    },
    {
        "id": 445,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: placed on the market, Relation: require, Tail: Regulation",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 446,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: placed on the market, Relation: require, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 447,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: placed on the market, Relation: consider, Tail: transparency",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 448,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: placed on the market, Relation: consider, Tail: transparency",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 449,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: is_affected_by, Tail: transparency",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 450,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: high-risk AI systems, Relation: is_affected_by, Tail: transparency",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 451,
        "label": "deployers ",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: deployers , Relation: interact_with, Tail:  AI system",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 452,
        "label": " AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: deployers , Relation: interact_with, Tail:  AI system",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 453,
        "label": "High-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: High-risk AI systems, Relation: require, Tail:  instructions of use",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.19458128078817732,
        "eigenvector_centrality": 0.015890306858143133
    },
    {
        "id": 454,
        "label": " instructions of use",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: High-risk AI systems, Relation: require, Tail:  instructions of use",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.15155415250121418,
        "eigenvector_centrality": 0.0014578224319107037
    },
    {
        "id": 455,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: contains, Tail: characteristics",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 456,
        "label": "characteristics",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: contains, Tail: characteristics",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.003662406592637908,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.09347862822203773
    },
    {
        "id": 457,
        "label": "human oversight measures",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: human oversight measures, Relation: contains, Tail: interpretation of the outputs",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.20418111627298305,
        "eigenvector_centrality": 0.015148539095477535
    },
    {
        "id": 458,
        "label": "interpretation of the outputs",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: human oversight measures, Relation: contains, Tail: interpretation of the outputs",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.15731498285944745,
        "eigenvector_centrality": 0.001389740628091879
    },
    {
        "id": 459,
        "label": "system behaviour",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: system behaviour, Relation: is_affected_by, Tail: deployer",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.1630355276907001,
        "eigenvector_centrality": 0.0025548568386206433
    },
    {
        "id": 460,
        "label": "deployer",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: system behaviour, Relation: is_affected_by, Tail: deployer",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.21392335641324467,
        "eigenvector_centrality": 0.02784671713851317
    },
    {
        "id": 461,
        "label": "Transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Transparency, Relation: helps, Tail: deployers",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0027855162203572407,
        "closeness_centrality": 0.2380607262740311,
        "eigenvector_centrality": 0.04334858437959842
    },
    {
        "id": 462,
        "label": "deployers",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: Transparency, Relation: helps, Tail: deployers",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.008214574378367482,
        "closeness_centrality": 0.22797340736411453,
        "eigenvector_centrality": 0.033546300754093546
    },
    {
        "id": 463,
        "label": "instructions for use",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: instructions for use, Relation: helps, Tail: deployers",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0061948736937541245,
        "closeness_centrality": 0.2061368740916898,
        "eigenvector_centrality": 0.018252405989284123
    },
    {
        "id": 464,
        "label": "deployers",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: instructions for use, Relation: helps, Tail: deployers",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.008214574378367482,
        "closeness_centrality": 0.22797340736411453,
        "eigenvector_centrality": 0.033546300754093546
    },
    {
        "id": 465,
        "label": "deployers",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: deployers, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.008214574378367482,
        "closeness_centrality": 0.22797340736411453,
        "eigenvector_centrality": 0.033546300754093546
    },
    {
        "id": 466,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: deployers, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 467,
        "label": "instructions of use",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: instructions of use, Relation: require, Tail: illustrative examples",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 468,
        "label": "illustrative examples",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: instructions of use, Relation: require, Tail: illustrative examples",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 469,
        "label": "Providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Providers, Relation: interact_with, Tail: documentation",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.011643528884908194,
        "closeness_centrality": 0.1775634459997724,
        "eigenvector_centrality": 0.006001255192540298
    },
    {
        "id": 470,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Providers, Relation: interact_with, Tail: documentation",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 471,
        "label": "instructions for use",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: instructions for use, Relation: require, Tail: comprehensive, accessible and understandable information",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0061948736937541245,
        "closeness_centrality": 0.2061368740916898,
        "eigenvector_centrality": 0.018252405989284123
    },
    {
        "id": 472,
        "label": "comprehensive, accessible and understandable information",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: instructions for use, Relation: require, Tail: comprehensive, accessible and understandable information",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.15847341425016503,
        "eigenvector_centrality": 0.0016744911376240824
    },
    {
        "id": 473,
        "label": "deployers",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: deployers, Relation: utlises, Tail: Instructions for use",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.008214574378367482,
        "closeness_centrality": 0.22797340736411453,
        "eigenvector_centrality": 0.033546300754093546
    },
    {
        "id": 474,
        "label": "Instructions for use",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: deployers, Relation: utlises, Tail: Instructions for use",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.17107066498547227,
        "eigenvector_centrality": 0.0030777413396340506
    },
    {
        "id": 475,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: interact_with, Tail: High-risk AI systems",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 476,
        "label": "High-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: natural persons, Relation: interact_with, Tail: High-risk AI systems",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.19458128078817732,
        "eigenvector_centrality": 0.015890306858143133
    },
    {
        "id": 477,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: consider, Tail: human oversight measures",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 478,
        "label": "human oversight measures",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: provider, Relation: consider, Tail: human oversight measures",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.20418111627298305,
        "eigenvector_centrality": 0.015148539095477535
    },
    {
        "id": 479,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: perform_in, Tail: placing on the market",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 480,
        "label": "placing on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: provider, Relation: perform_in, Tail: placing on the market",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002782487080516637,
        "closeness_centrality": 0.24736424891002776,
        "eigenvector_centrality": 0.06754341142461688
    },
    {
        "id": 481,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: perform_in, Tail: putting into service",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 482,
        "label": "putting into service",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: provider, Relation: perform_in, Tail: putting into service",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2456699732325618,
        "eigenvector_centrality": 0.05529187705808153
    },
    {
        "id": 483,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: perform_in, Tail: human oversight",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 484,
        "label": "human oversight",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: natural persons, Relation: perform_in, Tail: human oversight",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0005272722749211777,
        "closeness_centrality": 0.204569293300118,
        "eigenvector_centrality": 0.0315780094789746
    },
    {
        "id": 485,
        "label": "operator",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: operator, Relation: utlises, Tail: system",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.1635310764070852,
        "eigenvector_centrality": 0.0033224035604069767
    },
    {
        "id": 486,
        "label": "system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: operator, Relation: utlises, Tail: system",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00596304352461988,
        "closeness_centrality": 0.21477734186798816,
        "eigenvector_centrality": 0.036214806761149805
    },
    {
        "id": 487,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: require, Tail: training",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 488,
        "label": "training",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: natural persons, Relation: require, Tail: training",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.0043653440278877825,
        "closeness_centrality": 0.27520063497662933,
        "eigenvector_centrality": 0.16694531838350796
    },
    {
        "id": 489,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: person, Relation: perform_in, Tail: human oversight",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 490,
        "label": "human oversight",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: person, Relation: perform_in, Tail: human oversight",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0005272722749211777,
        "closeness_centrality": 0.204569293300118,
        "eigenvector_centrality": 0.0315780094789746
    },
    {
        "id": 491,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: person, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 492,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: person, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 493,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: require, Tail: human oversight",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 494,
        "label": "human oversight",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: systems, Relation: require, Tail: human oversight",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0005272722749211777,
        "closeness_centrality": 0.204569293300118,
        "eigenvector_centrality": 0.0315780094789746
    },
    {
        "id": 495,
        "label": "persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: persons, Relation: contains, Tail: person",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.004249910672500924,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.10788236881773494
    },
    {
        "id": 496,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: persons, Relation: contains, Tail: person",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 497,
        "label": "Union",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union, Relation: governs_or_guides, Tail: application of this requirement",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.007610751597260778,
        "closeness_centrality": 0.2359724742891712,
        "eigenvector_centrality": 0.06630547253999292
    },
    {
        "id": 498,
        "label": "application of this requirement",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Union, Relation: governs_or_guides, Tail: application of this requirement",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.17553580469145524,
        "eigenvector_centrality": 0.006083313215715642
    },
    {
        "id": 499,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: require, Tail: technical robustness",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 500,
        "label": "technical robustness",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: high-risk AI systems, Relation: require, Tail: technical robustness",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.2030253741054001,
        "eigenvector_centrality": 0.020625017100932442
    },
    {
        "id": 501,
        "label": "environment",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: environment, Relation: has_implications_for, Tail: systems",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.17785693929894555,
        "eigenvector_centrality": 0.010969912998676527
    },
    {
        "id": 502,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: environment, Relation: has_implications_for, Tail: systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 503,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: components",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 504,
        "label": "components",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI systems, Relation: contains, Tail: components",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00266869146179491,
        "closeness_centrality": 0.23965133246294448,
        "eigenvector_centrality": 0.04622115694875959
    },
    {
        "id": 505,
        "label": "components",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: components, Relation: involved_in, Tail: AI systems",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00266869146179491,
        "closeness_centrality": 0.23965133246294448,
        "eigenvector_centrality": 0.04622115694875959
    },
    {
        "id": 506,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: components, Relation: involved_in, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 507,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: helps, Tail: providers",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 508,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: helps, Tail: providers",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 509,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: require, Tail: compliance",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 510,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: high-risk AI systems, Relation: require, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 511,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: regulates, Tail: competent authorities",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 512,
        "label": "competent authorities",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: Regulation, Relation: regulates, Tail: competent authorities",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.000156760316858839,
        "closeness_centrality": 0.21607118127683145,
        "eigenvector_centrality": 0.051491889707785767
    },
    {
        "id": 513,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: utlises, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 514,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: provider, Relation: utlises, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 515,
        "label": "components",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: components, Relation: require, Tail: documentation",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00266869146179491,
        "closeness_centrality": 0.23965133246294448,
        "eigenvector_centrality": 0.04622115694875959
    },
    {
        "id": 516,
        "label": "documentation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: components, Relation: require, Tail: documentation",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.01833411525529752,
        "closeness_centrality": 0.23753520590698027,
        "eigenvector_centrality": 0.06485733709047288
    },
    {
        "id": 517,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: based_on, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 518,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: based_on, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 519,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: based_on, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 520,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: based_on, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 521,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 522,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 523,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 524,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 525,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: is_affected_by, Tail: high-risk AI systems",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 526,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: natural persons, Relation: is_affected_by, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 527,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: has_implications_for, Tail: high-risk AI systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 528,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: rights, Relation: has_implications_for, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 529,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 530,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: can_be, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 531,
        "label": "assessment",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: assessment, Relation: based_on, Tail: rights",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21434949855749416,
        "eigenvector_centrality": 0.030115985129933964
    },
    {
        "id": 532,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: assessment, Relation: based_on, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 533,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: should_not_be, Tail: AI systems",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 534,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: should_not_be, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 535,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI, Relation: contains, Tail: characteristics",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 536,
        "label": "characteristics",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI, Relation: contains, Tail: characteristics",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.003662406592637908,
        "closeness_centrality": 0.2643819367957299,
        "eigenvector_centrality": 0.09347862822203773
    },
    {
        "id": 537,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: can_be, Tail: placed on the market",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 538,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: models, Relation: can_be, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 539,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: has_implications_for, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 540,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: has_implications_for, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 541,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: models",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 542,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 543,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_not_be, Tail: models",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 544,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_not_be, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 545,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: components",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 546,
        "label": "components",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI systems, Relation: contains, Tail: components",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00266869146179491,
        "closeness_centrality": 0.23965133246294448,
        "eigenvector_centrality": 0.04622115694875959
    },
    {
        "id": 547,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: models",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 548,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: contains, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 549,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: models",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 550,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 551,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 552,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: models, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 553,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: perform_in, Tail: placed on the market",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 554,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: providers, Relation: perform_in, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 555,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: involved_in, Tail: placed on the market",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 556,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: models, Relation: involved_in, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 557,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: models",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 558,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 559,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 560,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 561,
        "label": "provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provider, Relation: perform_in, Tail: placed on the market",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04316357977023584,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.16372508566067254
    },
    {
        "id": 562,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: provider, Relation: perform_in, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 563,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: applies_to, Tail: natural persons",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 564,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: rights, Relation: applies_to, Tail: natural persons",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 565,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: models",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 566,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: models",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 567,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: has_implications_for, Tail: systemic risk",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 568,
        "label": "systemic risk",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: Regulation, Relation: has_implications_for, Tail: systemic risk",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21057426277076724,
        "eigenvector_centrality": 0.024891675588319895
    },
    {
        "id": 569,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: can_be, Tail: placing on the market",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 570,
        "label": "placing on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: models, Relation: can_be, Tail: placing on the market",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0002782487080516637,
        "closeness_centrality": 0.24736424891002776,
        "eigenvector_centrality": 0.06754341142461688
    },
    {
        "id": 571,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: placed on the market",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 572,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 573,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: perform_in, Tail: generation of content",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 574,
        "label": "generation of content",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: models, Relation: perform_in, Tail: generation of content",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.18520386966585556,
        "eigenvector_centrality": 0.012251534366535356
    },
    {
        "id": 575,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: contains, Tail: AI",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 576,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI system, Relation: contains, Tail: AI",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 577,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: perform_in, Tail: used",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 578,
        "label": "used",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: perform_in, Tail: used",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 579,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: perform_in, Tail: integrated",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 580,
        "label": "integrated",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: perform_in, Tail: integrated",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 581,
        "label": "Providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Providers, Relation: perform_in, Tail: role and responsibility",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.011643528884908194,
        "closeness_centrality": 0.1775634459997724,
        "eigenvector_centrality": 0.006001255192540298
    },
    {
        "id": 582,
        "label": "role and responsibility",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Providers, Relation: perform_in, Tail: role and responsibility",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.1413974353165073,
        "eigenvector_centrality": 0.0005552428046655479
    },
    {
        "id": 583,
        "label": "role and responsibility",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: role and responsibility, Relation: perform_in, Tail: AI value chain",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.005859083445290341,
        "closeness_centrality": 0.1413974353165073,
        "eigenvector_centrality": 0.0005552428046655479
    },
    {
        "id": 584,
        "label": "AI value chain",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: role and responsibility, Relation: perform_in, Tail: AI value chain",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.11721508526782361,
        "eigenvector_centrality": 5.094128374507893e-05
    },
    {
        "id": 585,
        "label": "models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: models, Relation: involved_in, Tail: basis for a range of downstreamsystems",
        "degree_centrality": 0.04310344827586207,
        "betweenness_centrality": 0.01203709627354947,
        "closeness_centrality": 0.2537817176317501,
        "eigenvector_centrality": 0.13354020999652727
    },
    {
        "id": 586,
        "label": "basis for a range of downstreamsystems",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: models, Relation: involved_in, Tail: basis for a range of downstreamsystems",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.18520386966585556,
        "eigenvector_centrality": 0.012251534366535356
    },
    {
        "id": 587,
        "label": "downstream providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: downstream providers, Relation: perform_in, Tail: good understanding of the models and their capabilities",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 3.731900283624421e-05,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.0711118232054533e-14
    },
    {
        "id": 588,
        "label": "good understanding of the models and their capabilities",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: downstream providers, Relation: perform_in, Tail: good understanding of the models and their capabilities",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.005747126436781609,
        "eigenvector_centrality": 7.573904335976617e-15
    },
    {
        "id": 589,
        "label": "transparency measures",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: transparency measures, Relation: perform_in, Tail: foreseen",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 590,
        "label": "foreseen",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: transparency measures, Relation: perform_in, Tail: foreseen",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 591,
        "label": "provision of information",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: provision of information, Relation: involved_in, Tail: downstream providers",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.005747126436781609,
        "eigenvector_centrality": 7.573904335976617e-15
    },
    {
        "id": 592,
        "label": "downstream providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: provision of information, Relation: involved_in, Tail: downstream providers",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 3.731900283624421e-05,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.0711118232054533e-14
    },
    {
        "id": 593,
        "label": "Technical documentation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Technical documentation, Relation: require, Tail: prepared and kept up to date",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.005747126436781609,
        "eigenvector_centrality": 7.573904335976617e-15
    },
    {
        "id": 594,
        "label": "prepared and kept up to date",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Technical documentation, Relation: require, Tail: prepared and kept up to date",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 3.731900283624421e-05,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.0711118232054533e-14
    },
    {
        "id": 595,
        "label": "prepared and kept up to date",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: prepared and kept up to date, Relation: require, Tail: general purpose AI model provider",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 3.731900283624421e-05,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.0711118232054533e-14
    },
    {
        "id": 596,
        "label": "general purpose AI model provider",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: prepared and kept up to date, Relation: require, Tail: general purpose AI model provider",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.005747126436781609,
        "eigenvector_centrality": 7.573904335976617e-15
    },
    {
        "id": 597,
        "label": "purpose of making it available, upon request",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: purpose of making it available, upon request, Relation: perform_in, Tail: AI Office and the national competent authorities",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 598,
        "label": "AI Office and the national competent authorities",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: purpose of making it available, upon request, Relation: perform_in, Tail: AI Office and the national competent authorities",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 599,
        "label": "The minimal set of elements contained in such documentations",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: The minimal set of elements contained in such documentations, Relation: require, Tail: should be outlined",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.005747126436781609,
        "eigenvector_centrality": 7.573904335976617e-15
    },
    {
        "id": 600,
        "label": "should be outlined",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: The minimal set of elements contained in such documentations, Relation: require, Tail: should be outlined",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 3.731900283624421e-05,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.0711118232054533e-14
    },
    {
        "id": 601,
        "label": "should be outlined",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: should be outlined, Relation: require, Tail: Annex (IXb) and Annex (IXa)",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 3.731900283624421e-05,
        "closeness_centrality": 0.008620689655172414,
        "eigenvector_centrality": 1.0711118232054533e-14
    },
    {
        "id": 602,
        "label": "Annex (IXb) and Annex (IXa)",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: should be outlined, Relation: require, Tail: Annex (IXb) and Annex (IXa)",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.005747126436781609,
        "eigenvector_centrality": 7.573904335976617e-15
    },
    {
        "id": 603,
        "label": "General purpose models, in particular large generative models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: General purpose models, in particular large generative models, Relation: perform_in, Tail: capable of generating text, images, and other content",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 7.463800567248842e-05,
        "closeness_centrality": 0.009698275862068966,
        "eigenvector_centrality": 4.8458694507424936e-14
    },
    {
        "id": 604,
        "label": "capable of generating text, images, and other content",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: General purpose models, in particular large generative models, Relation: perform_in, Tail: capable of generating text, images, and other content",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.00646551724137931,
        "eigenvector_centrality": 2.994912025603646e-14
    },
    {
        "id": 605,
        "label": "General purpose models, in particular large generative models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: General purpose models, in particular large generative models, Relation: involved_in, Tail: present unique innovation opportunities but also challenges",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 7.463800567248842e-05,
        "closeness_centrality": 0.009698275862068966,
        "eigenvector_centrality": 4.8458694507424936e-14
    },
    {
        "id": 606,
        "label": "present unique innovation opportunities but also challenges",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: General purpose models, in particular large generative models, Relation: involved_in, Tail: present unique innovation opportunities but also challenges",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 7.463800567248842e-05,
        "closeness_centrality": 0.009698275862068966,
        "eigenvector_centrality": 4.845869450742494e-14
    },
    {
        "id": 607,
        "label": "present unique innovation opportunities but also challenges",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: present unique innovation opportunities but also challenges, Relation: involved_in, Tail: artists, authors, and other creators",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 7.463800567248842e-05,
        "closeness_centrality": 0.009698275862068966,
        "eigenvector_centrality": 4.845869450742494e-14
    },
    {
        "id": 608,
        "label": "artists, authors, and other creators",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: present unique innovation opportunities but also challenges, Relation: involved_in, Tail: artists, authors, and other creators",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.00646551724137931,
        "eigenvector_centrality": 2.994912025603646e-14
    },
    {
        "id": 609,
        "label": "The development and training of such models",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: The development and training of such models, Relation: require, Tail: require access to vast amounts of text, images, videos, and other data",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 610,
        "label": "require access to vast amounts of text, images, videos, and other data",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: The development and training of such models, Relation: require, Tail: require access to vast amounts of text, images, videos, and other data",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 611,
        "label": "Text and data mining techniques",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Text and data mining techniques, Relation: perform_in, Tail: may be used extensively in this context for the retrieval and analysis of such content",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 612,
        "label": "may be used extensively in this context for the retrieval and analysis of such content",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Text and data mining techniques, Relation: perform_in, Tail: may be used extensively in this context for the retrieval and analysis of such content",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 613,
        "label": "content",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: content, Relation: has_implications_for, Tail: may be protected by copyright and related rights",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 614,
        "label": "may be protected by copyright and related rights",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: content, Relation: has_implications_for, Tail: may be protected by copyright and related rights",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 615,
        "label": "Any use of copyright protected content",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Any use of copyright protected content, Relation: require, Tail: requires the authorization of the rightholder concerned",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 616,
        "label": "requires the authorization of the rightholder concerned",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Any use of copyright protected content, Relation: require, Tail: requires the authorization of the rightholder concerned",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 617,
        "label": "Providers that place general purpose AI models on the EU market",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Providers that place general purpose AI models on the EU market, Relation: perform_in, Tail: should ensure compliance with the relevant obligations in this Regulation",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 618,
        "label": "should ensure compliance with the relevant obligations in this Regulation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Providers that place general purpose AI models on the EU market, Relation: perform_in, Tail: should ensure compliance with the relevant obligations in this Regulation",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 619,
        "label": "providers of general purpose AI models",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers of general purpose AI models, Relation: perform_in, Tail: should put in place a policy to respect Union law on copyright and related rights",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 620,
        "label": "should put in place a policy to respect Union law on copyright and related rights",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: providers of general purpose AI models, Relation: perform_in, Tail: should put in place a policy to respect Union law on copyright and related rights",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 621,
        "label": " provider placing a general purpose AI model on the EU market",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head:  provider placing a general purpose AI model on the EU market, Relation: perform_in, Tail: should comply with this obligation",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 622,
        "label": "should comply with this obligation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head:  provider placing a general purpose AI model on the EU market, Relation: perform_in, Tail: should comply with this obligation",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 623,
        "label": "level playing field among providers of general purpose AI models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: level playing field among providers of general purpose AI models, Relation: involved_in, Tail: no provider should be able to gain a competitive advantage in the EU market",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 624,
        "label": "no provider should be able to gain a competitive advantage in the EU market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: level playing field among providers of general purpose AI models, Relation: involved_in, Tail: no provider should be able to gain a competitive advantage in the EU market",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 625,
        "label": "General purpose AI models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: General purpose AI models, Relation: involved_in, Tail: could pose systemic risks",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 626,
        "label": "could pose systemic risks",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: General purpose AI models, Relation: involved_in, Tail: could pose systemic risks",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 627,
        "label": "Systemic risks",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Systemic risks, Relation: involved_in, Tail: should be understood to increase with model capabilities and model reach",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 628,
        "label": "should be understood to increase with model capabilities and model reach",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Systemic risks, Relation: involved_in, Tail: should be understood to increase with model capabilities and model reach",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 629,
        "label": "international approaches",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: international approaches, Relation: involved_in, Tail:  need to devote attention to risks from potential intentional misuse or unintended issues of control relating to alignment with human intent",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 630,
        "label": " need to devote attention to risks from potential intentional misuse or unintended issues of control relating to alignment with human intent",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: international approaches, Relation: involved_in, Tail:  need to devote attention to risks from potential intentional misuse or unintended issues of control relating to alignment with human intent",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 631,
        "label": "chemical, biological, radiological, and nuclear risks",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: chemical, biological, radiological, and nuclear risks, Relation: involved_in, Tail: barriers to entry can be lowered, including for weapons development, design acquisition, or use",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 632,
        "label": "barriers to entry can be lowered, including for weapons development, design acquisition, or use",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: chemical, biological, radiological, and nuclear risks, Relation: involved_in, Tail: barriers to entry can be lowered, including for weapons development, design acquisition, or use",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 633,
        "label": "offensive cyber capabilities",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: offensive cyber capabilities, Relation: perform_in, Tail: vulnerability discovery, exploitation, or operational use can be enabled",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 634,
        "label": "vulnerability discovery, exploitation, or operational use can be enabled",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: offensive cyber capabilities, Relation: perform_in, Tail: vulnerability discovery, exploitation, or operational use can be enabled",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 635,
        "label": " effects of interaction and tool use",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head:  effects of interaction and tool use, Relation: involved_in, Tail: capacity to control physical systems and interfere with critical infrastructure",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 636,
        "label": "capacity to control physical systems and interfere with critical infrastructure",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head:  effects of interaction and tool use, Relation: involved_in, Tail: capacity to control physical systems and interfere with critical infrastructure",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 637,
        "label": "establish a methodology for the classification of general purpose AI models",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: establish a methodology for the classification of general purpose AI models, Relation: involved_in, Tail: general purpose AI model with systemic risks",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 638,
        "label": "general purpose AI model with systemic risks",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: establish a methodology for the classification of general purpose AI models, Relation: involved_in, Tail: general purpose AI model with systemic risks",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 639,
        "label": "general-purpose AI models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: general-purpose AI models, Relation: involved_in, Tail: should be considered to present systemic risks if it has high-impact capabilities",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 640,
        "label": "should be considered to present systemic risks if it has high-impact capabilities",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: general-purpose AI models, Relation: involved_in, Tail: should be considered to present systemic risks if it has high-impact capabilities",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 641,
        "label": "High-impact capabilities in general purpose AI models",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: High-impact capabilities in general purpose AI models, Relation: involved_in, Tail: capabilities that match or exceed the capabilities recorded in the most advanced general-purpose AI models",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 642,
        "label": "capabilities that match or exceed the capabilities recorded in the most advanced general-purpose AI models",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: High-impact capabilities in general purpose AI models, Relation: involved_in, Tail: capabilities that match or exceed the capabilities recorded in the most advanced general-purpose AI models",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 643,
        "label": "full range of capabilities in a model",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: full range of capabilities in a model, Relation: involved_in, Tail: could be better understood after its release on the market or when users interact with the model",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 644,
        "label": "could be better understood after its release on the market or when users interact with the model",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: full range of capabilities in a model, Relation: involved_in, Tail: could be better understood after its release on the market or when users interact with the model",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 645,
        "label": " providers of general-purpose AI models presenting systemic risks",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head:  providers of general-purpose AI models presenting systemic risks, Relation: perform_in, Tail:  should be subject, in addition to the obligations provided for providers of general purpose AI models, to obligations aimed at identifying and mitigating those risks and ensuring an adequate level of cybersecurity protection",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 646,
        "label": " should be subject, in addition to the obligations provided for providers of general purpose AI models, to obligations aimed at identifying and mitigating those risks and ensuring an adequate level of cybersecurity protection",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head:  providers of general-purpose AI models presenting systemic risks, Relation: perform_in, Tail:  should be subject, in addition to the obligations provided for providers of general purpose AI models, to obligations aimed at identifying and mitigating those risks and ensuring an adequate level of cybersecurity protection",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 647,
        "label": "Regulation",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Regulation, Relation: require, Tail: providers",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 648,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Regulation, Relation: require, Tail: providers",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 649,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 650,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 651,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: require, Tail: effective implementation",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 652,
        "label": "effective implementation",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: systems, Relation: require, Tail: effective implementation",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.17785693929894555,
        "eigenvector_centrality": 0.010969912998676527
    },
    {
        "id": 653,
        "label": "Regulation (EU) 2022/2065",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation (EU) 2022/2065, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 654,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation (EU) 2022/2065, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 655,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: is_affected_by, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 656,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: providers, Relation: is_affected_by, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 657,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: has_implications_for, Tail: democratic processes",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 658,
        "label": "democratic processes",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: risks, Relation: has_implications_for, Tail: democratic processes",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0001580726334420916,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.07005140991239056
    },
    {
        "id": 659,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: has_implications_for, Tail: civic discourse",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 660,
        "label": "civic discourse",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: risks, Relation: has_implications_for, Tail: civic discourse",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20692970822281165,
        "eigenvector_centrality": 0.020788227445962242
    },
    {
        "id": 661,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: has_implications_for, Tail: electoral processes",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 662,
        "label": "electoral processes",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: risks, Relation: has_implications_for, Tail: electoral processes",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20692970822281165,
        "eigenvector_centrality": 0.020788227445962242
    },
    {
        "id": 663,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: regulates, Tail: substantial modification",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 664,
        "label": "substantial modification",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: regulates, Tail: substantial modification",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 665,
        "label": "Union harmonisation legislation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Union harmonisation legislation, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.006746333475825872,
        "closeness_centrality": 0.2580418423881584,
        "eigenvector_centrality": 0.06845938437971046
    },
    {
        "id": 666,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union harmonisation legislation, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 667,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI system",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 668,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Regulation, Relation: governs_or_guides, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 669,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: based_on, Tail: compliance",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 670,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Regulation, Relation: based_on, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 671,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: compliance, Relation: are_central_to, Tail: AI system",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 672,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: compliance, Relation: are_central_to, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 673,
        "label": "the Commission",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: the Commission, Relation: regulates, Tail: artificial intelligence",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.002113139920778309,
        "closeness_centrality": 0.22701149425287354,
        "eigenvector_centrality": 0.04936673572608159
    },
    {
        "id": 674,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: the Commission, Relation: regulates, Tail: artificial intelligence",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 675,
        "label": "the Commission",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: the Commission, Relation: require, Tail: transparency towards the public",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.002113139920778309,
        "closeness_centrality": 0.22701149425287354,
        "eigenvector_centrality": 0.04936673572608159
    },
    {
        "id": 676,
        "label": "transparency towards the public",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: the Commission, Relation: require, Tail: transparency towards the public",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00026493530188111456,
        "closeness_centrality": 0.21650593214459166,
        "eigenvector_centrality": 0.02515423935057886
    },
    {
        "id": 677,
        "label": "Union harmonisation legislation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Union harmonisation legislation, Relation: governs_or_guides, Tail: the Member States",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.006746333475825872,
        "closeness_centrality": 0.2580418423881584,
        "eigenvector_centrality": 0.06845938437971046
    },
    {
        "id": 678,
        "label": "the Member States",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: Union harmonisation legislation, Relation: governs_or_guides, Tail: the Member States",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.18746245344226842,
        "eigenvector_centrality": 0.006280985355608379
    },
    {
        "id": 679,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 680,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 681,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: require, Tail: transparency towards the public",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 682,
        "label": "transparency towards the public",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: high-risk AI systems, Relation: require, Tail: transparency towards the public",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00026493530188111456,
        "closeness_centrality": 0.21650593214459166,
        "eigenvector_centrality": 0.02515423935057886
    },
    {
        "id": 683,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: has_implications_for, Tail: high-risk",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 684,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: has_implications_for, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 685,
        "label": "the Commission",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: the Commission, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.002113139920778309,
        "closeness_centrality": 0.22701149425287354,
        "eigenvector_centrality": 0.04936673572608159
    },
    {
        "id": 686,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: the Commission, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 687,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: high-risk, Relation: has_implications_for, Tail: AI system",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 688,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk, Relation: has_implications_for, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 689,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: systems, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 690,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: systems, Relation: has_implications_for, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 691,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 692,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 693,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 694,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 695,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: system",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 696,
        "label": "system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: system",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.00596304352461988,
        "closeness_centrality": 0.21477734186798816,
        "eigenvector_centrality": 0.036214806761149805
    },
    {
        "id": 697,
        "label": "deployers",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: deployers, Relation: involved_in, Tail: AI system",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.008214574378367482,
        "closeness_centrality": 0.22797340736411453,
        "eigenvector_centrality": 0.033546300754093546
    },
    {
        "id": 698,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: deployers, Relation: involved_in, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 699,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: utlises, Tail:  image, audio or video content",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 700,
        "label": " image, audio or video content",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI system, Relation: utlises, Tail:  image, audio or video content",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.21307613519972687,
        "eigenvector_centrality": 0.027612336608554167
    },
    {
        "id": 701,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: must_not_be, Tail: falsely",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 702,
        "label": "falsely",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: AI system, Relation: must_not_be, Tail: falsely",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00028410893534338297,
        "closeness_centrality": 0.21826257256767154,
        "eigenvector_centrality": 0.03677984203907514
    },
    {
        "id": 703,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: must_not_be, Tail: falsely",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 704,
        "label": "falsely",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: artificial intelligence, Relation: must_not_be, Tail: falsely",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00028410893534338297,
        "closeness_centrality": 0.21826257256767154,
        "eigenvector_centrality": 0.03677984203907514
    },
    {
        "id": 705,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: must_be, Tail: authentic",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 706,
        "label": "authentic",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: must_be, Tail: authentic",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00028410893534338297,
        "closeness_centrality": 0.21826257256767154,
        "eigenvector_centrality": 0.03677984203907514
    },
    {
        "id": 707,
        "label": "artificial intelligence",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: artificial intelligence, Relation: must_be, Tail: transparency",
        "degree_centrality": 0.04741379310344827,
        "betweenness_centrality": 0.013225167529610289,
        "closeness_centrality": 0.24399874892485732,
        "eigenvector_centrality": 0.09992780783419006
    },
    {
        "id": 708,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: artificial intelligence, Relation: must_be, Tail: transparency",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 709,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: must_be, Tail: authentic",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 710,
        "label": "authentic",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: must_be, Tail: authentic",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.00028410893534338297,
        "closeness_centrality": 0.21826257256767154,
        "eigenvector_centrality": 0.03677984203907514
    },
    {
        "id": 711,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: must_be, Tail: transparency",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 712,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: must_be, Tail: transparency",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 713,
        "label": "rights and freedoms",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights and freedoms, Relation: are_central_to, Tail: third parties",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 714,
        "label": "third parties",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: rights and freedoms, Relation: are_central_to, Tail: third parties",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.004310344827586207,
        "eigenvector_centrality": 2.4826815666684123e-16
    },
    {
        "id": 715,
        "label": "Charter of Fundamental Rights of the EU",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Charter of Fundamental Rights of the EU, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.011680847887744438,
        "closeness_centrality": 0.21477734186798816,
        "eigenvector_centrality": 0.028085110717581678
    },
    {
        "id": 716,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Charter of Fundamental Rights of the EU, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 717,
        "label": "Charter of Fundamental Rights of the EU",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Charter of Fundamental Rights of the EU, Relation: based_on, Tail: freedom of the arts and sciences",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.011680847887744438,
        "closeness_centrality": 0.21477734186798816,
        "eigenvector_centrality": 0.028085110717581678
    },
    {
        "id": 718,
        "label": "freedom of the arts and sciences",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Charter of Fundamental Rights of the EU, Relation: based_on, Tail: freedom of the arts and sciences",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.1635310764070852,
        "eigenvector_centrality": 0.0025767297389722513
    },
    {
        "id": 719,
        "label": "Charter of Fundamental Rights of the EU",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Charter of Fundamental Rights of the EU, Relation: based_on, Tail:  freedom of expression",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.011680847887744438,
        "closeness_centrality": 0.21477734186798816,
        "eigenvector_centrality": 0.028085110717581678
    },
    {
        "id": 720,
        "label": " freedom of expression",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Charter of Fundamental Rights of the EU, Relation: based_on, Tail:  freedom of expression",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.1635310764070852,
        "eigenvector_centrality": 0.0025767297389722513
    },
    {
        "id": 721,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 722,
        "label": "compliance",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: compliance",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.038543147759847414,
        "closeness_centrality": 0.2869425287356322,
        "eigenvector_centrality": 0.17189256005024067
    },
    {
        "id": 723,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: require, Tail: transparency",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 724,
        "label": "transparency",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Regulation, Relation: require, Tail: transparency",
        "degree_centrality": 0.034482758620689655,
        "betweenness_centrality": 0.009633682186934783,
        "closeness_centrality": 0.27241379310344827,
        "eigenvector_centrality": 0.1401990660277076
    },
    {
        "id": 725,
        "label": "person",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: person, Relation: applies_to, Tail: public interest",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.012807767261557003,
        "closeness_centrality": 0.2191516258164197,
        "eigenvector_centrality": 0.05288314766875134
    },
    {
        "id": 726,
        "label": "public interest",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: person, Relation: applies_to, Tail: public interest",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.16605470412941678,
        "eigenvector_centrality": 0.00485153653680913
    },
    {
        "id": 727,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 728,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 729,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 730,
        "label": "systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: systems",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.02251829516579851,
        "closeness_centrality": 0.24018626847290642,
        "eigenvector_centrality": 0.11957387668950999
    },
    {
        "id": 731,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: require, Tail: testing",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 732,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: high-risk AI systems, Relation: require, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 733,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: require, Tail: development",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 734,
        "label": "development",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: high-risk AI systems, Relation: require, Tail: development",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.0033258265862945624,
        "closeness_centrality": 0.20653253027996557,
        "eigenvector_centrality": 0.026658545357186324
    },
    {
        "id": 735,
        "label": "AI",
        "group": "ALG",
        "color": "#808000",
        "details": "Head: AI, Relation: require, Tail: testing",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.04975272341072109,
        "closeness_centrality": 0.2663451689996586,
        "eigenvector_centrality": 0.11204296404204853
    },
    {
        "id": 736,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI, Relation: require, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 737,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: is_affected_by, Tail: Regulation",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 738,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: providers, Relation: is_affected_by, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 739,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: involved_in, Tail: testing",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 740,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: providers, Relation: involved_in, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 741,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 742,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: law enforcement, Relation: regulates, Tail: AI system",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 743,
        "label": "natural persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: natural persons, Relation: involved_in, Tail: testing",
        "degree_centrality": 0.05172413793103448,
        "betweenness_centrality": 0.020862155008013607,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.17174490317381882
    },
    {
        "id": 744,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: natural persons, Relation: involved_in, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 745,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: are_central_to, Tail: testing",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 746,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: law enforcement, Relation: are_central_to, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 747,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: require, Tail: testing",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 748,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: require, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 749,
        "label": "Consent of subjects",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Consent of subjects, Relation: require, Tail: testing",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20037886084890516,
        "eigenvector_centrality": 0.024563521283791627
    },
    {
        "id": 750,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Consent of subjects, Relation: require, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 751,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: personal data, Relation: are_central_to, Tail: Consent of subjects",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 752,
        "label": "Consent of subjects",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: personal data, Relation: are_central_to, Tail: Consent of subjects",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20037886084890516,
        "eigenvector_centrality": 0.024563521283791627
    },
    {
        "id": 753,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: should_be, Tail: testing",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 754,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Regulation, Relation: should_be, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 755,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: are_central_to, Tail: testing",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 756,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: risks, Relation: are_central_to, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 757,
        "label": "competent authorities",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: competent authorities, Relation: governs_or_guides, Tail: oversight",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.000156760316858839,
        "closeness_centrality": 0.21607118127683145,
        "eigenvector_centrality": 0.051491889707785767
    },
    {
        "id": 758,
        "label": "oversight",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: competent authorities, Relation: governs_or_guides, Tail: oversight",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0011521628835286272,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.06225032214655916
    },
    {
        "id": 759,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: regulates, Tail: competent authorities",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 760,
        "label": "competent authorities",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: providers, Relation: regulates, Tail: competent authorities",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.000156760316858839,
        "closeness_centrality": 0.21607118127683145,
        "eigenvector_centrality": 0.051491889707785767
    },
    {
        "id": 761,
        "label": "market surveillance authority",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: market surveillance authority, Relation: involved_in, Tail: testing",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.19388008698353523,
        "eigenvector_centrality": 0.017255489270206315
    },
    {
        "id": 762,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: market surveillance authority, Relation: involved_in, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 763,
        "label": "persons",
        "group": "PER",
        "color": "#0000FF",
        "details": "Head: persons, Relation: is_affected_by, Tail: risks",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.004249910672500924,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.10788236881773494
    },
    {
        "id": 764,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: persons, Relation: is_affected_by, Tail: risks",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 765,
        "label": "oversight",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: oversight, Relation: applies_to, Tail: testing",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0011521628835286272,
        "closeness_centrality": 0.2451103605372712,
        "eigenvector_centrality": 0.06225032214655916
    },
    {
        "id": 766,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: oversight, Relation: applies_to, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 767,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: utlises, Tail: testing",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 768,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: providers, Relation: utlises, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 769,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: utlises, Tail: predictions",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 770,
        "label": "predictions",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: utlises, Tail: predictions",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0013832013924249614,
        "closeness_centrality": 0.2580418423881584,
        "eigenvector_centrality": 0.07519121166210384
    },
    {
        "id": 771,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: utlises, Tail: personal data",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 772,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: AI system, Relation: utlises, Tail: personal data",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 773,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: require, Tail: testing",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 774,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI system, Relation: require, Tail: testing",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 775,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: rights, Relation: are_central_to, Tail: EU data protection law",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 776,
        "label": "EU data protection law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: rights, Relation: are_central_to, Tail: EU data protection law",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.204569293300118,
        "eigenvector_centrality": 0.014359425186445021
    },
    {
        "id": 777,
        "label": "predictions",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: predictions, Relation: require, Tail: personal data",
        "degree_centrality": 0.01293103448275862,
        "betweenness_centrality": 0.0013832013924249614,
        "closeness_centrality": 0.2580418423881584,
        "eigenvector_centrality": 0.07519121166210384
    },
    {
        "id": 778,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: predictions, Relation: require, Tail: personal data",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 779,
        "label": "AI system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI system, Relation: is_affected_by, Tail: rights",
        "degree_centrality": 0.15948275862068964,
        "betweenness_centrality": 0.1274823210836899,
        "closeness_centrality": 0.3092053111375347,
        "eigenvector_centrality": 0.3009804993355517
    },
    {
        "id": 780,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI system, Relation: is_affected_by, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 781,
        "label": "Union law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Union law, Relation: governs_or_guides, Tail: personal data",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.005279290627987316,
        "closeness_centrality": 0.24908205619412516,
        "eigenvector_centrality": 0.08397999130477181
    },
    {
        "id": 782,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: Union law, Relation: governs_or_guides, Tail: personal data",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 783,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: testing, Relation: require, Tail: personal data",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 784,
        "label": "personal data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: testing, Relation: require, Tail: personal data",
        "degree_centrality": 0.030172413793103446,
        "betweenness_centrality": 0.002848680514409814,
        "closeness_centrality": 0.2428971744376119,
        "eigenvector_centrality": 0.07965697341588873
    },
    {
        "id": 785,
        "label": "Data Governance",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: Data Governance, Relation: governs_or_guides, Tail: Union law",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 4.9758670448325614e-05,
        "closeness_centrality": 0.2114016665537565,
        "eigenvector_centrality": 0.02496023318872723
    },
    {
        "id": 786,
        "label": "Union law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Data Governance, Relation: governs_or_guides, Tail: Union law",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.005279290627987316,
        "closeness_centrality": 0.24908205619412516,
        "eigenvector_centrality": 0.08397999130477181
    },
    {
        "id": 787,
        "label": "testing",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: testing, Relation: involved_in, Tail: Data Governance",
        "degree_centrality": 0.06034482758620689,
        "betweenness_centrality": 0.02230512285177764,
        "closeness_centrality": 0.2703604228036735,
        "eigenvector_centrality": 0.18808467624594224
    },
    {
        "id": 788,
        "label": "Data Governance",
        "group": "PRO",
        "color": "#00FFFF",
        "details": "Head: testing, Relation: involved_in, Tail: Data Governance",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 4.9758670448325614e-05,
        "closeness_centrality": 0.2114016665537565,
        "eigenvector_centrality": 0.02496023318872723
    },
    {
        "id": 789,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: works_with, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 790,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: works_with, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 791,
        "label": "development",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: development, Relation: are_central_to, Tail: high-risk AI systems",
        "degree_centrality": 0.017241379310344827,
        "betweenness_centrality": 0.0033258265862945624,
        "closeness_centrality": 0.20653253027996557,
        "eigenvector_centrality": 0.026658545357186324
    },
    {
        "id": 792,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: development, Relation: are_central_to, Tail: high-risk AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 793,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: interact_with, Tail: post-market monitoring system",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 794,
        "label": "post-market monitoring system",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: interact_with, Tail: post-market monitoring system",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20340916498272604,
        "eigenvector_centrality": 0.020888954445401082
    },
    {
        "id": 795,
        "label": "Post-market monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: Post-market monitoring, Relation: must_not_be, Tail: sensitive operational data",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20188264216859672,
        "eigenvector_centrality": 0.013571589416279832
    },
    {
        "id": 796,
        "label": "sensitive operational data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: Post-market monitoring, Relation: must_not_be, Tail: sensitive operational data",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20188264216859672,
        "eigenvector_centrality": 0.013571589416279832
    },
    {
        "id": 797,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: regulates, Tail: sensitive operational data",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 798,
        "label": "sensitive operational data",
        "group": "DAT",
        "color": "#000000",
        "details": "Head: law enforcement, Relation: regulates, Tail: sensitive operational data",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20188264216859672,
        "eigenvector_centrality": 0.013571589416279832
    },
    {
        "id": 799,
        "label": "law enforcement",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: law enforcement, Relation: involved_in, Tail: Post-market monitoring",
        "degree_centrality": 0.03879310344827586,
        "betweenness_centrality": 0.024733496158696,
        "closeness_centrality": 0.28542028720387813,
        "eigenvector_centrality": 0.13435442032560604
    },
    {
        "id": 800,
        "label": "Post-market monitoring",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: law enforcement, Relation: involved_in, Tail: Post-market monitoring",
        "degree_centrality": 0.008620689655172414,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20188264216859672,
        "eigenvector_centrality": 0.013571589416279832
    },
    {
        "id": 801,
        "label": "risks",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: risks, Relation: are_central_to, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03437089381266357,
        "closeness_centrality": 0.29642823216490927,
        "eigenvector_centrality": 0.2265874148098273
    },
    {
        "id": 802,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: risks, Relation: are_central_to, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 803,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: placed on the market",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 804,
        "label": "placed on the market",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: placed on the market",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.000690130949311424,
        "closeness_centrality": 0.26117341814529627,
        "eigenvector_centrality": 0.12618669635416116
    },
    {
        "id": 805,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: works_with, Tail: AI systems",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 806,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: providers, Relation: works_with, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 807,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: should_not_be, Tail: malfunctioning",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 808,
        "label": "malfunctioning",
        "group": "HAR",
        "color": "#FF00FF",
        "details": "Head: AI systems, Relation: should_not_be, Tail: malfunctioning",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.22653357531760437,
        "eigenvector_centrality": 0.040270843039964366
    },
    {
        "id": 809,
        "label": "providers",
        "group": "ORG",
        "color": "#FF0000",
        "details": "Head: providers, Relation: should_be, Tail: report to the relevant authorities",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.025706745015957398,
        "closeness_centrality": 0.289256581386726,
        "eigenvector_centrality": 0.22768596515093006
    },
    {
        "id": 810,
        "label": "report to the relevant authorities",
        "group": "ACT",
        "color": "#FFA500",
        "details": "Head: providers, Relation: should_be, Tail: report to the relevant authorities",
        "degree_centrality": 0.004310344827586207,
        "betweenness_centrality": 0.0,
        "closeness_centrality": 0.20340916498272604,
        "eigenvector_centrality": 0.020888954445401082
    },
    {
        "id": 811,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: relate_to, Tail: rights",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 812,
        "label": "rights",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: relate_to, Tail: rights",
        "degree_centrality": 0.05603448275862069,
        "betweenness_centrality": 0.0390783006724439,
        "closeness_centrality": 0.2916082609101953,
        "eigenvector_centrality": 0.15651404157294274
    },
    {
        "id": 813,
        "label": "Union law",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Union law, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.005279290627987316,
        "closeness_centrality": 0.24908205619412516,
        "eigenvector_centrality": 0.08397999130477181
    },
    {
        "id": 814,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: Union law, Relation: governs_or_guides, Tail: AI systems",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 815,
        "label": "AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: high-risk",
        "degree_centrality": 0.25,
        "betweenness_centrality": 0.20957003252551604,
        "closeness_centrality": 0.3383756235090002,
        "eigenvector_centrality": 0.43896538739216745
    },
    {
        "id": 816,
        "label": "high-risk",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: AI systems, Relation: is_affected_by, Tail: high-risk",
        "degree_centrality": 0.02586206896551724,
        "betweenness_centrality": 0.007755855623242828,
        "closeness_centrality": 0.259911710811261,
        "eigenvector_centrality": 0.09801339919515498
    },
    {
        "id": 817,
        "label": "high-risk AI systems",
        "group": "SYS",
        "color": "#FFD700",
        "details": "Head: high-risk AI systems, Relation: regulates, Tail: Regulation",
        "degree_centrality": 0.06896551724137931,
        "betweenness_centrality": 0.03026955929009188,
        "closeness_centrality": 0.28848109457335674,
        "eigenvector_centrality": 0.2248129921690469
    },
    {
        "id": 818,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: high-risk AI systems, Relation: regulates, Tail: Regulation",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 819,
        "label": "Regulation",
        "group": "DOC",
        "color": "#4B4B4B",
        "details": "Head: Regulation, Relation: involved_in, Tail: safety",
        "degree_centrality": 0.08620689655172414,
        "betweenness_centrality": 0.03992726997357107,
        "closeness_centrality": 0.3039645431521527,
        "eigenvector_centrality": 0.2713177490715895
    },
    {
        "id": 820,
        "label": "safety",
        "group": "ETH",
        "color": "#FDF5E6",
        "details": "Head: Regulation, Relation: involved_in, Tail: safety",
        "degree_centrality": 0.021551724137931036,
        "betweenness_centrality": 0.0021250362980197533,
        "closeness_centrality": 0.25438167441102144,
        "eigenvector_centrality": 0.1010564970009707
    }
];

var edges = [
    {
        "from": 1,
        "to": 2,
        "Relation": "governs_or_guides"
    },
    {
        "from": 3,
        "to": 4,
        "Relation": "works_with"
    },
    {
        "from": 5,
        "to": 6,
        "Relation": "consider"
    },
    {
        "from": 7,
        "to": 8,
        "Relation": "based_on"
    },
    {
        "from": 9,
        "to": 10,
        "Relation": "utlises"
    },
    {
        "from": 11,
        "to": 12,
        "Relation": "should_be"
    },
    {
        "from": 13,
        "to": 14,
        "Relation": "utlises"
    },
    {
        "from": 15,
        "to": 16,
        "Relation": "is_affected_by"
    },
    {
        "from": 17,
        "to": 18,
        "Relation": "utlises"
    },
    {
        "from": 19,
        "to": 20,
        "Relation": "contains"
    },
    {
        "from": 21,
        "to": 22,
        "Relation": "should_be"
    },
    {
        "from": 23,
        "to": 24,
        "Relation": "can_be"
    },
    {
        "from": 25,
        "to": 26,
        "Relation": "can_be"
    },
    {
        "from": 27,
        "to": 28,
        "Relation": "can_be"
    },
    {
        "from": 29,
        "to": 30,
        "Relation": "can_be"
    },
    {
        "from": 31,
        "to": 32,
        "Relation": "governs_or_guides"
    },
    {
        "from": 33,
        "to": 34,
        "Relation": "utlises"
    },
    {
        "from": 35,
        "to": 36,
        "Relation": "based_on"
    },
    {
        "from": 37,
        "to": 38,
        "Relation": "governs_or_guides"
    },
    {
        "from": 39,
        "to": 40,
        "Relation": "governs_or_guides"
    },
    {
        "from": 41,
        "to": 42,
        "Relation": "interact_with"
    },
    {
        "from": 43,
        "to": 44,
        "Relation": "governs_or_guides"
    },
    {
        "from": 45,
        "to": 46,
        "Relation": "regulates"
    },
    {
        "from": 47,
        "to": 48,
        "Relation": "should_be"
    },
    {
        "from": 49,
        "to": 50,
        "Relation": "should_be"
    },
    {
        "from": 51,
        "to": 52,
        "Relation": "should_be"
    },
    {
        "from": 53,
        "to": 54,
        "Relation": "should_be"
    },
    {
        "from": 55,
        "to": 56,
        "Relation": "are_central_to"
    },
    {
        "from": 57,
        "to": 58,
        "Relation": "involved_in"
    },
    {
        "from": 59,
        "to": 60,
        "Relation": "relate_to"
    },
    {
        "from": 61,
        "to": 62,
        "Relation": "require"
    },
    {
        "from": 63,
        "to": 64,
        "Relation": "should_be"
    },
    {
        "from": 65,
        "to": 66,
        "Relation": "must_be"
    },
    {
        "from": 67,
        "to": 68,
        "Relation": "governs_or_guides"
    },
    {
        "from": 69,
        "to": 70,
        "Relation": "should_be"
    },
    {
        "from": 71,
        "to": 72,
        "Relation": "require"
    },
    {
        "from": 73,
        "to": 74,
        "Relation": "require"
    },
    {
        "from": 75,
        "to": 76,
        "Relation": "require"
    },
    {
        "from": 77,
        "to": 78,
        "Relation": "require"
    },
    {
        "from": 79,
        "to": 80,
        "Relation": "should_be"
    },
    {
        "from": 81,
        "to": 82,
        "Relation": "interact_with"
    },
    {
        "from": 83,
        "to": 84,
        "Relation": "require"
    },
    {
        "from": 85,
        "to": 86,
        "Relation": "consider"
    },
    {
        "from": 87,
        "to": 88,
        "Relation": "consider"
    },
    {
        "from": 89,
        "to": 90,
        "Relation": "require"
    },
    {
        "from": 91,
        "to": 92,
        "Relation": "is_affected_by"
    },
    {
        "from": 93,
        "to": 94,
        "Relation": "require"
    },
    {
        "from": 95,
        "to": 96,
        "Relation": "are_central_to"
    },
    {
        "from": 97,
        "to": 98,
        "Relation": "perform_in"
    },
    {
        "from": 99,
        "to": 100,
        "Relation": "consider"
    },
    {
        "from": 101,
        "to": 102,
        "Relation": "utlises"
    },
    {
        "from": 103,
        "to": 104,
        "Relation": "perform_in"
    },
    {
        "from": 105,
        "to": 106,
        "Relation": "governs_or_guides"
    },
    {
        "from": 107,
        "to": 108,
        "Relation": "based_on"
    },
    {
        "from": 109,
        "to": 110,
        "Relation": "utlises"
    },
    {
        "from": 111,
        "to": 112,
        "Relation": "utlises"
    },
    {
        "from": 113,
        "to": 114,
        "Relation": "should_not_be"
    },
    {
        "from": 115,
        "to": 116,
        "Relation": "should_not_be"
    },
    {
        "from": 117,
        "to": 118,
        "Relation": "should_not_be"
    },
    {
        "from": 119,
        "to": 120,
        "Relation": "should_not_be"
    },
    {
        "from": 121,
        "to": 122,
        "Relation": "utlises"
    },
    {
        "from": 123,
        "to": 124,
        "Relation": "involved_in"
    },
    {
        "from": 125,
        "to": 126,
        "Relation": "interact_with"
    },
    {
        "from": 127,
        "to": 128,
        "Relation": "consider"
    },
    {
        "from": 129,
        "to": 130,
        "Relation": "interact_with"
    },
    {
        "from": 131,
        "to": 132,
        "Relation": "require"
    },
    {
        "from": 133,
        "to": 134,
        "Relation": "must_be"
    },
    {
        "from": 135,
        "to": 136,
        "Relation": "utlises"
    },
    {
        "from": 137,
        "to": 138,
        "Relation": "regulates"
    },
    {
        "from": 139,
        "to": 140,
        "Relation": "has_implications_for"
    },
    {
        "from": 141,
        "to": 142,
        "Relation": "must_be"
    },
    {
        "from": 143,
        "to": 144,
        "Relation": "involved_in"
    },
    {
        "from": 145,
        "to": 146,
        "Relation": "involved_in"
    },
    {
        "from": 147,
        "to": 148,
        "Relation": "utlises"
    },
    {
        "from": 149,
        "to": 150,
        "Relation": "has_implications_for"
    },
    {
        "from": 151,
        "to": 152,
        "Relation": "governs_or_guides"
    },
    {
        "from": 153,
        "to": 154,
        "Relation": "interact_with"
    },
    {
        "from": 155,
        "to": 156,
        "Relation": "utlises"
    },
    {
        "from": 157,
        "to": 158,
        "Relation": "consider"
    },
    {
        "from": 159,
        "to": 160,
        "Relation": "has_implications_for"
    },
    {
        "from": 161,
        "to": 162,
        "Relation": "utlises"
    },
    {
        "from": 163,
        "to": 164,
        "Relation": "consider"
    },
    {
        "from": 165,
        "to": 166,
        "Relation": "consider"
    },
    {
        "from": 167,
        "to": 168,
        "Relation": "consider"
    },
    {
        "from": 169,
        "to": 170,
        "Relation": "has_implications_for"
    },
    {
        "from": 171,
        "to": 172,
        "Relation": "must_be"
    },
    {
        "from": 173,
        "to": 174,
        "Relation": "interact_with"
    },
    {
        "from": 175,
        "to": 176,
        "Relation": "contains"
    },
    {
        "from": 177,
        "to": 178,
        "Relation": "consider"
    },
    {
        "from": 179,
        "to": 180,
        "Relation": "should_be"
    },
    {
        "from": 181,
        "to": 182,
        "Relation": "governs_or_guides"
    },
    {
        "from": 183,
        "to": 184,
        "Relation": "consider"
    },
    {
        "from": 185,
        "to": 186,
        "Relation": "are_central_to"
    },
    {
        "from": 187,
        "to": 188,
        "Relation": "governs_or_guides"
    },
    {
        "from": 189,
        "to": 190,
        "Relation": "has_implications_for"
    },
    {
        "from": 191,
        "to": 192,
        "Relation": "utlises"
    },
    {
        "from": 193,
        "to": 194,
        "Relation": "are_central_to"
    },
    {
        "from": 195,
        "to": 196,
        "Relation": "require"
    },
    {
        "from": 197,
        "to": 198,
        "Relation": "must_be"
    },
    {
        "from": 199,
        "to": 200,
        "Relation": "is_affected_by"
    },
    {
        "from": 201,
        "to": 202,
        "Relation": "works_with"
    },
    {
        "from": 203,
        "to": 204,
        "Relation": "must_be"
    },
    {
        "from": 205,
        "to": 206,
        "Relation": "certifies_or_validates"
    },
    {
        "from": 207,
        "to": 208,
        "Relation": "utlises"
    },
    {
        "from": 209,
        "to": 210,
        "Relation": "relate_to"
    },
    {
        "from": 211,
        "to": 212,
        "Relation": "relate_to"
    },
    {
        "from": 213,
        "to": 214,
        "Relation": "utlises"
    },
    {
        "from": 215,
        "to": 216,
        "Relation": "utlises"
    },
    {
        "from": 217,
        "to": 218,
        "Relation": "utlises"
    },
    {
        "from": 219,
        "to": 220,
        "Relation": "utlises"
    },
    {
        "from": 221,
        "to": 222,
        "Relation": "utlises"
    },
    {
        "from": 223,
        "to": 224,
        "Relation": "utlises"
    },
    {
        "from": 225,
        "to": 226,
        "Relation": "governs_or_guides"
    },
    {
        "from": 227,
        "to": 228,
        "Relation": "governs_or_guides"
    },
    {
        "from": 229,
        "to": 230,
        "Relation": "governs_or_guides"
    },
    {
        "from": 231,
        "to": 232,
        "Relation": "has_implications_for"
    },
    {
        "from": 233,
        "to": 234,
        "Relation": "regulates"
    },
    {
        "from": 235,
        "to": 236,
        "Relation": "certifies_or_validates"
    },
    {
        "from": 237,
        "to": 238,
        "Relation": "regulates"
    },
    {
        "from": 239,
        "to": 240,
        "Relation": "contains"
    },
    {
        "from": 241,
        "to": 242,
        "Relation": "contains"
    },
    {
        "from": 243,
        "to": 244,
        "Relation": "applies_to"
    },
    {
        "from": 245,
        "to": 246,
        "Relation": "utlises"
    },
    {
        "from": 247,
        "to": 248,
        "Relation": "utlises"
    },
    {
        "from": 249,
        "to": 250,
        "Relation": "should_not_be"
    },
    {
        "from": 251,
        "to": 252,
        "Relation": "utlises"
    },
    {
        "from": 253,
        "to": 254,
        "Relation": "has_implications_for"
    },
    {
        "from": 255,
        "to": 256,
        "Relation": "should_be"
    },
    {
        "from": 257,
        "to": 258,
        "Relation": "should_be"
    },
    {
        "from": 259,
        "to": 260,
        "Relation": "contains"
    },
    {
        "from": 261,
        "to": 262,
        "Relation": "contains"
    },
    {
        "from": 263,
        "to": 264,
        "Relation": "contains"
    },
    {
        "from": 265,
        "to": 266,
        "Relation": "applies_to"
    },
    {
        "from": 267,
        "to": 268,
        "Relation": "applies_to"
    },
    {
        "from": 269,
        "to": 270,
        "Relation": "utlises"
    },
    {
        "from": 271,
        "to": 272,
        "Relation": "applies_to"
    },
    {
        "from": 273,
        "to": 274,
        "Relation": "can_be"
    },
    {
        "from": 275,
        "to": 276,
        "Relation": "governs_or_guides"
    },
    {
        "from": 277,
        "to": 278,
        "Relation": "utlises"
    },
    {
        "from": 279,
        "to": 280,
        "Relation": "utlises"
    },
    {
        "from": 281,
        "to": 282,
        "Relation": "can_be"
    },
    {
        "from": 283,
        "to": 284,
        "Relation": "contains"
    },
    {
        "from": 285,
        "to": 286,
        "Relation": "can_be"
    },
    {
        "from": 287,
        "to": 288,
        "Relation": "are_central_to"
    },
    {
        "from": 289,
        "to": 290,
        "Relation": "certifies_or_validates"
    },
    {
        "from": 291,
        "to": 292,
        "Relation": "contains"
    },
    {
        "from": 293,
        "to": 294,
        "Relation": "has_implications_for"
    },
    {
        "from": 295,
        "to": 296,
        "Relation": "has_implications_for"
    },
    {
        "from": 297,
        "to": 298,
        "Relation": "contains"
    },
    {
        "from": 299,
        "to": 300,
        "Relation": "governs_or_guides"
    },
    {
        "from": 301,
        "to": 302,
        "Relation": "contains"
    },
    {
        "from": 303,
        "to": 304,
        "Relation": "based_on"
    },
    {
        "from": 305,
        "to": 306,
        "Relation": "has_implications_for"
    },
    {
        "from": 307,
        "to": 308,
        "Relation": "has_implications_for"
    },
    {
        "from": 309,
        "to": 310,
        "Relation": "has_implications_for"
    },
    {
        "from": 311,
        "to": 312,
        "Relation": "governs_or_guides"
    },
    {
        "from": 313,
        "to": 314,
        "Relation": "contains"
    },
    {
        "from": 315,
        "to": 316,
        "Relation": "governs_or_guides"
    },
    {
        "from": 317,
        "to": 318,
        "Relation": "relate_to"
    },
    {
        "from": 319,
        "to": 320,
        "Relation": "has_implications_for"
    },
    {
        "from": 321,
        "to": 322,
        "Relation": "has_implications_for"
    },
    {
        "from": 323,
        "to": 324,
        "Relation": "involved_in"
    },
    {
        "from": 325,
        "to": 326,
        "Relation": "utlises"
    },
    {
        "from": 327,
        "to": 328,
        "Relation": "contains"
    },
    {
        "from": 329,
        "to": 330,
        "Relation": "relate_to"
    },
    {
        "from": 331,
        "to": 332,
        "Relation": "interact_with"
    },
    {
        "from": 333,
        "to": 334,
        "Relation": "interact_with"
    },
    {
        "from": 335,
        "to": 336,
        "Relation": "is_affected_by"
    },
    {
        "from": 337,
        "to": 338,
        "Relation": "governs_or_guides"
    },
    {
        "from": 339,
        "to": 340,
        "Relation": "certifies_or_validates"
    },
    {
        "from": 341,
        "to": 342,
        "Relation": "interact_with"
    },
    {
        "from": 343,
        "to": 344,
        "Relation": "interact_with"
    },
    {
        "from": 345,
        "to": 346,
        "Relation": "is_affected_by"
    },
    {
        "from": 347,
        "to": 348,
        "Relation": "interact_with"
    },
    {
        "from": 349,
        "to": 350,
        "Relation": "is_affected_by"
    },
    {
        "from": 351,
        "to": 352,
        "Relation": "consider"
    },
    {
        "from": 353,
        "to": 354,
        "Relation": "require"
    },
    {
        "from": 355,
        "to": 356,
        "Relation": "interact_with"
    },
    {
        "from": 357,
        "to": 358,
        "Relation": "interact_with"
    },
    {
        "from": 359,
        "to": 360,
        "Relation": "involved_in"
    },
    {
        "from": 361,
        "to": 362,
        "Relation": "is_affected_by"
    },
    {
        "from": 363,
        "to": 364,
        "Relation": "interact_with"
    },
    {
        "from": 365,
        "to": 366,
        "Relation": "utlises"
    },
    {
        "from": 367,
        "to": 368,
        "Relation": "involved_in"
    },
    {
        "from": 369,
        "to": 370,
        "Relation": "require"
    },
    {
        "from": 371,
        "to": 372,
        "Relation": "has_implications_for"
    },
    {
        "from": 373,
        "to": 374,
        "Relation": "consider"
    },
    {
        "from": 375,
        "to": 376,
        "Relation": "is_affected_by"
    },
    {
        "from": 377,
        "to": 378,
        "Relation": "has_implications_for"
    },
    {
        "from": 379,
        "to": 380,
        "Relation": "are_central_to"
    },
    {
        "from": 381,
        "to": 382,
        "Relation": "require"
    },
    {
        "from": 383,
        "to": 384,
        "Relation": "utlises"
    },
    {
        "from": 385,
        "to": 386,
        "Relation": "utlises"
    },
    {
        "from": 387,
        "to": 388,
        "Relation": "utlises"
    },
    {
        "from": 389,
        "to": 390,
        "Relation": "consider"
    },
    {
        "from": 391,
        "to": 392,
        "Relation": "is_affected_by"
    },
    {
        "from": 393,
        "to": 394,
        "Relation": "is_affected_by"
    },
    {
        "from": 395,
        "to": 396,
        "Relation": "utlises"
    },
    {
        "from": 397,
        "to": 398,
        "Relation": "require"
    },
    {
        "from": 399,
        "to": 400,
        "Relation": "consider"
    },
    {
        "from": 401,
        "to": 402,
        "Relation": "is_affected_by"
    },
    {
        "from": 403,
        "to": 404,
        "Relation": "utlises"
    },
    {
        "from": 405,
        "to": 406,
        "Relation": "has_implications_for"
    },
    {
        "from": 407,
        "to": 408,
        "Relation": "require"
    },
    {
        "from": 409,
        "to": 410,
        "Relation": "is_affected_by"
    },
    {
        "from": 411,
        "to": 412,
        "Relation": "interact_with"
    },
    {
        "from": 413,
        "to": 414,
        "Relation": "based_on"
    },
    {
        "from": 415,
        "to": 416,
        "Relation": "governs_or_guides"
    },
    {
        "from": 417,
        "to": 418,
        "Relation": "involved_in"
    },
    {
        "from": 419,
        "to": 420,
        "Relation": "require"
    },
    {
        "from": 421,
        "to": 422,
        "Relation": "consider"
    },
    {
        "from": 423,
        "to": 424,
        "Relation": "is_affected_by"
    },
    {
        "from": 425,
        "to": 426,
        "Relation": "involved_in"
    },
    {
        "from": 427,
        "to": 428,
        "Relation": "is_affected_by"
    },
    {
        "from": 429,
        "to": 430,
        "Relation": "consider"
    },
    {
        "from": 431,
        "to": 432,
        "Relation": "involved_in"
    },
    {
        "from": 433,
        "to": 434,
        "Relation": "consider"
    },
    {
        "from": 435,
        "to": 436,
        "Relation": "based_on"
    },
    {
        "from": 437,
        "to": 438,
        "Relation": "involved_in"
    },
    {
        "from": 439,
        "to": 440,
        "Relation": "involved_in"
    },
    {
        "from": 441,
        "to": 442,
        "Relation": "involved_in"
    },
    {
        "from": 443,
        "to": 444,
        "Relation": "involved_in"
    },
    {
        "from": 445,
        "to": 446,
        "Relation": "require"
    },
    {
        "from": 447,
        "to": 448,
        "Relation": "consider"
    },
    {
        "from": 449,
        "to": 450,
        "Relation": "is_affected_by"
    },
    {
        "from": 451,
        "to": 452,
        "Relation": "interact_with"
    },
    {
        "from": 453,
        "to": 454,
        "Relation": "require"
    },
    {
        "from": 455,
        "to": 456,
        "Relation": "contains"
    },
    {
        "from": 457,
        "to": 458,
        "Relation": "contains"
    },
    {
        "from": 459,
        "to": 460,
        "Relation": "is_affected_by"
    },
    {
        "from": 461,
        "to": 462,
        "Relation": "helps"
    },
    {
        "from": 463,
        "to": 464,
        "Relation": "helps"
    },
    {
        "from": 465,
        "to": 466,
        "Relation": "interact_with"
    },
    {
        "from": 467,
        "to": 468,
        "Relation": "require"
    },
    {
        "from": 469,
        "to": 470,
        "Relation": "interact_with"
    },
    {
        "from": 471,
        "to": 472,
        "Relation": "require"
    },
    {
        "from": 473,
        "to": 474,
        "Relation": "utlises"
    },
    {
        "from": 475,
        "to": 476,
        "Relation": "interact_with"
    },
    {
        "from": 477,
        "to": 478,
        "Relation": "consider"
    },
    {
        "from": 479,
        "to": 480,
        "Relation": "perform_in"
    },
    {
        "from": 481,
        "to": 482,
        "Relation": "perform_in"
    },
    {
        "from": 483,
        "to": 484,
        "Relation": "perform_in"
    },
    {
        "from": 485,
        "to": 486,
        "Relation": "utlises"
    },
    {
        "from": 487,
        "to": 488,
        "Relation": "require"
    },
    {
        "from": 489,
        "to": 490,
        "Relation": "perform_in"
    },
    {
        "from": 491,
        "to": 492,
        "Relation": "has_implications_for"
    },
    {
        "from": 493,
        "to": 494,
        "Relation": "require"
    },
    {
        "from": 495,
        "to": 496,
        "Relation": "contains"
    },
    {
        "from": 497,
        "to": 498,
        "Relation": "governs_or_guides"
    },
    {
        "from": 499,
        "to": 500,
        "Relation": "require"
    },
    {
        "from": 501,
        "to": 502,
        "Relation": "has_implications_for"
    },
    {
        "from": 503,
        "to": 504,
        "Relation": "contains"
    },
    {
        "from": 505,
        "to": 506,
        "Relation": "involved_in"
    },
    {
        "from": 507,
        "to": 508,
        "Relation": "helps"
    },
    {
        "from": 509,
        "to": 510,
        "Relation": "require"
    },
    {
        "from": 511,
        "to": 512,
        "Relation": "regulates"
    },
    {
        "from": 513,
        "to": 514,
        "Relation": "utlises"
    },
    {
        "from": 515,
        "to": 516,
        "Relation": "require"
    },
    {
        "from": 517,
        "to": 518,
        "Relation": "based_on"
    },
    {
        "from": 519,
        "to": 520,
        "Relation": "based_on"
    },
    {
        "from": 521,
        "to": 522,
        "Relation": "can_be"
    },
    {
        "from": 523,
        "to": 524,
        "Relation": "can_be"
    },
    {
        "from": 525,
        "to": 526,
        "Relation": "is_affected_by"
    },
    {
        "from": 527,
        "to": 528,
        "Relation": "has_implications_for"
    },
    {
        "from": 529,
        "to": 530,
        "Relation": "can_be"
    },
    {
        "from": 531,
        "to": 532,
        "Relation": "based_on"
    },
    {
        "from": 533,
        "to": 534,
        "Relation": "should_not_be"
    },
    {
        "from": 535,
        "to": 536,
        "Relation": "contains"
    },
    {
        "from": 537,
        "to": 538,
        "Relation": "can_be"
    },
    {
        "from": 539,
        "to": 540,
        "Relation": "has_implications_for"
    },
    {
        "from": 541,
        "to": 542,
        "Relation": "contains"
    },
    {
        "from": 543,
        "to": 544,
        "Relation": "should_not_be"
    },
    {
        "from": 545,
        "to": 546,
        "Relation": "contains"
    },
    {
        "from": 547,
        "to": 548,
        "Relation": "contains"
    },
    {
        "from": 549,
        "to": 550,
        "Relation": "governs_or_guides"
    },
    {
        "from": 551,
        "to": 552,
        "Relation": "has_implications_for"
    },
    {
        "from": 553,
        "to": 554,
        "Relation": "perform_in"
    },
    {
        "from": 555,
        "to": 556,
        "Relation": "involved_in"
    },
    {
        "from": 557,
        "to": 558,
        "Relation": "governs_or_guides"
    },
    {
        "from": 559,
        "to": 560,
        "Relation": "governs_or_guides"
    },
    {
        "from": 561,
        "to": 562,
        "Relation": "perform_in"
    },
    {
        "from": 563,
        "to": 564,
        "Relation": "applies_to"
    },
    {
        "from": 565,
        "to": 566,
        "Relation": "governs_or_guides"
    },
    {
        "from": 567,
        "to": 568,
        "Relation": "has_implications_for"
    },
    {
        "from": 569,
        "to": 570,
        "Relation": "can_be"
    },
    {
        "from": 571,
        "to": 572,
        "Relation": "governs_or_guides"
    },
    {
        "from": 573,
        "to": 574,
        "Relation": "perform_in"
    },
    {
        "from": 575,
        "to": 576,
        "Relation": "contains"
    },
    {
        "from": 577,
        "to": 578,
        "Relation": "perform_in"
    },
    {
        "from": 579,
        "to": 580,
        "Relation": "perform_in"
    },
    {
        "from": 581,
        "to": 582,
        "Relation": "perform_in"
    },
    {
        "from": 583,
        "to": 584,
        "Relation": "perform_in"
    },
    {
        "from": 585,
        "to": 586,
        "Relation": "involved_in"
    },
    {
        "from": 587,
        "to": 588,
        "Relation": "perform_in"
    },
    {
        "from": 589,
        "to": 590,
        "Relation": "perform_in"
    },
    {
        "from": 591,
        "to": 592,
        "Relation": "involved_in"
    },
    {
        "from": 593,
        "to": 594,
        "Relation": "require"
    },
    {
        "from": 595,
        "to": 596,
        "Relation": "require"
    },
    {
        "from": 597,
        "to": 598,
        "Relation": "perform_in"
    },
    {
        "from": 599,
        "to": 600,
        "Relation": "require"
    },
    {
        "from": 601,
        "to": 602,
        "Relation": "require"
    },
    {
        "from": 603,
        "to": 604,
        "Relation": "perform_in"
    },
    {
        "from": 605,
        "to": 606,
        "Relation": "involved_in"
    },
    {
        "from": 607,
        "to": 608,
        "Relation": "involved_in"
    },
    {
        "from": 609,
        "to": 610,
        "Relation": "require"
    },
    {
        "from": 611,
        "to": 612,
        "Relation": "perform_in"
    },
    {
        "from": 613,
        "to": 614,
        "Relation": "has_implications_for"
    },
    {
        "from": 615,
        "to": 616,
        "Relation": "require"
    },
    {
        "from": 617,
        "to": 618,
        "Relation": "perform_in"
    },
    {
        "from": 619,
        "to": 620,
        "Relation": "perform_in"
    },
    {
        "from": 621,
        "to": 622,
        "Relation": "perform_in"
    },
    {
        "from": 623,
        "to": 624,
        "Relation": "involved_in"
    },
    {
        "from": 625,
        "to": 626,
        "Relation": "involved_in"
    },
    {
        "from": 627,
        "to": 628,
        "Relation": "involved_in"
    },
    {
        "from": 629,
        "to": 630,
        "Relation": "involved_in"
    },
    {
        "from": 631,
        "to": 632,
        "Relation": "involved_in"
    },
    {
        "from": 633,
        "to": 634,
        "Relation": "perform_in"
    },
    {
        "from": 635,
        "to": 636,
        "Relation": "involved_in"
    },
    {
        "from": 637,
        "to": 638,
        "Relation": "involved_in"
    },
    {
        "from": 639,
        "to": 640,
        "Relation": "involved_in"
    },
    {
        "from": 641,
        "to": 642,
        "Relation": "involved_in"
    },
    {
        "from": 643,
        "to": 644,
        "Relation": "involved_in"
    },
    {
        "from": 645,
        "to": 646,
        "Relation": "perform_in"
    },
    {
        "from": 647,
        "to": 648,
        "Relation": "require"
    },
    {
        "from": 649,
        "to": 650,
        "Relation": "interact_with"
    },
    {
        "from": 651,
        "to": 652,
        "Relation": "require"
    },
    {
        "from": 653,
        "to": 654,
        "Relation": "governs_or_guides"
    },
    {
        "from": 655,
        "to": 656,
        "Relation": "is_affected_by"
    },
    {
        "from": 657,
        "to": 658,
        "Relation": "has_implications_for"
    },
    {
        "from": 659,
        "to": 660,
        "Relation": "has_implications_for"
    },
    {
        "from": 661,
        "to": 662,
        "Relation": "has_implications_for"
    },
    {
        "from": 663,
        "to": 664,
        "Relation": "regulates"
    },
    {
        "from": 665,
        "to": 666,
        "Relation": "regulates"
    },
    {
        "from": 667,
        "to": 668,
        "Relation": "governs_or_guides"
    },
    {
        "from": 669,
        "to": 670,
        "Relation": "based_on"
    },
    {
        "from": 671,
        "to": 672,
        "Relation": "are_central_to"
    },
    {
        "from": 673,
        "to": 674,
        "Relation": "regulates"
    },
    {
        "from": 675,
        "to": 676,
        "Relation": "require"
    },
    {
        "from": 677,
        "to": 678,
        "Relation": "governs_or_guides"
    },
    {
        "from": 679,
        "to": 680,
        "Relation": "interact_with"
    },
    {
        "from": 681,
        "to": 682,
        "Relation": "require"
    },
    {
        "from": 683,
        "to": 684,
        "Relation": "has_implications_for"
    },
    {
        "from": 685,
        "to": 686,
        "Relation": "regulates"
    },
    {
        "from": 687,
        "to": 688,
        "Relation": "has_implications_for"
    },
    {
        "from": 689,
        "to": 690,
        "Relation": "has_implications_for"
    },
    {
        "from": 691,
        "to": 692,
        "Relation": "interact_with"
    },
    {
        "from": 693,
        "to": 694,
        "Relation": "interact_with"
    },
    {
        "from": 695,
        "to": 696,
        "Relation": "interact_with"
    },
    {
        "from": 697,
        "to": 698,
        "Relation": "involved_in"
    },
    {
        "from": 699,
        "to": 700,
        "Relation": "utlises"
    },
    {
        "from": 701,
        "to": 702,
        "Relation": "must_not_be"
    },
    {
        "from": 703,
        "to": 704,
        "Relation": "must_not_be"
    },
    {
        "from": 705,
        "to": 706,
        "Relation": "must_be"
    },
    {
        "from": 707,
        "to": 708,
        "Relation": "must_be"
    },
    {
        "from": 709,
        "to": 710,
        "Relation": "must_be"
    },
    {
        "from": 711,
        "to": 712,
        "Relation": "must_be"
    },
    {
        "from": 713,
        "to": 714,
        "Relation": "are_central_to"
    },
    {
        "from": 715,
        "to": 716,
        "Relation": "regulates"
    },
    {
        "from": 717,
        "to": 718,
        "Relation": "based_on"
    },
    {
        "from": 719,
        "to": 720,
        "Relation": "based_on"
    },
    {
        "from": 721,
        "to": 722,
        "Relation": "is_affected_by"
    },
    {
        "from": 723,
        "to": 724,
        "Relation": "require"
    },
    {
        "from": 725,
        "to": 726,
        "Relation": "applies_to"
    },
    {
        "from": 727,
        "to": 728,
        "Relation": "interact_with"
    },
    {
        "from": 729,
        "to": 730,
        "Relation": "interact_with"
    },
    {
        "from": 731,
        "to": 732,
        "Relation": "require"
    },
    {
        "from": 733,
        "to": 734,
        "Relation": "require"
    },
    {
        "from": 735,
        "to": 736,
        "Relation": "require"
    },
    {
        "from": 737,
        "to": 738,
        "Relation": "is_affected_by"
    },
    {
        "from": 739,
        "to": 740,
        "Relation": "involved_in"
    },
    {
        "from": 741,
        "to": 742,
        "Relation": "regulates"
    },
    {
        "from": 743,
        "to": 744,
        "Relation": "involved_in"
    },
    {
        "from": 745,
        "to": 746,
        "Relation": "are_central_to"
    },
    {
        "from": 747,
        "to": 748,
        "Relation": "require"
    },
    {
        "from": 749,
        "to": 750,
        "Relation": "require"
    },
    {
        "from": 751,
        "to": 752,
        "Relation": "are_central_to"
    },
    {
        "from": 753,
        "to": 754,
        "Relation": "should_be"
    },
    {
        "from": 755,
        "to": 756,
        "Relation": "are_central_to"
    },
    {
        "from": 757,
        "to": 758,
        "Relation": "governs_or_guides"
    },
    {
        "from": 759,
        "to": 760,
        "Relation": "regulates"
    },
    {
        "from": 761,
        "to": 762,
        "Relation": "involved_in"
    },
    {
        "from": 763,
        "to": 764,
        "Relation": "is_affected_by"
    },
    {
        "from": 765,
        "to": 766,
        "Relation": "applies_to"
    },
    {
        "from": 767,
        "to": 768,
        "Relation": "utlises"
    },
    {
        "from": 769,
        "to": 770,
        "Relation": "utlises"
    },
    {
        "from": 771,
        "to": 772,
        "Relation": "utlises"
    },
    {
        "from": 773,
        "to": 774,
        "Relation": "require"
    },
    {
        "from": 775,
        "to": 776,
        "Relation": "are_central_to"
    },
    {
        "from": 777,
        "to": 778,
        "Relation": "require"
    },
    {
        "from": 779,
        "to": 780,
        "Relation": "is_affected_by"
    },
    {
        "from": 781,
        "to": 782,
        "Relation": "governs_or_guides"
    },
    {
        "from": 783,
        "to": 784,
        "Relation": "require"
    },
    {
        "from": 785,
        "to": 786,
        "Relation": "governs_or_guides"
    },
    {
        "from": 787,
        "to": 788,
        "Relation": "involved_in"
    },
    {
        "from": 789,
        "to": 790,
        "Relation": "works_with"
    },
    {
        "from": 791,
        "to": 792,
        "Relation": "are_central_to"
    },
    {
        "from": 793,
        "to": 794,
        "Relation": "interact_with"
    },
    {
        "from": 795,
        "to": 796,
        "Relation": "must_not_be"
    },
    {
        "from": 797,
        "to": 798,
        "Relation": "regulates"
    },
    {
        "from": 799,
        "to": 800,
        "Relation": "involved_in"
    },
    {
        "from": 801,
        "to": 802,
        "Relation": "are_central_to"
    },
    {
        "from": 803,
        "to": 804,
        "Relation": "is_affected_by"
    },
    {
        "from": 805,
        "to": 806,
        "Relation": "works_with"
    },
    {
        "from": 807,
        "to": 808,
        "Relation": "should_not_be"
    },
    {
        "from": 809,
        "to": 810,
        "Relation": "should_be"
    },
    {
        "from": 811,
        "to": 812,
        "Relation": "relate_to"
    },
    {
        "from": 813,
        "to": 814,
        "Relation": "governs_or_guides"
    },
    {
        "from": 815,
        "to": 816,
        "Relation": "is_affected_by"
    },
    {
        "from": 817,
        "to": 818,
        "Relation": "regulates"
    },
    {
        "from": 819,
        "to": 820,
        "Relation": "involved_in"
    }
];
module.exports = { nodes, edges };