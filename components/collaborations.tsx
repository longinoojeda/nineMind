import LogoCollaboration from './logo-collaboration'

const Collaborations = () => {
    return (
        <section className="flex items-center justify-between my-10 mt-20">
            <p className='hidden md:block md:text-xl lg:text-2xl font-light text-gray-700 dark:text-gray-300'>
                Collaboration
            </p>
            <LogoCollaboration
                src="https://i.imgur.com/T5scZQt.png"
                alt="Fondo Social Europeo" 
                size={240}
            />
            <LogoCollaboration
                src="https://i.imgur.com/nmCrKSw.png"
                alt="IES Poeta Paco Molla" 
                size={200}
            />
            <LogoCollaboration
                src="https://i.imgur.com/1xv6jh7.png"
                alt="AWS Academy" 
                size={200}
            />
        </section>
    )
}

export default Collaborations