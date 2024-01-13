const Nalist = ({ modOpen, con, setInd, deleteCon }) => {
  return (
    <div>
      <table className="float-right w-1/2">
        <thead>
          <tr className="bg-[#183227] text-left ">
            <th className="text-[#D5D4CF] py-2 px-4">Name</th>
            <th className="text-[#D5D4CF] py-2 px-4">Number</th>
            <th className="text-center text-[#D5D4CF] py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {con.map((e, index) => (
            <tr key={index} className=" border-2 border-[#966F53] ">
              <td className=" text-[#D5D4CF] py-2 px-4">{e.name}</td>
              <td className=" text-[#D5D4CF] py-2 px-4">{e.num}</td>
              <td className=" text-[#D5D4CF] py-2 px-4">
                <div className="flex justify-center gap-2">
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                    onClick={() => deleteCon(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-700"
                    onClick={() => {
                      setInd(index);
                      modOpen();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Nalist;
