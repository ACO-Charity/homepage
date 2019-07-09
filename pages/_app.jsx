import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import '../scss/basic.scss'

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Head>
                    <title>Asia Charity Organization (ACO) e.V.</title>
                    <link rel="icon" href="/static/img/logo/favicon.ico" sizes="any" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)