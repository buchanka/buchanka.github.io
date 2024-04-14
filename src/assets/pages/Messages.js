import * as React from "react"
import MessageContainer from "../../components/MessageContainer"

function MessageLayout(){
    return(
    <div className="container mx-auto flex flex-col max-h-[960px]">
    <MessageContainer/>
    </div>
    )
}

export default MessageLayout