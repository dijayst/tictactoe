import React,{useContext} from 'react'
import { ChannelContext, UserContext } from '../App'


function ComponentE() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    return (
        <div>
            {user}-{channel}
        </div>
    )
}

export default ComponentE
