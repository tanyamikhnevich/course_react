// import styles from "./AvaDescription.module.css";
// import React from "react";
//
// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };
//
//   activateEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   };
//   deactivateEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateStatus(this.state.status);
//   };
//
//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     });
//   };
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status
//       })
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         {!this.state.editMode && (
//           <div>
//             <span onDoubleClick={this.activateEditMode}>
//               {"Status: " + this.props.status || "Status: no status"}
//             </span>
//           </div>
//         )}
//         {this.state.editMode && (
//           <div>
//             <input
//               className={styles.profileStatus}
//               onChange={this.onStatusChange}
//               autoFocus={true}
//               onBlur={this.deactivateEditMode}
//               value={this.state.status}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
//
// export default ProfileStatus;
