import React from 'react'

const Layout = () => {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Trazo online</title>
            </head>
            <body>
                <div class="container">

                    {this.props.children}

                </div>

            </body>
        </html>
    )
}

export default Layout
