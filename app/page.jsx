import HomeAnimation from '@components/HomeAnimation'

const Home = () => {
    return (
        <div>
            <section className="w-full h-screen min-h-[400px] sm:min-h-[600px] flex-center flex-col">
                <h1 className="head_text text-center">
                    Manage your
                    <br />
                    <HomeAnimation />
                    <br />
                    with
                    <br />
                    <span className="green_bg_text text-7xl sm:text-9xl">Habitō</span>
                </h1>
            </section>
        </div>
    )
}

export default Home