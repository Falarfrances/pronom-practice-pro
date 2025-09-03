import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Lightbulb, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExerciseQuestion {
  id: string;
  text: string;
  type: 'fill-blank' | 'mcq';
  answer: string | string[];
  hint?: string;
  options?: string[];
}

export interface Exercise {
  id: number;
  title: string;
  instruction: string;
  questions: ExerciseQuestion[];
}

interface ExerciseCardProps {
  exercise: Exercise;
  onScoreUpdate: (exerciseId: number, score: number, maxScore: number) => void;
  className?: string;
}

interface QuestionState {
  answer: string;
  isCorrect: boolean | null;
  showHint: boolean;
  showCorrection: boolean;
}

export function ExerciseCard({ exercise, onScoreUpdate, className }: ExerciseCardProps) {
  const [questionStates, setQuestionStates] = useState<Record<string, QuestionState>>(() => 
    exercise.questions.reduce((acc, q) => ({
      ...acc,
      [q.id]: { answer: '', isCorrect: null, showHint: false, showCorrection: false }
    }), {})
  );

  const normalizeAnswer = (answer: string): string => {
    return answer
      .trim()
      .toLowerCase()
      .replace(/'/g, "'") // Replace typographic apostrophe
      .replace(/\s+/g, " ");
  };

  const checkAnswer = (questionId: string, userAnswer: string, correctAnswers: string | string[]): boolean => {
    const normalized = normalizeAnswer(userAnswer);
    const correctArray = Array.isArray(correctAnswers) ? correctAnswers : [correctAnswers];
    
    return correctArray.some(correct => normalizeAnswer(correct) === normalized);
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setQuestionStates(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], answer, isCorrect: null, showHint: false }
    }));
  };

  const handleVerifyQuestion = (questionId: string) => {
    const question = exercise.questions.find(q => q.id === questionId)!;
    const state = questionStates[questionId];
    const isCorrect = checkAnswer(questionId, state.answer, question.answer);
    
    setQuestionStates(prev => ({
      ...prev,
      [questionId]: { 
        ...prev[questionId], 
        isCorrect,
        showHint: !isCorrect && !!question.hint,
        showCorrection: false
      }
    }));
  };

  const handleShowCorrection = (questionId: string) => {
    setQuestionStates(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], showCorrection: true }
    }));
  };

  const handleResetQuestion = (questionId: string) => {
    setQuestionStates(prev => ({
      ...prev,
      [questionId]: { answer: '', isCorrect: null, showHint: false, showCorrection: false }
    }));
  };

  const handleVerifyAll = () => {
    const newStates = { ...questionStates };
    let correctCount = 0;
    
    exercise.questions.forEach(question => {
      const state = questionStates[question.id];
      const isCorrect = checkAnswer(question.id, state.answer, question.answer);
      
      newStates[question.id] = {
        ...state,
        isCorrect,
        showHint: !isCorrect && !!question.hint,
        showCorrection: false
      };
      
      if (isCorrect) correctCount++;
    });
    
    setQuestionStates(newStates);
    onScoreUpdate(exercise.id, correctCount, exercise.questions.length);
  };

  const handleResetAll = () => {
    const resetStates = exercise.questions.reduce((acc, q) => ({
      ...acc,
      [q.id]: { answer: '', isCorrect: null, showHint: false, showCorrection: false }
    }), {});
    
    setQuestionStates(resetStates);
    onScoreUpdate(exercise.id, 0, exercise.questions.length);
  };

  const renderQuestion = (question: ExerciseQuestion) => {
    const state = questionStates[question.id];
    
    if (question.type === 'mcq') {
      return (
        <div className="space-y-3">
          <p className="font-medium text-foreground">{question.text}</p>
          <RadioGroup 
            value={state.answer} 
            onValueChange={(value) => handleAnswerChange(question.id, value)}
            className="space-y-2"
          >
            {question.options?.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${idx}`} />
                <Label htmlFor={`${question.id}-${idx}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        <p className="font-medium text-foreground">{question.text}</p>
        <Input
          value={state.answer}
          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          placeholder="Votre réponse..."
          className={cn(
            state.isCorrect === true && "border-success bg-success-light",
            state.isCorrect === false && "border-destructive bg-destructive-light"
          )}
        />
      </div>
    );
  };

  return (
    <Card className={cn("w-full", className)} id={`exercise-${exercise.id}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Exercice {exercise.id} — {exercise.title}</span>
        </CardTitle>
        <p className="text-muted-foreground">{exercise.instruction}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {exercise.questions.map((question) => {
          const state = questionStates[question.id];
          
          return (
            <div key={question.id} className="space-y-4 p-4 rounded-lg border bg-card">
              {renderQuestion(question)}
              
              {/* Feedback Messages */}
              {state.isCorrect === true && (
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Correct !</span>
                </div>
              )}
              
              {state.isCorrect === false && (
                <div className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Incorrect</span>
                </div>
              )}
              
              {state.showHint && question.hint && (
                <div className="flex items-start gap-2 p-3 bg-warning-light rounded-lg">
                  <Lightbulb className="h-4 w-4 text-warning mt-0.5" />
                  <span className="text-sm text-warning-foreground">{question.hint}</span>
                </div>
              )}
              
              {state.showCorrection && (
                <div className="p-3 bg-primary-light rounded-lg">
                  <span className="text-sm font-medium text-primary">
                    Correction : {Array.isArray(question.answer) ? question.answer[0] : question.answer}
                  </span>
                </div>
              )}
              
              <div className="flex gap-2 flex-wrap">
                <Button 
                  size="sm" 
                  onClick={() => handleVerifyQuestion(question.id)}
                  disabled={!state.answer.trim()}
                >
                  Vérifier
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleShowCorrection(question.id)}
                >
                  Afficher la correction
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleResetQuestion(question.id)}
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Réinitialiser
                </Button>
              </div>
            </div>
          );
        })}
        
        <div className="flex gap-3 pt-4 border-t">
          <Button onClick={handleVerifyAll} className="flex-1">
            Tout vérifier
          </Button>
          <Button variant="outline" onClick={handleResetAll}>
            Tout réinitialiser
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}