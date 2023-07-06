import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Habito',
    description: 'Plan your habits at any time, anywhere, online.',
}

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='bg'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default Layout