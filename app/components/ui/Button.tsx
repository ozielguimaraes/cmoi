import { ReactNode } from 'react'
import { cn } from '@/app/lib/cn'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'whatsapp' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'outline',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition duration-200 rounded-lg'

  const variants = {
    whatsapp:
      'bg-green-500 hover:bg-green-600 text-white active:scale-95',
    outline:
      'bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-sm active:scale-95',
    ghost: 'text-current hover:opacity-80',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <a
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  )
}
