import Link from 'next/link'

interface WhatsappProps {
  href: string
  name: string
}

export const Whatsapp = ({ href, name }: WhatsappProps) => {
  return (
    <Link
      href={href}
      className="rounded-xl bg-green-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-700"
    >
      {name}
    </Link>
  )
}
