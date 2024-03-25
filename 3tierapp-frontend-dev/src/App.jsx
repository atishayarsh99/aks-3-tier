import { Route, Switch, Redirect } from "react-router-dom";

import { privateRoutes } from "./routes/route";
import * as SE from "./style/Styled";
import { Suspense } from "react";
import DetailLoader from "./components/DetailLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const history = useHistory();
  return (
    <>
      {/* <Switch>
        {publicRoutes.map((val, ind) => (
          <Route
            key={ind}
            exact
            path={val.path}
            render={(props) => {
              return (
                <>
                  <Suspense fallback={<DetailLoader />}>
                    <SE.ParentContainer>
                      <SE.InnerContainer>
                        <SE.SectionBox>
                          <val.component history={history} />
                        </SE.SectionBox>
                      </SE.InnerContainer>
                    </SE.ParentContainer>
                  </Suspense>
                </>
              );
            }}
          />
        ))}
        {privateRoutes.map((val, ind) => (
          <Route
            key={ind}
            exact
            path={val.path}
            render={(props) => {
              return (
                <>
                  <Suspense fallback={<DetailLoader />}>
                    <SE.ParentContainer>
                      <SE.InnerContainer>
                        <Sidebar />
                        <SE.SectionBox>
                          <Navbar />
                          <SE.RightBox>
                            <val.component history={history} />
                          </SE.RightBox>
                        </SE.SectionBox>
                      </SE.InnerContainer>
                    </SE.ParentContainer>
                  </Suspense>
                </>
              );
            }}
          />
        ))}
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch> */}
      {privateRoutes.map((val, ind) => (
        <Route
          key={ind}
          exact
          path={val.path}
          render={(props) => {
            return (
              <>
                <Suspense fallback={<DetailLoader />}>
                  <SE.ParentContainer>
                    <SE.InnerContainer>
                      <Sidebar />
                      <SE.SectionBox>
                        <Navbar />
                        <SE.RightBox>
                          <val.component history={history} />
                        </SE.RightBox>
                      </SE.SectionBox>
                    </SE.InnerContainer>
                  </SE.ParentContainer>
                </Suspense>
              </>
            );
          }}
        />
      ))}
      <ToastContainer />
    </>
  );
};

export default App;
