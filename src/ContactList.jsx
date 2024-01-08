import React from "react";

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <table className="float-right w-1/2">
      <thead>
        <tr className="bg-[#183227] text-left ">
          <th className="text-[#D5D4CF] py-2 px-4">Name</th>
          <th className="text-[#D5D4CF] py-2 px-4">Number</th>
          <th className="text-[#D5D4CF] py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index} className=" border-2 border-[#966F53] ">
            <td className=" text-[#D5D4CF] py-2 px-4">{contact.name}</td>
            <td className=" text-[#D5D4CF] py-2 px-4">{contact.number}</td>
            <td className=" text-[#D5D4CF] py-2 px-4">
              <button
                className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-700"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
