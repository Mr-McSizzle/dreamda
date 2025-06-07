import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Mic, MicOff, Sparkles } from 'lucide-react'

const Submit = () => {
  const [dreamText, setDreamText] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [aiSummary, setAiSummary] = useState('')

  const handleMicClick = () => {
    setIsRecording(!isRecording)
    // Simulate voice recording toggle
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setDreamText(prev => prev + (prev ? ' ' : '') + 'I was flying through a vast landscape of floating islands...')
      }, 3000)
    }
  }

  const handleSubmit = () => {
    if (!dreamText.trim()) return
    
    setIsSubmitted(true)
    // Mock AI summary generation
    setTimeout(() => {
      setAiSummary(`This dream appears to explore themes of freedom and transcendence. The imagery of flying and floating islands suggests a desire to escape earthly constraints and explore new possibilities. The dreamer may be processing feelings about personal growth, ambition, or a longing for adventure in their waking life.`)
    }, 2000)
  }

  const handleReset = () => {
    setDreamText('')
    setIsSubmitted(false)
    setAiSummary('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Submit Your Dream
          </h1>
          <p className="text-xl text-muted-foreground">
            Share your dreams with the community and discover their deeper meanings
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Tell us about your dream
            </CardTitle>
            <CardDescription>
              Describe your dream in detail. You can type or use voice recording to capture your experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="dream-text" className="text-sm font-medium">
                  Dream Description
                </label>
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  size="sm"
                  onClick={handleMicClick}
                  className="flex items-center gap-2"
                >
                  {isRecording ? (
                    <>
                      <MicOff className="h-4 w-4" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4" />
                      Voice Record
                    </>
                  )}
                </Button>
              </div>
              <Textarea
                id="dream-text"
                placeholder="I dreamed that I was walking through a mysterious forest when suddenly..."
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                className="min-h-[150px] resize-none"
                disabled={isRecording}
              />
              {isRecording && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Recording in progress...
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleSubmit} 
                disabled={!dreamText.trim() || isRecording}
                className="flex-1"
              >
                Submit Dream
              </Button>
              {isSubmitted && (
                <Button variant="outline" onClick={handleReset}>
                  New Dream
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {isSubmitted && (
          <Card className="mt-6 shadow-lg border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                AI Dream Analysis
              </CardTitle>
              <CardDescription>
                Our AI has analyzed your dream and generated insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!aiSummary ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    Analyzing your dream...
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm leading-relaxed">{aiSummary}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Share Analysis
                    </Button>
                    <Button variant="outline" size="sm">
                      Save to Profile
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default Submit