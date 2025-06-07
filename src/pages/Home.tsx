import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl mb-8">
          Welcome to dreamda
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          A platform for sharing, exploring, and experiencing dreams. Connect with others through the universal language of dreams.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/submit">Submit a Dream</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/feed">Explore Dreams</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home