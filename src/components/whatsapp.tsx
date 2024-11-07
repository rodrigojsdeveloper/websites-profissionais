import Link from 'next/link'
import { cn } from '@/utils/cn'

interface WhatsappProps {
  href: string
  name: string
  className?: string
}

export const Whatsapp = ({ href, name, className }: WhatsappProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-xl bg-green-600 px-6 py-2 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-green-700',
        className,
      )}
    >
      {name}
    </Link>
  )
}
