import { Exercise } from "@/components/ExerciseCard";

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "Réfléchis (à trous)",
    instruction: "Complétez avec le pronom réfléchi approprié.",
    questions: [
      {
        id: "1a",
        text: "Je ___ douche rapidement.",
        type: "fill-blank",
        answer: "me",
        hint: "Le sujet 'je' fait l'action sur lui-même. Utilisez le pronom réfléchi de la 1ère personne."
      },
      {
        id: "1b",
        text: "Ils ___ disputent souvent.",
        type: "fill-blank",
        answer: "se",
        hint: "Le sujet 'ils' fait l'action. Le pronom réfléchi de la 3ème personne du pluriel est 'se'."
      },
      {
        id: "1c",
        text: "Nous ___ promenons après le dîner.",
        type: "fill-blank",
        answer: "nous",
        hint: "Avec 'nous', le pronom réfléchi est aussi 'nous'."
      }
    ]
  },
  {
    id: 2,
    title: "COD (transformation)",
    instruction: "Remplacez le COD par un pronom.",
    questions: [
      {
        id: "2a",
        text: "Tu vois Marie tous les jours. → Tu ___ vois tous les jours.",
        type: "fill-blank",
        answer: ["la", "l'"],
        hint: "Marie = féminin singulier → la (ou l' devant voyelle)"
      },
      {
        id: "2b",
        text: "J'ai rencontré tes parents hier. → Je ___ ai rencontrés hier.",
        type: "fill-blank",
        answer: "les",
        hint: "Tes parents = masculin pluriel → les"
      },
      {
        id: "2c",
        text: "Est-ce que tu connais cette chanson ? → Oui, je ___ connais.",
        type: "fill-blank",
        answer: ["la", "l'"],
        hint: "Cette chanson = féminin singulier → la (ou l' devant voyelle)"
      }
    ]
  },
  {
    id: 3,
    title: "COI (QCM)",
    instruction: "Choisissez la bonne réponse.",
    questions: [
      {
        id: "3a",
        text: "« Tu écris à tes grands-parents ? »",
        type: "mcq",
        answer: "Oui, je leur écris.",
        options: [
          "Oui, je les écris.",
          "Oui, je leur écris.",
          "Oui, j'y écris."
        ],
        hint: "À tes grands-parents = COI (à + personnes) → leur"
      }
    ]
  },
  {
    id: 4,
    title: "Y (à trous)",
    instruction: "Complétez avec le pronom Y.",
    questions: [
      {
        id: "4a",
        text: "Je vais souvent à la bibliothèque → J'___ vais souvent.",
        type: "fill-blank",
        answer: "y",
        hint: "À la bibliothèque = lieu introduit par 'à' → y"
      },
      {
        id: "4b",
        text: "Tu penses à ton avenir ? → Oui, j'___ pense beaucoup.",
        type: "fill-blank",
        answer: "y",
        hint: "À ton avenir = chose introduite par 'à' → y"
      },
      {
        id: "4c",
        text: "Ils participent au projet ? → Oui, ils ___ participent activement.",
        type: "fill-blank",
        answer: "y",
        hint: "Au projet = chose introduite par 'à' → y"
      }
    ]
  },
  {
    id: 5,
    title: "EN (à trous)",
    instruction: "Complétez avec le pronom EN.",
    questions: [
      {
        id: "5a",
        text: "Il a acheté trois pommes. → Il ___ a acheté trois.",
        type: "fill-blank",
        answer: "en",
        hint: "Trois pommes = quantité → en"
      },
      {
        id: "5b",
        text: "Nous avons besoin d'un stylo. → Nous ___ avons besoin.",
        type: "fill-blank",
        answer: "en",
        hint: "D'un stylo = complément avec 'de' → en"
      },
      {
        id: "5c",
        text: "Elle parle de ses problèmes ? → Oui, elle ___ parle souvent.",
        type: "fill-blank",
        answer: "en",
        hint: "De ses problèmes = complément avec 'de' → en"
      }
    ]
  },
  {
    id: 6,
    title: "Transformation (choisir le bon pronom)",
    instruction: "Remplacez le groupe souligné par un pronom approprié.",
    questions: [
      {
        id: "6a",
        text: "Je téléphone à ma sœur. → Je ___ téléphone.",
        type: "fill-blank",
        answer: "lui",
        hint: "À ma sœur = COI (à + personne) → lui"
      },
      {
        id: "6b",
        text: "Nous admirons ce paysage. → Nous ___admirons.",
        type: "fill-blank",
        answer: ["l'", "l"],
        hint: "Ce paysage = COD masculin → le (l' devant voyelle)"
      },
      {
        id: "6c",
        text: "Ils se moquent de leurs collègues. → Ils ___en moquent.",
        type: "fill-blank",
        answer: ["s'", "s"],
        hint: "Se moquer de = verbe pronominal, 'de leurs collègues' → s'en moquer"
      }
    ]
  },
  {
    id: 7,
    title: "Réfléchis + COD (à trous)",
    instruction: "Complétez avec le pronom approprié.",
    questions: [
      {
        id: "7a",
        text: "Elle ___ regarde dans le miroir.",
        type: "fill-blank",
        answer: "se",
        hint: "Se regarder = verbe pronominal réfléchi"
      },
      {
        id: "7b",
        text: "Ils ___ coupent les cheveux eux-mêmes.",
        type: "fill-blank",
        answer: "se",
        hint: "Se couper = verbe pronominal réfléchi"
      },
      {
        id: "7c",
        text: "Nous ___ retrouvons au café.",
        type: "fill-blank",
        answer: "nous",
        hint: "Se retrouver = verbe pronominal réciproque"
      }
    ]
  },
  {
    id: 8,
    title: "Ordre des pronoms (QCM)",
    instruction: "Choisissez la phrase correcte.",
    questions: [
      {
        id: "8a",
        text: "« Tu donnes le livre à Paul ? »",
        type: "mcq",
        answer: "Oui, je le lui donne.",
        options: [
          "Oui, je le lui donne.",
          "Oui, je lui le donne.",
          "Oui, je donne le lui."
        ],
        hint: "Ordre : COD (le) + COI (lui)"
      }
    ]
  },
  {
    id: 9,
    title: "Compléter (identifier COD/COI/y)",
    instruction: "Complétez avec le pronom approprié.",
    questions: [
      {
        id: "9a",
        text: "Tu attends tes amis ? → Oui, je ___ attends.",
        type: "fill-blank",
        answer: "les",
        hint: "Tes amis = COD masculin pluriel → les"
      },
      {
        id: "9b",
        text: "Vous répondez au professeur ? → Oui, nous ___ répondons.",
        type: "fill-blank",
        answer: "lui",
        hint: "Au professeur = COI (à + personne) → lui"
      },
      {
        id: "9c",
        text: "Ils pensent à leurs vacances ? → Oui, ils ___ pensent.",
        type: "fill-blank",
        answer: "y",
        hint: "À leurs vacances = chose introduite par 'à' → y"
      }
    ]
  },
  {
    id: 10,
    title: "Double pronom (transformation)",
    instruction: "Transformez en utilisant deux pronoms.",
    questions: [
      {
        id: "10a",
        text: "J'apporte les fleurs à ma mère. → Je ___ ___ apporte.",
        type: "fill-blank",
        answer: ["les lui", "les lui"],
        hint: "Les fleurs (COD) + à ma mère (COI) → les lui"
      },
      {
        id: "10b",
        text: "Tu donnes le stylo à ton frère. → Tu ___ ___ donnes.",
        type: "fill-blank",
        answer: ["le lui", "le lui"],
        hint: "Le stylo (COD) + à ton frère (COI) → le lui"
      }
    ]
  },
  {
    id: 11,
    title: "Réfléchis (à trous)",
    instruction: "Complétez avec le pronom réfléchi approprié.",
    questions: [
      {
        id: "11a",
        text: "Nous ___ souvenons de ce voyage.",
        type: "fill-blank",
        answer: "nous",
        hint: "Se souvenir = verbe pronominal"
      },
      {
        id: "11b",
        text: "Ils ___intéressent beaucoup à la politique.",
        type: "fill-blank",
        answer: ["s'", "s"],
        hint: "S'intéresser à = verbe pronominal"
      },
      {
        id: "11c",
        text: "Je ___ méfie de cette personne.",
        type: "fill-blank",
        answer: "me",
        hint: "Se méfier de = verbe pronominal"
      }
    ]
  },
  {
    id: 12,
    title: "COD / COI (à trous)",
    instruction: "Complétez avec le pronom approprié.",
    questions: [
      {
        id: "12a",
        text: "J'attends Pierre → Je ___attends.",
        type: "fill-blank",
        answer: ["l'", "l"],
        hint: "Pierre = COD masculin → le (l' devant voyelle)"
      },
      {
        id: "12b",
        text: "Elle écrit à ses amis → Elle ___ écrit.",
        type: "fill-blank",
        answer: "leur",
        hint: "À ses amis = COI (à + personnes) → leur"
      },
      {
        id: "12c",
        text: "Nous cherchons la solution → Nous ___ cherchons.",
        type: "fill-blank",
        answer: "la",
        hint: "La solution = COD féminin → la"
      }
    ]
  },
  {
    id: 13,
    title: "Y vs EN (QCM)",
    instruction: "Choisissez la bonne réponse.",
    questions: [
      {
        id: "13a",
        text: "« Est-ce que tu as déjà visité Paris ? »",
        type: "mcq",
        answer: "Oui, j'y suis déjà allé.",
        options: [
          "Oui, j'y ai déjà visité.",
          "Oui, j'en ai déjà visité.",
          "Oui, j'y suis déjà allé."
        ],
        hint: "Paris = lieu → y (mais attention au verbe : aller à Paris, pas visiter à Paris)"
      }
    ]
  },
  {
    id: 14,
    title: "Reformulation (pronom exact)",
    instruction: "Reformulez en utilisant le pronom approprié.",
    questions: [
      {
        id: "14a",
        text: "Je voudrais de l'eau. → J'___ voudrais.",
        type: "fill-blank",
        answer: "en",
        hint: "De l'eau = quantité introduite par 'de' → en"
      },
      {
        id: "14b",
        text: "Tu parles de ton voyage ? → Tu ___ parles ?",
        type: "fill-blank",
        answer: "en",
        hint: "De ton voyage = complément avec 'de' → en"
      },
      {
        id: "14c",
        text: "Il s'occupe de ses enfants. → Il ___en occupe.",
        type: "fill-blank",
        answer: ["s'", "s"],
        hint: "S'occuper de = verbe pronominal, de ses enfants → s'en occuper"
      }
    ]
  },
  {
    id: 15,
    title: "Production guidée (entrée libre)",
    instruction: "Réécrivez en utilisant au moins deux pronoms compléments.",
    questions: [
      {
        id: "15a",
        text: "Je raconte l'histoire à mes enfants. → Je ___ ___ raconte.",
        type: "fill-blank",
        answer: ["la leur", "la leur"],
        hint: "L'histoire (COD) + à mes enfants (COI) → la leur"
      },
      {
        id: "15b",
        text: "Tu prêtes ta voiture à ton ami. → Tu ___ ___ prêtes.",
        type: "fill-blank",
        answer: ["la lui", "la lui"],
        hint: "Ta voiture (COD) + à ton ami (COI) → la lui"
      },
      {
        id: "15c",
        text: "Nous envoyons une carte postale à nos grands-parents. → Nous ___ ___ envoyons.",
        type: "fill-blank",
        answer: ["la leur", "la leur"],
        hint: "Une carte postale (COD) + à nos grands-parents (COI) → la leur"
      }
    ]
  }
];