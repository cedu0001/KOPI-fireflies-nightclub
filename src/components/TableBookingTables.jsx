import Image from "next/image";

const Tables = ({tables, reservations, selectedEvent, selectedTable, setSelectedTable,}) => {
    const getTableStatus = (tableId) => {
        if (Number(selectedTable) === tableId){
            return "chosen";
        }

        const isReserved = reservations.some(
      (reservation) =>
        reservation.eventId ===
          Number(selectedEvent) &&
        Number(reservation.table) ===
          tableId
    );

    if (isReserved) {
      return "reserved";
    }

    return "available";
     };
    
    const getTableImage = (size, status) => {

        const imageMap = {

      small: {
        available: "/assets/table/table_1.png",
        reserved: "/assets/table/reserved_table_1.png",
        chosen: "/assets/table/chosen_table_1.png",
      },

      medium: {
        available: "/assets/table/table_2.png",
        reserved: "/assets/table/reserved_table_2.png",
        chosen: "/assets/table/chosen_table_2.png",
      },

      large: {
        available: "/assets/table/table_3.png",
        reserved: "/assets/table/reserved_table_3.png",
        chosen: "/assets/table/chosen_table_3.png",
      },
    };

    return imageMap[size][status];
  };
    return ( 
        <article
      className="grid grid-cols-[repeat(5,minmax(75px,240px))] justify-center mb-16 mt-8">

      {tables.map((table) => {

        const status =
          getTableStatus(table.tableNumber);

        return (

          <div key={table.id}
        className={`relative ${status === "reserved" ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={() => {

    if (status === "reserved") return;

    setSelectedTable(
      table.tableNumber
    );
  }}>

            <Image
              src={getTableImage(table.size, status)}
              width={240}
              height={240}
              alt={`Table ${table.number}`}
              className="w-full h-auto"
            />

          <p
            className="absolute inset-0 flex items-center justify-center font-bold">
            {table.tableNumber}
          </p>

        </div>
        );
      })}

    </article>
     );
};
 
export default Tables;