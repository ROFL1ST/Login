import React from "react";
import { useNavigate } from "react-router";
import { GetUser } from "../api/identitas";
function Dashboard() {
  let history = useNavigate();
  const [identitas, setIdentitas] = React.useState();
  const [state, setState] = React.useState({});
  async function getIdentitas(params) {
    try {
      const result = await GetUser();
      setIdentitas(result?.data.data[0]);
      console.log(result.data.data[0]);
    } catch (error) {}
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    getIdentitas();
    return () => {
      setState({});
    };
  }, []);
  return (
    <div>
      <div className="px-8">
        {/* Header */}
        <div className="flex content justify-center mt-7 items-center">
          <div className="w-3/4 h-full">
            <div className="bgSlider"></div>
            <div className="profile relative bottom-20 left-8">
              <div class="img-profile"></div>
              <div className="flex justify-between items-center">
                <div className="pt-8">
                  <h2 className="font-bold text-xl capitalize">
                    {identitas?.name}
                  </h2>
                  <p>{identitas?.email}</p>
                </div>
                <div className="icon">
                  <svg
                    onClick={() => {
                      history("/identitas");
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header */}
      </div>
    </div>
  );
}

export default Dashboard;
