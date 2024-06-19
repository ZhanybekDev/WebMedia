import React, {useEffect, useState} from "react"

const ProfileStatusWithHooks = (props) =>  {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

        return (
            <>
                <div>
                    {!editMode &&
                        <span onDoubleClick={activateEditMode}>
                            {props.status || "No status"}
                        </span>
                    }
                </div>

                <div>
                    {editMode &&
                        <input onChange={(e) => onStatusChange(e)} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    }
                </div>
            </>
        );
}

export default ProfileStatusWithHooks;
