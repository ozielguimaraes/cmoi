import { ReactNode } from 'react'
import { cn } from '@/app/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  className?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        centered && 'text-center',
        'mb-12 md:mb-16'
      )}
    >
      {eyebrow && (
        <p className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold text-gray-900 mb-4',
        className
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
