"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className, cursorClassName }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current word being typed
      const currentWord = words[currentWordIndex].text

      // If deleting
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // If typing
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal typing speed
      }

      // If word is complete
      if (!isDeleting && currentText === currentWord) {
        // Pause at the end of typing a word
        setTypingSpeed(1000)
        setIsDeleting(true)
      } else if (isDeleting && currentText === "") {
        // Move to the next word
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
        setTypingSpeed(300) // Pause before starting new word
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <span className="inline-block">
        {currentText}
        <span className={cn("ml-0.5 inline-block h-4 w-0.5 animate-blink bg-primary", cursorClassName)} />
      </span>
    </div>
  )
}

