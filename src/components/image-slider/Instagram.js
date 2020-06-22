import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
 
 function Instagram({ url }){
    return (
        <InstagramEmbed
            url={url}
            maxWidth={350}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
        />
    )
}

export default Instagram

