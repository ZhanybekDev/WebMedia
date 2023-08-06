import Dialogs from "../Dialogs/Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPages

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPages={state}/>
};

export default DialogsContainer;