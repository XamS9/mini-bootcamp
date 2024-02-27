import GetUsers from "../apis/adminRequest.api";
import { useEffect, useState } from "react";
function UpdateUser({Id, set}) {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    GetUsers("/users/" + Id).then((data) => {
      setData(data);
    });
  }, [Id]);
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
        <h2 className="form-group mb-2">User data</h2>
        <form className="needs-validation" noValidate>
          <div className="form-group mb-2">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              pattern="[A-Za-z]{0,}"
              value={data.email}
              onChange={handleChange}
              required
            >
            </input>
            <label className="form-label"></label>
            <select
              onChange={handleChange}
              className="form-select"
              id="status"
              name="status"
            >
              {data.status ? (
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;