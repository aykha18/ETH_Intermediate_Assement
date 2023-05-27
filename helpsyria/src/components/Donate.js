import { ethers } from "ethers";

const Donate = ({ state }) => {
  const donate2Syria = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.donate(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };

  return (
    <div
      className="container-md"
      style={{
        width: "50%",
        marginTop: "25px",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={donate2Syria}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Messages</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Enter Your Message"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!state.contract}
          style={{ width: "100%" }}
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donate;
