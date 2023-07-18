import s from './Dialogs.module.css'
import Dialogsitems from "./DialogsItem/Dialogsitems";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = () => {

    const dialogData = [
        {id: 1, name: "Aidana"},
        {id: 2, name: "Amina"},
        {id: 3, name: "Umar"},
        {id: 4, name: "Nursultan"}
    ]

    let DialogsElements = dialogData.map(dialog => <Dialogsitems id={dialog.id} name={dialog.name}/>)

    const messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your tasks?"},
        {id: 3, message: "Yo"}
    ]

    let MessagesElement = messagesData.map(message => <MessagesItem message={message.message}/>)

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