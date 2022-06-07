import { ReactComponent as UserLogoIcon} from "../../assets/userlogo.svg";

import "./UserName.scss"


const Username = () => {


      return (
              <div className="username">
                <UserLogoIcon
                className="user-logo"
                />
                     {/* {username} */}
              </div>

  )};

export default Username;