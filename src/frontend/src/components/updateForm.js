import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import GetData from "../apis/getData.api";

function UpdateForm({ Entity, Id, set }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetData("/" + Entity + "/" + Id).then((data) => {
      setData(data);
    });
  }, [Entity, Id]);
  useEffect(() => {
    set(data);
  }, [data]);
  const handleChange = async (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="w-75">
        <h2 className="form-group mb-2">{Entity} data</h2>
        <form className="needs-validation" noValidate>
          {data != null
            ? Object.keys(data).map((key, index) => {
                return (
                  <div className="form-group mb-2" key={index}>
                    {typeof data[key] === "number" ? null : (
                      <label className="form-label">
                        {String(key.toUpperCase())}
                      </label>
                    )}
                    {typeof data[key] === "number" ? null : key === "status" ? (
                      <>
                        <select
                          onChange={handleChange}
                          className="form-select"
                          id="status"
                          name="status"
                        >
                          {data[key] ? (
                            <>
                              <option selected value="true">
                                True
                              </option>
                              <option value="false">False</option>
                            </>
                          ) : (
                            <>
                              <option value="true">True</option>
                              <option selected value="false">
                                False
                              </option>
                            </>
                          )}
                        </select>
                      </>
                    ) : key !== "image" ? (
                      <input
                        name={key}
                        type="text"
                        className="form-control"
                        pattern="[A-Za-z]{0,}"
                        value={data[key]}
                        onChange={handleChange}
                        required
                      ></input>
                    ) : null}
                    {key === "image" ? (
                      <>
                        <br />
                        <img
                          src={data[key]}
                          alt={key}
                          width="50"
                          height="50"
                        ></img>
                      </>
                    ) : null}
                    <div className="invalid-feedback">
                      Please add your {data[key]}.
                    </div>
                  </div>
                );
              })
            : null}
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
