import { ReactNode } from 'react'
import { cn } from '@/app/lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-gray-200 rounded-lg overflow-hidden',
        hover && 'hover:shadow-lg transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
