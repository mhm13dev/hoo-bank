import React from "react";
import { clients } from "../../constants";
import { styles } from "../../styles";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-8`}>
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-48 w-[100px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
