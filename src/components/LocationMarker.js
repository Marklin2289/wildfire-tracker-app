import { Icon } from "@iconify/react";
import pineTreeFire from "@iconify/icons-mdi/pine-tree-fire";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={pineTreeFire} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
