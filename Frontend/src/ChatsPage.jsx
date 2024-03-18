// import {PrettyChatWindow} from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   return (
//     <div style={{ height: "100vh" }}>
//      <PrettyChatWindow 
//         projectId="
//         44eb8c76-01c0-4d9c-a006-77daed99c27a"
//         username={props.user.username}
//         secret={props.user.secret}
//         style={{height:'100%'}}
//         />
//     </div>
//   )
// }

// export default ChatsPage;


import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="44eb8c76-01c0-4d9c-a006-77daed99c27a"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;