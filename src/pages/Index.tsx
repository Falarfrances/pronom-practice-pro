import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ExerciseCard } from "@/components/ExerciseCard";
import { GrammarRules } from "@/components/GrammarRules";
import { exercises } from "@/data/exercises";
import { BookOpen, Target, RotateCcw, Printer, CheckCircle2 } from "lucide-react";

interface ScoreData {
  exerciseId: number;
  score: number;
  maxScore: number;
}

const Index = () => {
  const [scores, setScores] = useState<ScoreData[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const updateScore = (exerciseId: number, score: number, maxScore: number) => {
    setScores(prev => {
      const existing = prev.find(s => s.exerciseId === exerciseId);
      if (existing) {
        return prev.map(s => 
          s.exerciseId === exerciseId 
            ? { ...s, score, maxScore }
            : s
        );
      }
      return [...prev, { exerciseId, score, maxScore }];
    });
  };

  const getTotalScore = () => {
    const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
    const totalMax = scores.reduce((sum, s) => sum + s.maxScore, 0);
    return { totalScore, totalMax };
  };

  const getIncorrectExercises = () => {
    return scores.filter(s => s.score < s.maxScore);
  };

  const handleVerifyAll = () => {
    setShowSummary(true);
    setTimeout(() => {
      document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleResetAll = () => {
    setScores([]);
    setShowSummary(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const { totalScore, totalMax } = getTotalScore();
  const incorrectExercises = getIncorrectExercises();

  useEffect(() => {
    document.title = "Les pronoms compléments (B1–B2) – Pratique intégrale";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              Les pronoms compléments (B1–B2)
            </h1>
            <p className="text-lg text-muted-foreground">Pratique intégrale</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Maîtrisez les pronoms réfléchis, COD, COI, y et en à travers 15 exercices progressifs 
              avec corrections détaillées et conseils personnalisés.
            </p>
          </div>
          
          {/* Progress Bar */}
          {totalMax > 0 && (
            <div className="mt-6">
              <ProgressBar value={totalScore} max={totalMax} />
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Table of Contents */}
        <nav className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Target className="h-5 w-5" />
            Sommaire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <a 
                  href="#regles" 
                  className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                >
                  📚 Règles essentielles
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <a 
                  href="#exercices" 
                  className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                >
                  ✏️ Exercices (1–15)
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <a 
                  href="#summary" 
                  className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                >
                  📊 Score & Révision
                </a>
              </CardContent>
            </Card>
          </div>
        </nav>

        {/* Grammar Rules */}
        <GrammarRules />

        {/* Exercises Section */}
        <section id="exercices" className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Exercices pratiques</h2>
            <p className="text-muted-foreground">15 exercices progressifs pour maîtriser tous les pronoms compléments</p>
          </div>

          <div className="space-y-8">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onScoreUpdate={updateScore}
                className="scroll-mt-20"
              />
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Score & Révision</h2>
            <p className="text-muted-foreground">Bilan de votre progression</p>
          </div>

          {totalMax > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Résultats globaux
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Score total :</span>
                  <Badge variant={totalScore === totalMax ? "default" : "outline"} className="text-lg px-3 py-1">
                    {totalScore} / {totalMax}
                  </Badge>
                </div>
                
                <ProgressBar value={totalScore} max={totalMax} />
                
                {incorrectExercises.length > 0 && showSummary && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Exercices à revoir :</h4>
                    <div className="space-y-2">
                      {incorrectExercises.map(exercise => (
                        <a
                          key={exercise.exerciseId}
                          href={`#exercise-${exercise.exerciseId}`}
                          className="flex items-center justify-between p-3 bg-warning-light rounded-lg hover:bg-warning-light/80 transition-colors"
                        >
                          <span className="text-sm font-medium">
                            Exercice {exercise.exerciseId}
                          </span>
                          <Badge variant="outline">
                            {exercise.score}/{exercise.maxScore}
                          </Badge>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={handleVerifyAll} size="lg" className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Tout vérifier
          </Button>
          <Button onClick={handleResetAll} variant="outline" size="lg" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Tout réinitialiser
          </Button>
          <Button onClick={handlePrint} variant="outline" size="lg" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Imprimer / Exporter PDF
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
          <div className="text-center">
            <a 
              href="#regles" 
              className="text-primary hover:text-primary-hover transition-colors font-medium"
            >
              📚 Revoir les règles
            </a>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground font-medium">
              💡 Conseil pédagogique
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              En cas d'hésitation, identifiez d'abord la fonction du groupe à remplacer 
              (COD/COI/lieu/quantité) puis choisissez le pronom approprié.
            </p>
          </div>
        </div>
      </footer>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .bg-background {
            background: white !important;
          }
          .text-primary {
            color: #1e40af !important;
          }
          .border {
            border-color: #e5e7eb !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;