import s from './Dialogs.module.css'
import Dialogsitems from "./DialogsItem/Dialogsitems";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {

    let state = props.dialogsPages

    let DialogsElements = state.dialogs.map(dialog => <Dialogsitems id={dialog.id} name={dialog.name}/>)
    let MessagesElement = state.messages.map(message => <MessagesItem message={message.message}/>)
    let newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()

    }
    const onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>

            <div className={s.messagesItem}>
                <div>{MessagesElement}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={(e) => onNewMessageChange(e)}
                        placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
