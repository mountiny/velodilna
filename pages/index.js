import Nav from '../components/nav'
import Image from 'next/image'
import Link from 'next/link'

const Index = () => {
  return (
    <div className="container  font-sans mx-auto px-8 xl:px-16 2xl:px-32">
      <div className="py-12 md:pt-20 tracking-wider">

        <header className="relative w-full flex flex-col lg:flex-row items-start justify-between">

          <div className="relative lg:w-4/6 flex flex-col justify-start items-start">

            <div className="relative w-32 h-32">
              <Image 
                src="/assets/images/logo_short.png"
                layout="fill"
                objectFit="contain"
                />
            </div>

            <h1 className="block pt-8 leading-normal md:leading-normal text-4xl md:text-5xl uppercase text-left font-bold text-primary dark:text-primary">
              Prodejna a&nbsp;servis kol <br />
              Slušovice
            </h1>

            <p className="block w-full pt-8 lg:pt-16 leading-tight text-2xl font-bold tracking-wider text-white">
              Rádi Vám poradíme s&nbsp;nákupem nového kola, nebo opravíme to rozbité! Prodáváme značky 
              nejen <span className="font-black text-primary">KTM</span>, <span className="font-black text-primary">MRX</span> 
              &nbsp;a ... Zastavte se omrknout náš sortiment!
            </p>

            
            <p className="block w-full pt-8 lg:pt-16 leading-tight text-2xl font-bold tracking-wider text-white">

              Pro objednání servisu a dotazy <a className="font-black text-primary hover:text-secondary transition-colors" href="tel:+420607067476">zavolejte</a>.
            </p>


          </div>






          <div className="flex flex-col justify-end relative">
            <h2 className="block pt-16 lg:pt-8 text-4xl md:text-5xl md:leading-normal text-left lg:text-right font-bold text-secondary dark:text-secondary">
              po-pá 10-17h
            </h2>

            <h2 className="block pt-8 lg:pt-16 text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold text-secondary dark:text-secondary hover:text-primary transition-colors">
              <a href="tel:+420607067476">
                +420 607 067 476
              </a>
            </h2>
            <h2 className="block text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold text-secondary dark:text-secondary hover:text-primary transition-colors">
              <a href="mailto:info@velodilna.cz">
                info@velodilna.cz
              </a>
            </h2>
            <h2 className="block pt-8 lg:pt-16 text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold text-secondary dark:text-secondary hover:text-primary transition-colors">
              <a href="https://goo.gl/maps/y9jNEhEuinPWT9vw8" target="_blank">
                Na výpusti 683<br />
                763 15 Slušovice
              </a>
            </h2>
            <h2 className="block pt-8 lg:pt-16 text-2xl md:text-3xl md:leading-normal text-left lg:text-right font-bold font-italic text-secondary dark:text-secondary hover:text-primary transition-colors">
              <a href="https://cs-cz.facebook.com/pages/category/Local-Business/Velod%C3%ADlna-220182105302107/" target="_blank">
                FACEBOOK
              </a>
            </h2>
          </div>
        </header>
        
      </div>
      <footer className="relative w-full pb-16 flex justify-center">
        <div className="relative w-64 h-20">
          <Link href="/">
            <a>
              <Image 
                src="/assets/images/logo.png"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Index