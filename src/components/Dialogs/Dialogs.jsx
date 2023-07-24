import s from './Dialogs.module.css'
import Dialogsitems from "./DialogsItem/Dialogsitems";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {

    let DialogsElements = props.dialogsPages.dialogs.map(dialog => <Dialogsitems id={dialog.id} name={dialog.name}/>)
    let MessagesElement = props.dialogsPages.messages.map(message => <MessagesItem message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>

            <div className={s.messagesItem}>
                {MessagesElement}
            </div>
        </div>
    );
};

export default Dialogs;