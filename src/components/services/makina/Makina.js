import React from "react";
import "./Makina.css";
import GrainSampler from "../../../assets/complete_probe.png";
import Probe from "../../../assets/probe.png";

const Makina = () => {
  return (
    <>
      <div className="makina">
        <div className="image-section">
          <a href="#">
            <img src={GrainSampler} />
          </a>
        </div>

        <div className="description-section wrapper">
          <p>
            It is GAB-306 MODEL OF MSB BRAND. With its powerful vacuum motor,
            the device is able to transport heavy products such as corn, beans,
            chickpeas as well as grains such as wheat, barley, paddy, rye, and
            oat pneumatically (with vacuum) in 9 to 12 seconds in the laboratory
            or sample room. collects the sample in the collection container.
            With the sample collection container with a transparent window on
            it, the sample amount can be followed, and the sampling amount can
            be adjusted if desired. Since the sample container is not in the
            cyclone structure, it does not have a filter. Therefore, it does not
            require frequent filter changes. The amount of oscillation of its
            strong and heavy body has been greatly reduced thanks to 4
            flagpoles. The sampling arm (boom) of the device consists of two
            parts as inner and outer boom, it can be extended up to 3 booms if
            desired. By hydraulically removing the inner boom from the outer
            boom, the sampling distance is greatly extended. Thus, the device
            can scan an area of ​​11 meters in total, 5.5 meters on the right
            and left. Thus, the necessity of mounting the device at a very close
            distance to vehicles is eliminated. In addition, even in long trucks
            and tow trucks, samples can be taken easily without moving the
            vehicle. Probe length 2.5 m. The sampling probe can move 120 degrees
            to the right and 120 degrees to the left, for a total of 240
            degrees. Thanks to the joystick, it can be controlled both from the
            control room and near the vehicle. The device can easily perform all
            movements with its joystick. Since the device makes all of the
            right, left, up, down, forward and backward movements not with
            electric motors, but with a much stronger, fast, quiet and
            long-lasting hydraulic system, it is easy to use. The external
            dimensions of the device are 75x75x400 cm. The net weight of the
            device is 530 kg. There is a 2-year warranty and a 10-year spare
            part supply warranty, excluding usage errors.
          </p>
        </div>
      </div>
      <div className="makina">
        <div className="image-section">
          <a href="#">
            <img src={Probe} />
          </a>
        </div>

        <div className="description-section wrapper">
          <p>
            It is GAB-306 MODEL OF MSB BRAND. With its powerful vacuum motor,
            the device is able to transport heavy products such as corn, beans,
            chickpeas as well as grains such as wheat, barley, paddy, rye, and
            oat pneumatically (with vacuum) in 9 to 12 seconds in the laboratory
            or sample room. collects the sample in the collection container.
            With the sample collection container with a transparent window on
            it, the sample amount can be followed, and the sampling amount can
            be adjusted if desired. Since the sample container is not in the
            cyclone structure, it does not have a filter. Therefore, it does not
            require frequent filter changes. The amount of oscillation of its
            strong and heavy body has been greatly reduced thanks to 4
            flagpoles. The sampling arm (boom) of the device consists of two
            parts as inner and outer boom, it can be extended up to 3 booms if
            desired. By hydraulically removing the inner boom from the outer
            boom, the sampling distance is greatly extended. Thus, the device
            can scan an area of ​​11 meters in total, 5.5 meters on the right
            and left. Thus, the necessity of mounting the device at a very close
            distance to vehicles is eliminated. In addition, even in long trucks
            and tow trucks, samples can be taken easily without moving the
            vehicle. Probe length 2.5 m. The sampling probe can move 120 degrees
            to the right and 120 degrees to the left, for a total of 240
            degrees. Thanks to the joystick, it can be controlled both from the
            control room and near the vehicle. The device can easily perform all
            movements with its joystick. Since the device makes all of the
            right, left, up, down, forward and backward movements not with
            electric motors, but with a much stronger, fast, quiet and
            long-lasting hydraulic system, it is easy to use. The external
            dimensions of the device are 75x75x400 cm. The net weight of the
            device is 530 kg. There is a 2-year warranty and a 10-year spare
            part supply warranty, excluding usage errors.
          </p>
        </div>
      </div>
    </>
  );
};

export default Makina;
