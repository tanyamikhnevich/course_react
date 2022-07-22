import styles from "./AvaDescription.module.css";
import {ChangeEvent, useEffect, useState} from "react";
import * as React from "react";

type PropsType = {
  status: string,
  updateStatus: (status: string) => void,

}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {"Status: " + props.status || "Status: no status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={styles.profileStatus}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
