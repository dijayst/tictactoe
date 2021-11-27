import React from 'react'
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user=>{
                    return(
                        <ChannelContext.Consumer>
                            {channel=>{
                                return(
                                <div>
                                    user context value{user},channel context{channel}
                                    </div>
                                    )
                                    }}
                                   </ChannelContext.Consumer>
                                   )
                                 }}
                                </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
////we dont use this anymore outdated