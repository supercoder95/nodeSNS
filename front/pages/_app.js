import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head'

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>포크포크</title>
            </Head>
            <div>공통 메뉴</div>
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;