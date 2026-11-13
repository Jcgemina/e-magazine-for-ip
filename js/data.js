window.EMAG = {
  meta: {
    title: "Awit at Alamat",
    subtitle:
      "Myths, stories and music of five Indigenous cultural communities of the Davao Region",
    issue: "E-magazine · Davao Region",
    // Edit these names. They appear on the cover and in the colophon.
    group: ["Jhon Carlo Gemina", 
            "Gennah Mae Lacandula", 
            "Realyn Lumaad", 
            "Gabrielle Sebastien Abela", 
            "Adrian Florida"],
    section: "BSIT - 3rd Year",
    teacher: "Rosendo Rocacurva Meriwan",
    year: "2026"
  },

  intro: {
    lead:
      "Five communities, five homelands, one region. This issue follows the stories and music of the Ata Manobo, Bagobo-Tagabawa, Mandaya, Mansaka and Obo Manuvu. It asks what each tradition says on its own terms before it compares them.",
    body: [
      "The Davao Region is home to many Indigenous Cultural Communities and Indigenous Peoples (ICCs/IPs). They are often grouped together under the word Lumad, but each has its own language, homeland, spirit world and musical practice. Treating them as one culture erases the very differences that make their heritage worth keeping.",
      "We chose five communities whose homelands touch the region's great landmarks: the Pantaron range in the north-west, Mount Apo in the south-west, and the river valleys and Pacific coast of the east. For each one we read published research, community-authored documents and reports by cultural workers. Where we could not find a reliable source, we say so instead of filling the gap."
    ],
    bodyRefs: [
      ["ragragio2020", "masinaring2011", "ompang", "bahandi"],
      ["ragragio2025", "masinaring2011", "david2024", "ompang"]
    ],
    note:
      "A word on names: several communities use names for themselves that differ from the ones in government lists and older books. We use the names assigned for this project and explain the alternatives in each chapter.",
    noteRefs: ["ragragio2020", "bahandi", "david2024"]
  },

  communities: [
    /* ------------------------------------------------------------- */
    {
      id: "ata",
      name: "Ata Manobo",
      selectorName: "Ata Manobo",
      province: "Davao del Norte",
      location: "Talaingod and Kapalong, Davao del Norte, in the Pantaron range",
      landmark: "Mount Pantaron",
      cover: {
        src: "assets/img/photos/ata-manobo.jpg",
        alt: "Ata women from Barangay Tapak manually mill rice at the Kadayawan Cultural Village in Davao City.",
        caption: "Ata women from Barangay Tapak mill rice at Davao City's Kadayawan Cultural Village. This photograph records one public cultural-village scene, not the breadth of Ata Manobo life.",
        fit: "contain",
        credit: {
          title: "ATA Tribe",
          creator: "Ranieljosecastaneda",
          source: "Wikimedia Commons",
          pageUrl: "https://commons.wikimedia.org/wiki/File:ATA_Tribe.jpg",
          originalUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/ATA_Tribe.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        },
        isIllustration: false
      },
      teaser:
        "In Talaingod, named rivers, remembered epics and the rhythm of rice work connect story, land and song.",
      featured: {
        story: "Datu Maguinta and the immortal Katipunan",
        sound: "The bangkakaw, the beat of rice pestles"
      },
      chapter: {
        statement: "Epic heroes are known by their home rivers.",
        statementRefs: ["ragragio2025"],
        land: [
          {
            text: "The Ata Manobo live in the north-western part of Davao del Norte, especially the town of Talaingod, with related communities in Bukidnon and Davao de Oro.",
            refs: ["abarca2020"]
          },
          {
            text: "Their villages sit on ridgetops above the headwaters of the Talomo, Simong, Kapalong, Libuganon and Salug rivers, in the southern Pantaron mountain range.",
            refs: ["ragragio2025"]
          },
          {
            text: "Many prefer to be called simply Manobo, or Talaingod or Pantaron Manobo. Researchers note that the label \"Ata\" can carry a discriminatory meaning, and a book by a Mandaya author titles its chapter on them \"They do not want to be called Ata.\" The Ata, Pantaron and Talaingod Manobo regard one another as kin who share a language and material culture.",
            refs: ["ragragio2020", "masinaring2011", "abarca2020"]
          }
        ],
        beliefs: {
          text: "Manama is the supreme being. Lesser spirits look after particular parts of the world: Kalayag watches over plants, Yakan guards wild animals, and Alimugkat lives in water. A spiritual leader, the baylan, carries messages from the spirits and guides souls between the world of the living and the land of the dead.",
          refs: ["masinaring2011"]
        },
        stories: [
          {
            title: "Datu Maguinta and the immortal Katipunan",
            kind: "Legend of a sacred place",
            retelling: [
              "While out hunting, Datu Maguinta met Katipunan, an immortal woman. She led him to Sungkalob, a great rock on Mount Pantaron, where her father Kirakow lived. Kirakow had once been mortal and had been punished for disobedience.",
              "Katipunan wished to marry Maguinta, but to do so he would have had to leave his mortal body. He hesitated and went home to his wife. Katipunan did not abandon him: she became his abyan, his guardian spirit.",
              "When Maguinta died, his soul was said to have gone to live in Sungkalob. From then on, Mount Pantaron was held sacred."
            ],
            meaning:
              "The legend explains why a real mountain is sacred, so it ties belief to land. It also shows the idea of the abyan, a spirit companion, and draws a line between the mortal and the immortal world that a person crosses only at death.",
            refs: ["masinaring2011"]
          },
          {
            title: "Epics that travel by river",
            kind: "Epic tradition",
            retelling: [
              "Before formal schooling reached the highlands, young people learned their history through epics and hero stories. In these epics a hero is often identified by his home river, such as the \"Young Man from Umayam,\" and the plot follows long journeys across the landscape.",
              "One epic, chanted by Moyra of the upper Talomo, ends with kin scattered across five rivers gathering to travel together toward a land with no death. Moyra learned to chant from her sister Dantoy: the skill passes within families."
            ],
            meaning:
              "Here the epic works like a map and a history book at once. Elders' saying that they have always lived in the Pantaron is backed by stories that name its rivers and ridges.",
            refs: ["ragragio2025"]
          }
        ],
        music: {
          intro:
            "Music in Talaingod is tied to work, worship and, more recently, to the community's struggle to stay on its land.",
          refs: ["masinaring2011", "pagusara2014"],
          instruments: [
            {
              name: "Bangkakaw",
              family: "Idiophone",
              desc: "Pestles of dangkalan wood. The rhythm women make while pounding rice becomes the beat for dancing.",
              refs: ["masinaring2011"]
            },
            {
              name: "Kuglung",
              family: "Chordophone",
              desc: "A two-stringed lute that accompanies chanting by the balyan.",
              refs: ["pagusara2014"]
            },
            {
              name: "Saluray",
              family: "Chordophone",
              desc: "A zither played alongside the kuglung to accompany chants.",
              refs: ["pagusara2014"]
            }
          ],
          forms: [
            {
              name: "Panubad",
              desc: "Prayers led by the baylan, including invocations to the spirits during farming rituals.",
              refs: ["masinaring2011"]
            },
            {
              name: "Bwalawan",
              desc: "A dance that acts out the stages of farming, performed at the harvest thanksgiving.",
              refs: ["masinaring2011"]
            },
            {
              name: "Eight recognised dances",
              desc: "The Manobo Tribal Council of Talaingod identified eight dances, among them Bangkakow, Kalasag and Tagudturan, which a 2020 study recorded in movement notation.",
              refs: ["abarca2020"]
            },
            {
              name: "Uranda",
              desc: "A recent chant by Datu Carlito Sambiyang, composed after Talaingod families fled to Davao City. It calls for unity and for protecting the ancestral land for the next generation.",
              refs: ["pagusara2014"]
            }
          ]
        },
        timeline: {
          title: "The farming year, with its rites",
          intro: "Farming is a sequence of stages, and each one has its own observances. Song, prayer and dance mark the turning points.",
          steps: [
            { name: "Sunggod-to-kamanga", desc: "The new cropping season opens. Farm tools are prayed over and covered with cooked rice.", refs: ["masinaring2011"] },
            { name: "Panlawag", desc: "Omen-seeking. The call of the limukon (turtle dove) tells whether a site may be cleared.", refs: ["masinaring2011"] },
            { name: "Pangamot to silaban", desc: "Under-brushing, felling, drying and burning, each with its own customary observances.", refs: ["masinaring2011"] },
            { name: "Urok", desc: "Planting.", refs: ["masinaring2011"] },
            { name: "Hiluto", desc: "Harvest thanksgiving with goting, a ceremonial tasting of new rice, and dances such as the bwalawan.", refs: ["masinaring2011"] }
          ],
          refs: ["masinaring2011"]
        },
        significance: {
          quote: "We have always been in the Pantaron.",
          quoteBy: "Saying of Pantaron Manobo elders, as recorded by Ragragio & Paluga (2025)",
          text: "Ata Manobo stories root the people in a specific landscape: a sacred rock, named rivers, ridgetop villages. Their music grows out of daily work, and new chants like Uranda show the tradition still responding to present-day hardship.",
          refs: ["ragragio2025", "pagusara2014"]
        },
        toVerify: [
          {
            text: "Ragragio and Paluga (2025) report that younger Pantaron Manobo learned history through epics and hero stories. Pagusara (2014) publishes a Tulalang episode set at Mount Pantaron, but does not identify it as an Ata story or document permission to share it. Ata-specific story titles or plot summaries, and permission from families or knowledge holders to share them, remain unverified.",
            refs: ["ragragio2025", "pagusara2014"]
          },
          {
            text: "Pagusara (2014) mentions the kuglung and saluray but includes no recording. The sources reviewed do not verify a recording cleared by the community for public use. Confirm permission with the relevant knowledge holders before adding audio.",
            refs: ["pagusara2014"]
          }
        ]
      }
    },

    /* ------------------------------------------------------------- */
    {
      id: "tagabawa",
      name: "Bagobo-Tagabawa",
      selectorName: "Bagobo-Tagabawa",
      province: "Davao del Sur · Davao City",
      location: "Eastern slopes of Mount Apo, including Toril, Davao City",
      landmark: "Mount Apo (Apo Sandawa)",
      cover: {
        src: "assets/img/photos/bagobo-tagabawa.jpg",
        alt: "Bagobo-Tagabawa house display in Davao City, identified by a sign and a panel showing community members in traditional attire.",
        caption: "A Bagobo-Tagabawa house display in Davao City, shown with a panel identifying the community. The exhibit is one public presentation, not a portrait of every Tagabawa community.",
        fit: "cover",
        credit: {
          title: "Traditional House by the Bagobo Tagabawa Tribe",
          creator: "MadayawDavao",
          source: "Wikimedia Commons",
          pageUrl: "https://commons.wikimedia.org/wiki/File:Traditional_House_by_the_Bagobo_Tagabawa_Tribe.jpg",
          originalUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Traditional_House_by_the_Bagobo_Tagabawa_Tribe.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        },
        isIllustration: false
      },
      teaser:
        "Stories rooted on Apo Sandawa meet a musical world of graduated gongs, bamboo instruments and different kinds of song.",
      featured: {
        story: "Lumabat and Mebuyan",
        sound: "Graduated gongs, from bandit to tagungguan"
      },
      chapter: {
        statement: "The mountain is sacred ground.",
        statementRefs: ["mangune"],
        land: [
          {
            text: "The Bagobo are among the largest Indigenous groups of southern Mindanao and are made up of three subgroups: the Tagabawa, the Klata (Guiangan) and the Ubo. They share one broad identity but differ in dialect, dance steps, costume and favourite colours.",
            refs: ["mangune"]
          },
          {
            text: "Their lands stretch from the west coast of the Davao Gulf up to Mount Apo, which they call Apo Sandawa and treat as sacred ground. Bagobo-Tagabawa musicians documented in 2024, for example, live in Toril District of Davao City.",
            refs: ["mangune", "pitargue2024"]
          },
          {
            text: "A caution: the oldest written collections of Bagobo stories, recorded by American writers in the early 1900s, say \"Bagobo\" without naming the subgroup. They were recorded at Santa Cruz and on the slopes of Mount Apo, in the Bagobo heartland, but not every detail should be assumed to hold for every Tagabawa community today.",
            refs: ["benedict1913", "cole1916"]
          }
        ],
        beliefs: {
          text: "Early records name Manama as the being who punishes and provides, and they describe the buso, demons who haunt graveyards, forests and rocks. Fear of the buso shaped ritual and magic, yet in stories they are often tricked and made to look foolish.",
          refs: ["cole1916", "benedict1913"]
        },
        stories: [
          {
            title: "Tuglay and Tuglibung",
            kind: "Origin myth",
            retelling: [
              "In the beginning there were one man and one woman, Tuglay and Tuglibung, who lived at Cibolan on Mount Apo. Their children grew up and many of them went away to find homes of their own.",
              "After the parents died and became spirits, a drought lasted three years. The people decided they were being punished and left the mountain in different directions, becoming the different peoples of the land.",
              "Two children were too weak with hunger and thirst to travel. The boy found a single stalk of sugarcane still growing, and its juice kept him and his sister alive until the rains returned. Their descendants are the Bagobo."
            ],
            meaning:
              "The myth explains where the Bagobo and their neighbours come from and places the first home on Mount Apo. It values survival, kinship and the gifts of the land. Note that this version was published in 1916 by an outsider, and its commentary reflects the views of that time.",
            refs: ["cole1916"]
          },
          {
            title: "Lumabat and Mebuyan",
            kind: "Myth of death and the afterlife",
            retelling: [
              "Lumabat quarrelled with his sister Mebuyan, who refused to go up to the sky with him. She sat on a rice mortar and sank down through the earth toward Gimokudan, the land of the dead.",
              "There she shakes a tree heavy with fruit. When ripe fruit falls, an old person dies; when unripe fruit falls, a young person dies.",
              "Mebuyan rules a town in the underworld where she nurses babies who have died, feeding them until they are weaned. Only then do they go on to Gimokudan."
            ],
            meaning:
              "The myth makes sense of death, including the death of children, and offers comfort: no infant enters the afterlife uncared for. The mortar and the rice link Mebuyan to food, fertility and the household.",
            refs: ["benedict1913"]
          }
        ],
        music: {
          intro:
            "Bagobo music joins bronze gongs to bamboo instruments, and some sounds had jobs beyond entertainment.",
          refs: ["santos1998", "benedict1913", "pitargue2024"],
          instruments: [
            {
              name: "Graduated gongs",
              family: "Idiophone",
              desc: "Gongs hung in a pyramid, from the lowest drone gong, the bandit, up to the highest melodic gong, the tagungguan.",
              refs: ["santos1998"]
            },
            {
              name: "Agong at an eclipse",
              family: "Idiophone",
              desc: "Large gongs were beaten during an eclipse of the moon to frighten off the monster believed to be swallowing it.",
              refs: ["benedict1913"]
            },
            {
              name: "Assa-assa kagik manok",
              family: "Aerophone",
              desc: "A bamboo water flute documented among Bagobo-Tagabawa musicians of Toril.",
              refs: ["pitargue2024"]
            },
            {
              name: "Palakpak ka odok",
              family: "Idiophone",
              desc: "A bamboo clapper, made from spiny bamboo.",
              refs: ["pitargue2024"]
            },
            {
              name: "Lantoy",
              family: "Aerophone",
              desc: "A bamboo flute, made from a native bamboo species.",
              refs: ["pitargue2024"]
            }
          ],
          forms: [
            {
              name: "Ulit",
              desc: "A long romantic tale of heroes from the distant past, recited quickly in a steady monotone without gestures. A young woman often told it at dusk after leaving her loom.",
              refs: ["benedict1913"]
            },
            {
              name: "Prose tales",
              desc: "Animal tales, creation myths and buso stories were told differently: in prose, with a lively voice and dramatic gestures.",
              refs: ["benedict1913"]
            },
            {
              name: "Men's and women's songs",
              desc: "Songs were classed as belonging to men or to women, and stories and songs were repeated at festivals.",
              refs: ["benedict1913"]
            },
            {
              name: "Proverbs and riddles",
              desc: "A study of 90 Bagobo-Tagabawa proverbs found that they lean heavily on metaphor to teach values.",
              refs: ["tuban"]
            }
          ]
        },
        significance: {
          quote: "Apo Sandawa is the sacred ground of the Bagobo.",
          quoteBy: "Paraphrasing Sonia D. Mangune, Bagobo cultural worker, NCCA",
          text: "From the first couple on Mount Apo to Mebuyan beneath the earth, Bagobo stories map a world in layers, with the mountain at its centre. The way a story is told, chanted monotone or dramatic prose, signals what kind of story it is.",
          refs: ["mangune", "benedict1913"]
        },
        toVerify: [
          {
            text: "Benedict (1913) records Tuglay and Tuglibung in a historical Bagobo creation account; present-day Bagobo-Tagabawa telling and permission to retell remain unverified.",
            refs: ["benedict1913"]
          },
          {
            text: "The available abstract of Pitargue et al. (2024) reports a study of bamboo instruments used by Bagobo-Tagabawa and three other communities, but does not identify an instrument called togo; the name and playing context need confirmation from the full article or community knowledge holders.",
            refs: ["pitargue2024"]
          }
        ]
      }
    },

    /* ------------------------------------------------------------- */
    {
      id: "mandaya",
      name: "Mandaya",
      selectorName: "Mandaya",
      province: "Davao Oriental",
      location: "Uplands and river valleys of Davao Oriental, facing the Pacific",
      landmark: "The balete tree and the Pacific coast",
      cover: {
        src: "assets/img/photos/mandaya-dagmay.jpg",
        alt: "Mandaya dagmay abaca textile attributed to master artisan Samporonia Madanlo, photographed at the 2024 National Arts and Crafts Fair.",
        caption: "Dagmay abaca textile attributed to master artisan Samporonia Madanlo, photographed at the 2024 National Arts and Crafts Fair.",
        fit: "contain",
        credit: {
          title: "Dagmay abaca textile Samporonia Madanlo Caraga Davao OrientalA",
          creator: "Valenzuela400",
          source: "Wikimedia Commons",
          pageUrl: "https://commons.wikimedia.org/wiki/File:Dagmay_abaca_textile_Samporonia_Madanlo_Caraga_Davao_OrientalA.jpg",
          originalUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Dagmay_abaca_textile_Samporonia_Madanlo_Caraga_Davao_OrientalA.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        },
        isIllustration: false
      },
      teaser:
        "From the many-night dawot to the call-and-response bayok, this chapter follows how stories and speech are performed.",
      featured: {
        story: "The legend of the dagmay",
        sound: "The dawot, chanted over many nights"
      },
      chapter: {
        statement: "Seven episodes survive. Five are now recorded.",
        statementRefs: ["upovpaa"],
        land: [
          {
            text: "Mandaya communities once spread across today's Davao Oriental, Davao del Norte and Davao de Oro, and north into Surigao del Sur and Agusan del Sur. Today they are concentrated in Davao Oriental, a rugged province with few coastal plains facing the Pacific.",
            refs: ["ompang"]
          },
          {
            text: "A Mandaya writer explains the name as \"inhabitants of the uplands.\" The word also names a language: the Mansaka and several other groups of the Davao provinces speak Mandaya-related languages.",
            refs: ["ompang", "nabayra2014"]
          }
        ],
        beliefs: {
          text: "Magbabaya is the Almighty, and nature is treated with reverence. Tagamaling, a spirit living in the balete tree, is linked to life and creation. A researcher who lived among the Mandaya from 1965 describes their universe as having three tiers that still form a single whole.",
          refs: ["masinaring2011", "nabayra2014"]
        },
        stories: [
          {
            title: "The legend of the dagmay",
            kind: "Legend of origin",
            retelling: [
              "A young man, his parents' only son, was hunting in the forest when he found beautiful cloth on a large rock beside a balete tree. He took it, not knowing that it belonged to the spirit Tagamaling.",
              "Tagamaling cursed the thief: he would die and be wrapped in the cloth he had stolen. The young man died, and his people buried him in it.",
              "The people prayed for forgiveness. Tagamaling then appeared to them in dreams and taught them to weave the dagmay, the abaca cloth with its designs of people and crocodiles."
            ],
            meaning:
              "The legend explains where a treasured art came from and why it is treated as sacred: dagmay designs are believed to be inspired by the spirit world. It also warns against taking what belongs to nature's guardians.",
            refs: ["masinaring2011", "ompang"]
          },
          {
            title: "The dawot",
            kind: "Epic tradition",
            retelling: [
              "The dawot is the Mandaya epic: orally transmitted poems about the customs, ways of life and adventures of an ancient people. It is made up of episodes called hullubaton.",
              "Bards called magdadawot chant it from memory, and a single episode can take many nights. Only seven hullubaton are known to survive. The language is archaic Mandaya that younger people no longer fully understand.",
              "A University of the Philippines project led by Genevieve Jorolan-Quintero recorded five episodes. The bards Balyan Masandak Ambasan and Balyan Tamoymoy Ambasan chanted, Balyan Desamparados Masinaring translated, and the texts were put into English and Visayan."
            ],
            meaning:
              "Unlike the Darangen or the Ulahingan, the dawot has not yet been formally recognised among the Philippine epics. Recording it, at the balyans' own offer, is a step toward giving it that place and toward renewing pride in Mandaya literature.",
            refs: ["upovpaa"]
          }
        ],
        music: {
          intro:
            "Mandaya instruments carry history and announce important events; spoken art can be as musical as any song.",
          refs: ["ompang", "upovpaa"],
          instruments: [
            {
              name: "Kudlong",
              family: "Chordophone",
              desc: "A two-stringed instrument with frets on one string. It is played before hunting, farming or a pangayao (a sanctioned act of retribution), and for entertainment.",
              refs: ["ompang"]
            },
            {
              name: "Gimbao",
              family: "Membranophone",
              desc: "A large drum with doe hide on one side and stag hide on the other, so each face sounds different. Usually two people play it, and it accompanies the balyan when spirits are summoned.",
              refs: ["ompang"]
            },
            {
              name: "Bonabon",
              family: "Aerophone",
              desc: "A bamboo flute about a metre long, with tunes that range from sentimental to jolly.",
              refs: ["ompang"]
            },
            {
              name: "Suding",
              family: "Idiophone",
              desc: "A bamboo jaw's harp.",
              refs: ["ompang"]
            }
          ],
          forms: [
            {
              name: "Bayok",
              desc: "A highly tonal art of figurative speech performed by two people in call and response, like a debate. It is used to propose marriage, settle conflicts, welcome visitors and celebrate.",
              refs: ["ompang"]
            },
            {
              name: "Dawot",
              desc: "The chanted epic, performed from memory by the magdadawot over many nights.",
              refs: ["upovpaa"]
            },
            {
              name: "Spirit summoning",
              desc: "The balyan summons spirits in ceremony, with the gimbao drum keeping time.",
              refs: ["ompang"]
            }
          ]
        },
        significance: {
          quote: "Dagmay designs are believed to be divinely inspired.",
          quoteBy: "Masinaring (2011), paraphrased",
          text: "Mandaya story, cloth and sound are closely bound together. The dawot holds history, the bayok settles disputes and seals marriages, and the dagmay legend explains why weaving begins with prayer. Because the epic's language is fading, recording it with the bards' consent is urgent.",
          refs: ["upovpaa", "ompang", "masinaring2011"]
        },
        toVerify: [
          "Plot summaries of the recorded hullubaton, once the translations are available and the balyans agree to share them.",
          "Whether dawot also names a woman's garment could not be verified in the sources consulted for this issue."
        ]
      }
    },

    /* ------------------------------------------------------------- */
    {
      id: "mansaka",
      name: "Mansaka",
      selectorName: "Mansaka",
      province: "Davao de Oro · Davao del Norte",
      location: "Mountains and valleys of Davao de Oro and Davao del Norte",
      landmark: "Mount Kandaraga",
      cover: {
        src: "assets/img/photos/mansaka.jpg",
        alt: "Three Mansaka women wearing formal attire in Davao Province in 2015.",
        caption: "An archival photograph of three Mansaka women in formal attire, taken in Davao Province in 2015; one image cannot represent the full range of Mansaka life.",
        fit: "contain",
        credit: {
          title: "Mansaka Tribeswomen 2015",
          creator: "MansakaTribe",
          source: "Wikimedia Commons",
          pageUrl: "https://commons.wikimedia.org/wiki/File:Mansaka_Tribeswomen_2015.jpg",
          originalUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Mansaka_Tribeswomen_2015.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        },
        isIllustration: false
      },
      teaser:
        "Stories of Mount Kandaraga alongside music for courtship, ceremony, harvest and gathering.",
      featured: {
        story: "The maiden of Mount Kandaraga",
        sound: "The kudlong, played solo for courtship"
      },
      chapter: {
        statement: "Music is learned by ear, never from paper.",
        statementRefs: ["marfil2013"],
        land: [
          {
            text: "The Mansaka live mainly in Davao de Oro (formerly Compostela Valley) and Davao del Norte, where they are among the most numerous Indigenous groups.",
            refs: ["marfil2013", "filipinas"]
          },
          {
            text: "Their language is related to Mandaya, and the two peoples share some vocabulary for music, such as the kudlong and the dawot.",
            refs: ["nabayra2014", "marfil2013", "ompang"]
          }
        ],
        beliefs: {
          text: "Magbabaya is the Almighty. Daragpo and Layoyo are deities of the harvest. The balyan, usually a woman, mediates between people and the divine and learns herbal medicine through dreams and from mentors.",
          refs: ["masinaring2011"]
        },
        stories: [
          {
            title: "The maiden of Mount Kandaraga",
            kind: "Origin legend",
            retelling: [
              "Long ago, the ground crumbled all around a young woman, a daraga, but the spot where she sat stayed whole.",
              "A rock shaped like a chair still marks that place on the mountain, which is why it is called Kandaraga. According to the elder Babo Felina Pacio, who told this story, the Mansaka are descended from that maiden."
            ],
            meaning:
              "The legend gives the Mansaka an ancestor and a homeland in the same image. A landmark anyone can see becomes proof of the people's origin.",
            refs: ["masinaring2011"]
          },
          {
            title: "The golden guitar",
            kind: "Story of loss",
            retelling: [
              "Long ago, the story goes, the Mansaka owned a golden guitar, which they played when they sang of longing, hope and victory.",
              "In time they felt their songs were no longer valued, so they threw the guitar into the deep sea. Now they sit and look toward the place where it sank."
            ],
            meaning:
              "Dr. Carmen Unabia, who collected Lumad stories about golden objects, reads the gold as a memory of a time of abundance. The story can also be read as a warning about what happens when a people's music stops being valued.",
            refs: ["kuizon2009"]
          }
        ],
        music: {
          intro:
            "Mansaka music is the best documented of the five in our sources, thanks to musicians in Tagum who agreed to share it with a researcher after a formal consent process.",
          refs: ["marfil2013"],
          instruments: [
            {
              name: "Gimbal",
              family: "Membranophone",
              desc: "A double-headed drum of deer skin. With the agung it accompanies prayer and ritual.",
              refs: ["marfil2013"]
            },
            {
              name: "Agung",
              family: "Idiophone",
              desc: "A wide-rimmed gong hung vertically. Two or three players can share one, striking the boss, edge and rim for different tones.",
              refs: ["marfil2013"]
            },
            {
              name: "Kulintang",
              family: "Idiophone",
              desc: "A row of eight small gongs laid flat. Beginners play two or three; skilled players use five to eight.",
              refs: ["marfil2013"]
            },
            {
              name: "Kudlong",
              family: "Chordophone",
              desc: "A two-stringed lute, one string for drone and one for melody. It comes in three sizes by number of frets, and is played solo for courtship.",
              refs: ["marfil2013"]
            },
            {
              name: "Lantoy and parundag",
              family: "Aerophone",
              desc: "Bamboo flutes. The parundag is larger and can be played with the mouth or nose. Both pair with the kudlong.",
              refs: ["marfil2013"]
            },
            {
              name: "Kubing",
              family: "Idiophone",
              desc: "A jaw's harp.",
              refs: ["marfil2013"]
            }
          ],
          forms: [
            { name: "Binarig", desc: "Music for courtship.", refs: ["marfil2013"] },
            { name: "Barabay", desc: "Music for entertainment.", refs: ["marfil2013"] },
            { name: "Sinakay-sakay", desc: "Music for ceremonies and rituals, including weddings and harvests.", refs: ["marfil2013"] },
            {
              name: "Dawot",
              desc: "Sung storytelling, improvised, that keeps history and tradition. Each story has its own tune. Only gifted singers perform it, usually with the kudlong, and listeners answer with shouted responses.",
              refs: ["marfil2013"]
            },
            { name: "Binalyan", desc: "A prayer or ritual dance addressed to Magbabaya.", refs: ["marfil2013"] }
          ]
        },
        contexts: {
          title: "Where the music is played",
          items: [
            { name: "Harvest and weddings", desc: "Large ensembles; celebrations can last weeks.", refs: ["marfil2013"] },
            { name: "Healing and acceptance rites", desc: "Smaller ensembles for solemn occasions.", refs: ["marfil2013"] },
            { name: "Becoming a bagani", desc: "The ritual that makes a man a tribal warrior.", refs: ["marfil2013"] },
            { name: "Pagsawitan", desc: "A harvest thanksgiving festival held in Maragusan each November.", refs: ["masinaring2011"] },
            { name: "Church", desc: "Mansaka songs have been sung at Indigenous Peoples' Sunday in Maragusan since the mid-1970s.", refs: ["masinaring2011"] }
          ]
        },
        significance: {
          quote: "Each cultural master has his own music.",
          quoteBy: "As described by Joy Marfil (2013), after interviews with Datu Onlos",
          text: "Cultural masters say their music comes from their ancestors, received at a sacred mountain place that only Mansaka may enter. We mention this only as the musicians themselves described it, and do not describe the place further. Elders worry that young people hardly appreciate the old music, which gives the golden guitar story a sharp present-day meaning.",
          refs: ["marfil2013", "kuizon2009"]
        },
        toVerify: [
          {
            text: "Recordings of binarig or dawot that Mansaka cultural masters have approved for public sharing.",
            refs: ["marfil2013"]
          },
          "Additional Mansaka stories that could be checked against an accessible source and shared with permission."
        ]
      }
    },

    /* ------------------------------------------------------------- */
    {
      id: "obo",
      name: "Obo Manuvu",
      selectorName: "Obo Manuvu",
      province: "Davao City · Cotabato",
      location: "Foothills of Mount Apo: Davao City's Marilog, Baguio and Calinan districts, and Kidapawan and Magpet, Cotabato",
      landmark: "Mount Apo (Lumut to Sondawa)",
      cover: {
        src: "assets/img/photos/obo-manuvu.jpg",
        alt: "Obu-Manuvu house at the 2026 Kadayawan Tribal Village in Magsaysay Park, Davao City, with mannequins displaying traditional clothing.",
        caption: "An Obo-Manuvu house display at Davao City's 2026 Kadayawan Tribal Village, with mannequins in traditional clothing.",
        fit: "cover",
        credit: {
          title: "Kadayawan Obu-Manuvu Village",
          creator: "DScottishFold123",
          source: "Wikimedia Commons",
          pageUrl: "https://commons.wikimedia.org/wiki/File:Kadayawan_Obu-Manuvu_Village.jpg",
          originalUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Kadayawan_Obu-Manuvu_Village.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
        },
        isIllustration: false
      },
      teaser:
        "Stories of Mount Apo and animal kinship sit beside a community-led call to document music on its own terms.",
      featured: {
        story: "Pandi and the Philippine eagle",
        sound: "The ahong, a set of eight to ten gongs"
      },
      chapter: {
        statement: "The first man to climb the mountain gave it its name.",
        statementRefs: ["david2024"],
        land: [
          {
            text: "The Obo Manuvu live on the foothills of Mount Apo on both its Cotabato and Davao sides. Kidapawan City and Magpet, in Cotabato, grew out of their settlements, and Obo communities also live in Davao City's Marilog, Baguio and Calinan districts. That makes them a people of the Davao Region as well as of its western neighbour.",
            refs: ["kidapawan", "david2024"]
          },
          {
            text: "Their name appears in many spellings: Obo Monuvu, Obo Manobo, Ovu Manuvu. A Davao City heritage group notes that the people call themselves Monuvu and that \"Obo\" comes from the neighbouring Tagabawa language.",
            refs: ["bahandi", "david2024"]
          }
        ],
        beliefs: {
          text: "Manama is the high god. Tohomaling gives the gift of weaving, and Tohovikaa, the spirit of wisdom, is called upon before traditional knowledge is shared. Each kind of animal has a master spirit: Dumaog for wild pigs, Mananangot for deer. Waters, waterfalls, mossy forests and certain trees have spirit guardians.",
          refs: ["pef2019"]
        },
        stories: [
          {
            title: "Apao and Lumut to Sondawa",
            kind: "Ancestor story",
            retelling: [
              "In Monuvu memory, Apao was the first person to climb Mount Apo. He gave the mountain its ancient name, Lumut to Sondawa, and named many other landmarks of the Kidapawan uplands.",
              "Clans that trace their descent from Apao still hold an ancestral domain on the mountain's slopes. The Monuvu call their oral history itulon."
            ],
            meaning:
              "The story turns naming into ownership in the deepest sense: the people who named the land belong to it. Kidapawan's city historian builds his history of the city on this kind of oral memory.",
            refs: ["david2024"]
          },
          {
            title: "Pandi and the Philippine eagle",
            kind: "Animal story",
            retelling: [
              "An eagle seized Pandi and carried him to its nest on a cliff. He survived among the eaglets, and in time escaped by gliding down on one of them. The bird became his tame companion.",
              "When Pandi died, his coffin was hung on that cliff. The place is called Sooang Banog, \"the eagle's nesting place.\" Elders add that eagles were once big enough to lift a person, but have grown smaller since."
            ],
            meaning:
              "Told by Datu Ambit Agon and published by the community itself, the story makes the Philippine eagle a relative rather than prey, which is why it is regarded as sacred in Imamaling.",
            refs: ["pef2019"]
          },
          {
            title: "Why monkeys have tails",
            kind: "Explanatory tale",
            retelling: [
              "Monkeys were once human. A boy who stole was struck by his angry mother, and the gods turned her stick into his tail. Ashamed, he ran into the forest."
            ],
            meaning:
              "A short tale with a clear lesson about honesty, and a reminder that people and animals are kin in Monuvu thought.",
            refs: ["pef2019"]
          }
        ],
        music: {
          intro:
            "Obo Manuvu music is underdocumented in the sources we could check. The tentative instrument descriptions below come from a secondary source; a community request for documentation is an invitation to future work, not consent to publish.",
          refs: ["manobogroup", "ccp", "usm2026"],
          instruments: [
            {
              name: "Ahong",
              family: "Idiophone",
              desc: "A gong ensemble of eight to ten agong, as played in Magpet.",
              refs: ["manobogroup"],
              placeholder: true
            },
            {
              name: "Kuglong",
              family: "Chordophone",
              desc: "A two-stringed lute that in Magpet accompanies songs, including a lullaby and a song about Alimugkat, a river goddess.",
              refs: ["manobogroup"],
              placeholder: true
            }
          ],
          forms: [
            {
              name: "Monkey dance",
              desc: "A traditional dance imitating the behaviour of monkeys, shown in the community's own publication.",
              refs: ["pef2019b"]
            }
          ]
        },
        contexts: {
          title: "Community-led documentation",
          items: [
            {
              name: "Ovu Manobo of Magpet",
              desc: "In March 2026, the community formally asked the University of Southern Mindanao to help document its dances, music and oral traditions.",
              refs: ["usm2026"]
            }
          ]
        },
        significance: {
          quote: "Kidapawan history begins with Monuvu history.",
          quoteBy: "Karlo Antonio G. David, Kidapawan city historian (2024)",
          text: "Obo Manuvu stories bind the people to Mount Apo, to its eagles and to its animal masters. Because the community itself wrote down some of these stories and has now asked for its music to be documented, preservation here is being led from within.",
          refs: ["david2024", "pef2019", "usm2026"]
        },
        toVerify: [
          {
            text: "The accessible 2019 community-authored Magpet report documents oral stories and weaving, but I found no documentation there for Ahong, Kuglong or their song contexts; Obo Manuvu knowledge-holder confirmation is still needed.",
            refs: ["pef2019"]
          },
          {
            text: "Essays in A Voice from Mt. Apo (Arayam, Bayawan & Vander Molen, 2005), written by Obo Manobo authors, were not accessible for this issue.",
            refs: ["voiceapo"]
          }
        ]
      }
    }
  ],

  /* ===================================================================
     COMPARATIVE ANALYSIS
     Each theme has a short entry per community. Keep entries brief.
     =================================================================== */
  comparison: {
    intro:
      "Placing the five traditions side by side shows real family resemblances, and just as many differences. The table below is built only from what the chapters report.",
    themes: [
      {
        id: "landscape",
        label: "Sacred landscape",
        cells: {
          ata: "Mount Pantaron and the rock Sungkalob",
          tagabawa: "Mount Apo (Apo Sandawa); Cibolan",
          mandaya: "The balete tree, home of Tagamaling",
          mansaka: "Mount Kandaraga; a sacred mountain place for music",
          obo: "Mount Apo (Lumut to Sondawa); Sooang Banog cliff"
        },
        refs: {
          ata: ["ragragio2025", "masinaring2011"],
          tagabawa: ["mangune", "cole1916"],
          mandaya: ["masinaring2011", "ompang"],
          mansaka: ["masinaring2011", "marfil2013"],
          obo: ["david2024", "pef2019"]
        }
      },
      {
        id: "high",
        label: "High god",
        cells: {
          ata: "Manama",
          tagabawa: "Manama (in early records)",
          mandaya: "Magbabaya",
          mansaka: "Magbabaya",
          obo: "Manama"
        },
        refs: {
          ata: ["masinaring2011"],
          tagabawa: ["cole1916", "benedict1913"],
          mandaya: ["masinaring2011", "nabayra2014"],
          mansaka: ["masinaring2011"],
          obo: ["pef2019"]
        }
      },
      {
        id: "origin",
        label: "Where the people come from",
        cells: {
          ata: "Not found in our sources",
          tagabawa: "Tuglay and Tuglibung on Mount Apo",
          mandaya: "Not found in our sources",
          mansaka: "The maiden of Mount Kandaraga",
          obo: "Apao, first to climb Mount Apo"
        },
        refs: {
          tagabawa: ["cole1916"],
          mansaka: ["masinaring2011"],
          obo: ["david2024"]
        }
      },
      {
        id: "gift",
        label: "Spiritual and ancestral relationships",
        cells: {
          ata: "Katipunan becomes Maguinta's abyan, a guardian spirit",
          tagabawa: "Not found in our sources",
          mandaya: "Tagamaling teaches dagmay weaving in dreams",
          mansaka: "Ancestors teach music to cultural masters",
          obo: "Tohomaling gives weaving; Tohovikaa gives wisdom"
        },
        refs: {
          ata: ["masinaring2011"],
          mandaya: ["masinaring2011"],
          mansaka: ["marfil2013"],
          obo: ["pef2019"]
        }
      },
      {
        id: "epic",
        label: "Long narrative form",
        cells: {
          ata: "River-hero epics chanted within families",
          tagabawa: "Ulit, recited in rapid monotone",
          mandaya: "Dawot, chanted by magdadawot over many nights",
          mansaka: "Dawot, improvised and sung with kudlong",
          obo: "Itulon, oral history"
        },
        refs: {
          ata: ["ragragio2025"],
          tagabawa: ["benedict1913"],
          mandaya: ["upovpaa"],
          mansaka: ["marfil2013"],
          obo: ["david2024"]
        }
      },
      {
        id: "lute",
        label: "Two-string lute",
        cells: {
          ata: "Kuglung",
          tagabawa: "Not found in our sources",
          mandaya: "Kudlong",
          mansaka: "Kudlong",
          obo: "Kuglong (to verify)"
        },
        refs: {
          ata: ["pagusara2014"],
          mandaya: ["ompang"],
          mansaka: ["marfil2013"],
          obo: ["manobogroup"]
        }
      },
      {
        id: "gongs",
        label: "Gongs",
        cells: {
          ata: "Not found in our sources",
          tagabawa: "Graduated gongs, bandit to tagungguan",
          mandaya: "Not found in our sources",
          mansaka: "Agung and an eight-gong kulintang",
          obo: "Ahong of 8–10 gongs (to verify)"
        },
        refs: {
          tagabawa: ["santos1998"],
          mansaka: ["marfil2013"],
          obo: ["manobogroup"]
        }
      },
      {
        id: "drum",
        label: "Deer-hide drum",
        cells: {
          ata: "Not found in our sources",
          tagabawa: "Not found in our sources",
          mandaya: "Gimbao, doe and stag hide",
          mansaka: "Gimbal, deer skin",
          obo: "Not found in our sources"
        },
        refs: {
          mandaya: ["ompang"],
          mansaka: ["marfil2013"]
        }
      },
      {
        id: "work",
        label: "Music for work and harvest",
        cells: {
          ata: "Bangkakaw rice pestles; bwalawan harvest dance",
          tagabawa: "Not found in our sources",
          mandaya: "Kudlong before farming and hunting",
          mansaka: "Sinakay-sakay; Pagsawitan festival",
          obo: "Not found in our sources"
        },
        refs: {
          ata: ["masinaring2011"],
          mandaya: ["ompang"],
          mansaka: ["marfil2013", "masinaring2011"]
        }
      }
    ],
    similarities: [
      {
        title: "Stories are rooted in particular places",
        text: "Several accounts name the places where a story unfolds: Cibolan on Mount Apo in a Bagobo origin account, Apao's landmarks in Obo Manuvu history, Sungkalob in an Ata Manobo legend, and Mount Kandaraga in a Mansaka origin story. The Mandaya dagmay account turns on a balete tree. These distinct relationships to place are not one shared origin story.",
        refs: ["cole1916", "david2024", "ragragio2025", "masinaring2011", "ompang"]
      },
      {
        title: "Knowledge has different origins and keepers",
        text: "Some accounts connect knowledge with spiritual or ancestral relationships: Tagamaling teaches dagmay weaving in dreams, Obo Manuvu accounts name spirits associated with weaving and wisdom, and Mansaka cultural masters describe music as received from ancestors. The Ata Manobo account of Katipunan instead centers on a spirit companion. These are different accounts, not a shared doctrine.",
        refs: ["masinaring2011", "pef2019", "marfil2013"]
      },
      {
        title: "Narrative forms are performed and passed on",
        text: "The sources describe Ata Manobo river-hero epics, the Bagobo ulit, Mandaya and Mansaka forms both called dawot, and Obo Manuvu itulon oral history. Their forms and performance contexts differ: a Mandaya dawot may take many nights, while the Mansaka dawot is described as improvised and sung. They should not be treated as interchangeable.",
        refs: ["ragragio2025", "benedict1913", "upovpaa", "marfil2013", "david2024"]
      },
      {
        title: "Musical parallels need careful reading",
        text: "A two-string lute appears under related names in sources on Ata Manobo, Mandaya and Mansaka music; a Magpet account of a similar instrument remains unverified. Gongs and bamboo instruments are also documented in some chapters, but the available sources are uneven. Similar names or instruments invite comparison; on their own, they do not establish a shared origin.",
        refs: ["pagusara2014", "ompang", "marfil2013", "manobogroup", "pitargue2024"]
      }
    ],
    differences: [
      {
        title: "Different names, different records",
        text: "The sources here name Manama for Ata Manobo and Obo Manuvu beliefs; early Bagobo accounts also record Manama. Mandaya and Mansaka sources name Magbabaya. The older Bagobo records do not stand in for every Tagabawa community today.",
        refs: ["masinaring2011", "pef2019", "cole1916", "benedict1913", "nabayra2014"]
      },
      {
        title: "Same word, different practice",
        text: "Both the Mandaya and Mansaka use the word dawot, but differently. The Mandaya dawot is a multi-night epic chanted from memory in an archaic language; the Mansaka dawot is described as improvised storytelling, with its own tune and shouted audience responses. A shared word does not mean a shared practice.",
        refs: ["upovpaa", "marfil2013"]
      },
      {
        title: "Who tells the story",
        text: "Early records describe the Bagobo ulit as often told by a young woman at dusk after weaving. A Mansaka study describes dawot as performed by gifted singers, while an Ata Manobo account follows a chant passing between sisters. The sources therefore show different telling contexts, not one rule shared by all five communities.",
        refs: ["benedict1913", "marfil2013", "ragragio2025"]
      },
      {
        title: "What the music is for",
        text: "The documented uses also vary: Ata Manobo rice-pounding rhythms and harvest dances; Mandaya kudlong before hunting and bayok in conflict settlement; Bagobo gongs sounded during an eclipse; and Mansaka ensembles that change with the occasion. The sources do not support reducing these different practices to one purpose.",
        refs: ["masinaring2011", "ompang", "benedict1913", "marfil2013"]
      },
      {
        title: "How well each is documented",
        text: "Our consulted sources give detailed accounts of Mansaka music and the Mandaya dawot, while we found much less verifiable material on Obo Manuvu music. That is a limit of this issue's sources, not a measure of the tradition or its importance.",
        refs: ["marfil2013", "upovpaa", "manobogroup", "usm2026"]
      }
    ]
  },

  /* ===================================================================
     CULTURAL SIGNIFICANCE (cross-community)
     =================================================================== */
  significance: [
    {
      title: "Identity",
      text: "The sources preserve different ways of relating identity to place: a Mansaka ancestor associated with Mount Kandaraga, a Bagobo origin account set on Mount Apo, an Obo Manuvu account of Apao, and Pantaron Manobo elders' statement of long residence. These accounts have different histories and should not be treated as interchangeable evidence of identity or land rights.",
      refs: ["masinaring2011", "cole1916", "david2024", "ragragio2025"]
    },
    {
      title: "Knowledge",
      text: "Stories and music can carry practical knowledge in different ways: Ata Manobo farming rites mark stages in the agricultural year; the Obo Manuvu source describes omens and environmental knowledge; and the Mandaya dawot relates customs, ways of life and adventures. Ragragio and Paluga also describe epics as a way Pantaron Manobo youth learned history before formal schooling.",
      refs: ["masinaring2011", "pef2019", "upovpaa", "ragragio2025"]
    },
    {
      title: "Community",
      text: "Music brings people together in ways that matter: Mansaka harvests and weddings can last weeks, Mandaya bayok settles conflicts, and Talaingod families in exile composed new chants to keep their spirit together.",
      refs: ["marfil2013", "ompang", "pagusara2014"]
    },
    {
      title: "Continuity under pressure",
      text: "The sources describe distinct circumstances, not one shared crisis: the Mandaya dawot's archaic language, Mansaka elders' concerns about younger listeners, and Ata Manobo families' displacement appear alongside community-led documentation by Obo Monuvu authors and the Ovu Manobo of Magpet. Each account calls for listening to the people involved rather than assuming one solution.",
      refs: ["upovpaa", "marfil2013", "pagusara2014", "pef2019", "usm2026"]
    }
  ],

  conclusion: [
    "These five communities are not five versions of one culture. Their stories and music speak from distinct places, histories and relationships—and the sources gathered here are only a partial record.",
    "This issue ends with questions still open, especially where music has been poorly documented or where knowledge is not ours to share. The next chapter belongs to the people who carry these traditions: may they lead how their stories are heard, how their music is recorded, and what should remain private."
  ],

  protocol: [
    {
      text: "The Indigenous Peoples' Rights Act of 1997 (Republic Act No. 8371) sets out the rights and processes relevant to research involving ICCs/IPs, including free and prior informed consent (FPIC) through the National Commission on Indigenous Peoples (NCIP).",
      refs: ["ipra"]
    },
    "We did not reproduce sacred chants, prayers or recordings. Stories are retold in our own words from published sources, and each one names the source and, where known, the person who shared it.",
    "Photographs are identified and attributed in their captions and Image credits. A reuse license applies to the image file; it does not by itself establish community endorsement or make one photograph representative of every person or ceremony.",
    "If a community member asks for any content here to be corrected or removed, we will do so."
  ],

  acknowledgments:
    "We acknowledge the knowledge holders named in our sources, among them Babo Felina Pacio (Mansaka), Datu Onlos and Datu Aguido Sucnaan (Mansaka), Balyan Masandak Ambasan, Balyan Tamoymoy Ambasan and Balyan Desamparados Masinaring (Mandaya), Moyra and Dantoy (Pantaron Manobo), Datu Carlito Sambiyang (Talaingod Manobo), Datu Ambit Agon and the Obo Monuvu of Don Panaca, Imamaling and Manobo, and Mr. Gilbert Ale (Bagobo-Tagabawa). The stories belong to their communities.",

  /* ===================================================================
     REFERENCES (APA 7). Keys are used in refs arrays above.
     tier: "primary" community-authored or field research,
           "scholarly" peer-reviewed / academic, "institutional",
           "secondary" (use with care), "unread" (recommended, not consulted)
     =================================================================== */
  references: {
    abarca2020: { tier: "scholarly", text: "Abarca, J. M. (2020). The dance description of the Ata Manobo dances in Talaingod, Davao del Norte. <i>Philippine Humanities Review, 21</i>(1).", url: "https://journals.upd.edu.ph/index.php/phr/article/view/7228" },
    ragragio2025: { tier: "scholarly", text: "Ragragio, A. M. M., & Paluga, M. D. (2025). The people that dwell on the heights: The Pantaron Highlands of southern Mindanao from the nineteenth to the early twentieth centuries. <i>Southeast Asian Studies, 14</i>(3).", url: "https://englishkyoto-seas.org/2025/12/vol-14-no-3-andrea-malaya-m-ragragio-and-myfel-d-paluga" },
    ragragio2020: { tier: "scholarly", text: "Ragragio, A. M. M., & Paluga, M. D. (2020). Ang ritwal ng pag-ugpo at ang figura ng salimbal, sa loob at labas ng Kabundukang Pantaron. <i>Diliman Review, 64</i>(1).", url: "https://journals.upd.edu.ph/index.php/dilimanreview/article/download/10237/9061" },
    masinaring2011: { tier: "primary", text: "Masinaring, M. R. N. (2011). <i>Understanding the Lumad: A closer look at a misunderstood culture</i> (G. Lacorte, Ed.). Tebtebba Foundation; SILDAP-SE.", url: "https://www.locjkt.or.id/application/docliblcjkt/upload/understanding%20the%20lumad.pdf" },
    pagusara2014: { tier: "secondary", text: "Pagusara, D. J. (2014, April 27). Intimations with the song of the balyan. <i>Davao Today</i>.", url: "https://davaotoday.com/todays-views/intimations-with-the-song-of-the-balyan/" },
    mangune: { tier: "institutional", text: "Mangune, S. D. (n.d.). <i>Bagobo</i>. National Commission for Culture and the Arts.", url: "https://ncca.gov.ph/?p=4542" },
    cole1916: { tier: "secondary", text: "Cole, M. C. (1916). Origin [Bagobo]. In <i>Philippine folk tales</i>. A. C. McClurg.", url: "https://sacred-texts.com/asia/pft/pft39.htm" },
    benedict1913: { tier: "scholarly", text: "Benedict, L. W. (1913). Bagobo myths. <i>Journal of American Folk-Lore, 26</i>(99), 13–63.", url: "https://archive.org/stream/jstor-534786/534786_djvu.txt" },
    santos1998: { tier: "scholarly", text: "Santos, R. P. (1998). Traditional music in Philippine cultures. In <i>Pahiyas: A Philippine harvest</i> (pp. 49–50). Smithsonian Center for Folklife and Cultural Heritage.", url: "https://folklife-media.si.edu/docs/festival/program-book-articles/FESTBK1998_16.pdf" },
    pitargue2024: { tier: "scholarly", text: "Pitargue, F. C., Jr., Conda, J. M., Cortez, R. E., Jr., Balmedina, S. L., & Barile, E. R. (2024). The bamboo species used in the production of musical instruments by four Filipino tribes (Kalinga [Lubuagan subtribe], Majukayong, Bagobo-Tagabawa and T'boli). <i>Journal of Tropical Forest Science, 36</i>(3), 252–261.", url: "https://doi.org/10.26525/jtfs2024.36.3.252" },
    tuban: { tier: "scholarly", text: "Tuban, J. R. (n.d.). A study of Bagobo Tagabawa folk speech using Murdock's and Eugenio's classification. <i>Southeastern Philippines Journal of Research and Development, 26</i>(2), 109–.", url: "https://journal.usep.edu.ph/index.php/Southeastern_Philippines_Journal/article/download/157/52" },
    ompang: { tier: "institutional", text: "Ompang, M. B. (n.d.). <i>The Mandaya ethnic group</i>. National Commission for Culture and the Arts.", url: "https://ncca.gov.ph/?p=4552" },
    upovpaa: { tier: "institutional", text: "University of the Philippines, Office of the Vice President for Academic Affairs. (n.d.). <i>Preserving Philippine ethno-epics</i>.", url: "https://ovpaa-old.up.edu.ph/?p=14252" },
    nabayra2014: { tier: "scholarly", text: "Nabayra, E., Jr. (2014). Cosmology of the Mandaya. <i>AghamTao</i>. Philippine Social Science Council.", url: "https://pssc.org.ph/wp-content/pssc-archives/Aghamtao/2014/2-Nabayra.pdf" },
    marfil2013: { tier: "primary", text: "Marfil, J. (2013). [Field research on Mansaka music, Tagum City]. Center for Philippine Studies, University of Hawaiʻi at Mānoa.", url: "https://manoa.hawaii.edu/philippine-studies/?p=508" },
    kuizon2009: { tier: "secondary", text: "Kuizon, C. J. (2009, October 21). The Mansaka and their golden guitar. <i>Davao Today</i>; republished by <i>Bulatlat</i>.", url: "https://www.bulatlat.org/?p=17331" },
    filipinas: { tier: "institutional", text: "Filipinas Heritage Library. (n.d.). <i>Music of the Lumad</i>.", url: "https://www.filipinaslibrary.org.ph/?p=1422" },
    david2024: { tier: "secondary", text: "David, K. A. G. (2024, January 30). Moppiyon kahi diid patoy: The Obo Monuvu city. <i>MindaNews</i>.", url: "https://mindanews.com/mindaviews/2024/01/moppiyon-kahi-diid-patoy-the-obo-monuvu-city/" },
    pef2019: { tier: "primary", text: "Obo Monuvu of Don Panaca, Imamaling, and Manobo. (2019). <i>Indigenous knowledge, systems, and practices of the Obo Monuvu in Magpet, Cotabato, Philippines</i> (J. Ibañez et al., Eds.). Philippine Eagle Foundation.", url: "https://www.philippineeaglefoundation.org/_files/ugd/d08c94_e6c4aa7c3eec494db72615487b681585.pdf" },
    pef2019b: { tier: "primary", text: "Philippine Eagle Foundation & Obo Monuvu communities of Magpet. (n.d.). <i>Libro to kosorollan</i> [Community knowledge book].", url: "https://www.philippineeaglefoundation.org/_files/ugd/d08c94_b07f363599684f83bfce09d9d41004b9.pdf" },
    manobogroup: { tier: "secondary", text: "Performing arts of Manobos. (2015, July). <i>Manobo Group</i> [Blog post]. Unreviewed; verify against the CCP Encyclopedia of Philippine Art.", url: "https://manobogroup.blogspot.com/2015/07/performing-arts-of-manobos-by-lydia.html" },
    usm2026: { tier: "institutional", text: "University of Southern Mindanao. (2026). <i>USM-ESO jumpstarts language documentation for Magpet's Ovu Manobo community</i>.", url: "https://www.usm.edu.ph/?p=24418" },
    kidapawan: { tier: "institutional", text: "City Government of Kidapawan. (n.d.). <i>Brief history of Kidapawan</i>.", url: "https://portal.kidapawancity.gov.ph/?p=1148" },
    bahandi: { tier: "secondary", text: "Bahandi sa Tribu. (n.d.). <i>About</i> [Website].", url: "https://sites.google.com/view/bahandi-sa-tribu/about" },
    voiceapo: { tier: "unread", text: "Arayam, M., Bayawan, M., & Vander Molen, E. E. (2005). <i>A voice from Mt. Apo: Oral and written essays on the culture and world view of the Manobo</i>. Linguistic Society of the Philippines.", url: "https://glottolog.org/resource/reference/id/99427" },
    ccp: { tier: "unread", text: "Cultural Center of the Philippines. (2018). <i>CCP encyclopedia of Philippine art</i> (2nd ed.). Volumes 1–3: Peoples of the Philippines.", url: "https://epa.culturalcenter.gov.ph/" },
    katig: { tier: "scholarly", text: "Department of Linguistics, University of the Philippines Diliman. (n.d.). <i>Bagobo-Klata</i> [Language capsule]. The KATIG Collective.", url: "https://linguistics.upd.edu.ph/the-katig-collective/language-capsules/bagobo-klata/" },
    ipra: { tier: "institutional", text: "Republic Act No. 8371. (1997). <i>The Indigenous Peoples' Rights Act of 1997</i>. Republic of the Philippines.", url: "https://ncip.gov.ph/" }
  }
};
