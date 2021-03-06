import Nav from '../components/nav'
import Image from 'next/image'
import Link from 'next/link'

const Index = () => {
  return (
    <div className="container mx-auto px-8 xl:px-16 2xl:px-32">
      <div className="py-12 md:pt-20 tracking-wider">
        <main className="relative w-full flex flex-col lg:flex-row items-start justify-between z-20">
          <div className="relative lg:w-4/6 flex flex-col justify-start items-start">

            <div className="relative w-32 h-32">
              <Link href="/">
                <a className="block h-full">
                  <Image 
                    src="/assets/images/logo_short.png"
                    layout="fill"
                    alt="Velodílna"
                    objectFit="contain"
                    />
                </a>
              </Link>
            </div>

            <h1 className="block pt-8 leading-normal md:leading-normal text-4xl md:text-5xl uppercase text-left font-bold text-primary dark:text-primary">
              Prodejna a&nbsp;servis kol <br />
              Slušovice
            </h1>

            <p className="block w-full pt-8 lg:pt-16 leading-tight text-2xl font-bold tracking-wider text-white">
              Rádi Vám poradíme s&nbsp;nákupem nového kola, nebo opravíme to rozbité! Prodáváme značky 
              jako <span className="font-black text-primary">KTM</span>, <span className="font-black text-primary">MRX </span> 
              a&nbsp;mnohé další.
            </p>
            <p className="block w-full pt-8 lg:pt-16 leading-tight text-2xl font-bold tracking-wider text-white">
              Zastavte se omrknout náš sortiment!
            </p>
            
            <p className="block w-full pt-8 lg:pt-16 leading-tight text-2xl font-bold tracking-wider text-white">
              Pro objednání servisu a&nbsp;dotazy <a className="font-black text-primary hover:text-secondary" href="tel:+420607067476">zavolejte</a>.
            </p>

          </div>
          <div className="flex flex-col justify-end relative">
            <h2 className="block pt-16 lg:pt-8 text-4xl md:text-5xl md:leading-normal text-left lg:text-right font-bold text-secondary">
              po–pá 10–17h
            </h2>

            <h2 className="block pt-8 lg:pt-16 text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold text-secondary hover:text-primary transition-colors">
              <a href="tel:+420607067476">
                +420 607 067 476
              </a>
            </h2>
            <h2 className="block text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold text-secondary hover:text-primary transition-colors">
              <a href="mailto:marek@velodilna.cz">
                marek@velodilna.cz
              </a>
            </h2>
            <h2 className="block pt-8 lg:pt-16 text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold text-secondary hover:text-primary transition-colors">
              <a href="https://goo.gl/maps/y9jNEhEuinPWT9vw8" rel="noopener" target="_blank">
                Na výpusti 683<br />
                763 15 Slušovice
              </a>
            </h2>
            <h2 className="block pt-8 lg:pt-16 text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold italic text-secondary hover:text-primary transition-colors">
              <a href="https://cs-cz.facebook.com/pages/category/Local-Business/Velod%C3%ADlna-220182105302107/" rel="noopener" target="_blank">
                FACEBOOK
              </a>
            </h2>
          </div>
        </main>
        
      </div>
      <footer className="relative w-full pb-16 flex justify-center">
        <div className="absolute flex flex-col w-full md:w-4/5 mx-auto -inset-x-1/2 z-0 pb-16 -bottom-52 lg:-bottom-72 xl:-bottom-96">
          <Image 
            src="/assets/images/auto.png"
            width={1400}
            height={1013}
            layout="responsive"
            alt="Velodílna"
          />
          <div className="w-full flex pt-8 justify-center text-white text-sm">
            Vytvořili kluci z&nbsp;<a className="font-semibold hover:text-primary" href="https://www.mountiny.com" target="_blank">Mountiny</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index