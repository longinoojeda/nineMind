import LogoCollaboration from './logo-collaboration'

const Collaborations = () => {
    return (
        <>
        <section className="hidden items-center justify-between my-10 mt-20 md:flex">
            <p className='hidden md:block md:text-xl lg:text-2xl font-light text-gray-700 dark:text-gray-300'>
                Collaboration
            </p>
            <LogoCollaboration
                src="/europeanf.png"
                alt="Fondo Social Europeo" 
                size={240}
                />
            <LogoCollaboration
                src="/paco-molla.png"
                alt="IES Poeta Paco Molla" 
                size={200}
                />
            <LogoCollaboration
                src="/aws-academy.png"
                alt="AWS Academy" 
                size={200}
                />
        </section>
        <section className="flex items-center justify-around my-10 mt-20 md:hidden">
            <p className='hidden md:block md:text-xl lg:text-2xl font-light text-gray-700 dark:text-gray-300'>
                Collaboration
            </p>
            <LogoCollaboration
                src="/europeanf.png"
                alt="Fondo Social Europeo" 
                size={150}
            />
            <LogoCollaboration
                src="/paco-molla.png"
                alt="IES Poeta Paco Molla" 
                size={120}
            />
            <LogoCollaboration
                src="/aws-academy.png"
                alt="AWS Academy" 
                size={120}
            />
        </section>
        </>
    )
}

export default Collaborations