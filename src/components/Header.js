import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import pineTreeFire from "@iconify/icons-mdi/pine-tree-fire";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Icon icon={pineTreeFire} />
        WildFire & <Icon icon={locationIcon} />
        Volcano Tracker (Powered By NASA)
      </h1>
    </div>
  );
};

export default Header;
