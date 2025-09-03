import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const rules = [
  {
    id: "reflexifs",
    title: "Pronoms réfléchis",
    badge: "me, te, se, nous, vous, se",
    content: `Les pronoms réfléchis s'utilisent quand le sujet fait l'action sur lui-même.
    
**Exemples :**
• Je **me** lave (je lave moi-même)
• Tu **te** regardes dans le miroir
• Il **se** douche rapidement
• Nous **nous** promenons
• Vous **vous** reposez
• Ils **se** disputent souvent

**Position :** Avant le verbe conjugué ou l'infinitif.`
  },
  {
    id: "cod",
    title: "Compléments d'Objet Direct (COD)",
    badge: "me, te, le/la, nous, vous, les",
    content: `Le COD répond à la question "qui ?" ou "quoi ?" après le verbe.
    
**Exemples :**
• Je vois Marie → Je **la** vois
• Tu connais mes parents → Tu **les** connais
• Elle me regarde → Elle **me** regarde
• Nous vous écoutons → Nous **vous** écoutons

**Accord au passé composé :** Le participe passé s'accorde avec le COD placé avant.
• Les fleurs que j'ai achetées (achetées = accord)`
  },
  {
    id: "coi",
    title: "Compléments d'Objet Indirect (COI)",
    badge: "me, te, lui, nous, vous, leur",
    content: `Le COI répond à la question "à qui ?" ou "à quoi ?" après le verbe.
    
**Exemples :**
• Je parle à Marie → Je **lui** parle
• Tu écris à tes parents → Tu **leur** écris
• Il nous téléphone → Il **nous** téléphone
• Elle vous répond → Elle **vous** répond

**Attention :** Pas d'accord du participe passé avec le COI.`
  },
  {
    id: "y",
    title: "Le pronom Y",
    badge: "y = à + lieu/chose",
    content: `**Y** remplace un complément introduit par "à" :
    
**Lieux :**
• Je vais à Paris → J'**y** vais
• Elle habite en France → Elle **y** habite

**Choses/idées :**
• Je pense à mon travail → J'**y** pense
• Ils participent au projet → Ils **y** participent
• Tu t'intéresses à la musique → Tu t'**y** intéresses

**Ne remplace pas les personnes** (utiliser lui/leur).`
  },
  {
    id: "en",
    title: "Le pronom EN",
    badge: "en = de + nom/quantité",
    content: `**EN** remplace un complément introduit par "de" :
    
**Quantités :**
• J'ai trois livres → J'**en** ai trois
• Elle boit du café → Elle **en** boit
• Nous voulons des pommes → Nous **en** voulons

**Compléments avec "de" :**
• Je parle de mes vacances → J'**en** parle
• Il s'occupe de ses enfants → Il s'**en** occupe
• Elle a besoin d'aide → Elle **en** a besoin`
  },
  {
    id: "ordre",
    title: "Ordre des pronoms",
    badge: "Ordre fixe obligatoire",
    content: `**Ordre devant le verbe conjugué :**

1. **me/te/se/nous/vous** (réfléchis/COD/COI)
2. **le/la/les** (COD)
3. **lui/leur** (COI)
4. **y** (lieu/chose avec "à")
5. **en** (quantité/chose avec "de")

**Exemples :**
• Je le lui donne (COD + COI)
• Il nous y emmène (COI + lieu)
• Elle m'en parle (COI + complément de "de")
• Tu l'y emmènes (COD + lieu)

**Au passé composé :** Les pronoms se placent avant l'auxiliaire.`
  }
];

export function GrammarRules() {
  return (
    <section id="regles" className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Règles essentielles</h2>
        <p className="text-muted-foreground">Récapitulatif des pronoms compléments français</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📚 Guide de référence
            <Badge variant="secondary">B1-B2</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {rules.map((rule) => (
              <AccordionItem key={rule.id} value={rule.id}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{rule.title}</span>
                    <Badge variant="outline" className="text-xs">
                      {rule.badge}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground pt-2">
                    {rule.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}