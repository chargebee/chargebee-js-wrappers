/*
    importing global CSS
    "_app.js" is loaded for each component
*/

import React from 'react';
import '../src/index.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}