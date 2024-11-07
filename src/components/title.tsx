import { Whatsapp } from './whatsapp'

export const Title = () => {
  return (
    <section className="flex w-full max-w-md flex-col gap-2">
      <h1 className="text-4xl font-semibold leading-[130%]">
        Templates de sites{' '}
        <strong className="text-gradient">
          exclusivos para qualquer negócio
        </strong>
      </h1>
      <h2 className="font-light text-foreground-muted">
        Crie sua presença online com nossos templates profissionais, feitos sob
        medida para o seu segmento.
      </h2>
      <Whatsapp
        href="/"
        name="Entre em contato"
        className="mt-4 max-w-64 !py-2.5"
      />
    </section>
  )
}
