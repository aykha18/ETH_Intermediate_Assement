import { useState, useEffect } from "react";

const DonersDtls = ({ state }) => {
  const [donerdtls, SetDonordtls] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const donorDtls = async () => {
      const donorinfo = await contract.getDonorDetails();
      SetDonordtls(donorinfo);
    };
    contract && donorDtls();
  }, [contract]);

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>
        Messages
      </p>
      {donerdtls.map((donordata) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%", marginBottom: "10px", padding: "10px", backgroundColor: "#96D4D4", border: "1px solid white", borderRadius: "5px" }}
            key={Math.random()}
          >
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ width: "20%", padding: "7px" }}>
                    <strong>Name:</strong> {donordata.name}
                  </td>
                  <td style={{ width: "30%", padding: "7px" }}>
                    <strong>Date:</strong>{" "}
                    {new Date(donordata.timestamp * 1000).toLocaleString()}
                  </td>
                  <td style={{ width: "30%", padding: "7px" }}>
                    <strong>Message:</strong> {donordata.message}
                  </td>
                  <td style={{ width: "20%", padding: "7px" }}>
                    <strong>From:</strong> {donordata.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default DonersDtls;
